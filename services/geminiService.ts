import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PredictionResult } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

/**
 * Identifies a butterfly from a base64 encoded image.
 * @param base64ImageData The base64 encoded image data.
 * @returns A promise that resolves to a PredictionResult object.
 */
export const identifyButterfly = async (base64ImageData: string): Promise<PredictionResult> => {
  try {
    const imagePart = {
      inlineData: {
        mimeType: 'image/jpeg', // Assuming jpeg, but could be dynamic
        data: base64ImageData,
      },
    };

    const textPart = {
      text: `Analyze the image to identify the butterfly species. Respond with a JSON object containing four keys: 'species' (common name), 'scientificName' (scientific name), 'description' (a concise, interesting paragraph about the species), and 'conservationStatus' (e.g., 'Least Concern', 'Threatened', 'Not Evaluated'). If the image does not show a butterfly, return JSON with 'species': 'Not a Butterfly', 'scientificName': 'N/A', 'description': 'The uploaded image does not appear to contain a butterfly.', and 'conservationStatus': 'N/A'.`
    };

    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash-preview-04-17',
        contents: { parts: [imagePart, textPart] },
        config: {
            responseMimeType: 'application/json'
        }
    });

    let jsonStr = response.text.trim();
    
    const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
    const match = jsonStr.match(fenceRegex);
    if (match && match[2]) {
        jsonStr = match[2].trim();
    }
    
    const parsedData = JSON.parse(jsonStr) as PredictionResult;
    
    if (!parsedData.species || !parsedData.scientificName || !parsedData.description || !parsedData.conservationStatus) {
        throw new Error("Invalid response format from API. Missing required fields.");
    }
    
    return parsedData;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Gemini API Error: ${error.message}`);
    }
    throw new Error("An unexpected error occurred while communicating with the AI.");
  }
};
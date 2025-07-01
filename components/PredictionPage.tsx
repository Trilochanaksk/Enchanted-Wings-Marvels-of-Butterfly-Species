import React, { useState, useCallback, useRef } from 'react';
import { identifyButterfly } from '../services/geminiService';
import { PredictionResult } from '../types';
import Spinner from './Spinner';
import { UploadIcon, SparklesIcon, ScienceIcon, ShieldCheckIcon, InfoIcon } from './icons';

const PredictionDetails: React.FC<{ prediction: PredictionResult }> = ({ prediction }) => {
  if (prediction.species === 'Not a Butterfly') {
    return (
      <div className="bg-gray-700/50 p-6 rounded-xl animate-fade-in text-center">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">{prediction.species}</h3>
        <p className="text-gray-300">{prediction.description}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-700/50 p-6 rounded-xl animate-fade-in space-y-6 border border-gray-600">
      <h3 className="text-3xl font-bold text-cyan-300 text-center mb-4">{prediction.species}</h3>
      <div className="space-y-5">
        <div className="flex items-start space-x-4">
          <ScienceIcon className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-200">Scientific Name</h4>
            <p className="text-gray-400 italic">{prediction.scientificName}</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <ShieldCheckIcon className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-200">Conservation Status</h4>
            <p className="text-gray-300 bg-gray-600/50 px-2 py-1 inline-block rounded-md text-sm">{prediction.conservationStatus}</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <InfoIcon className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-200">Description</h4>
            <p className="text-gray-300">{prediction.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


const PredictionPage: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPrediction(null);
      setError(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePredict = useCallback(async () => {
    if (!previewUrl) {
      setError('Please upload an image first.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const base64Data = previewUrl.split(',')[1];
      if (!base64Data) {
        throw new Error('Could not read image data.');
      }
      const result = await identifyButterfly(base64Data);
      setPrediction(result);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Prediction failed: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }, [previewUrl]);
  
  const triggerFileSelect = () => fileInputRef.current?.click();

  return (
    <div className="container mx-auto p-4 md:p-8 flex-grow flex flex-col items-center">
      <div className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">Upload an Image</h2>
        
        <div 
          className="border-2 border-dashed border-gray-600 rounded-xl p-6 text-center cursor-pointer hover:border-cyan-500 hover:bg-gray-700/50 transition-all duration-300"
          onClick={triggerFileSelect}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/png, image/jpeg, image/webp"
            className="hidden"
          />
          <div className="flex flex-col items-center justify-center">
            <UploadIcon className="w-12 h-12 text-gray-500 mb-3"/>
            <p className="text-gray-400">
              {imageFile ? `Selected: ${imageFile.name}` : "Click to upload or drag and drop"}
            </p>
            <p className="text-xs text-gray-500">PNG, JPG, or WEBP</p>
          </div>
        </div>

        {previewUrl && (
          <div className="mt-6 flex flex-col items-center">
            <img src={previewUrl} alt="Preview" className="max-h-80 rounded-lg shadow-lg mb-6 border-2 border-gray-700" />
            <button
              onClick={handlePredict}
              disabled={isLoading}
              className="w-full md:w-auto flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-cyan-500/30"
            >
              {isLoading ? <Spinner /> : <><SparklesIcon className="w-5 h-5 mr-2" /><span>Identify Butterfly</span></>}
            </button>
          </div>
        )}

        <div className="mt-8 text-center min-h-[150px]">
          {error && (
            <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg" role="alert">
              <p className="font-bold">Error</p>
              <p className="text-sm">{error}</p>
            </div>
          )}
          {prediction && <PredictionDetails prediction={prediction} />}
        </div>
      </div>
    </div>
  );
};

export default PredictionPage;
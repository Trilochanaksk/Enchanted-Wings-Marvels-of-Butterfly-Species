# Enchanted-Wings-Marvels-of-Butterfly-Species
# 🦋 LepiScan: AI Butterfly Identifier 🦋

[![React Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/) [![TypeScript Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Gemini API Badge](https://img.shields.io/badge/Gemini_API-8E44AD?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/) [![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> An AI-powered web application to identify butterfly species from an image. Uncover the secrets of the butterfly world—upload a photo and let our AI instantly identify the species, its scientific name, conservation status, and other fascinating facts.

This project serves as a "citizen science" tool, making biodiversity research and education accessible and engaging for everyone.

---

## ✨ Key Features

-   **Instant Identification**: Leverages the Google Gemini API for fast and accurate butterfly classification.
-   **Rich Data**: Provides detailed information including common name, scientific name, conservation status, and a description.
-   **Simple Interface**: Clean, modern, and intuitive UI for a seamless user experience.
-   **Image Upload**: Supports file uploads from your device and direct access to the camera.
-   **Responsive Design**: Fully functional on both desktop and mobile devices.
-   **Educational**: Includes a "How It Works" section to explain the underlying technology.

## 🎨 Design & UI

-   **Font**: The UI uses the beautiful and readable [Inter](https://fonts.google.com/specimen/Inter) font family for all text.
-   **Icons**: A custom set of icons, including a unique butterfly logo and icons from [Heroicons](https://heroicons.com/), are used to enhance visual communication.
-   **Layout**: A dark-mode theme with vibrant cyan accents provides a modern, immersive, and focused user experience.

---

## 🚀 Live Demo & Screenshots

<br/>

### **Homepage**
*The landing page features a stunning hero image and a clear call-to-action, inviting users to start their discovery journey.*
<img src="https://placehold.co/1200x675/111827/7dd3fc/png?text=LepiScan+Homepage" alt="LepiScan Homepage" />

### **Prediction Workflow**
*Easily upload an image and get detailed results in seconds on a beautifully designed results card.*
<img src="https://placehold.co/1200x800/1f2937/93c5fd/png?text=Prediction+Result+Card" alt="LepiScan Prediction Page" />

---

## 🛠️ How It Works

The application follows a simple yet powerful workflow, inspired by modern deep learning architectures:

1.  **🖼️ Image Upload**: The user selects an image of a butterfly from their device or captures one using their camera.
2.  **🧠 AI Analysis**: The image is securely sent to the **Google Gemini API**. The model analyzes the visual data to identify the butterfly's distinct features.
3.  **📊 Data Retrieval**: The API returns a structured JSON object containing the butterfly's species, scientific name, conservation status, and a detailed description.
4.  **🦋 Display Results**: The application parses the JSON data and presents it to the user in a formatted and easy-to-understand card.

---

## 💻 Tech Stack

-   **Frontend**: [React](https://reactjs.org/) & [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **AI & Image Recognition**: [Google Gemini API](https://ai.google.dev/)

---

## 🔧 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/lepiscan.git
    cd lepiscan
    ```

2.  **Install dependencies:**
    *(Assuming you have Node.js and npm installed)*
    ```bash
    npm install
    ```

3.  **Set up your Environment Variable:**
    -   You will need an API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
    -   The application loads the API key from an environment variable named `API_KEY`. You must make this variable available to your development server. For example, you can create a `.env` file in the root of the project:
        ```
        # .env
        API_KEY="YOUR_GOOGLE_API_KEY"
        ```
    > **Important:** The `geminiService.ts` file expects `process.env.API_KEY` to be set. Ensure your development environment (like Vite or Create React App) is configured to handle environment variables correctly.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application should now be running on your local host!

---

## 📄 License

This project is licensed under the MIT License.

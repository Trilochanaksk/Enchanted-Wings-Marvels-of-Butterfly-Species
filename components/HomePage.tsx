import React from 'react';
import { UploadIcon, CpuChipIcon, BookOpenIcon } from './icons';

interface HomePageProps {
  onStart: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  return (
    <>
      <div className="h-screen min-h-[500px] flex items-center justify-center relative -mt-16 pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547943233-1627c535227e?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-center p-8">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            AI Butterfly Identifier
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Uncover the secrets of the butterfly world. Upload a photo and let our AI instantly identify the species and share fascinating facts.
          </p>
          <button
            onClick={onStart}
            className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-cyan-500/30"
          >
            Get Started
          </button>
        </div>
      </div>
      
      <div className="bg-gray-800/70 border-t border-gray-700 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-16 sm:py-24">
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12">How LepiScan Works</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center p-4">
              <div className="bg-gray-900 rounded-full p-5 mb-4 border border-gray-700">
                <UploadIcon className="w-10 h-10 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">1. Upload Image</h3>
              <p className="text-gray-400">Capture or select a photo of a butterfly from your device.</p>
            </div>
            
            <div className="flex flex-col items-center p-4">
               <div className="bg-gray-900 rounded-full p-5 mb-4 border border-gray-700">
                <CpuChipIcon className="w-10 h-10 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">2. AI Analysis</h3>
              <p className="text-gray-400">Our powerful AI model analyzes the image to identify key features.</p>
            </div>

            <div className="flex flex-col items-center p-4">
              <div className="bg-gray-900 rounded-full p-5 mb-4 border border-gray-700">
                <BookOpenIcon className="w-10 h-10 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">3. Discover Species</h3>
              <p className="text-gray-400">Receive detailed information and interesting facts about the butterfly.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
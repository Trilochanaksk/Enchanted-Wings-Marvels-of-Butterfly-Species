
import React, { useState, useCallback } from 'react';
import HomePage from './components/HomePage';
import PredictionPage from './components/PredictionPage';
import Header from './components/Header';

type View = 'home' | 'predict';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  const navigateToPredict = useCallback(() => {
    setView('predict');
  }, []);

  const navigateToHome = useCallback(() => {
    setView('home');
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header onHomeClick={navigateToHome} />
      <main className="flex-grow flex flex-col">
        {view === 'home' && <HomePage onStart={navigateToPredict} />}
        {view === 'predict' && <PredictionPage />}
      </main>
    </div>
  );
};

export default App;

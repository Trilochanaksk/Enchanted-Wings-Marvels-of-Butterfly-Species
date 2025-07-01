
import React from 'react';
import { ButterflyIcon } from './icons';

interface HeaderProps {
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={onHomeClick} className="flex items-center space-x-3 group">
            <ButterflyIcon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            <span className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">
              LepiScan
            </span>
          </button>
          <button
            onClick={onHomeClick}
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-all"
          >
            Home
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

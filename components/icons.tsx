import React from 'react';

// Props for any icon component
interface IconProps {
  className?: string;
}

export const ButterflyIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M19.467 5.313c-1.393-1.899-3.53-3.132-5.913-3.296L12.16 3.41l1.046 2.093c.895-.125 1.785-.027 2.613.298.868.341 1.636.892 2.227 1.583 1.155 1.355 1.668 3.016 1.516 4.679-.153 1.662-1.026 3.203-2.396 4.16l-2.392 1.673 2.392 1.673c1.37 1.01 2.243 2.498 2.396 4.16.152 1.663-.361 3.324-1.516 4.679-.591.691-1.359 1.242-2.227 1.583-.828.325-1.718.423-2.613.298L12.16 20.59l-1.394 1.393c-2.383-.164-4.52-1.397-5.913-3.296C3.466 16.793 2.8 14.48 2.8 12s.666-4.793 2.054-6.687zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
  </svg>
);


export const UploadIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 12.75l4.5-4.5M12 3v12.75"
    />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        className={className}
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 21.75l-.648-1.188a2.25 2.25 0 00-1.47-1.47l-1.188-.648 1.188-.648a2.25 2.25 0 001.47-1.47l.648-1.188.648 1.188a2.25 2.25 0 001.47 1.47l1.188.648-1.188.648a2.25 2.25 0 00-1.47 1.47z" />
    </svg>
);

export const ScienceIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.595.484-1.087 1.088-1.087h.003c.603 0 1.087.492 1.087 1.087V6.5c.002.603-.485 1.09-1.088 1.09h-.003c-.603 0-1.087-.487-1.087-1.09V6.087z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a8.953 8.953 0 005.952-2.126C19.79 17.272 21 14.805 21 12c0-2.973-1.326-5.63-3.418-7.424C15.486 2.79 12.834 2 10 2c-3.14 0-5.968 1.02-8 2.818" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-2.342c0-1.19.967-2.158 2.158-2.158h.006c1.191 0 2.158.968 2.158 2.158V21" />
  </svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
  </svg>
);

export const InfoIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const CpuChipIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 15v-1.5M12 4.5v15"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m-3.75-15h7.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 018.25 4.5z"
    />
  </svg>
);

export const BookOpenIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6-2.292m0 0v14.25" />
  </svg>
);

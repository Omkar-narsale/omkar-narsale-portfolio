import React from 'react';

export const AntigravityIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M50 14 C63 14 74 34 83 84 C73 73 62 67 50 67 C38 67 27 73 17 84 C26 34 37 14 50 14 Z"
      fill="#00A3FF"
    />
  </svg>
);

export const ChatGPTIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 10.6.7a6.08 6.08 0 0 0-5.78 4.22 6.05 6.05 0 0 0-3.95 2.87 6.02 6.02 0 0 0 .74 7.08 5.98 5.98 0 0 0 .51 4.9 6.05 6.05 0 0 0 6.52 2.91A6.05 6.05 0 0 0 13.4 23.3a6.08 6.08 0 0 0 5.78-4.22 6.05 6.05 0 0 0 3.95-2.88 6.03 6.03 0 0 0-.85-6.38zm-8.88 12.18a4.57 4.57 0 0 1-2.8-1l.14-.08 4.66-2.69a.78.78 0 0 0 .39-.68v-6.57l2.08 1.2a.08.08 0 0 1 .05.07v5.33a4.58 4.58 0 0 1-4.52 4.42zM3.46 17.5a4.54 4.54 0 0 1-.54-2.93l.14.08 4.66 2.69a.79.79 0 0 0 .78 0l5.69-3.29v2.4a.07.07 0 0 1-.03.07l-4.61 2.67a4.58 4.58 0 0 1-6.09-1.7zm-1.1-9.2a4.57 4.57 0 0 1 2.27-1.92v5.52a.77.77 0 0 0 .39.67l5.69 3.28-2.08 1.2a.08.08 0 0 1-.08 0L3.94 14.4A4.58 4.58 0 0 1 2.36 8.3zm15.11 3.59L11.78 8.6l2.08-1.2a.08.08 0 0 1 .08 0l4.61 2.66a4.58 4.58 0 0 1-1.08 8.25v-5.52a.78.78 0 0 0-.39-.68zm2.68-3.08l-.14-.08-4.66-2.69a.79.79 0 0 0-.78 0L8.98 9.33V6.93a.08.08 0 0 1 .03-.07l4.61-2.66a4.58 4.58 0 0 1 6.63 4.63zM9.54 12l2.46-1.42 2.46 1.42v2.84L12 16.26l-2.46-1.42V12z"
      fill="#10A37F"
    />
  </svg>
);

export const GeminiIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="gemini-star-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#9333EA" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
    </defs>
    <path
      d="M12 0 C12 6.627 6.627 12 0 12 C6.627 12 12 17.373 12 24 C12 17.373 17.373 12 24 12 C17.373 12 12 6.627 12 0 Z"
      fill="url(#gemini-star-grad)"
    />
  </svg>
);

export const DeepSeekIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Body of whale */}
    <path
      d="M22 52 C22 34 40 23 62 25 C69 26 75 29 79 35 C83 40 82 46 77 50 C71 54 65 52 59 49 C53 46 48 48 47 54 C45 61 51 68 59 71 C65 73 70 71 74 68 C66 79 48 82 35 76 C26 70 22 61 22 52 Z"
      fill="#1E60FF"
    />
    {/* Tail fins */}
    <path
      d="M71 27 C76 18 86 16 90 18 C86 26 83 30 77 32 Z"
      fill="#1E60FF"
    />
    <path
      d="M75 23 C79 24 85 30 83 36 C77 32 73 28 75 23 Z"
      fill="#1E60FF"
    />
    {/* Whale eye */}
    <circle cx="37" cy="48" r="4.5" fill="white" />
    <circle cx="38" cy="48" r="2.2" fill="#1E60FF" />
  </svg>
);

export const PerplexityIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M50 10 L50 90 M10 50 L90 50 M25 25 L75 75 M75 25 L25 75"
      stroke="#20B2AA"
      strokeWidth="7"
      strokeLinecap="round"
    />
    <path
      d="M35 15 L50 30 L65 15 M85 35 L70 50 L85 65 M65 85 L50 70 L35 85 M15 65 L30 50 L15 35"
      stroke="#20B2AA"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const GitHubCopilotIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Copilot rounded visor */}
    <rect x="20" y="24" width="60" height="52" rx="26" fill="#6E40C9" />
    {/* Face mask visor */}
    <rect x="28" y="36" width="44" height="26" rx="13" fill="#111110" />
    {/* Glowing visor lenses */}
    <ellipse cx="40" cy="49" rx="6" ry="6" fill="#A78BFA" />
    <ellipse cx="60" cy="49" rx="6" ry="6" fill="#A78BFA" />
  </svg>
);


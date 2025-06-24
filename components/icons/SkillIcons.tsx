
import React from 'react';

interface IconProps {
  className?: string;
}

export const CogIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m0 0V3.75m0 16.5V12m0 0v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a3.375 3.375 0 00-3.375 3.375V12m6.375 0h1.5a3.375 3.375 0 013.375 3.375v1.5a3.375 3.375 0 01-3.375 3.375h-1.5a3.375 3.375 0 01-3.375-3.375V12m6.375 0h-1.5a3.375 3.375 0 00-3.375-3.375h-1.5a3.375 3.375 0 00-3.375 3.375V12" />
  </svg>
);

export const LightbulbIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.355a12.06 12.06 0 00-4.5 0m4.5 0V21m-4.5 0V12.75m0 0A6.062 6.062 0 0010.5 9.75m2.25-1.545A6.062 6.062 0 0113.5 9.75m0 0V7.5A2.25 2.25 0 0011.25 5.25v2.25c0 .621.504 1.125 1.125 1.125H12.75M3.375 9.75a2.25 2.25 0 002.25 2.25h12.75a2.25 2.25 0 002.25-2.25A2.25 2.25 0 0018.375 7.5H5.625a2.25 2.25 0 00-2.25 2.25z" />
  </svg>
);

export const CodeBracketIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.155A7.5 7.5 0 0118 15.75c-1.391 0-2.731-.386-3.894-1.054l-.794-.482m10.188-1.026a7.5 7.5 0 00-1.894-1.598A7.5 7.5 0 0018 11.25c-1.391 0-2.731.386-3.894 1.054l-1.28.775m10.188-1.026l-1.28.775M6.066 10.795l-.794-.482A7.5 7.5 0 003.75 12c0 1.39.386 2.731 1.054 3.894l.794.482m10.188-1.026l-1.28.775M6.066 10.795L4.786 10.02A7.5 7.5 0 003.75 12c0 1.39.386 2.731 1.054 3.894l1.28.775m6.375-6.375c.094-.063.192-.12.294-.175a8.956 8.956 0 012.831-.825M12 15.75c-.297 0-.589-.026-.874-.075m4.338-3.033a8.956 8.956 0 00-2.831-.825M12 15.75c-.297 0-.589-.026-.874-.075M12 15.75v3.75c0 .621.504 1.125 1.125 1.125h1.5c.621 0 1.125-.504 1.125-1.125V15.75m0 0c0-.621-.504-1.125-1.125-1.125h-1.5c-.621 0-1.125.504-1.125 1.125m0 0c0 .621.504 1.125 1.125 1.125h1.5c.621 0 1.125-.504 1.125-1.125V15.75m0 0c0-.621-.504-1.125-1.125-1.125h-1.5c-.621 0-1.125.504-1.125 1.125M9 7.5v9m6-9v9m-1.5-6.75h.008v.008H13.5v-.008zm-3 0h.008v.008H10.5v-.008z" />
  </svg>
);

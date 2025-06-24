import React from 'react';
import { GithubIcon, LinkedInIcon, DribbbleIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--footer-bg)] border-t border-[var(--border-color)] text-[var(--text-secondary)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors interactive-cursor-target">
            <GithubIcon className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors interactive-cursor-target">
            <LinkedInIcon className="h-6 w-6" />
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors interactive-cursor-target">
            <DribbbleIcon className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} DesignerHub Portfolio. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Crafted with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
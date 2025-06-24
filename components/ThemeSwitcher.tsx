import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ChevronDownIcon, PaintBrushIcon } from './icons/NavIcons'; 

const ThemeSwitcher: React.FC<{isMobile?: boolean}> = ({ isMobile }) => {
  const { theme, changeTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (isMobile) {
    return (
      <>
        <div className="px-3 py-2 text-sm font-medium text-[var(--text-secondary)]">Themes:</div>
        {availableThemes.map((t) => (
          <button
            key={t.id}
            onClick={() => {
              changeTheme(t.id);
              // setIsOpen(false); // Mobile menu closing handled by NavLink click in Navbar
            }}
            className={`interactive-cursor-target block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors
              ${theme.id === t.id 
                ? 'bg-[var(--accent-primary)] text-[var(--button-primary-text)]' 
                : 'text-[var(--text-primary)] hover:bg-[var(--card-bg)] hover:text-[var(--accent-primary)]'
              }`}
          >
            {t.name}
          </button>
        ))}
      </>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="interactive-cursor-target flex items-center px-3 py-2 rounded-md text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--card-bg)] hover:text-[var(--accent-primary)] transition-colors"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <PaintBrushIcon className="h-5 w-5 mr-2" />
        Themes
        <ChevronDownIcon className={`w-5 h-5 ml-1 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[var(--card-bg)] rounded-md shadow-lg py-1 z-50 border border-[var(--border-color)]">
          {availableThemes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                changeTheme(t.id);
                setIsOpen(false);
              }}
              className={`interactive-cursor-target block w-full text-left px-4 py-2 text-sm 
                ${theme.id === t.id 
                  ? 'bg-[var(--accent-primary)] text-[var(--button-primary-text)]' 
                  : 'text-[var(--text-primary)] hover:bg-[var(--accent-primary)]/20 hover:text-[var(--accent-primary)]'
                }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
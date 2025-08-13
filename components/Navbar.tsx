import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../types';
import { MenuIcon, XIcon } from './icons/NavIcons' 
import ThemeSwitcher from './ThemeSwitcher'

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Skills', path: '/skills' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[var(--nav-bg)] backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="text-3xl font-bold text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors interactive-cursor-target">
              U  <span className="text-[var(--accent-secondary)] hover:text-[var(--accent-primary)]">Kreations</span>
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `interactive-cursor-target px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-[var(--accent-primary)] ${
                    isActive
                      ? 'bg-[var(--accent-primary)] text-[var(--button-primary-text)] shadow-md'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--card-bg)]/50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <ThemeSwitcher />
          </div>
          <div className="md:hidden flex items-center">
             <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="interactive-cursor-target bg-[var(--card-bg)] inline-flex items-center justify-center p-2 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--input-bg)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--card-bg)] focus:ring-[var(--accent-primary)]"
              aria-controls="mobile-menu"
              aria-expanded={isOpen} 
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? <MenuIcon className="block h-6 w-6" /> : <XIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)} 
                className={({ isActive }) =>
                  `interactive-cursor-target block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive ? 'bg-[var(--accent-primary)] text-[var(--button-primary-text)]' : 'text-[var(--text-secondary)] hover:bg-[var(--card-bg)] hover:text-[var(--text-primary)]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="border-t border-[var(--border-color)] my-2"></div>
            <ThemeSwitcher isMobile={true} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
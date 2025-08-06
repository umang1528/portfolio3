
import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from './icons/NavIcons';

interface PortfolioItemPreviewProps {
  projects: Project[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

const PortfolioItemPreview: React.FC<PortfolioItemPreviewProps> = ({
  projects,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const project = projects[currentIndex];
  const [currentImageIndexForProject, setCurrentImageIndexForProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Reset image index and scroll to top when project changes
  useEffect(() => {
    setCurrentImageIndexForProject(0);
    if (contentRef.current) {
        contentRef.current.scrollTop = 0;
    }
    // Fade in animation
    setIsVisible(true);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      } else if (event.key === 'ArrowLeft') {
        handlePreviousProject();
      } else if (event.key === 'ArrowRight') {
        handleNextProject();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, projects.length, onClose, onNavigate]); // Added onClose and onNavigate to dependencies

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for animation
  };

  const handlePreviousProject = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleNextProject = () => {
    if (currentIndex < projects.length - 1) {
      onNavigate(currentIndex + 1);
    }
  };

  const prevProjectImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndexForProject((prev) => (prev === 0 ? project.imageUrls.length - 1 : prev - 1));
  };

  const nextProjectImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndexForProject((prev) => (prev === project.imageUrls.length - 1 ? 0 : prev + 1));
  };

  const goToProjectImage = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentImageIndexForProject(index);
  };
  
  // Trap focus
  const focusableElementsRef = useRef<HTMLElement[]>([]);
  const firstFocusableElementRef = useRef<HTMLElement | null>(null);
  const lastFocusableElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (contentRef.current && isVisible) {
      const focusableModalElements = Array.from(
        contentRef.current.querySelectorAll<HTMLElement>( // Query for HTMLElement
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter(el => !el.hasAttribute('disabled') && (el as HTMLElement).offsetParent !== null); // Check visibility

      focusableElementsRef.current = focusableModalElements;
      firstFocusableElementRef.current = focusableModalElements[0] || null;
      lastFocusableElementRef.current = focusableModalElements[focusableModalElements.length - 1] || null;
      
      // Focus the first element, or the content div if no focusable elements are found,
      // which allows screen readers to start reading the modal content.
      if (firstFocusableElementRef.current) {
        firstFocusableElementRef.current.focus();
      } else if (contentRef.current) {
        contentRef.current.setAttribute('tabindex', '-1'); // Make contentRef focusable
        contentRef.current.focus();
      }
    } else if (!isVisible && contentRef.current) {
         contentRef.current.removeAttribute('tabindex'); // Clean up tabindex
    }
  }, [isVisible, currentIndex, project]); // Re-evaluate focusable elements when project or visibility changes

  useEffect(() => {
    const handleTabKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Tab' && isVisible) {
        if (!firstFocusableElementRef.current || !lastFocusableElementRef.current) return;

        if (event.shiftKey) { // Shift + Tab
          if (document.activeElement === firstFocusableElementRef.current) {
            lastFocusableElementRef.current.focus();
            event.preventDefault();
          }
        } else { // Tab
          if (document.activeElement === lastFocusableElementRef.current) {
            firstFocusableElementRef.current.focus();
            event.preventDefault();
          }
        }
      }
    };
    window.addEventListener('keydown', handleTabKeyPress);
    return () => window.removeEventListener('keydown', handleTabKeyPress);
  }, [isVisible]);


  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-item-title"
      aria-describedby="portfolio-item-description" // Added for accessibility
      className={`absolute top-0 left-0 right-0 z-[100] flex justify-center p-4 transition-opacity duration-300 ease-out ${
  isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
}`}
// style={{ minHeight: '1%' }}
    >
      <div className="absolute inset-0 bg-[var(--body-bg)]/80 backdrop-blur-md" onClick={handleClose} tabIndex={-1}></div>

      {/* Main Project Navigation - Previous */}
      {projects.length > 1 && (
        <button
          onClick={handlePreviousProject}
          disabled={currentIndex === 0}
          aria-label="Previous project"
          className="interactive-cursor-target absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-[102] p-2 sm:p-3 bg-[var(--card-bg)]/70 text-[var(--text-primary)] rounded-full shadow-lg hover:bg-[var(--accent-primary)] hover:text-[var(--button-primary-text)] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeftIcon className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      )}

      {/* Content Area */}
      <div
        ref={contentRef}
        className={`relative z-[101] bg-[var(--card-bg)] w-full max-w-5xl max-h-[90vh] rounded-xl shadow-2xl flex flex-col overflow-hidden transition-transform duration-300 ease-out ${
          isVisible ? 'scale-100' : 'scale-95'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[var(--border-color)] shrink-0">
          <h2 id="portfolio-item-title" className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
            {project.title}
          </h2>
          <button
            onClick={handleClose}
            aria-label="Close project preview"
            className="interactive-cursor-target p-2 text-[var(--text-secondary)] hover:text-[var(--accent-tertiary)] rounded-md transition-colors"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Image Gallery for current project */}
            <div className="relative aspect-[4/3] group/imageslider">
              <div className="absolute inset-0 flex overflow-hidden rounded-lg">
                {project.imageUrls.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`${project.title} - View ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    style={{ opacity: currentImageIndexForProject === index ? 1 : 0 }}
                    loading="lazy"
                  />
                ))}
              </div>
              <span className="absolute top-3 right-3 bg-[var(--accent-primary)] text-[var(--button-primary-text)] text-xs font-semibold px-2 py-0.5 rounded-full shadow-md z-10">
                {project.category}
              </span>

              {project.imageUrls.length > 1 && (
                <>
                  <button
                    onClick={prevProjectImage}
                    aria-label="Previous image for this project"
                    className="interactive-cursor-target absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 text-white p-1.5 rounded-full hover:bg-[var(--accent-primary)]/80 transition-all focus:outline-none z-10 opacity-0 group-hover/imageslider:opacity-100 disabled:opacity-30"
                  >
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextProjectImage}
                    aria-label="Next image for this project"
                    className="interactive-cursor-target absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 text-white p-1.5 rounded-full hover:bg-[var(--accent-primary)]/80 transition-all focus:outline-none z-10 opacity-0 group-hover/imageslider:opacity-100 disabled:opacity-30"
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-10">
                    {project.imageUrls.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => goToProjectImage(e, index)}
                        className={`interactive-cursor-target w-2 h-2 rounded-full transition-all duration-300 ${
                          currentImageIndexForProject === index
                            ? 'bg-[var(--accent-primary)] scale-125 ring-1 ring-offset-1 ring-offset-black/30 ring-[var(--accent-primary)]'
                            : 'bg-white/60 hover:bg-white/90'
                        }`}
                        aria-label={`Go to image ${index + 1} for this project`}
                        aria-current={currentImageIndexForProject === index}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Project Description */}
            <div id="portfolio-item-description" className="text-[var(--text-secondary)] leading-relaxed space-y-3">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">Project Overview</h3>
              {project.description.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Project Navigation - Next */}
      {projects.length > 1 && (
         <button
          onClick={handleNextProject}
          disabled={currentIndex === projects.length - 1}
          aria-label="Next project"
          className="interactive-cursor-target absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-[102] p-2 sm:p-3 bg-[var(--card-bg)]/70 text-[var(--text-primary)] rounded-full shadow-lg hover:bg-[var(--accent-primary)] hover:text-[var(--button-primary-text)] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronRightIcon className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      )}
    </div>
  );
};

export default PortfolioItemPreview;

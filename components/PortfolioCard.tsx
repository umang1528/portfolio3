import React, { useState } from 'react';
import { Project } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './icons/NavIcons';

interface PortfolioCardProps {
  project: Project;
  onPreview: (project: Project) => void; // Added prop to handle preview click
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, onPreview }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking image nav
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.imageUrls.length - 1 : prevIndex - 1
    );
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToImage = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  return (
    <div 
      className="interactive-cursor-target group/card bg-[var(--card-bg)] rounded-xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[var(--shadow-color-primary)]/30 transform hover:-translate-y-2"
      onClick={() => onPreview(project)} 
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onPreview(project);}}
    >
      <div className="relative aspect-video overflow-hidden group/slider">
        {/* Image container that slides */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {project.imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`${project.title} - Image ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0" // Critical for slider
              loading="lazy"
            />
          ))}
        </div>

        {/* Gradient Overlay & Category Badge */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 group-hover/card:from-black/50 transition-opacity duration-300"></div>
        <span className="absolute top-4 right-4 bg-[var(--accent-primary)] text-[var(--button-primary-text)] text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
          {project.category}
        </span>

        {/* Navigation Buttons */}
        {project.imageUrls.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="interactive-cursor-target absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 text-white p-1.5 rounded-full hover:bg-[var(--accent-primary)]/80 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] z-20 opacity-0 group-hover/slider:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="interactive-cursor-target absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 text-white p-1.5 rounded-full hover:bg-[var(--accent-primary)]/80 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] z-20 opacity-0 group-hover/slider:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {project.imageUrls.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-20">
            {project.imageUrls.map((_, index) => (
              <button
                key={index}
                onClick={(e) => goToImage(e, index)}
                className={`interactive-cursor-target w-2 h-2 rounded-full transition-all duration-300
                  ${ currentImageIndex === index 
                    ? 'bg-[var(--accent-primary)] scale-125 ring-1 ring-offset-1 ring-offset-black/30 ring-[var(--accent-primary)]' 
                    : 'bg-white/60 hover:bg-white/90'
                  }`}
                aria-label={`Go to image ${index + 1}`}
                aria-current={currentImageIndex === index ? 'true' : 'false'}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mb-2 group-hover/card:opacity-80 transition-opacity">
          {project.title}
        </h3>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 line-clamp-3 group-hover/card:line-clamp-none transition-all duration-300 h-16 group-hover/card:h-auto">
          {project.description}
        </p>
        <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent the card's main onClick from firing twice if user clicks this button
              onPreview(project);
            }}
            className="interactive-cursor-target mt-2 inline-block text-[var(--accent-primary)] font-semibold hover:text-[var(--accent-secondary)] transition-colors group-hover/card:underline"
          >
            View Details <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;

import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-1 md:mb-1 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--section-title-from)] to-[var(--section-title-to)] mb-2">
        {title}
      </h2>
      {subtitle && <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">{subtitle}</p>}
      <div className="mt-4 h-1 w-24 bg-gradient-to-r from-[var(--section-title-underline-from)] to-[var(--section-title-underline-to)] mx-auto rounded-full"></div>
    </div>
  );
};

export default SectionTitle;

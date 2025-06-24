import React from 'react';
import { NavLink } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Updated Hero Section with Image */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[var(--body-bg)] via-[var(--accent-secondary)]/40 to-[var(--accent-primary)]/30 rounded-xl shadow-2xl overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Column - Now on the left for desktop */}
            <div className="order-first md:order-first flex justify-center md:justify-start group mt-8 md:mt-0">
              <img
                src="https://picsum.photos/seed/designerhome/600/700" // Placeholder for designer's image
                alt="Alex Chen - The Designer"
                className="rounded-xl shadow-2xl border-4 border-[var(--card-bg)] object-cover 
                           w-[440
                          px] h-[600px] 
                           sm:w-[600pxpx] sm:h-[400px] 
                           md:w-[300px] md:h-[375px] 
                           lg:w-[360px] lg:h-[450px] 
                           transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-[var(--shadow-color-primary)]/40"
              />
            </div>

            {/* Text Content Column - Now on the right for desktop */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)]">
                  Welcome to DesignerHub
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-10 font-light max-w-xl md:max-w-none">
                Fusing innovative <strong className="text-[var(--accent-primary)]">Interior Design</strong>, captivating <strong className="text-[var(--accent-secondary)]">Graphic Design</strong>, and expressive <strong className="text-[var(--accent-tertiary)]">Fine Art</strong> to craft your vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <NavLink
                  to="/portfolio"
                  className="interactive-cursor-target w-full sm:w-auto px-10 py-4 bg-[var(--accent-primary)] text-[var(--button-primary-text)] font-semibold rounded-lg shadow-xl hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  Explore Portfolio
                </NavLink>
                <NavLink
                  to="/about"
                  className="interactive-cursor-target w-full sm:w-auto px-10 py-4 bg-[var(--accent-secondary)] text-white font-semibold rounded-lg shadow-xl hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  Meet The Designer
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle title="What I Do" subtitle="Crafting unique experiences across digital, physical, and artistic spaces." />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-[var(--text-secondary)]">
          <div className="bg-[var(--card-bg-light)] p-6 rounded-lg shadow-lg hover:shadow-[var(--shadow-color-primary)]/20 transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-[var(--accent-primary)] mb-3">Interior Design</h3>
            <p className="leading-relaxed">
              Transforming spaces into functional, aesthetic, and inspiring environments. From residential sanctuaries to dynamic commercial hubs, every detail is considered to reflect personality and purpose.
            </p>
          </div>
          <div className="bg-[var(--card-bg-light)] p-6 rounded-lg shadow-lg hover:shadow-[var(--shadow-color-secondary)]/20 transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-[var(--accent-secondary)] mb-3">Graphic Design</h3>
            <p className="leading-relaxed">
              Building compelling visual narratives that resonate. Specializing in branding, digital illustration, UI/UX, and print media to create impactful and memorable brand identities.
            </p>
          </div>
          <div className="bg-[var(--card-bg-light)] p-6 rounded-lg shadow-lg hover:shadow-[var(--shadow-color-tertiary)]/20 transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-[var(--accent-tertiary)] mb-3">Fine Art</h3>
            <p className="leading-relaxed">
              Creating expressive and thought-provoking original artworks. Exploring various mediums to capture emotion and tell stories beyond the commercial or purely functional.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center py-12">
        <p className="text-xl text-[var(--text-secondary)] mb-6">Ready to bring your vision to life?</p>
        <NavLink
            to="/contact"
            className="interactive-cursor-target px-8 py-3 bg-gradient-to-r from-[var(--button-primary-hover-bg-gradient-from)] to-[var(--button-primary-hover-bg-gradient-to)] text-[var(--button-primary-text)] font-bold rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-lg"
        >
            Let's Collaborate
        </NavLink>
      </section>
    </div>
  );
};

export default HomePage;
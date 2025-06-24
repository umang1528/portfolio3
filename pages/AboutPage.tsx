import React from 'react';
import { NavLink } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* New Hero Section - Image Box Removed */}
      <section className="relative group min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 -mt-8 md:-mt-12 mb-12 md:mb-16">
        {/* Background Cover Image */}
        <div className="absolute inset-0 z-0 transition-transform duration-1000 ease-in-out group-hover:scale-105">
          <img 
            src="https://picsum.photos/seed/aboutcover/1600/900" // Higher resolution for cover
            className="w-full h-full object-cover" 
            alt="Abstract creative background"
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--body-bg)] via-[var(--body-bg)]/80 to-transparent md:bg-gradient-to-r md:from-[var(--body-bg)]/90 md:via-[var(--body-bg)]/60 md:to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16 md:py-20">
          {/* Information Area - Centered */}
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-3 sm:mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                Alex Chen
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] mb-6 sm:mb-8 font-light max-w-lg mx-auto">
              Creative Interior & Graphic Designer transforming visions into captivating visual realities.
            </p>
            <div className="space-y-3 sm:space-y-0 sm:flex sm:space-x-4 flex-col sm:flex-row items-center justify-center">
              <NavLink
                to="/portfolio"
                className="interactive-cursor-target w-full sm:w-auto inline-block px-8 py-3 bg-gradient-to-r from-[var(--button-primary-bg-gradient-from)] to-[var(--button-primary-bg-gradient-to)] text-[var(--button-primary-text)] font-semibold rounded-lg shadow-lg hover:from-[var(--button-primary-hover-bg-gradient-from)] hover:to-[var(--button-primary-hover-bg-gradient-to)] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--body-bg)] focus:ring-[var(--accent-primary)]"
              >
                View My Work
              </NavLink>
              <NavLink
                to="/contact"
                className="interactive-cursor-target w-full sm:w-auto inline-block px-8 py-3 border-2 border-[var(--accent-secondary)] text-[var(--accent-secondary)] font-semibold rounded-lg shadow-md hover:bg-[var(--accent-secondary)] hover:text-[var(--button-primary-text)] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--body-bg)] focus:ring-[var(--accent-secondary)]"
              >
                Get In Touch
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      {/* End of New Hero Section */}

      <section>
        <SectionTitle title="Welcome to My Creative Space" subtitle="A passionate designer dedicated to crafting beautiful and functional experiences." />
        <div className="max-w-3xl mx-auto text-[var(--text-secondary)] space-y-6 text-lg leading-relaxed text-center md:text-left">
          <p>
            Hello! I'm Alex, a versatile designer with a keen eye for detail and a passion for blending aesthetics with functionality. 
            My expertise spans both <strong className="text-[var(--accent-primary)]">Interior Design</strong>, where I create inspiring and harmonious living and working spaces, 
            and <strong className="text-[var(--accent-secondary)]">Graphic Design</strong>, where I craft compelling visual identities and digital experiences.
          </p>
          <p>
            I believe that great design tells a story, evokes emotion, and solves problems. Whether it's transforming a room into a sanctuary or building a brand from the ground up, 
            I approach each project with creativity, precision, and a collaborative spirit.
          </p>
          <p>
            Explore my portfolio to see how I bring ideas to life, and learn more about my skills and experience. Let's create something amazing together!
          </p>
        </div>
      </section>
      
      <section className="grid md:grid-cols-2 gap-8 items-center bg-[var(--card-bg-light)] p-6 sm:p-8 rounded-lg shadow-xl">
        <div>
          <h3 className="text-3xl font-bold text-[var(--accent-primary)] mb-4">My Design Philosophy</h3>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
            To me, design is more than just aesthetics; it's about creating intuitive, impactful, and memorable experiences. I focus on:
          </p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 pl-4">
            <li><strong className="text-[var(--accent-secondary)]">User-Centricity:</strong> Understanding needs to deliver solutions that resonate.</li>
            <li><strong className="text-[var(--accent-secondary)]">Innovation:</strong> Pushing creative boundaries while maintaining clarity.</li>
            <li><strong className="text-[var(--accent-secondary)]">Attention to Detail:</strong> Believing that every pixel and every placement matters.</li>
            <li><strong className="text-[var(--accent-secondary)]">Collaboration:</strong> Working closely with clients to bring their vision to fruition.</li>
          </ul>
        </div>
        <div className="relative h-64 md:h-80 group overflow-hidden rounded-lg shadow-lg">
            <img 
              src="https://picsum.photos/seed/designmood/600/400" 
              alt="Design Inspiration" 
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)]/50 to-transparent"></div>
            <p className="absolute bottom-4 left-4 text-white text-lg font-semibold">Creating inspiring environments.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
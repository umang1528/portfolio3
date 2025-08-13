import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

// Importing images from coffee and GRP folders
import coffeeImg from '../img/coffee/coffe.jpg'
import grpImg1 from '../img/GRP/IM1.png'
import grpImg2 from '../img/GRP/IM2.png'

const HomePage: React.FC = () => {
  const portfolioImages = [
    { src: coffeeImg, link: "/portfolio/item1" },
    { src: grpImg1, link: "/portfolio/item2" },
    { src: grpImg2, link: "/portfolio/item3" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8 md:space-y-12 px-4 sm:px-6">
      {/* Hero Section */}
     <section className="py-12 md:py-24 lg:py-30 bg-gradient-to-br from-[var(--body-bg)] via-[var(--accent-secondary)]/40 to-[var(--accent-primary)]/30 rounded-xl shadow-2xl overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Image Side - Optimized for tablet view */}
            <div className="flex justify-center order-1 md:order-none group">
              <NavLink to={portfolioImages[currentImageIndex].link}>
                <img
                  src={portfolioImages[currentImageIndex].src}
                  alt={`Portfolio ${currentImageIndex + 1}`}
                  className="rounded-xl shadow-2xl border-4 border-[var(--card-bg)] object-cover 
                             w-full h-auto 
                             max-w-[280px] max-h-[350px]  /* Mobile */
                             sm:max-w-[320px] sm:max-h-[400px] /* Small tablet */
                             md:max-w-[280px] md:max-h-[350px] /* Tablet */
                             lg:max-w-[350px] lg:max-h-[450px] /* Laptop */
                             xl:max-w-[400px] xl:max-h-[500px] /* Desktop */
                             transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-[var(--shadow-color-primary)]/40"
                />
              </NavLink>
            </div>

            {/* Text Side with optimized buttons */}
            <div className="text-center md:text-left order-0 md:order-none">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 md:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)]">
                  Welcome to Designing Aura
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] mb-6 md:mb-10 font-light max-w-xl mx-auto md:mx-0">
                Blending <strong className="text-[var(--accent-primary)]">Innovative Interiors</strong>, bold <strong className="text-[var(--accent-secondary)]">Graphic Design</strong>, and soulful <strong className="text-[var(--accent-tertiary)]">Fine Art</strong> to turn imagination into immersive experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <NavLink
                  to="/portfolio"
                  className="w-full sm:w-auto 
                            px-5 py-2.5   /* Mobile */
                            sm:px-6 sm:py-3 /* Small tablet */
                            md:px-6 md:py-3 /* Tablet */
                            lg:px-8 lg:py-3.5 /* Laptop */
                            xl:px-10 xl:py-4 /* Desktop */
                            bg-[var(--accent-primary)] text-[var(--button-primary-text)] font-semibold rounded-lg shadow-xl hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 
                            text-sm sm:text-base md:text-base lg:text-lg"
                >
                  Explore Portfolio
                </NavLink>
                <NavLink
                  to="/about"
                  className="w-full sm:w-auto 
                            px-5 py-2.5   /* Mobile */
                            sm:px-6 sm:py-3 /* Small tablet */
                            md:px-6 md:py-3 /* Tablet */
                            lg:px-8 lg:py-3.5 /* Laptop */
                            xl:px-10 xl:py-4 /* Desktop */
                            bg-[var(--accent-secondary)] text-white font-semibold rounded-lg shadow-xl hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 
                            text-sm sm:text-base md:text-base lg:text-lg"
                >
                  Meet The Designer
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="px-4 sm:px-6">
        <SectionTitle title="What I Do" subtitle="Designing with depth — blending aesthetics, emotion, and strategy effortlessly." />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-[var(--text-secondary)]">
          <div className="bg-[var(--card-bg-light)] p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-[var(--shadow-color-primary)]/20 transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--accent-primary)] mb-2 sm:mb-3">Interior Design</h3>
            <p className="text-sm sm:text-base">
              Transforming spaces into beautiful, functional environments that reflect your unique personality. From cozy homes to dynamic commercial areas, I blend aesthetics with purpose.
            </p>
          </div>
          <div className="bg-[var(--card-bg-light)] p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-[var(--shadow-color-secondary)]/20 transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--accent-secondary)] mb-2 sm:mb-3">Graphic Design</h3>
            <p className="text-sm sm:text-base">
              Crafting eye-catching visuals that tell your brand's story. From logos to UI/UX and print designs, I build identities that are memorable and impactful.
            </p>
          </div>
          <div className="bg-[var(--card-bg-light)] p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-[var(--shadow-color-tertiary)]/20 transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--accent-tertiary)] mb-2 sm:mb-3">Fine Art</h3>
            <p className="text-sm sm:text-base">
              Bringing emotion to life through original artworks. I explore various mediums to create expressive pieces that go beyond function and connect deeply with the viewer.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center py-8 md:py-12 px-4 sm:px-6">
        <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] mb-4 md:mb-6">Ready to bring your vision to life?</p>
        <NavLink
          to="/contact"
          className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-[var(--button-primary-hover-bg-gradient-from)] to-[var(--button-primary-hover-bg-gradient-to)] text-[var(--button-primary-text)] font-bold rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base md:text-lg"
        >
          Let's Collaborate
        </NavLink>
      </section>
    </div>
  );
};

export default HomePage;
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

// Importing images from coffee and GRP folders
import coffeeImg from '../img/coffee/coffe.jpg';
// import grpImg1 from '../img/GRP/IM1.png'
// import grpImg2 from '../img/GRP/IM2.png'
// import grpImg3 from '../img/GRP/img1.jpg'
// import grpImg4 from '../img/GRP/horse.jpg'

const HomePage: React.FC = () => {
  const portfolioImages = [
    { src: coffeeImg, link: "/portfolio" },
    // { src: grpImg1, link: "/project/2" },
    // { src: grpImg2, link: "/project/3" },
    // { src: grpImg3, link: "/project/4" },
    // { src: grpImg4, link: "/project/5" },
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
     <section className="relative py-12 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-[var(--body-bg)] via-[var(--accent-secondary)]/30 to-[var(--accent-primary)]/20 overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute inset-0 opacity-10
">
    <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[var(--accent-primary)] blur-xl"></div>
    <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[var(--accent-secondary)] blur-xl"></div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
      {/* Image Container - Responsive sizing */}
      <div className="w-full lg:w-1/2 order-2 lg:order-1">
        <div className="relative group overflow-hidden rounded-xl shadow-2xl border-4 border-[var(--card-bg)] hover:border-[var(--accent-primary)] transition-all duration-300">
          <NavLink to={portfolioImages[currentImageIndex].link}>
            <img
              src={portfolioImages[currentImageIndex].src}
              alt={`Portfolio ${currentImageIndex + 1}`}
              className="w-full h-auto aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </NavLink>
        </div>
      </div>

      {/* Text Content - Responsive sizing */}
      <div className="w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)]">
            Welcome to Designing Aura
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
          Blending <span className="font-semibold text-[var(--accent-primary)]">Innovative Interiors</span>, bold <span className="font-semibold text-[var(--accent-secondary)]">Graphic Design</span>, and soulful <span className="font-semibold text-[var(--accent-tertiary)]">Fine Art</span> to turn imagination into immersive experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
          <NavLink
            to="/portfolio"
            className="px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-[var(--button-primary-bg-gradient-from)] to-[var(--button-primary-bg-gradient-to)] text-[var(--button-primary-text)] font-semibold rounded-lg shadow-lg hover:shadow-[var(--shadow-color-primary)]/40 hover:scale-[1.03] transition-all duration-300"
          >
            Explore Portfolio
          </NavLink>
          <NavLink
            to="/about"
            className="px-6 py-3 sm:px-8 sm:py-3.5 bg-[var(--accent-secondary)] text-white font-semibold rounded-lg shadow-lg hover:bg-[var(--accent-secondary)]/90 hover:scale-[1.03] transition-all duration-300"
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
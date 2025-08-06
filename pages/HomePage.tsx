import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

// Importing images from coffee and GRP folders
import coffeeImg from '../img/coffee/coffe.jpg';
// import coffeeImg from '../img/coffee/coffe2.jpg';
// import coffeeImg from '../img/coffee/coffe3.jpg';
import grpImg1 from '../img/GRP/IM1.png';
import grpImg2 from '../img/GRP/IM2.png';

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
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="py-16 md:py-30 bg-gradient-to-br from-[var(--body-bg)] via-[var(--accent-secondary)]/40 to-[var(--accent-primary)]/30 rounded-xl shadow-2xl overflow-hidden">
        <div className="container mx-auto px-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image Side */}
            <div className="flex justify-center md:justify-start group">
              <NavLink to={portfolioImages[currentImageIndex].link}>
                <img
                  src={portfolioImages[currentImageIndex].src}
                  alt={`Portfolio ${currentImageIndex + 1}`}
                  className="rounded-xl shadow-2xl border-4 border-[var(--card-bg)] object-cover 
                             w-[440px] h-[600px] 
                             sm:w-[600px] sm:h-[400px] 
                             md:w-[300px] md:h-[375px] 
                             lg:w-[600px] lg:h-[450px] 
                             transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-[var(--shadow-color-primary)]/40"
                />
              </NavLink>
            </div>

            {/* Text Side */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)]">
                  Welcome with Designing Aura
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-10 font-light max-w-xl md:max-w-none">
                Blending <strong className="text-[var(--accent-primary)]">Innovative Interiors</strong>, bold <strong className="text-[var(--accent-secondary)]">Graphic Design</strong>, and soulful <strong className="text-[var(--accent-tertiary)]">Fine Art</strong> to turn imagination into immersive experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <NavLink
                  to="/portfolio"
                  className="w-full sm:w-auto px-10 py-4 bg-[var(--accent-primary)] text-[var(--button-primary-text)] font-semibold rounded-lg shadow-xl hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  Explore Portfolio
                </NavLink>
                <NavLink
                  to="/about"
                  className="w-full sm:w-auto px-10 py-4 bg-[var(--accent-secondary)] text-white font-semibold rounded-lg shadow-xl hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  Meet The Designer
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section>
        <SectionTitle title="What I Do" subtitle="Designing with depth — blending aesthetics, emotion, and strategy effortlessly." />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-[var(--text-secondary)]">
          <div className="bg-[var(--card-bg-light)] p-6 rounded-lg shadow-lg hover:shadow-[var(--shadow-color-primary)]/20 transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-[var(--accent-primary)] mb-3">Interior Design</h3>
            <p>
              Transforming spaces into beautiful, functional environments that reflect your unique personality. From cozy homes to dynamic commercial areas, I blend aesthetics with purpose.
            </p>
          </div>
          <div className="bg-[var(--card-bg-light)] p-6 rounded-lg shadow-lg hover:shadow-[var(--shadow-color-secondary)]/20 transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-[var(--accent-secondary)] mb-3">Graphic Design</h3>
            <p>
              Crafting eye-catching visuals that tell your brand’s story. From logos to UI/UX and print designs, I build identities that are memorable and impactful.
            </p>
          </div>
          <div className="bg-[var(--card-bg-light)] p-6 rounded-lg shadow-lg hover:shadow-[var(--shadow-color-tertiary)]/20 transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-[var(--accent-tertiary)] mb-3">Fine Art</h3>
            <p>
              Bringing emotion to life through original artworks. I explore various mediums to create expressive pieces that go beyond function and connect deeply with the viewer.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center py-12">
        <p className="text-xl text-[var(--text-secondary)] mb-6">Ready to bring your vision to life?</p>
        <NavLink
          to="/contact"
          className="px-8 py-3 bg-gradient-to-r from-[var(--button-primary-hover-bg-gradient-from)] to-[var(--button-primary-hover-bg-gradient-to)] text-[var(--button-primary-text)] font-bold rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-lg"
        >
          Let's Collaborate
        </NavLink>
      </section>
    </div>
  );
};

export default HomePage;

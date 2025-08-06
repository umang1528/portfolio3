import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

import coffeeImg1 from '../img/coffee/coffe.jpg';
import coffeeImg2 from '../img/coffee/coffe2.jpg';
import coffeeImg3 from '../img/coffee/coffe3.jpg';
import grpImg1 from '../img/GRP/IM1.png';
import grpImg2 from '../img/GRP/IM2.png';

const AboutPage: React.FC = () => {
  const portfolioImages = [
    { src: coffeeImg1, caption: "Modern Loft Apartment", link: "/portfolio/item1" },
    { src: coffeeImg2, caption: "Minimal Meets Cozy", link: "/portfolio/item2" },
    { src: coffeeImg3, caption: "Bold Concepts, Elegant Execution", link: "/portfolio/item3" },
    { src: grpImg1, caption: "Vibrant Visual Identities", link: "/portfolio/item4" },
    { src: grpImg2, caption: "Designs that Speak for You", link: "/portfolio/item" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % portfolioImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-12 ">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] mt-4 flex items-center justify-center overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 bottom-12">

        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          {portfolioImages.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={`bg-${index}`}
              className={`w-full h-full object-cover absolute transition-opacity duration-1000 ease-in-out
                ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
              `}
              style={{ filter: 'brightness(0.75)' }} // ✅ Dim Effect
            />
          ))}

          {/* Dim Overlay */}
          <div className="absolute inset-0 bg-black/40 z-[1]" />
        </div>

        {/* Caption */}
        <div className="absolute bottom-10 sm:bottom-32 z-[2] px-2 w-full flex justify-center right-20">
          {portfolioImages.map((img, index) => (
            <p
              key={index}
              className={`
                absolute left-1/2 transform -translate-x-1/4 text-center text-white text-lg sm:text-xl md:text-2xl font-normal
                bg-black/40 px-10 py-2 rounded-lg backdrop-blur-sm transition-opacity duration-1000 ease-in-out
                ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
              `}
            >
              {img.caption}
            </p>
          ))}
        </div>

        {/* Foreground Content */}
        <div className="relative z-[2] container mx-auto px-6 py-16 md:py-20 text-center text-white">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-3 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              UMANG
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
            Creative Interior & Graphic Designer transforming visions into captivating visual realities.
          </p>
          <div className="mt-6 space-y-3 sm:space-y-0 sm:flex sm:space-x-4 flex-col sm:flex-row items-center justify-center">
            <NavLink
              to="/portfolio"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
            >
              View My Work
            </NavLink>
            <NavLink
              to="/contact"
              className="px-8 py-3 border-2 border-pink-500 text-pink-400 font-semibold rounded-lg shadow-md hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </NavLink>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section>
        <SectionTitle title="Welcome to My Creative Space" subtitle="Where imagination meets intention." />
        <div className="max-w-3xl mx-auto text-[var(--text-secondary)] space-y-6 text-lg leading-relaxed text-center md:text-left">
          <p>
            Hi, I’m Umang — a passionate designer with a sharp eye for detail and a heart for crafting experiences that are both beautiful and purposeful.
            My journey blends creativity with strategy to bring ideas to life in meaningful ways.
            <strong className="text-[var(--accent-primary)]"> Interior Design</strong>, transforming ordinary spaces into inspiring environments that reflect your personality and style.
            <strong className="text-[var(--accent-secondary)]"> Graphic Design</strong>, building bold, memorable visuals that connect, communicate, and leave a lasting impression.
          </p>
          <p>
            For me, design is more than just how something looks — it’s how it works, feels, and tells a story. Whether it’s turning a room into a sanctuary or creating a brand identity from scratch,
            I approach every project with passion, precision, and a collaborative spirit.
          </p>
          <p>Explore my work and see how I bring ideas into reality.</p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center bg-[var(--card-bg-light)] p-6 sm:p-8 rounded-lg shadow-xl">
        <div>
          <h3 className="text-3xl font-bold text-[var(--accent-primary)] mb-4">My Design Philosophy</h3>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
            For me, design isn’t just about how it looks — it’s about how it feels, how it functions, and how it connects. Every layout, every pixel, every choice tells a story.
          </p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 pl-4">
            <li><strong className="text-[var(--accent-secondary)]">User-Centricity:</strong> Where aesthetics meet real purpose.</li>
            <li><strong className="text-[var(--accent-secondary)]">Innovation:</strong> Breaking boundaries while keeping things clear and focused.</li>
            <li><strong className="text-[var(--accent-secondary)]">Attention to Detail:</strong> Every element matters. Every pixel has power.</li>
            <li><strong className="text-[var(--accent-secondary)]">Collaboration:</strong> Working closely with clients to turn vision into something unforgettable.</li>
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

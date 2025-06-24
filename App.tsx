import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import AnimatedPage from './components/AnimatedPage';
import { ThemeProvider } from './contexts/ThemeContext';
import CustomCursor from './components/CustomCursor';
import AnimatedBackground from './components/AnimatedBackground'; // Import new component

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AnimatedBackground /> {/* Add AnimatedBackground here */}
      <CustomCursor />
      <HashRouter>
        {/* Main content div, now relative, z-indexed, and with transparent background */}
        <div className="relative z-10 flex flex-col min-h-screen bg-transparent text-[var(--text-primary)] selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)]">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <Routes>
              <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
              <Route path="/about" element={<AnimatedPage><AboutPage /></AnimatedPage>} />
              <Route path="/resume" element={<AnimatedPage><ResumePage /></AnimatedPage>} />
              <Route path="/portfolio" element={<AnimatedPage><PortfolioPage /></AnimatedPage>} />
              <Route path="/skills" element={<AnimatedPage><SkillsPage /></AnimatedPage>} />
              <Route path="/contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
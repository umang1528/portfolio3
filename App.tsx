import type React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ResumePage from "./pages/ResumePage"
import PortfolioPage from "./pages/PortfolioPage"
import SkillsPage from "./pages/SkillsPage"
import ContactPage from "./pages/ContactPage"
import ProjectDetail from "../portfolio3/components/PortfolioItemPreview"
import AnimatedPage from "./components/AnimatedPage"
import { ThemeProvider } from "./contexts/ThemeContext"
import CustomCursor from "./components/CustomCursor"
import AnimatedBackground from "./components/AnimatedBackground"
import { Toaster } from "react-hot-toast"

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AnimatedBackground />
      <CustomCursor />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "radial-gradient(circle at top left, #1f1f1f, #000)",
            color: "#ffffff",
            border: "3px solid #FF6B00",
            borderRadius: "16px",
            fontWeight: "bold",
            fontSize: "16px",
            textTransform: "uppercase",
            padding: "20px 24px",
            boxShadow: `
              0 0 10px #FF6B00,
              0 0 20px #FF6B00aa,
              0 0 30px #FF6B00bb
            `,
            fontFamily: "'Syne', 'Poppins', sans-serif'",
            animation: "blast 0.6s ease-out",
          },
          success: {
            icon: "✅",
            style: {
              background: "linear-gradient(135deg, #003300, #00cc66)",
              borderColor: "#00ff99",
              color: "#ccffe6",
              boxShadow: `
                0 0 12px #00ff99,
                0 0 20px #00ff99bb,
                inset 0 0 10px #00ff99
              `,
              position: "relative",
            },
          },
          error: {
            icon: "❌",
            style: {
              background: "linear-gradient(135deg, #330000, #ff0000)",
              borderColor: "#ff0033",
              color: "#ffe6e6",
              boxShadow: `
                0 0 10px #ff0033,
                0 0 20px #ff0033aa,
                inset 0 0 10px #ff0033
              `,
            },
          },
        }}
      />

      <style>
        {`
          @keyframes blast {
            0% {
              transform: scale(0.6) rotate(-10deg);
              opacity: 0;
            }
            60% {
              transform: scale(1.05) rotate(2deg);
              opacity: 1;
            }
            100% {
              transform: scale(1) rotate(0deg);
            }
          }
        `}
      </style>

      <HashRouter>
        <div className="relative z-10 flex flex-col min-h-screen bg-transparent text-[var(--text-primary)] selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)]">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <Routes>
              <Route
                path="/"
                element={
                  <AnimatedPage>
                    <HomePage />
                  </AnimatedPage>
                }
              />
              <Route
                path="/about"
                element={
                  <AnimatedPage>
                    <AboutPage />
                  </AnimatedPage>
                }
              />
              <Route
                path="/resume"
                element={
                  <AnimatedPage>
                    <ResumePage />
                  </AnimatedPage>
                }
              />
              <Route
                path="/portfolio"
                element={
                  <AnimatedPage>
                    <PortfolioPage />
                  </AnimatedPage>
                }
              />
              <Route
                path="/skills"
                element={
                  <AnimatedPage>
                    <SkillsPage />
                  </AnimatedPage>
                }
              />
              <Route
                path="/contact"
                element={
                  <AnimatedPage>
                    <ContactPage />
                  </AnimatedPage>
                }
              />
              <Route
                path="/project/:id"
                element={
                  <AnimatedPage>
                    <ProjectDetail />
                  </AnimatedPage>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App

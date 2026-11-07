import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import { navItems } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [darkMode, setDarkMode] = useState(() => {
    // Default to dark theme as requested by design spec
    const saved = localStorage.getItem('portfolio-theme');
    return saved !== null ? saved === 'dark' : true;
  });

  // Sync dark class on root html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

  // ScrollSpy to highlight active section in sidebar
  useEffect(() => {
    const sectionIds = navItems.map((n) => n.id);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans selection:bg-primary selection:text-white">
      {/* Top reading progress indicator */}
      <ScrollProgress />

      {/* Floating Back-to-Top Button */}
      <BackToTop />

      {/* Fixed Sidebar Navigation */}
      <Sidebar
        activeSection={activeSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content Area (Offset by Sidebar width on large screens) */}
      <main className="lg:ml-[280px] min-h-screen flex flex-col">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

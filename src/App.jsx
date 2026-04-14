import { useEffect } from 'react';
import './index.css';
import initScripts from './script.js';
import Hero from './components/Hero';
import ProductPhilosophy from './components/ProductPhilosophy';
import AchievementGallery from './components/AchievementGallery';
import ToolkitMetrics from './components/ToolkitMetrics';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    initScripts();
  }, []);

  return (
    <div className="font-inter antialiased bg-dark-900 overflow-x-hidden">
      {/* CUSTOM CURSOR */}
  <div className="cursor-dot" id="cursor-dot"></div>
  <div className="cursor-ring" id="cursor-ring"></div>

  {/* NAVIGATION */}
  <div className="fixed top-4 md:top-6 left-0 w-full z-[9999] flex justify-center px-4 pointer-events-none">
    <nav
      className="pointer-events-auto bg-[#08080d]/90 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
      id="navbar">
      {/* Desktop Left */}
      <div className="hidden md:flex flex-1 justify-end items-center gap-8 pr-10">
        <a href="#philosophy"
          className="text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
          data-cursor-hover>Philosophy</a>
        <a href="#gallery"
          className="text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
          data-cursor-hover>Gallery</a>
      </div>

      {/* Logo (Center) */}
      <a href="#hero"
        className="font-space font-bold text-xl tracking-tight text-white flex-shrink-0 mx-4 flex items-center gap-2"
        data-cursor-hover>
        <svg className="w-5 h-5 text-neon-cyan" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
        ĐH<span className="text-neon-cyan">.</span>
      </a>

      {/* Desktop Right */}
      <div className="hidden md:flex flex-1 justify-start items-center gap-8 pl-10">
        <a href="#toolkit"
          className="text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
          data-cursor-hover>Toolkit</a>
        <a href="#case-studies"
          className="text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
          data-cursor-hover>Case Studies</a>
      </div>

      {/* Mobile hamburger */}
      <button className="md:hidden hamburger z-[1001] flex-shrink-0 pointer-events-auto" id="menu-toggle"
        aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </div>
  {/* Mobile menu */}
  <div
    className="md:hidden fixed inset-0 bg-dark-900/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-[999] transition-all duration-500 opacity-0 pointer-events-none"
    id="mobile-menu">
    <a href="#philosophy" className="text-2xl text-gray-300 hover:text-white transition-colors mobile-link">Philosophy</a>
    <a href="#gallery" className="text-2xl text-gray-300 hover:text-white transition-colors mobile-link">Gallery</a>
    <a href="#toolkit" className="text-2xl text-gray-300 hover:text-white transition-colors mobile-link">Toolkit</a>
    <a href="#case-studies" className="text-2xl text-gray-300 hover:text-white transition-colors mobile-link">Case
      Studies</a>
    <a href="#footer" className="magnetic-btn mt-4">Let's Talk</a>
  </div>
      <Hero />
      <ProductPhilosophy />
      <AchievementGallery />
      <ToolkitMetrics />
      <CaseStudies />
      <Footer />
    </div>
  );
}

export default App;

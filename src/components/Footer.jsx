import React from 'react';

export default function Footer() {
  return (
    <>
      <footer id="footer" className="py-28 md:py-36 relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal-up leading-tight">
        <span className="gradient-text">Let's build something together.</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-12 reveal-up">
        <button id="open-contact-modal" className="magnetic-btn" data-magnetic data-cursor-hover>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email Me
        </button>
      </div>
    </div>
  </footer>
    </>
  );
}

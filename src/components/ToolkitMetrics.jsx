import React from 'react';

export default function ToolkitMetrics() {
  return (
    <>
      <section id="toolkit" className="py-28 md:py-36 relative overflow-hidden">
    <div className="glow-blob w-[500px] h-[500px] bg-neon-purple/15 -top-40 right-0"></div>
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <p className="text-sm uppercase tracking-[.3em] text-neon-cyan/70 mb-4 reveal-up font-space">Credentials</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 reveal-up">Toolkit &amp; Metrics</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        <div className="glass p-6 md:p-8 rounded-[2rem] border border-white/10 relative shadow-xl text-left flex flex-col justify-center reveal-up">
          <h3 className="text-xs md:text-sm font-bold text-white mb-6 uppercase tracking-[0.2em] font-space border-b border-white/10 pb-4 relative inline-block w-max">
            EDUCATION<span className="absolute w-1.5 h-1.5 bg-neon-cyan rounded-full -top-1 -right-3"></span>
          </h3>
          <div className="mb-4 mt-2">
            <p className="text-5xl md:text-6xl leading-none font-black mb-2 font-space text-transparent bg-clip-text bg-gradient-to-br from-neon-blue to-neon-purple tracking-tighter" data-target="80">80</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold flex items-center gap-1">
              CPA / 100
            </p>
          </div>
          <div className="h-px w-12 bg-white/20 my-4"></div>
          <div>
            <p className="text-[13px] font-bold text-white mb-1 font-inter">Greenwich Việt Nam</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-neon-purple"></span> Computing
            </p>
          </div>
        </div>
        <div className="glass p-6 md:p-8 rounded-[2rem] border border-white/10 relative shadow-xl text-center flex flex-col justify-center items-center reveal-up">
          <p className="counter-value text-5xl md:text-6xl leading-none font-black mb-3 font-space text-transparent bg-clip-text bg-gradient-to-br from-neon-blue to-neon-purple tracking-tighter" data-target="895">895</p>
          <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">TOEIC Score</p>
        </div>
        <div className="glass p-6 md:p-8 rounded-[2rem] border border-white/10 relative shadow-xl text-center flex flex-col justify-center items-center reveal-up">
          <p className="counter-value text-5xl md:text-6xl leading-none font-black mb-3 font-space text-transparent bg-clip-text bg-gradient-to-br from-neon-purple to-neon-pink tracking-tighter" data-target="7.0" data-decimal="true">0</p>
          <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">VSTEP Level</p>
        </div>
      </div>

      {/* Certifications */}
      <p className="text-xs uppercase tracking-[.3em] text-neon-purple/60 mb-6 reveal-up font-space">Certifications</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 reveal-up">

        {/* TOEIC */}
        <div className="cs-block flex items-center gap-4">
          <div
            className="w-10 h-10 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
            <svg className="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" strokeWidth="1.5"
              viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm">TOEIC</p>
            <p className="text-xs text-gray-500">English Proficiency</p>
          </div>
          <span className="text-neon-cyan font-black text-lg font-space">895</span>
        </div>

        {/* VSTEP */}
        <div className="cs-block flex items-center gap-4">
          <div
            className="w-10 h-10 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" strokeWidth="1.5"
              viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm">VSTEP</p>
            <p className="text-xs text-gray-500">Vietnamese Standardized Test of English Proficiency</p>
          </div>
          <span className="text-neon-cyan font-black text-lg font-space">7.0</span>
        </div>

        {/* MOS Excel */}
        <div className="cs-block flex items-center gap-4">
          <div
            className="w-10 h-10 rounded-xl bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-neon-purple" fill="none" stroke="currentColor" strokeWidth="1.5"
              viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm">MOS Excel Specialist</p>
            <p className="text-xs text-gray-500">Microsoft Office Specialist</p>
          </div>
          <span className="text-neon-purple font-black text-sm font-space">900+</span>
        </div>

        {/* MOS Word */}
        <div className="cs-block flex items-center gap-4">
          <div
            className="w-10 h-10 rounded-xl bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-neon-purple" fill="none" stroke="currentColor" strokeWidth="1.5"
              viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm">MOS Word Specialist</p>
            <p className="text-xs text-gray-500">Microsoft Office Specialist</p>
          </div>
          <span className="text-neon-purple font-black text-sm font-space">900+</span>
        </div>

        {/* AI for BA */}
        <div className="cs-block flex items-center gap-4">
          <div
            className="w-10 h-10 rounded-xl bg-neon-pink/10 border border-neon-pink/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-neon-pink" fill="none" stroke="currentColor" strokeWidth="1.5"
              viewBox="0 0 24 24">
              <path
                d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 010 2h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 010-2h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm">AI for Business Analyst</p>
            <p className="text-xs text-gray-500">LinkedIn Learning</p>
          </div>
          <svg className="w-4 h-4 text-neon-pink flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        {/* BA Foundation */}
        <div className="cs-block flex items-center gap-4">
          <div
            className="w-10 h-10 rounded-xl bg-neon-pink/10 border border-neon-pink/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-neon-pink" fill="none" stroke="currentColor" strokeWidth="1.5"
              viewBox="0 0 24 24">
              <path
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm">BA Foundation</p>
            <p className="text-xs text-gray-500">LinkedIn Learning</p>
          </div>
          <svg className="w-4 h-4 text-neon-pink flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        {/* Essential Tools for BA */}
        <div className="cs-block flex items-center gap-4 sm:col-span-2 lg:col-span-1">
          <div
            className="w-10 h-10 rounded-xl bg-neon-pink/10 border border-neon-pink/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-neon-pink" fill="none" stroke="currentColor" strokeWidth="1.5"
              viewBox="0 0 24 24">
              <path
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm">Essential Tools for BA</p>
            <p className="text-xs text-gray-500">LinkedIn Learning</p>
          </div>
          <svg className="w-4 h-4 text-neon-pink flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

      </div>

      {/* Skills */}
      <p className="text-xs uppercase tracking-[.3em] text-neon-purple/60 mb-6 reveal-up font-space">Skills</p>
      <div className="flex flex-wrap justify-center gap-3 reveal-up">
        <span className="tag-pill" data-cursor-hover>Agile / Scrum</span>
        <span className="tag-pill" data-cursor-hover>Wireframing</span>
        <span className="tag-pill" data-cursor-hover>Market Research</span>
        <span className="tag-pill" data-cursor-hover>AI for BA</span>
        <span className="tag-pill" data-cursor-hover>PESTLE Analysis</span>
        <span className="tag-pill" data-cursor-hover>User Story Mapping</span>
        <span className="tag-pill" data-cursor-hover>UAT</span>
        <span className="tag-pill" data-cursor-hover>Stakeholder Management</span>
        <span className="tag-pill" data-cursor-hover>Product Discovery</span>
        <span className="tag-pill" data-cursor-hover>Data Analytics</span>
      </div>
    </div>
  </section>

  <div className="section-line max-w-6xl mx-auto"></div>
    </>
  );
}

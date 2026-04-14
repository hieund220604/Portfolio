import React from 'react';

export default function Hero() {
  return (
    <>
      <section id="hero"
    className="relative pt-36 md:pt-48 pb-0 min-h-screen flex flex-col overflow-hidden bg-dark-900 rounded-b-[3rem] md:rounded-b-[5rem] border-b border-white/5 shadow-2xl">
    {/* Grid & Blobs */}
    <div className="absolute inset-0 opacity-[.03]"
      style={{'backgroundImage': 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', 'backgroundSize': '60px 60px'}}>
    </div>
    <div className="glow-blob w-[500px] h-[500px] bg-neon-cyan/20 top-20 left-1/2 -translate-x-1/2"></div>
    <div className="glow-blob w-[400px] h-[400px] bg-neon-purple/20 bottom-0 left-0"></div>

    {/* Decorative Astrisks */}
    <svg
      className="absolute top-[20%] left-[10%] w-12 h-12 md:w-16 md:h-16 text-neon-cyan/80 animate-[spin_10s_linear_infinite]"
      viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L13.1 8.5L19 7L15 12L19 17L13.1 15.5L12 22L10.9 15.5L5 17L9 12L5 7L10.9 8.5L12 2Z" />
    </svg>
    <svg
      className="absolute top-[35%] right-[12%] w-10 h-10 md:w-12 md:h-12 text-neon-purple/80 animate-[spin_12s_linear_infinite_reverse]"
      viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L13.1 8.5L19 7L15 12L19 17L13.1 15.5L12 22L10.9 15.5L5 17L9 12L5 7L10.9 8.5L12 2Z" />
    </svg>

    {/* Top Centered Titles */}
    <div className="relative z-40 text-center px-6 max-w-5xl mx-auto w-full mb-12">
      {/* "PORTFOLIO" TITLE */}
      <h1
        className="text-6xl md:text-[6rem] lg:text-[7.5rem] font-black leading-none mb-6 reveal-up tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
        PORTFOLIO
      </h1>
      {/* NAME */}
      <h2
        className="text-3xl md:text-5xl font-bold mb-4 reveal-up text-white tracking-tight flex items-center justify-center gap-3">
        Nguyễn Đức Hiếu
      </h2>
      {/* POSITION TITLE */}
      <p className="text-xs md:text-sm uppercase tracking-[.3em] text-neon-cyan/80 reveal-up font-space font-semibold">
        Product Management Candidate
      </p>
    </div>

    {/* Bottom Stage Area */}
    <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-20 flex flex-col md:flex-row items-center justify-center md:items-end flex-1 mt-auto gap-8 md:gap-0">
      
      {/* Left Details (About Me Text, Education Card & Socials) */}
      <div className="w-full md:w-[30%] flex flex-col justify-end md:justify-end items-center md:items-start gap-8 reveal-up order-2 md:order-1 relative z-20 mt-4 md:mt-0 md:mb-12">
        
        {/* About Me Text */}
        <div className="text-center md:text-left max-w-[280px]">
          <h3 className="text-neon-cyan font-space uppercase tracking-[0.3em] font-semibold text-xs mb-3">About Me</h3>
          <p className="text-gray-400 font-light text-sm leading-relaxed">
            Biến những nhu cầu rời rạc thành backlog rõ ràng, những kỳ vọng trừu tượng thành giải pháp khả thi.
            <br /><br />
            <span id="typing-text" className="text-white font-medium"></span><span className="typing-cursor"></span>
          </p>
        </div>

        {/* Socials (Vertical) */}
        <div className="hidden md:flex flex-col gap-6">
           <a href="https://www.linkedin.com/in/duc-hieu-nguyen-0453b9354/" target="_blank" rel="noopener" className="group flex flex-col items-center gap-2" data-cursor-hover>
             <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-neon-cyan/20 group-hover:text-neon-cyan transition-colors text-white shadow-lg">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> 
             </div>
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-neon-cyan transition-colors">LinkedIn</span>
           </a>
           <a href="https://docs.google.com/document/d/1EqAMnjwqWD86Zo8rZwctMP4oqya5Y3lb40e-no5Id2c/edit?tab=t.1ov9debbl9wk" target="_blank" rel="noopener" className="group flex flex-col items-center gap-2" data-cursor-hover>
             <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-neon-pink/20 group-hover:text-neon-pink transition-colors text-white shadow-lg">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg> 
             </div>
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-neon-pink transition-colors">Resume</span>
           </a>
        </div>

        {/* Mobile Socials (Horizontal on mobile) */}
        <div className="flex md:hidden gap-6 w-full justify-center">
           <a href="https://www.linkedin.com/in/duc-hieu-nguyen-0453b9354/" target="_blank" rel="noopener" className="group flex flex-col items-center gap-2" data-cursor-hover>
             <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center active:bg-neon-cyan/20 active:text-neon-cyan transition-colors text-white">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> 
             </div>
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest active:text-neon-cyan transition-colors">LinkedIn</span>
           </a>
           <a href="https://docs.google.com/document/d/1EqAMnjwqWD86Zo8rZwctMP4oqya5Y3lb40e-no5Id2c/edit?tab=t.1ov9debbl9wk" target="_blank" rel="noopener" className="group flex flex-col items-center gap-2" data-cursor-hover>
             <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center active:bg-neon-pink/20 active:text-neon-pink transition-colors text-white">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg> 
               </div>
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest active:text-neon-pink transition-colors">Resume</span>
           </a>
        </div>
      </div>

      {/* Center Avatar Character */}
      <div className="relative w-full md:w-[40%] flex flex-col items-center justify-end reveal-up order-1 md:order-2 z-10">
        {/* Backdrop Circle Layer */}
        <div className="absolute bottom-20 w-64 h-64 md:w-[480px] md:h-[480px] rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-3xl shadow-[inset_0_0_80px_rgba(255,255,255,0.02)] pointer-events-none"></div>

        {/* The Avatar */}
        {/* Because original avatar is a rectangular photo, we can place it creatively */}
        <div className="relative w-[280px] h-[320px] md:w-[320px] md:h-[380px] lg:w-[380px] lg:h-[450px] rounded-t-[10rem] md:rounded-t-[12rem] lg:rounded-t-[15rem] rounded-b-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-dark-800 z-10 mx-auto">
          <img src="images/Nguyễn Đức Hiếu - Avatar.jpg" alt="Nguyễn Đức Hiếu" className="absolute w-full h-full object-cover object-[center_20%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080d]/90 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Pill Action Buttons OVERLAPPING SAFELY as a sibling flex item with negative margin */}
        <div className="relative z-30 -mt-6">
          <div className="bg-[#08080d]/90 backdrop-blur-xl p-2 rounded-full flex items-center justify-center gap-2 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] mx-auto w-[max-content]">
            <a href="#case-studies" className="px-6 py-3 rounded-full bg-neon-cyan/20 text-neon-cyan text-sm font-semibold hover:bg-neon-cyan hover:text-[#08080d] transition-all whitespace-nowrap" data-cursor-hover>
              View Projects
            </a>
            <a href="#footer" className="px-6 py-3 rounded-full text-white text-sm font-medium hover:bg-white/10 transition-all whitespace-nowrap border border-transparent" data-cursor-hover>
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Right Details */}
      <div className="w-full md:w-[30%] flex justify-center md:justify-end items-end text-center md:text-right reveal-up order-3 mt-8 md:mt-0 md:mb-12 relative z-20">
        <div className="glass p-6 md:p-8 rounded-[2rem] w-[220px] max-w-[240px] border border-white/10 relative shadow-xl text-left md:text-right flex-shrink-0">
          <div className="absolute -top-4 -right-4 text-3xl animate-bounce">✨</div>
          <h3 className="text-xs md:text-sm font-bold text-white mb-6 uppercase tracking-[0.2em] font-space border-b border-white/10 pb-4">
            PROFILE
          </h3>
          
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:items-end">
              <p className="text-lg font-bold text-white mb-1 font-space">2004</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold flex items-center gap-1 justify-start md:justify-end">
                Y.O.B <span className="w-1 h-1 rounded-full bg-neon-cyan hidden md:inline-block"></span>
              </p>
            </div>
            
            <div className="h-px w-8 bg-white/20 mx-0 md:ml-auto md:mr-0 my-1"></div>
            
            <div className="flex flex-col md:items-end">
              <p className="text-lg font-bold text-white mb-1 font-space">Hanoi, VN</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold flex items-center gap-1 justify-start md:justify-end">
                Location <span className="w-1 h-1 rounded-full bg-neon-cyan hidden md:inline-block"></span>
              </p>
            </div>

            <div className="h-px w-8 bg-white/20 mx-0 md:ml-auto md:mr-0 my-1"></div>
            
            <div className="flex flex-col md:items-end">
              <p className="text-lg font-bold text-white mb-1 font-space">Male</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold flex items-center gap-1 justify-start md:justify-end">
                Gender <span className="w-1 h-1 rounded-full bg-neon-cyan hidden md:inline-block"></span>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <div className="section-line max-w-6xl mx-auto"></div>
    </>
  );
}

'use client';
import React from 'react';

export const IntroSection = () => {
  return (
    <section id="content-wc" className="section welcome-area bg-white relative overflow-hidden">
      <div className="wc-monogram absolute top-[10%] left-[-10%] w-[35vw] opacity-10 pointer-events-none">
        <img 
          src="https://skyblue-chough-768427.hostingersite.com/wp-content/uploads/2026/03/White-Transparent.png" 
          alt="Monogram" 
          className="w-full h-auto brightness-0"
        />
      </div>

      {/* Side Label (Hidden on small screens like OGGroup) */}
      <div className="side-offices-links absolute right-12 top-1/2 -translate-y-1/2 vertical-text hidden lg:block" data-aos="fade-left">
        <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.3em] font-['Barlow_Condensed'] text-black/40">
           <span className="w-12 h-[1px] bg-black/20" />
           <span className="rotate-90 origin-right whitespace-nowrap">Mazatlán Real Estate Redefined</span>
        </div>
      </div>

      <div className="wc-holder max-w-[1140px] mx-auto px-4 relative z-10 flex flex-col items-center justify-center h-full min-h-screen py-20">
        <div className="wc-content text-center" data-aos="fade-up">
          <div className="wc-logo mb-16 flex justify-center">
            <img 
              src="https://skyblue-chough-768427.hostingersite.com/wp-content/uploads/2026/03/White-Transparent.png" 
              alt="Avista Real Estate" 
              className="max-w-[400px] w-full brightness-0"
            />
          </div>
          <div className="wc-text text-[16px] lg:text-[18px] font-light leading-[1.8] tracking-[0.02em] text-black/80 max-w-[900px] mx-auto mb-16 font-['Roboto'] px-4">
            <p className="mb-8">
              Avista is more than a real estate agency; it&apos;s your gateway to life in Mazatlán. Founded by Danny Andrade, 
              a long-time resident and local expert, Avista focuses on transparency, local knowledge, and client success. 
            </p>
            <p>
              Whether you are buying your first beachfront condo, looking for a long-term rental in the Centro, 
              or need high-tier property management for your investment, we are here to ensure your transition to 
              Mexico is as smooth as the Pacific tide.
            </p>
          </div>
          <div className="wc-link">
            <a href="/about" className="global-btn inline-block border border-black px-12 py-4 text-[14px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-300">
              Read More <em className="ml-2 font-normal text-lg">+</em>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

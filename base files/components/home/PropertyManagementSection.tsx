'use client';
import React from 'react';

export const PropertyManagementSection = () => {
  return (
    <section id="content-concierge" className="section concierge-area bg-white relative overflow-hidden h-screen">
      {/* Side Label */}
      <div className="side-offices-links absolute right-12 top-1/2 -translate-y-1/2 vertical-text hidden lg:block" data-aos="fade-left">
        <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.3em] font-['Barlow_Condensed'] text-black/40">
           <span className="w-12 h-[1px] bg-black/20" />
           <span className="rotate-90 origin-right whitespace-nowrap">Investment Care & Concierge</span>
        </div>
      </div>

      <div className="concierge-holder max-w-[1414px] mx-auto px-4 h-full flex flex-col justify-center">
        <div className="concierge-inner flex flex-col lg:flex-row items-stretch justify-between h-auto lg:h-[75vh]">
          
          {/* Left Column: Heading */}
          <div className="concierge-left flex-1 flex flex-col justify-start">
             <div className="concierge-head" data-aos="fade-down">
                <div className="concierge-name text-[80px] lg:text-[110px] font-thin uppercase tracking-tight font-['Barlow_Condensed'] leading-[0.8] text-black">
                    <span className="block font-medium text-primary-orange">White-Glove</span>
                    Management
                </div>
                <div className="global-site-title is-red mt-8">
                    <span className="text-[15px] font-normal tracking-[0.28em] uppercase mb-4 relative block">
                        Top-Tier Services
                        <i className="absolute bottom-[-11px] left-0 w-[200px] h-[1px] bg-black/10">
                           <em className="absolute top-[-1px] left-0 w-[52px] h-[3px] bg-primary-orange" />
                        </i>
                    </span>
                </div>
             </div>
          </div>

          {/* Right Column: Visualization & Details */}
          <div className="concierge-right flex-[1.5] relative pl-0 lg:pl-12 mt-12 lg:mt-0 flex flex-col justify-center">
             <div className="concierge-before-after relative w-full aspect-video lg:aspect-auto lg:h-[50vh] overflow-hidden rounded-[30px] shadow-2xl" data-aos="fade-left">
                {/* Image Placeholder matching the "White Glove" reference */}
                <img 
                  src="https://images.unsplash.com/photo-1512918766671-ad65079ef2a7?auto=format&fit=crop&q=80&w=1200" 
                  alt="Property Management"
                  className="w-full h-full object-cover"
                />
                {/* Horizontal Monogram Overlay */}
                <div className="absolute bottom-[-20px] left-[-20px] w-48 h-48 opacity-20 pointer-events-none">
                  <img src="https://skyblue-chough-768427.hostingersite.com/wp-content/uploads/2026/03/White-Transparent.png" alt="Logo" className="w-full h-auto brightness-0" />
                </div>
             </div>

             <div className="concierge-text mt-12 text-[15px] lg:text-[16px] font-light font-['Roboto'] text-black/70 leading-[1.8] max-w-[700px]" data-aos="fade-up">
                <p>
                  With Avista&apos;s White-Glove Property Management, we treat your investment as our own. From rigorous tenant 
                  screening and maintenance to high-yield vacation rental strategies, our team provides a stress-free 
                  ownership experience in Mazatlán. We handle the complexities of Mexican real estate management so you 
                  don&apos;t have to.
                </p>
             </div>

             <div className="concierge-button mt-8" data-aos="fade-up">
                <a href="/property-management" className="global-btn inline-block bg-primary-orange text-white px-12 py-4 text-[13px] uppercase tracking-[0.28em] hover:bg-black transition-colors">
                  Learn More About Service <em className="ml-2 font-normal text-lg">+</em>
                </a>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

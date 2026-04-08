'use client';
import React from 'react';

const REVIEWS = [
  {
    text: "Danny and the Avista team made our move from Canada to Mazatlán seamless. Their local knowledge of Cerritos saved us thousands on our beachfront purchase.",
    author: "The Miller Family",
    location: "Saskatchewan, Canada"
  },
  {
    text: "The smartest thing I ever did was reaching out to Danny on this most important asset. His judgment and guidance have been spot on from the outset.",
    author: "Marcus J. Chen",
    location: "Los Angeles, CA"
  },
  {
    text: "Avista's property management team is second to none. Our rental income has increased 40% since switching to their white-glove service.",
    author: "Sandra Rodriguez",
    location: "Mexico City, MX"
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="content-testi" className="section testimonials-area bg-black relative overflow-hidden h-screen">
      <div className="testi-bg absolute inset-0 z-0">
        <canvas className="w-full h-full bg-[url('https://cdn.agentimagehosting.com/ZwEApWI87B7AuA0VQcbb0/2025/08/02030240/testi-bg.jpg')] bg-cover bg-center opacity-40" />
      </div>

      {/* Quote Graphics */}
      <div className="quote-holder absolute inset-0 z-10 pointer-events-none">
        <div className="testi-quote-1 absolute top-[20%] left-[10%] w-[15vw] opacity-20" data-aos="fade-right">
          <img src="https://cdn.agentimagehosting.com/ZwEApWI87B7AuA0VQcbb0/2025/08/02025952/quote-1.png" alt="Quote" className="w-full h-auto brightness-0 invert" />
        </div>
        <div className="testi-quote-2 absolute bottom-[20%] right-[10%] w-[15vw] opacity-20" data-aos="fade-left">
          <img src="https://cdn.agentimagehosting.com/ZwEApWI87B7AuA0VQcbb0/2025/08/02025956/quote-2.png" alt="Quote" className="w-full h-auto brightness-0 invert" />
        </div>
      </div>

      <div className="testi-holder max-w-[1414px] mx-auto px-4 h-full relative z-20 flex items-center justify-center">
        <div className="testi-inner w-full flex flex-col lg:flex-row items-center justify-between">
          
          {/* Main Content Area */}
          <div className="testi-content flex-1 max-w-[800px] text-center lg:text-left" data-aos="fade-right">
             <div className="testi-slider relative">
                {/* We'll implement a simple fade slider logic or just show first one for now as MVP, matching OGGroup style */}
                <div className="testi-list">
                    <p className="text-[24px] lg:text-[32px] font-thin italic text-white/90 leading-[1.6] mb-10 font-['Roboto']">
                      &quot;{REVIEWS[0].text}&quot;
                    </p>
                    <div className="testi-author flex flex-col lg:flex-row items-center gap-4">
                       <span className="w-12 h-[1px] bg-primary-orange hidden lg:block" />
                       <div className="text-[13px] uppercase tracking-[0.3em] font-medium text-white">
                         {REVIEWS[0].author}
                         <span className="text-white/40 block lg:inline lg:ml-4 font-light">{REVIEWS[0].location}</span>
                       </div>
                    </div>
                </div>

                {/* Navigation (Placeholder arrows matching OGGroup) */}
                <div className="testi-slick-navigation flex items-center mt-12 gap-8">
                    <div className="flex gap-4">
                       <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                          <i className="fas fa-chevron-left text-xs"></i>
                       </button>
                       <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                          <i className="fas fa-chevron-right text-xs"></i>
                       </button>
                    </div>
                    <a href="/testimonials" className="global-btn border border-white/30 px-10 py-3 text-[12px] uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black transition-all">
                       Read All Reviews <em className="ml-2 font-normal text-lg">+</em>
                    </a>
                </div>
             </div>
          </div>

          {/* Vertical Label Area (The one that "half renders") */}
          <div className="testi-head lg:pl-[100px] flex flex-col items-center lg:items-end mt-20 lg:mt-0" data-aos="fade-left">
             <div className="testi-name text-[80px] lg:text-[100px] font-thin uppercase tracking-tight font-['Barlow_Condensed'] leading-[0.8] text-white flex flex-col text-center lg:text-right">
                <span>What Clients</span>
                <span className="font-medium text-primary-orange italic">Are Saying</span>
             </div>
             <div className="global-site-title is-white mt-8 text-right">
                <span className="text-[14px] tracking-[0.28em] font-normal uppercase relative block">
                   Client Rave Reviews
                   <i className="absolute bottom-[-11px] right-0 w-[200px] h-[1px] bg-white/45 hidden lg:block">
                      <em className="absolute top-[-1px] right-0 w-[52px] h-[3px] bg-primary-orange" />
                   </i>
                </span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

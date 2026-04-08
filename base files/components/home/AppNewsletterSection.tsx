'use client';
import React from 'react';

export const AppNewsletterSection = () => {
  return (
    <section id="content-app" className="section app-newsletter-area bg-il-blue relative overflow-hidden h-screen flex flex-col justify-center">
      {/* Background Monogram */}
      <div className="absolute top-[10%] right-[-5%] w-[30vw] opacity-10 pointer-events-none">
         <img src="https://skyblue-chough-768427.hostingersite.com/wp-content/uploads/2026/03/White-Transparent.png" alt="" className="w-full h-auto" />
      </div>

      <div className="max-w-[1414px] mx-auto px-4 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           
           {/* Left: App Info */}
           <div className="app-content lg:pr-20" data-aos="fade-right">
              <div className="global-site-title is-white mb-12">
                 <span className="text-[15px] font-normal tracking-[0.28em] uppercase mb-4 relative block">
                    Ahead of the Market
                    <i className="absolute bottom-[-11px] left-0 w-[200px] h-[1px] bg-white/20">
                       <em className="absolute top-[-1px] left-0 w-[52px] h-[3px] bg-primary-orange" />
                    </i>
                 </span>
                 <h2 className="text-[80px] lg:text-[110px] font-thin uppercase tracking-tight font-['Barlow_Condensed'] leading-[0.8] text-white">
                    Download <span className="block font-medium text-primary-orange">Our App</span>
                 </h2>
              </div>
              <p className="text-white/70 text-[16px] lg:text-[18px] font-light leading-[1.8] font-['Roboto'] mb-12 max-w-[500px]">
                Experience the Mazatlán market in the palm of your hand. Get instant price drop alerts, exclusive off-market opportunities, 
                and navigate neighborhoods like a local with the Avista App.
              </p>
              <div className="flex gap-6">
                 <a href="#" className="hover:scale-105 transition-transform">
                   <img src="https://agentimage.com/assets/img/app-store.png" alt="App Store" className="h-[45px] w-auto border border-white/20 rounded-lg p-1" />
                 </a>
                 <a href="#" className="hover:scale-105 transition-transform">
                   <img src="https://agentimage.com/assets/img/google-play.png" alt="Google Play" className="h-[45px] w-auto border border-white/20 rounded-lg p-1" />
                 </a>
              </div>
           </div>

           {/* Right: Newsletter Form */}
           <div className="newsletter-form lg:border-l border-white/10 lg:pl-20 py-12" data-aos="fade-left">
              <h3 className="text-white text-[45px] uppercase font-['Barlow_Condensed'] font-thin tracking-widest mb-4">
                 Sign Up For <span className="text-primary-orange font-medium">Intel</span>
              </h3>
              <p className="text-white/50 mb-10 font-light text-[15px] font-['Roboto']">
                 Join 2,500+ investors and locals receiving our weekly Mazatlán market report.
              </p>
              <form className="flex flex-col gap-8 max-w-[500px]">
                 <div className="relative border-b border-white/20 group focus-within:border-primary-orange transition-colors">
                   <input 
                     type="email" 
                     placeholder="EMAIL ADDRESS" 
                     className="bg-transparent w-full py-4 text-white font-['Barlow_Condensed'] uppercase tracking-[0.3em] text-[13px] focus:outline-none"
                   />
                   <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-orange transition-all duration-300 group-focus-within:w-full"></span>
                 </div>
                 <button className="global-btn !w-fit bg-white text-black px-12 py-4 text-[13px] uppercase tracking-[0.3em] font-medium hover:bg-primary-orange hover:text-white transition-all">
                   Join the List <em className="ml-2 font-normal text-lg">+</em>
                 </button>
              </form>
           </div>

        </div>
      </div>
    </section>
  );
};

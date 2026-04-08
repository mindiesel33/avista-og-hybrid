'use client';
import React from 'react';

const STATS = [
  { number: '12', label: 'Years in Mazatlán', suffix: '+' },
  { number: '50', label: 'Total Volume', prefix: '$', suffix: 'M+' },
  { number: '450', label: 'Happy Clients', suffix: '+' },
  { number: '100', label: 'Market Expertise', suffix: '%' },
];

export const StatsSection = () => {
  return (
    <section id="content-stats" className="section proven-performance-area bg-black relative overflow-hidden h-screen">
      {/* Background with overlay */}
      <div className="pp-bg absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600" 
          alt="Mazatlan Results"
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="pp-holder max-w-[1414px] mx-auto px-4 h-full relative z-10 flex flex-col justify-center">
        <div className="pp-inner flex flex-col lg:flex-row items-center lg:items-end justify-between">
          
          {/* Vertical Label Area */}
          <div className="pp-head flex flex-col items-start lg:mb-0 mb-20" data-aos="fade-right">
             <div className="pp-name text-[80px] lg:text-[120px] font-thin uppercase tracking-tight font-['Barlow_Condensed'] leading-[0.8] text-white flex flex-col">
                Proven
                <span className="font-medium text-primary-orange">Performance</span>
             </div>
             <div className="global-site-title is-white mt-8">
                <span className="text-[15px] tracking-[0.28em] font-normal uppercase relative block">
                   Our Results
                   <i className="absolute bottom-[-11px] left-0 w-[200px] h-[1px] bg-white/45">
                      <em className="absolute top-[-1px] left-0 w-[52px] h-[3px] bg-primary-orange" />
                   </i>
                </span>
             </div>
          </div>

          {/* Stats Grid */}
          <div className="pp-content flex-1 lg:max-w-[800px] w-full mt-20 lg:mt-0">
            <div className="pp-list-holder grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
              {STATS.map((stat, index) => (
                <div key={index} className="pp-list text-left" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="pp-stats-number text-[60px] lg:text-[85px] font-medium text-white font-['Barlow_Condensed'] leading-none mb-4 flex items-baseline">
                    {stat.prefix && <span className="text-[0.5em] mr-1">{stat.prefix}</span>}
                    {stat.number}
                    <em className="text-primary-orange italic not-italic font-light text-[0.6em] ml-1 tracking-tight">{stat.suffix}</em>
                  </div>
                  <div className="pp-text border-t border-white/20 pt-6 text-[11px] lg:text-[13px] text-white/50 uppercase tracking-[0.28em] font-['Barlow_Condensed'] font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

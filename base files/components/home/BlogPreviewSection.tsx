'use client';
import React from 'react';

const MEDIA_ITEMS = [
  {
    image: 'https://skyblue-chough-768427.hostingersite.com/wp-content/uploads/2026/03/blog-1.png',
    title: 'Avista Real Estate Expands to Centro Histórico With New Boutique Office',
    logo: 'https://cdn.agentimagehosting.com/ZwEApWI87B7AuA0VQcbb0/2025/11/24191340/hp-press-logo-variety.png',
    link: '#'
  },
  {
    image: 'https://skyblue-chough-768427.hostingersite.com/wp-content/uploads/2026/03/blog-2.png',
    title: 'Mazatlán Waterfront Value Rises as New Luxury Developments Take Flight',
    logo: 'https://cdn.agentimagehosting.com/ZwEApWI87B7AuA0VQcbb0/2025/11/24191332/hp-press-logo-ad.png',
    link: '#'
  },
  {
    image: 'https://skyblue-chough-768427.hostingersite.com/wp-content/uploads/2026/03/blog-3.png',
    title: 'Danny Andrade Nominated for Excellence in Coastal Mexican Real Estate',
    logo: 'https://cdn.agentimagehosting.com/ZwEApWI87B7AuA0VQcbb0/2025/11/24191329/hp-press-logo-fox.png',
    link: '#'
  }
];

export const BlogPreviewSection = () => {
  return (
    <section id="content-media" className="section in-the-media-area bg-white relative overflow-hidden h-screen">
      <div className="media-holder max-w-[1414px] mx-auto px-4 h-full flex flex-col justify-center">
        <div className="media-inner flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Column: Heading */}
          <div className="media-content flex-1 max-w-[500px]" data-aos="fade-right">
            <div className="media-content-inner">
              <div className="global-site-title is-red">
                <span className="text-[15px] font-normal tracking-[0.28em] uppercase mb-4 relative block">
                  Hot Off The Press
                  <i className="absolute bottom-[-11px] left-0 w-[200px] h-[1px] bg-black/10">
                     <em className="absolute top-[-1px] left-0 w-[52px] h-[3px] bg-primary-orange" />
                  </i>
                </span>
                <h2 className="text-[80px] lg:text-[100px] font-thin uppercase tracking-tight font-['Barlow_Condensed'] leading-[0.8] text-black">
                  Avista <strong>Intel</strong>
                </h2>
              </div>
              <div className="media-link mt-16 pt-8 border-t border-black/5">
                <a href="/blog" className="global-btn inline-block bg-black text-white px-10 py-4 text-[13px] uppercase tracking-[0.3em] hover:bg-primary-orange transition-colors">
                  Read More Articles <em className="ml-2 font-normal text-lg">+</em>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Grid */}
          <div className="media-slider flex-[1.5] flex flex-col items-end gap-6" data-aos="fade-left">
             <div className="media-feed grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {MEDIA_ITEMS.map((item, index) => (
                  <div key={index} className="media-list group relative overflow-hidden bg-black aspect-[3/4] cursor-pointer">
                    <img 
                      src={item.image} 
                      alt="News" 
                      className="w-full h-full object-cover opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-40" 
                    />
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                       <div className="media-logo-top self-start opacity-0 group-hover:opacity-100 transition-opacity">
                          <img src={item.logo} alt="Logo" className="h-4 brightness-0 invert" />
                       </div>
                       <div className="media-text-bottom transform translate-y-4 group-hover:translate-y-0 transition-transform">
                          <h4 className="text-white text-[18px] lg:text-[22px] font-normal font-['Barlow_Condensed'] uppercase tracking-wider leading-tight mb-4">
                            {item.title}
                          </h4>
                          <span className="text-primary-orange text-[11px] uppercase tracking-[0.3em] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            View Article +
                          </span>
                       </div>
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

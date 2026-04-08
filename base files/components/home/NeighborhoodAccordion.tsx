'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const NEIGHBORHOODS = [
  {
    name: 'Centro Histórico',
    desc: 'The soul of Mazatlán, filled with neoclassical architecture and culture.',
    image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=800',
    slug: 'centro-historico',
  },
  {
    name: 'Zona Dorada',
    desc: 'The vibrant heart of the tourist district with beaches and shopping.',
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&q=80&w=800',
    slug: 'zona-dorada',
  },
  {
    name: 'Cerritos',
    desc: 'Long sandy beaches and modern luxury developments.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    slug: 'cerritos',
  },
  {
    name: 'El Cid',
    desc: 'Exclusive golf course living and private marina access.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800',
    slug: 'el-cid',
  },
];

export const NeighborhoodAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="section bg-black py-0 h-screen overflow-hidden flex flex-col">
      <div className="absolute top-10 left-10 z-20" data-aos="fade-down">
         <h2 className="global-site-title text-white !text-[50px] lg:!text-[80px]">
           Explore <span>Neighborhoods</span>
           <i></i>
         </h2>
      </div>

      <div className="flex flex-1 h-full">
        {NEIGHBORHOODS.map((item, index) => (
          <div
            key={index}
            className={`relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] h-full cursor-pointer overflow-hidden
              ${activeIndex === index ? 'flex-[4]' : 'flex-[1] hover:flex-[1.2] grayscale hover:grayscale-0'}
            `}
            onMouseEnter={() => setActiveIndex(index)}
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === index ? 'bg-black/40' : 'bg-black/60 group-hover:bg-black/40'}`} />

            {/* Content Container */}
            <div className={`absolute bottom-20 left-10 right-10 z-10 transition-all duration-500 ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
               <h3 className="text-white text-[40px] md:text-[60px] font-['Barlow_Condensed'] uppercase tracking-wider mb-4 leading-none">
                 {item.name}
               </h3>
               <p className="text-white/80 font-['Roboto'] text-[16px] max-w-[400px] mb-8 font-light tracking-wide">
                 {item.desc}
               </p>
               <Link 
                 href={`/neighborhoods/${item.slug}`}
                 className="global-btn !w-fit"
               >
                 Discover More <em>+</em>
               </Link>
            </div>

            {/* Label for collapsed state */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 pointer-events-none ${activeIndex === index ? 'opacity-0' : 'opacity-100'}`}>
               <h4 className="text-white text-[30px] font-['Barlow_Condensed'] uppercase tracking-[0.2em] rotate-[-90deg] whitespace-nowrap">
                 {item.name}
               </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

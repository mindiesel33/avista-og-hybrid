'use client';
import React from 'react';
import Link from 'next/link';

export const NeighborhoodSection = () => {
  const neighborhoods = [
    { title: 'Cerritos', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600', link: '/neighborhood/cerritos' },
    { title: 'Marina Mazatlán', image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&q=80&w=600', link: '/neighborhood/marina' },
    { title: 'Soles', image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&q=80&w=600', link: '/neighborhood/soles' },
    { title: 'Sabalo Country', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600', link: '/neighborhood/sabalo' },
  ];

  return (
    <div className="section relative bg-nearBlack py-24 w-full flex flex-col items-center justify-center">
      <div className="max-w-[1440px] px-8 lg:px-12 w-full">
          <div className="mb-20 text-center">
              <p className="text-primary-orange font-title uppercase tracking-[0.2em] text-[14px] mb-4">Discover Mazatlán</p>
              <h2 className="text-white font-title text-[clamp(40px,5vw,70px)] uppercase tracking-[0.05em] leading-tight">Elite Neighborhoods</h2>
              <div className="w-[100px] h-[3px] bg-primary-orange mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
             {neighborhoods.map((item, idx) => (
               <Link href={item.link} key={idx} className="group relative h-[600px] overflow-hidden cursor-pointer block">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-[40px] z-10 transition-all duration-500">
                      <div className="w-[100%] h-[1px] bg-white/20 mb-[20px] transition-all group-hover:bg-primary-orange" />
                      <h3 className="text-white font-title text-[32px] tracking-[0.05em] uppercase transition-all group-hover:text-primary-orange">
                        {item.title}
                      </h3>
                      <p className="text-white/70 font-title uppercase tracking-widest text-[12px] opacity-0 group-hover:opacity-100 mt-4 transition-all">Explore Properties →</p>
                  </div>
                  <div className="absolute inset-0 border border-white/10 m-[15px] group-hover:border-primary-orange transition-all duration-500" />
               </Link>
             ))}
          </div>
      </div>
    </div>
  );
};

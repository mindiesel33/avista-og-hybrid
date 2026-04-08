'use client';
import React from 'react';
import Link from 'next/link';

export const ValuesSection = () => {
  const values = [
    { title: 'Properties For Sale', icon: '🏠', text: 'Browse our curated collection of luxury homes, condos, and plots in the most sought-after locations of Mazatlán.', link: '/mazatlan-homes-for-sale' },
    { title: 'Vacation Rentals', icon: '🏖️', text: 'Experience the perfect holiday with our premium rental management services and coastal properties.', link: '/mazatlan-rentals' },
    { title: 'Property Management', icon: '🔑', text: 'Peace of mind for homeowners. We handle everything from maintenance to marketing with total professional transparency.', link: '/property-management-mazatlan' },
  ];

  return (
    <div className="section relative bg-white py-24 w-full flex items-center justify-center">
      <div className="max-w-[1440px] px-8 lg:px-12 w-full">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-nearBlack/10">
            {values.map((item, idx) => (
              <Link 
                href={item.link} 
                key={idx}
                className="group relative flex flex-col items-center text-center p-16 lg:p-24 border-r border-b border-nearBlack/10 hover:bg-nearBlack transition-all duration-500 overflow-hidden last:border-r-0"
              >
                <div className="relative z-10">
                   <div className="text-5xl mb-8 group-hover:scale-125 transition-transform duration-500">{item.icon}</div>
                   <h3 className="text-nearBlack group-hover:text-white font-title text-[32px] uppercase tracking-widest leading-snug mb-8 transition-colors">
                     {item.title}
                   </h3>
                   <p className="text-nearBlack/60 group-hover:text-white/70 font-title tracking-widest leading-loose mb-12 uppercase text-[14px] transition-colors">
                     {item.text}
                   </p>
                   <div className="inline-block border-b border-primary-orange pb-2 text-primary-orange font-title uppercase tracking-widest text-[14px] group-hover:translate-x-4 transition-transform">
                     Learn More →
                   </div>
                </div>

                {/* Animated Background Overlay */}
                <div className="absolute inset-0 bg-primary-orange transform translate-y-full group-hover:translate-y-[95%] transition-transform duration-700 pointer-events-none" />
              </Link>
            ))}
         </div>
      </div>
    </div>
  );
};

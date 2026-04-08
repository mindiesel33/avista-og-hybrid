'use client';
import React from 'react';

const PROJECTS = [
  {
    name: 'Punta Paraiso',
    type: 'Luxury Condos',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    link: '#',
  },
  {
    name: 'Akoya Sky Living',
    type: 'Exclusive Lifestyle',
    image: 'https://images.unsplash.com/photo-1512914890251-2f96a9b0bbe2?auto=format&fit=crop&q=80&w=1200',
    link: '#',
  },
];

export const PartnerProjectsSection = () => {
  return (
    <div className="section partner-projects-area bg-[#F3F3F3] relative overflow-hidden flex flex-col">
      <div className="pt-20 px-10 relative z-10" data-aos="fade-down">
         <h2 className="global-site-title text-black !text-[50px] lg:!text-[80px]">
           Partner <span>Projects</span>
           <i></i>
         </h2>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row h-full">
         {PROJECTS.map((project, index) => (
           <div 
             key={index} 
             className="relative flex-1 group overflow-hidden cursor-pointer"
             data-aos="fade-up"
             data-aos-delay={index * 200}
           >
              <img 
                src={project.image} 
                alt={project.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-700" />
              
              {/* Content Box (Nimo style) */}
              <div className="absolute bottom-12 left-12 p-8 bg-white/90 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 border-l-[6px] border-primary-orange">
                 <span className="text-primary-orange text-xs uppercase tracking-[0.3em] font-['Barlow_Condensed'] font-bold block mb-2">
                   {project.type}
                 </span>
                 <h3 className="text-il-blue text-3xl uppercase font-['Barlow_Condensed'] font-semibold mb-4 leading-none">
                   {project.name}
                 </h3>
                 <div className="text-il-blue/70 uppercase text-[10px] tracking-[0.2em] font-['Barlow_Condensed'] flex items-center gap-2">
                   Explore Collection <span className="text-lg">→</span>
                 </div>
              </div>

              <a href={project.link} className="absolute inset-0 z-20" />
           </div>
         ))}
      </div>
    </div>
  );
};

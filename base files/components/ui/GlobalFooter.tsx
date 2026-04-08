'use client';
import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const marqueeText = 'Cerritos • Zona Dorada • Playa Sur • Malecon • El Cid • Sabalo • Centro Historico • Mazatlán, Sinaloa • ';

export const GlobalFooter = () => {
  return (
    <footer className="relative bg-il-blue pt-0 pb-16 overflow-hidden w-full flex flex-col">
      {/* Moving Text Marquee Strip */}
      <div className="w-full bg-primary-orange py-4 mb-20 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex">
          <p className="text-white font-['Barlow_Condensed'] text-2xl uppercase tracking-[0.2em] font-medium">
            {marqueeText.repeat(10)}
          </p>
        </div>
      </div>

      <div className="max-w-[1414px] mx-auto px-8 w-full flex-1">
        <div className="flex justify-between items-start gap-12 flex-wrap">
          
          {/* Left: Logo + Contact Info */}
          <div className="flex-[1_1_280px]">
            <Link href="/" className="inline-block mb-10">
              <img
                src="https://skyblue-chough-768427.hostingersite.com/wp-content/uploads/2026/03/White-Transparent.png"
                alt="Avista Logo"
                className="w-[128px] h-auto"
              />
            </Link>
            <div className="space-y-4 text-white/70 font-['Barlow_Condensed'] tracking-[0.1em] text-[18px]">
              <p className="hover:text-primary-orange transition-colors cursor-pointer">info@avistarealestatemazatlan.com</p>
              <p className="hover:text-primary-orange transition-colors cursor-pointer">+52 1 669 126 7217</p>
              <p className="leading-[1.6]">
                Cerritos, Fraccionamiento Soles<br />
                1872 Via Cilene<br />
                Mazatlán 82017
              </p>
            </div>
          </div>

          {/* Center: Nav Grid */}
          <div className="flex-[1_1_280px] grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              {['Home', 'For Sale', 'Rentals', 'Management'].map((item) => (
                <Link 
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-white font-['Barlow_Condensed'] uppercase tracking-[0.28em] text-[18px] hover:text-primary-orange transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {['About Us', 'Blog', 'FAQs', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-white font-['Barlow_Condensed'] uppercase tracking-[0.28em] text-[18px] hover:text-primary-orange transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Social & Branding */}
          <div className="flex-[1_1_200px] flex flex-col items-end gap-12">
            <div className="flex gap-6">
              {[FaInstagram, FaFacebook, FaYoutube, FaWhatsapp].map((Icon, i) => (
                <a key={i} href="#" className="text-white text-2xl hover:text-primary-orange transition-all transform hover:scale-110">
                  <Icon />
                </a>
              ))}
            </div>

            <div className="font-['Barlow_Condensed'] text-[50px] lg:text-[100px] uppercase leading-[0.8] tracking-[0.02em] text-white/5 text-right select-none pointer-events-none">
              SAY<br />HELLO
            </div>

            <p className="text-white/30 text-[12px] font-['Barlow_Condensed'] uppercase tracking-[0.28em] text-right">
              © 2026 AVISTA REAL ESTATE MAZATLÁN.<br />ALL RIGHTS RESERVED.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

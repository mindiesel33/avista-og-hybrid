'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GlobalButton } from './GlobalButton';

const navItems = [
  { name: 'For Sale', href: '/mazatlan-homes-for-sale' },
  { name: 'Rentals', href: '/mazatlan-rentals' },
  { name: 'Management', href: '/property-management-mazatlan' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const PowerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#E8E9EA"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v6" />
    <path d="M6.343 4.343a8 8 0 1 0 11.314 0" />
  </svg>
);

export const GlobalHeader = ({ scrolledOverride }: { scrolledOverride?: boolean } = {}) => {
  const [scrolledInternal, setScrolledInternal] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = scrolledOverride ?? scrolledInternal;

  useEffect(() => {
    const onScroll = () => setScrolledInternal(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] flex items-center px-8 md:px-[60px] transition-all duration-500 ${
          scrolled ? 'h-[75px] bg-black shadow-2xl' : 'h-[95px] bg-transparent'
        }`}
      >
        {/* Left spacer — mirrors right side width for centering */}
        <div className="flex-1" />

        {/* Center: Logo + Desktop Nav — logo shifted 70px left of center, nav 50px left of center */}
        <div className="flex items-center gap-10" style={{ transform: 'translateX(-70px)' }}>
          <Link href="/" className="flex items-center">
            <img
              src="/reference_images/AVI STA text logo white ( white.png"
              alt="Avista Real Estate Mazatlán"
              className={`object-contain transition-all duration-500 ${scrolled ? 'h-8' : 'h-10'}`}
            />
          </Link>

          <nav className="hidden lg:flex items-center" style={{ transform: 'translateX(20px)' }}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white uppercase font-['Barlow_Condensed'] text-[13px] tracking-[0.28em] px-4 py-2 hover:opacity-70 transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: CTA + Power/Menu icon */}
        <div className="flex-1 flex items-center justify-end gap-6">
          <div className="hidden md:block">
            <GlobalButton text="Search Listings" href="/mazatlan-homes-for-sale" />
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 hover:opacity-70 transition-all"
            aria-label="Menu"
          >
            <PowerIcon />
          </button>
        </div>
      </header>

      {/* Slide-out overlay menu */}
      <div
        className={`fixed inset-0 bg-black z-[2000] flex flex-col items-center justify-center gap-8 transition-all duration-700 ${
          mobileOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-8 right-8 text-white/50 text-3xl hover:text-white transition-all uppercase font-thin tracking-widest"
        >
          Close <span className="text-[#FF5F05]">✕</span>
        </button>

        <Link href="/" onClick={() => setMobileOpen(false)} className="mb-8">
          <img
            src="/reference_images/AVI STA text logo white ( white.png"
            alt="Avista"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="text-white text-4xl uppercase font-['Barlow_Condensed'] font-thin tracking-[0.2em] hover:text-[#FF5F05] transition-all"
          >
            {item.name}
          </Link>
        ))}

        <div className="mt-16 flex gap-8">
          <a href="#" className="text-white/50 hover:text-[#FF5F05] text-xl">
            <i className="fab fa-instagram" />
          </a>
          <a href="#" className="text-white/50 hover:text-[#FF5F05] text-xl">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="text-white/50 hover:text-[#FF5F05] text-xl">
            <i className="fab fa-youtube" />
          </a>
        </div>
      </div>
    </>
  );
};

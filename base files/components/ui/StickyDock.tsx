'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FloatingDock } from './FloatingDock';
import {
  IconBuildingEstate, IconKey, IconUser, IconMail,
  IconArticle, IconSettings, IconQuestionMark, IconHome,
} from '@tabler/icons-react';

const navItems = [
  { title: 'Home', icon: <IconHome className="h-full w-full" />, href: '/' },
  { title: 'Mazatlán Rentals', icon: <IconKey className="h-full w-full" />, href: '/mazatlan-rentals' },
  { title: 'Mazatlán For Sale', icon: <IconBuildingEstate className="h-full w-full" />, href: '/mazatlan-homes-for-sale' },
  { title: 'About', icon: <IconUser className="h-full w-full" />, href: '/about' },
  { title: 'Contact', icon: <IconMail className="h-full w-full" />, href: '/contact' },
  { title: 'Blog', icon: <IconArticle className="h-full w-full" />, href: '/blog' },
  { title: 'Property Management', icon: <IconSettings className="h-full w-full" />, href: '/property-management-mazatlan' },
  { title: 'FAQ', icon: <IconQuestionMark className="h-full w-full" />, href: '/mazatlan-faqs' },
];

export const StickyDock = () => {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    // On non-home pages, show immediately
    if (!isHome) {
      setVisible(true);
      return;
    }

    // On homepage, FullPage.js intercepts scroll — listen for section changes via fp-nav
    // Also listen to regular scroll as fallback
    const onScroll = () => {
      if (window.scrollY > 100) setVisible(true);
    };

    // FullPage.js fires a custom event or we can watch the active section class
    const observer = new MutationObserver(() => {
      const activeSection = document.querySelector('.fp-section.active');
      if (activeSection) {
        const allSections = document.querySelectorAll('.fp-section');
        const idx = Array.from(allSections).indexOf(activeSection);
        setVisible(idx > 0);
      }
    });

    const fpNav = document.getElementById('fp-nav');
    if (fpNav) {
      observer.observe(fpNav, { subtree: true, attributes: true, attributeFilter: ['class'] });
    }

    // Also watch fp-section elements directly
    const fpSections = document.querySelector('#fullpage');
    if (fpSections) {
      observer.observe(fpSections, { subtree: true, attributes: true, attributeFilter: ['class'] });
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [isHome]);

  if (!visible) return null;
  return <FloatingDock items={navItems} />;
};

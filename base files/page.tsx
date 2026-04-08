'use client';
import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

// Sections — in approved order
import { HeroSection }               from '@/components/home/HeroSection';
import { FeaturedListingsSection }   from '@/components/home/FeaturedListingsSection';
import { MeetDannySection }          from '@/components/home/MeetDannySection';
import { AwardsContactSection }      from '@/components/home/AwardsContactSection';
import { PropertyManagementSection } from '@/components/home/PropertyManagementSection';
import { NeighborhoodAccordion }     from '@/components/home/NeighborhoodAccordion';
import { NewsletterSection }         from '@/components/home/NewsletterSection';
import { AppSection }                from '@/components/home/AppSection';
import { BlogPreviewSection }        from '@/components/home/BlogPreviewSection';
import { GlobalFooter }              from '@/components/ui/GlobalFooter';
import { GlobalHeader }              from '@/components/ui/GlobalHeader';
import { StickyDock }                from '@/components/ui/StickyDock';

const TOOLTIPS = [
  'Home',
  'Featured Listings',
  'Meet Danny',
  'Awards & Contact',
  'Property Management',
  'Explore Mazatlán',
  'Newsletter',
  'App',
  'Blog',
  'Footer',
];

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLeave = (_origin: unknown, destination: { index: number }) => {
    setIsScrolled(destination.index > 0);
  };

  // After each section snaps into view, tell AOS to re-check visibility.
  // FullPage.js moves sections via CSS transform (not real scroll) so AOS
  // IntersectionObserver never fires automatically.
  const handleAfterLoad = () => {
    if (typeof window !== 'undefined') {
      import('aos').then((mod) => mod.default.refresh());
    }
  };

  return (
    <>
      <GlobalHeader scrolledOverride={isScrolled} />
      <StickyDock />

      <ReactFullpage
        licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
        credits={{ enabled: false }}
        scrollingSpeed={1000}
        navigation
        navigationTooltips={TOOLTIPS}
        continuousVertical={false}
        scrollOverflow={false}
        onLeave={handleLeave}
        afterLoad={handleAfterLoad}
        render={() => (
          <ReactFullpage.Wrapper>
            {/* 1  Hero                */ } <HeroSection />
            {/* 2  Featured Listings  */ } <FeaturedListingsSection />
            {/* 3  Meet Danny         */ } <MeetDannySection />
            {/* 4  Awards + Contact   */ } <AwardsContactSection />
            {/* 5  Property Mgmt      */ } <PropertyManagementSection />
            {/* 6  Explore Accordion  */ } <NeighborhoodAccordion />
            {/* 7  Magazine/Newsletter*/ } <NewsletterSection />
            {/* 8  App                */ } <AppSection />
            {/* 9  Blog               */ } <BlogPreviewSection />
            {/* 10 Footer             */ } <div className="section fp-auto-height"><GlobalFooter /></div>
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
};

export default Home;

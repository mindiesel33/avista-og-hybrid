'use client';
import React from 'react';
import { PropertyCard } from '../ui/PropertyCard';

// 5 items → 2 rows via OGGroup nth-child width rules:
//   Row 1: child 1 (33%) + child 2 (66%)
//   Row 2: child 3 (33%) + child 4 (33%) + child 5 (33%)
const FEATURED_PROPERTIES = [
  {
    id: 'sale-1',
    neighborhood: 'Zona Dorada',
    price: '$850,000 USD',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    beds: 4, baths: 3, sqft: '3,200', oceanView: true, status: 'For Sale',
  },
  {
    id: 'sale-2',
    neighborhood: 'Cerritos',
    price: '$1,350,000 USD',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200',
    beds: 5, baths: 4, sqft: '4,800', oceanView: true, status: 'For Sale',
  },
  {
    id: 'lt-1',
    neighborhood: 'El Cid',
    price: '$28,000 MXN/mo',
    image: 'https://images.unsplash.com/photo-1512918766671-ad65079ef2a7?auto=format&fit=crop&q=80&w=800',
    beds: 3, baths: 2, sqft: '1,800', oceanView: false, status: 'Long Term Rental',
  },
  {
    id: 'lt-2',
    neighborhood: 'Gaviotas',
    price: '$35,000 MXN/mo',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    beds: 4, baths: 3, sqft: '2,600', oceanView: false, status: 'Long Term Rental',
  },
  {
    id: 'st-1',
    neighborhood: 'Malecon',
    price: '$1,200/night',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
    beds: 2, baths: 2, sqft: '1,400', oceanView: true, status: 'Short Term Rental',
  },
];

export const FeaturedListingsSection = () => {
  return (
    // fp-auto-height: FullPage snaps to this section then lets you scroll through it naturally
    <section id="content-listings" className="section fp-auto-height featured-properties-area">
      <div className="fp-holder">
        <div className="fp-inner">

          <div className="fp-head">
            <div className="global-site-title is-white">
              <span>
                Exclusive Properties
                <i />
              </span>
              Featured <strong>Listings</strong>
            </div>
            <div className="fp-link hidden-sm hidden-xs">
              <a href="/mazatlan-homes-for-sale" className="global-btn">
                <span>View All <i /></span>
              </a>
            </div>
          </div>

          {/* fp-list items are direct children of fp-slider — nth-child(2) = 66% wide */}
          <div className="fp-feed">
            <div className="fp-slider-wrap">
              <div className="fp-slider">
                {FEATURED_PROPERTIES.map((property) => (
                  <div key={property.id} className="fp-list">
                    <PropertyCard {...property} />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

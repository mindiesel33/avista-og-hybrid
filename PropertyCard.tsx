'use client';
import React from 'react';
import Link from 'next/link';

// Accepts flat props — spread directly from listing data
export type PropertyCardProps = {
  id: string;
  title?: string;
  price: string;
  neighborhood: string;
  beds: number;
  baths: number;
  sqft: string;
  imageUrl?: string;
  image?: string;
  oceanView?: boolean;
  slug?: string;
  status?: string;
  type?: 'Sale' | 'Rental';
};

// Returns the <a> content only — fp-list wrapper is handled by the parent (FeaturedListingsSection)
export const PropertyCard = (props: PropertyCardProps) => {
  const img = props.imageUrl || props.image || '';

  return (
    <Link href={`/property/${props.id}`}>
      <div className="fp-photo">
        <div className="fp-photo-wrap">
          <img
            src={img}
            alt={props.neighborhood}
            width={500}
            height={340}
            className="img-responsive"
          />
        </div>

        {/* Hover overlay — revealed by OGGroup CSS on .fp-list a:hover */}
        <div className="fp-photo-content">
          <div className="fp-price">
            <span>{props.price}</span>
          </div>

          <div className="fp-address">
            {props.neighborhood}
            <span>Mazatlán, Sinaloa</span>
          </div>

          <div className="fp-details">
            <ul>
              <li>
                <span className="listing-icon-beds" />
                <em>{props.beds} Beds</em>
              </li>
              <li>/</li>
              <li>
                <span className="listing-icon-baths" />
                <em>{props.baths} Baths</em>
              </li>
              <li>/</li>
              {props.oceanView ? (
                <li>
                  <span
                    className="ocean-view-badge"
                    style={{
                      fontSize: 9,
                      letterSpacing: '0.18em',
                      padding: '3px 9px',
                      fontFamily: 'var(--font-family-title, "Barlow Condensed", sans-serif)',
                      textTransform: 'uppercase',
                      display: 'inline-block',
                    }}
                  >
                    Ocean View
                  </span>
                </li>
              ) : (
                <li>
                  <span className="listing-icon-sqft" />
                  <em>{props.sqft} SQFT</em>
                </li>
              )}
            </ul>
          </div>

          <div className="fp-monogram">
            <div className="listing-icon-monogram" />
          </div>
        </div>

        {/* Normal state — shows neighborhood instead of street address */}
        <div className="fp-address">
          <div className="fp-price">
            <span>{props.price}</span>
          </div>
          {props.neighborhood}
        </div>
      </div>
    </Link>
  );
};

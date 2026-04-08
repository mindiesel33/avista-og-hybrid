'use client';
import React from 'react';

const panels = [
  {
    name: 'Mazatlán Restaurants',
    img: '/reference_images/mazatlan restaurants.jpeg',
    bgColor: undefined,
    text: "From fresh ceviches on the malecón to upscale fusion — Mazatlán's food scene punches way above its weight. Whether you want street tacos at 2am or a wine-paired tasting menu, the city delivers.",
    link: '/mazatlan-faqs',
  },
  {
    name: 'Things To Do',
    img: '/reference_images/mazatlan things to do.jpg',
    bgColor: undefined,
    text: 'Cliff diving at Olas Altas. Carnival. Whale watching. Stone Island. Art galleries in the historic centro. There is no shortage of reasons to never leave.',
    link: '/mazatlan-faqs',
  },
  {
    name: 'Cost of Living',
    img: undefined,
    bgColor: 'linear-gradient(135deg, #13294B 0%, #1a4a80 100%)',
    text: "Mazatlán offers a quality of life that most North Americans can't afford back home — at a fraction of the cost. World-class beaches, excellent healthcare, thriving expat community.",
    link: '/mazatlan-faqs',
  },
  {
    name: 'Weather by Month',
    img: undefined,
    bgColor: 'linear-gradient(135deg, #FF5F05 0%, #8B2500 100%)',
    text: "Over 300 days of sunshine per year. Mild winters, warm summers, and a rainy season that clears up by noon. Mazatlán doesn't do grey skies.",
    link: '/mazatlan-faqs',
  },
];

export const ExploreMazatlanSection = () => {
  return (
    <div className="section office-area" style={{ position: 'relative' }}>
      <div className="office-list-wrap">
        {/* Heading panel */}
        <div className="office-list office-list-heading">
          <div className="office-item office-item-heading">
            <div>
              <div className="item-img">
                <canvas width="400" height="655" style={{ display: 'block', width: '100%', background: '#111' }}></canvas>
              </div>
              <div className="office-head">
                <div>
                  <div className="office-name">
                    <span>Explore</span>
                    Mazatlán
                  </div>
                  <div className="global-site-title is-red">
                    <span>Your New City <i></i></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location panels */}
        <div className="office-list">
          {panels.map((panel, i) => (
            <div key={i} className="office-item">
              <div>
                <div className="item-img" style={{ position: 'relative' }}>
                  <canvas width="400" height="655" style={{ display: 'block', width: '100%' }}></canvas>
                  {panel.img ? (
                    <img src={panel.img} alt={panel.name} className="img-responsive" />
                  ) : (
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: panel.bgColor, opacity: 0.7 }} />
                  )}
                </div>
                <div className="item-info">
                  <div className="phone">
                    <span style={{ fontFamily: 'var(--font-family-sofia)', fontSize: '13px', letterSpacing: '0.05em', fontWeight: 300, lineHeight: 1.6, display: 'block', marginBottom: '12px', color: '#fff' }}>
                      {panel.text}
                    </span>
                  </div>
                  <div className="address">
                    <a href={panel.link} style={{ color: '#FF5F05', fontFamily: 'var(--font-family-title)', textTransform: 'uppercase', letterSpacing: '0.28em', fontSize: '12px' }}>
                      Learn More →
                    </a>
                  </div>
                </div>
                <div className="item-name">{panel.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

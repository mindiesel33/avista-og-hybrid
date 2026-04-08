'use client';
import React, { useState } from 'react';

const WaitlistModal = ({ onClose }: { onClose: () => void }) => {
  const [done, setDone] = useState(false);

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#fff', maxWidth: '480px', width: '100%', padding: '60px', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>✕</button>
        {done ? (
          <p style={{ fontFamily: 'var(--font-family-title)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '20px', color: '#13294B', textAlign: 'center' }}>You&apos;re on the list. We&apos;ll be in touch!</p>
        ) : (
          <>
            <p style={{ fontFamily: 'var(--font-family-title)', textTransform: 'uppercase', letterSpacing: '0.28em', fontSize: '11px', color: '#FF5F05', marginBottom: '12px' }}>App Coming Soon</p>
            <h3 style={{ fontFamily: 'var(--font-family-title)', fontSize: '42px', textTransform: 'uppercase', lineHeight: 0.9, marginBottom: '16px', color: '#111' }}>Be the First to Know</h3>
            <p style={{ fontFamily: 'var(--font-family-sofia)', fontSize: '14px', color: '#666', lineHeight: 1.7, marginBottom: '32px' }}>The app is in development. Drop your info and we&apos;ll notify you the moment it launches — plus give you early access.</p>
            <form onSubmit={e => { e.preventDefault(); setDone(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input
                type="text"
                placeholder="FIRST NAME"
                required
                style={{ borderBottom: '1px solid #ccc', borderTop: 'none', borderLeft: 'none', borderRight: 'none', padding: '12px 0', fontFamily: 'var(--font-family-title)', textTransform: 'uppercase', letterSpacing: '0.28em', fontSize: '11px', outline: 'none' }}
              />
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                required
                style={{ borderBottom: '1px solid #ccc', borderTop: 'none', borderLeft: 'none', borderRight: 'none', padding: '12px 0', fontFamily: 'var(--font-family-title)', textTransform: 'uppercase', letterSpacing: '0.28em', fontSize: '11px', outline: 'none' }}
              />
              <button type="submit" className="global-btn" style={{ alignSelf: 'flex-start' }}>
                <span>Join the Waitlist <i></i></span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export const AppSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="section app-area" style={{ position: 'relative', background: '#fff' }}>
      <div className="app-holder">
        <div className="app-inner">
          {/* Head (left) */}
          <div className="app-head" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
            <div>
              <div className="global-site-title is-red">
                <span>Mazatlán&apos;s First <i></i></span>
              </div>
              <div className="magazine-name" style={{ fontFamily: 'var(--font-family-title)', fontSize: 'clamp(60px, 7.5vw, 120px)', textTransform: 'uppercase', lineHeight: 0.8, letterSpacing: '0.02em', background: 'linear-gradient(to right, #FF5F05, #8B2500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', whiteSpace: 'nowrap', fontWeight: 500 }}>
                <span style={{ display: 'block', fontWeight: 100 }}>Download</span>
                Our App
              </div>
            </div>
          </div>

          {/* Photo (center) */}
          <div className="app-photo" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
            <div className="app-photo-container">
              <div className="app-photo-phone">
                <img src="/reference_images/App.png" alt="Mazatlán Real Estate App" className="img-responsive" style={{ maxWidth: '226px', margin: '0 auto', display: 'block', filter: 'drop-shadow(25px 30px 40px rgba(0,0,0,0.38))' }} />
              </div>
            </div>
          </div>

          {/* Content (right) */}
          <div className="app-content" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
            <div className="app-content-inner">
              <div className="app-content-text">
                <span>The First App Built for Mazatlán Real Estate</span>
                <p>Mexico doesn&apos;t have an MLS. Mazatlán doesn&apos;t have a listing aggregator. Until now. We&apos;re building the first all-in-one Mazatlán property platform — part Zillow, part Airbnb, fully local. Pull RSS feeds from every real estate office in town. Let individual owners list their short-term rentals directly. Browse, compare, and inquire — all in one place.</p>
              </div>
              <div className="app-links">
                <button onClick={() => setModalOpen(true)} style={{ background: '#111', borderRadius: '8px', padding: '10px 18px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
                  <span style={{ fontSize: '22px' }}>🍎</span>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-family-title)' }}>Download on the</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-family-title)', letterSpacing: '0.05em' }}>App Store</div>
                  </div>
                </button>
                <button onClick={() => setModalOpen(true)} style={{ background: '#111', borderRadius: '8px', padding: '10px 18px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
                  <span style={{ fontSize: '22px' }}>▶</span>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-family-title)' }}>Get it on</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-family-title)', letterSpacing: '0.05em' }}>Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && <WaitlistModal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

'use client';
import React, { useState, useEffect } from 'react';

const Modal = ({ onClose }: { onClose: () => void }) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
    >
      <div onClick={e => e.stopPropagation()} style={{ background: '#fff', maxWidth: '500px', width: '100%', padding: '60px', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#111' }}>✕</button>
        {done ? (
          <p style={{ fontFamily: 'var(--font-family-title)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '20px', color: '#13294B', textAlign: 'center' }}>You&apos;re in! Watch your inbox.</p>
        ) : (
          <>
            <p style={{ fontFamily: 'var(--font-family-title)', textTransform: 'uppercase', letterSpacing: '0.28em', fontSize: '11px', color: '#FF5F05', marginBottom: '12px' }}>The Insider&apos;s Guide</p>
            <h3 style={{ fontFamily: 'var(--font-family-title)', fontSize: '48px', textTransform: 'uppercase', lineHeight: 0.85, marginBottom: '20px', color: '#111' }}>Join Las Tres Islas</h3>
            <p style={{ fontFamily: 'var(--font-family-sofia)', fontSize: '14px', color: '#666', lineHeight: 1.7, marginBottom: '32px' }}>Real estate updates, the best new restaurants in town, tide schedules, fiesta calendars, and local intel that only comes from actually living here. No spam. Ever.</p>
            <form
              onSubmit={e => {
                e.preventDefault();
                if (typeof sessionStorage !== 'undefined') sessionStorage.setItem('newsletter_shown', 'true');
                setDone(true);
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <input
                type="text"
                placeholder="FIRST NAME"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
                style={{ borderBottom: '1px solid #ccc', borderTop: 'none', borderLeft: 'none', borderRight: 'none', padding: '12px 0', fontFamily: 'var(--font-family-title)', textTransform: 'uppercase', letterSpacing: '0.28em', fontSize: '11px', outline: 'none' }}
              />
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{ borderBottom: '1px solid #ccc', borderTop: 'none', borderLeft: 'none', borderRight: 'none', padding: '12px 0', fontFamily: 'var(--font-family-title)', textTransform: 'uppercase', letterSpacing: '0.28em', fontSize: '11px', outline: 'none' }}
              />
              <button type="submit" className="global-btn" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>
                <span>Send Me the Insider Guide <i></i></span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export const NewsletterSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('newsletter_shown')) return;
    const timer = setTimeout(() => setModalOpen(true), 45000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => {
    if (typeof sessionStorage !== 'undefined') sessionStorage.setItem('newsletter_shown', 'true');
    setModalOpen(true);
  };

  return (
    <div className="section magazine-area" style={{ position: 'relative' }}>
      <div className="magazine-bg global-canvas-bg" style={{ position: 'absolute', inset: 0 }}>
        <div style={{ position: 'absolute', inset: 0, background: '#0d1f0f' }} />
      </div>

      <div className="magazine-holder">
        <div className="magazine-inner">
          {/* Left: heading + text */}
          <div className="magazine-head-wrap" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            <div className="magazine-head">
              <div>
                <div className="global-site-title is-red">
                  <span>The Insider&apos;s Guide <i></i></span>
                </div>
                <div className="magazine-name">
                  <span>Las Tres</span>
                  Islas
                </div>
              </div>
            </div>
            <div className="magazine-text">
              <p>The insider&apos;s guide to life, property, and culture in Mazatlán — delivered to your inbox.</p>
              <p>Every issue covers what the guidebooks miss. Real estate market updates, the best new tables in town, tide schedules, fiesta calendars, cost-of-living breakdowns, and the kind of local intel that only comes from actually living here. Subscribe free. Unsubscribe anytime. No spam — ever.</p>
              <a href="#" onClick={e => { e.preventDefault(); openModal(); }} className="global-btn" style={{ display: 'inline-flex', marginTop: '10px' }}>
                <span>Subscribe Now <i></i></span>
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="magazine-photo" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
            <div className="magazine-photo-inner">
              <img src="/reference_images/las 3 islas.png" alt="Las Tres Islas Newsletter" className="img-responsive" style={{ cursor: 'pointer' }} onClick={openModal} />
            </div>
          </div>
        </div>
      </div>

      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

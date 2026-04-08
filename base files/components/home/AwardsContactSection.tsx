'use client';
import React, { useState } from 'react';

export const AwardsContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', neighborhood: '', budget: '', timeline: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    } catch {
      // silent
    }
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    borderBottom: '1px solid rgba(0,0,0,0.2)', borderTop: 'none', borderLeft: 'none', borderRight: 'none',
    padding: '12px 0', fontFamily: 'var(--font-family-title)', textTransform: 'uppercase',
    fontSize: '11px', letterSpacing: '0.28em', outline: 'none', width: '100%',
    background: 'transparent',
  };

  return (
    <div className="section as-faqs-1-area tx-section" style={{ display: 'flex', alignItems: 'stretch', overflow: 'hidden' }}>
      <div style={{ display: 'flex', width: '100%', minHeight: '100vh' }}>

        {/* LEFT — Awards (dark background) */}
        <div className="as-faqs-1-left" style={{
          width: '50%', background: '#13294B', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', padding: '80px 60px', position: 'relative',
        }}>
          <div className="as-faqs-1-left-sec-title text-center" style={{ marginBottom: '60px' }}>
            <h6 style={{ fontFamily: 'var(--font-family-title)', textTransform: 'uppercase', letterSpacing: '0.28em', fontSize: '13px', color: '#FF5F05', marginBottom: '16px' }}>
              Awards
            </h6>
            <h2 style={{ fontFamily: 'var(--font-family-title)', fontSize: 'clamp(32px, 4vw, 60px)', color: '#fff', textTransform: 'uppercase', lineHeight: 1, letterSpacing: '0.04em' }}>
              Excellence &amp; Innovation Drive Everything We Do
            </h2>
          </div>
          <div className="as-faqs-1-awards" style={{ width: '100%', maxWidth: '380px' }}>
            {[
              'Top Producing Agency — Mazatlán 2024',
              '#1 Expat Relocation Specialist — Sinaloa',
              'Best Property Management Team 2025',
            ].map((award, i) => (
              <p key={i} className="as-faqs-1-awards-single" style={{
                fontFamily: 'var(--font-family-title)', fontSize: 'clamp(22px, 3vw, 36px)',
                textTransform: 'uppercase', color: '#fff', lineHeight: 1.1,
                letterSpacing: '0.04em', padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.15)',
                fontWeight: 100,
              }}>
                {award}
              </p>
            ))}
          </div>
        </div>

        {/* RIGHT — Contact Form */}
        <div className="as-cta-2-form-wrap" style={{
          width: '50%', background: '#fff', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', padding: '80px 60px',
        }}>
          <div className="as-cta-2-form-content" style={{ width: '100%', maxWidth: '460px', marginBottom: '30px' }}>
            <p style={{ fontFamily: 'var(--font-family-title)', textTransform: 'uppercase', letterSpacing: '0.28em', fontSize: '11px', color: '#FF5F05', marginBottom: '12px' }}>
              Response Time: Under 1 Hour
            </p>
            <h3 style={{ fontFamily: 'var(--font-family-title)', fontSize: 'clamp(28px, 3vw, 48px)', textTransform: 'uppercase', color: '#13294B', lineHeight: 1, letterSpacing: '0.04em' }}>
              Tell Us What You&apos;re Looking For
            </h3>
          </div>

          {submitted ? (
            <div style={{ maxWidth: '460px', textAlign: 'center', padding: '40px', background: '#f4f4f4', borderRadius: '10px' }}>
              <p style={{ fontFamily: 'var(--font-family-title)', fontSize: '24px', color: '#13294B', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Thanks! We&apos;ll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '460px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { placeholder: 'Your Name *', key: 'name', type: 'text' },
                { placeholder: 'Your Email *', key: 'email', type: 'email' },
                { placeholder: 'Best # to Reach You', key: 'phone', type: 'tel' },
                { placeholder: 'Budget', key: 'budget', type: 'text' },
              ].map(f => (
                <input
                  key={f.key}
                  type={f.type}
                  placeholder={f.placeholder}
                  value={(form as Record<string, string>)[f.key]}
                  onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                  style={inputStyle}
                />
              ))}
              <select
                value={form.neighborhood}
                onChange={e => setForm(prev => ({ ...prev, neighborhood: e.target.value }))}
                style={inputStyle}
              >
                <option value="">Preferred Neighborhood</option>
                {['Cerritos', 'Zona Dorada', 'Sabalo', 'Gaviotas', 'El Cid', 'Malecon', 'Centro Historico', 'Playa Sur'].map(n => <option key={n}>{n}</option>)}
              </select>
              <select
                value={form.timeline}
                onChange={e => setForm(prev => ({ ...prev, timeline: e.target.value }))}
                style={inputStyle}
              >
                <option value="">Timeline</option>
                {['Immediately', '1-3 months', '3-6 months', 'Just researching'].map(t => <option key={t}>{t}</option>)}
              </select>
              <textarea
                placeholder="Anything else you're looking for?"
                value={form.message}
                onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                rows={3}
                style={{ ...inputStyle, resize: 'none' }}
              />
              <button type="submit" className="global-btn" style={{ marginTop: '10px', alignSelf: 'flex-start' }}>
                <span>Submit Inquiry <i></i></span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

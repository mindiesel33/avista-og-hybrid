'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const STATUSES = ['Short Term Rental', 'Long Term Rental', 'For Sale'];

const NEIGHBORHOODS = [
  'Cerritos', 'Zona Dorada', 'Sabalo', 'Gaviotas',
  'El Cid', 'Malecon', 'Centro Historico', 'Playa Sur',
];

// Neighborhood list displayed on the right side of the hero
const HERO_NEIGHBORHOODS = ['Cerritos', 'Zona Dorada', 'El Cid', 'Malecon'];

const PRICE_OPTIONS: Record<string, { label: string; value: string }[]> = {
  'Short Term Rental': [
    { label: '$500/night',   value: '500'  },
    { label: '$1,000/night', value: '1000' },
    { label: '$1,500/night', value: '1500' },
    { label: '$2,000/night', value: '2000' },
    { label: '$2,500/night', value: '2500' },
    { label: '$3,000/night', value: '3000' },
    { label: '$3,500+/night', value: '3500' },
  ],
  'Long Term Rental': [
    { label: '$15,000 MXN/mo', value: '15000' },
    { label: '$20,000 MXN/mo', value: '20000' },
    { label: '$25,000 MXN/mo', value: '25000' },
    { label: '$30,000 MXN/mo', value: '30000' },
    { label: '$35,000 MXN/mo', value: '35000' },
    { label: '$40,000 MXN/mo', value: '40000' },
    { label: '$45,000+ MXN/mo', value: '45000' },
  ],
  'For Sale': [
    { label: '$100,000',  value: '100000'  },
    { label: '$250,000',  value: '250000'  },
    { label: '$500,000',  value: '500000'  },
    { label: '$750,000',  value: '750000'  },
    { label: '$1,000,000', value: '1000000' },
    { label: '$1,500,000', value: '1500000' },
    { label: '$2,000,000+', value: '2000000' },
  ],
};

const ALL_PRICES = [
  { label: 'Short Term: from $500/night',      value: '' },
  { label: 'Long Term: from $15,000 MXN/mo',  value: '' },
  { label: 'For Sale: from $100,000',          value: '' },
];

// Shared dropdown field style
const fieldStyle: React.CSSProperties = {
  border: '1px solid rgba(232,233,234,0.3)',
  padding: '5px 10px',
  background: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minWidth: 160,
  position: 'relative',
};

const labelStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.5)',
  fontSize: 8,
  fontFamily: "'Barlow Condensed', sans-serif",
  letterSpacing: '0.28em',
  textTransform: 'uppercase',
  marginBottom: 2,
  lineHeight: 1,
};

const selectStyle: React.CSSProperties = {
  background: 'transparent',
  color: '#fff',
  fontSize: 10,
  fontFamily: "'Barlow Condensed', sans-serif",
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  appearance: 'none' as const,
  WebkitAppearance: 'none' as const,
};

export const HeroSection = () => {
  const router = useRouter();
  const [status, setStatus] = useState('');
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<string[]>([]);
  const [neighborhoodOpen, setNeighborhoodOpen] = useState(false);
  const [price, setPrice] = useState('');
  const [activeNeighborhood, setActiveNeighborhood] = useState('Cerritos');
  const neighborhoodRef = useRef<HTMLDivElement>(null);

  // Close neighborhood dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (neighborhoodRef.current && !neighborhoodRef.current.contains(e.target as Node)) {
        setNeighborhoodOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const toggleNeighborhood = (n: string) => {
    setSelectedNeighborhoods(prev =>
      prev.includes(n) ? prev.filter(x => x !== n) : [...prev, n]
    );
  };

  const neighborhoodLabel = selectedNeighborhoods.length === 0
    ? '-- Neighborhood --'
    : selectedNeighborhoods.length === 1
      ? selectedNeighborhoods[0]
      : `${selectedNeighborhoods.length} selected`;

  const priceOptions = status ? PRICE_OPTIONS[status] : ALL_PRICES;

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (status) params.set('status', status);
    if (selectedNeighborhoods.length > 0) params.set('neighborhood', selectedNeighborhoods.join(','));
    if (price) params.set('price', price);
    const route = status === 'For Sale' ? '/mazatlan-homes-for-sale' : '/mazatlan-rentals';
    router.push(`${route}?${params.toString()}`);
  };

  return (
    <div className="section slideshow-area relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="slider-holder absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source
            src="https://skyblue-chough-768427.hostingersite.com/wp-content/uploads/2026/03/rough.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10" />
      </div>

      {/* Side fixed icons (Left) */}
      <div className="side-fixed-contact absolute left-[-4px] h-full flex items-center z-50">
        <div className="fixed-smi flex flex-col items-center">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-[1px] h-[13px] bg-white opacity-50 my-[14px]" />
          ))}
          <a href="#" className="p-2 text-white hover:text-[#FF5F05] transition-colors duration-300">
            <i className="fab fa-facebook-f text-sm" />
          </a>
          <a href="#" className="p-2 text-white hover:text-[#FF5F05] transition-colors duration-300">
            <i className="fab fa-instagram text-sm" />
          </a>
          <a href="#" className="p-2 text-white hover:text-[#FF5F05] transition-colors duration-300">
            <i className="fab fa-youtube text-sm" />
          </a>
          {[1, 2, 3].map(i => (
            <div key={i} className="w-[1px] h-[13px] bg-white opacity-50 my-[14px]" />
          ))}
        </div>
      </div>

      {/* Neighborhood List (Right) */}
      <div className="absolute bottom-[110px] right-0 w-full z-30 pointer-events-none pr-[70px]">
        <div
          className="text-right text-white font-thin uppercase tracking-[0.28em] text-[15px] mb-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Our Mazatlán
        </div>
        <div className="flex flex-col items-end pointer-events-auto">
          {HERO_NEIGHBORHOODS.map((n, idx) => (
            <div key={n} className="slider-office-list">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveNeighborhood(n); }}
                className={`relative block uppercase tracking-[0.05em] font-medium transition-all duration-300 group ${
                  activeNeighborhood === n ? 'text-white' : 'text-white/40 hover:text-white'
                }`}
                style={{
                  fontSize: 'clamp(32px, 4vw, 50px)',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  /* grey separator under each item, text-width only */
                  borderBottom: idx < HERO_NEIGHBORHOODS.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                  paddingBottom: idx < HERO_NEIGHBORHOODS.length - 1 ? 4 : 0,
                  marginBottom: idx < HERO_NEIGHBORHOODS.length - 1 ? 4 : 0,
                }}
              >
                {n}
                {/* Orange accent — active or hover, text-width */}
                <span
                  className={`absolute bottom-0 left-0 h-[3px] bg-[#FF5F05] transition-all duration-300 ${
                    activeNeighborhood === n ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                  }`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Search Bar — blue bg, filters transparent with borders, button white outline */}
      <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-[#13294B] flex items-center justify-center z-[60]">
        <div className="flex items-center gap-[2px]">

          {/* Status */}
          <div style={fieldStyle}>
            <span style={labelStyle}>Status</span>
            <select
              value={status}
              onChange={e => { setStatus(e.target.value); setPrice(''); }}
              style={selectStyle}
            >
              <option value="" className="text-black bg-white">-- Select --</option>
              {STATUSES.map(s => (
                <option key={s} value={s} className="text-black bg-white">{s}</option>
              ))}
            </select>
          </div>

          {/* Neighborhood multi-select */}
          <div ref={neighborhoodRef} style={{ ...fieldStyle, cursor: 'pointer', userSelect: 'none' }}>
            <span style={labelStyle}>Location</span>
            <div
              onClick={() => setNeighborhoodOpen(v => !v)}
              style={{ ...selectStyle, cursor: 'pointer' }}
            >
              {neighborhoodLabel}
              <span style={{ marginLeft: 6, fontSize: 8, opacity: 0.6 }}>▼</span>
            </div>

            {/* Dropdown list */}
            {neighborhoodOpen && (
              <div
                className="absolute bottom-full mb-[2px] left-0"
                style={{
                  background: 'rgba(0,0,0,0.85)',
                  border: '1px solid rgba(232,233,234,0.3)',
                  minWidth: '100%',
                  zIndex: 100,
                }}
              >
                {NEIGHBORHOODS.map(n => (
                  <label
                    key={n}
                    className="flex items-center gap-2 px-3 py-[6px] cursor-pointer hover:bg-white/10 transition-all"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 10,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#fff',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedNeighborhoods.includes(n)}
                      onChange={() => toggleNeighborhood(n)}
                      className="accent-[#FF5F05]"
                    />
                    {n}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price */}
          <div style={fieldStyle}>
            <span style={labelStyle}>Price</span>
            <select
              value={price}
              onChange={e => setPrice(e.target.value)}
              style={selectStyle}
            >
              <option value="" className="text-black bg-white">-- Any Price --</option>
              {priceOptions.map(p => (
                <option key={p.value + p.label} value={p.value} className="text-black bg-white">
                  {p.label}
                </option>
              ))}
            </select>
          </div>

          {/* Search button */}
          <button
            onClick={handleSearch}
            style={{
              border: '2px solid #ffffff',
              background: 'transparent',
              color: '#ffffff',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 11,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              padding: '5px 28px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

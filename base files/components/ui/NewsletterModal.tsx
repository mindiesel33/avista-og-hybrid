'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const NewsletterModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('newsletter_shown');
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      const stillNotShown = sessionStorage.getItem('newsletter_shown');
      if (!stillNotShown) {
        setIsVisible(true);
      }
    }, 45000); // 45 seconds per spec

    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setIsVisible(false);
    sessionStorage.setItem('newsletter_shown', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    close();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-nearBlack/90 backdrop-blur-md px-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            className="w-full max-w-[900px] bg-white overflow-hidden shadow-2xl relative grid grid-cols-1 md:grid-cols-2"
          >
            {/* Close Button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-40 text-black p-4 text-3xl font-bold hover:text-primary-orange transition-colors leading-none"
              aria-label="Close"
            >
              ×
            </button>

            {/* Visual Side */}
            <div className="relative overflow-hidden hidden md:block min-h-[400px]">
              <img
                src="/reference_images/las 3 islas.png"
                alt="Las Tres Islas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-nearBlack/50" />
              <div className="absolute bottom-12 left-12 z-20">
                <p className="text-white font-title text-4xl uppercase tracking-widest leading-tight">
                  Las Tres<br />
                  <span className="italic opacity-80">Islas</span>
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-16 flex flex-col justify-center">
              <span className="text-primary-orange font-title uppercase tracking-widest text-[10px] mb-4">
                Official Avista Newsletter
              </span>
              <h2 className="text-nearBlack font-title text-4xl uppercase tracking-widest mb-4 leading-tight">
                Join Las Tres Islas
              </h2>
              <p className="text-nearBlack/60 font-sans text-sm leading-relaxed mb-10">
                The insider's guide to life, property, and culture in Mazatlán — delivered straight to your inbox. No spam. Unsubscribe anytime.
              </p>

              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  required
                  className="w-full border-b border-nearBlack/20 py-4 font-title uppercase tracking-widest text-xs focus:outline-none focus:border-primary-orange bg-transparent"
                />
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  required
                  className="w-full border-b border-nearBlack/20 py-4 font-title uppercase tracking-widest text-xs focus:outline-none focus:border-primary-orange bg-transparent"
                />
                <button type="submit" className="global-btn py-5 w-full tracking-[0.3em] font-bold text-sm uppercase mt-2">
                  Send Me the Insider Guide
                </button>
              </form>

              <p className="mt-8 text-nearBlack/20 font-title uppercase text-[8px] tracking-widest text-center">
                Privacy First. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

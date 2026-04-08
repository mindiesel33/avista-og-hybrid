'use client';
import { useEffect } from 'react';

export const AOSInit = () => {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init({ once: true, duration: 1000 });
    });
  }, []);
  return null;
};

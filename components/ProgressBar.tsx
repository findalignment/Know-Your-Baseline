'use client';

import { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const p = Math.max(0, Math.min(1, scrolled / Math.max(1, total)));
      setPct(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      className="kyb-progress"
      aria-hidden="true"
      style={{ transform: `scaleX(${pct})` }}
    />
  );
}

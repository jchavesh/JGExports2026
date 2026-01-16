"use client";

import Image from 'next/image';
import { HeroLogo } from '@/components/shared/hero-logo';
import { useState, useEffect } from 'react';

export function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center p-0 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      >
        <Image
          src="/delicious-organic.avif"
          alt="Cinematic view of a coffee plantation at sunset"
          fill
          className="object-cover"
          priority
          data-ai-hint="coffee plantation sunset"
        />
      </div>
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <HeroLogo width={1606} height={400} className="w-full max-w-2xl" />
      </div>
    </section>
  );
}

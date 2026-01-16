"use client";

import { useRef, useState, useEffect } from 'react';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export function ExportProcess() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  const timelineSteps = [
    {
      label: t.process.step1,
      imageSrc: "/Export1.webp",
      imageHint: "coffee processing machine"
    },
    {
      label: t.process.step2,
      imageSrc: "/Export2.webp",
      imageHint: "sorting coffee beans"
    },
    {
      label: t.process.step3,
      imageSrc: "/Export3.webp",
      imageHint: "coffee sacks"
    },
    {
      label: t.process.step4,
      imageSrc: "/Export4.jpg",
      imageHint: "shipping port"
    },
    {
      label: t.process.step5,
      imageSrc: "/Export5.webp",
      imageHint: "container ship"
    }
  ];

  const handleScroll = () => {
    if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        
        if (scrollProgress >= 0 && scrollProgress <= 1) {
            const startOffset = -150;
            const endOffset = 150;
            const newOffsetY = startOffset + (scrollProgress * (endOffset - startOffset));
            setOffsetY(newOffsetY);
        }
    }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Set initial position
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative bg-black overflow-hidden">
      <div
          className="absolute inset-0 w-full h-full"
          style={{ transform: `translateY(${offsetY}px)` }}
      >
          <Image
              src="/Export5.webp"
              alt="Container ship on the ocean"
              fill
              className="object-cover"
              data-ai-hint="container ship"
          />
        </div>
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-headline text-7xl md:text-8xl font-bold uppercase text-primary">
            {t.process.title}
          </h2>
          <Separator className="w-24 bg-primary h-1 mx-auto" />
        </ScrollReveal>
        
        <div className="mt-24">
          <div className="relative">
            <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-16 md:gap-4">
              {timelineSteps.map((step, index) => (
                <ScrollReveal key={index} delay={index * 150} className="w-full max-w-xs md:w-1/5 flex flex-col items-center gap-4 group">
                  <div className="relative z-10 w-32 h-32 md:w-40 md:h-40">
                    <div className="absolute inset-0 rounded-full border-2 border-white bg-black/50 group-hover:border-primary transition-colors duration-300"></div>
                     <Image
                        src={step.imageSrc}
                        alt={step.label}
                        fill
                        className="rounded-full object-cover p-2 transform group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={step.imageHint}
                        sizes="(min-width: 768px) 10rem, 8rem"
                     />
                  </div>
                  <p className="font-body text-center text-sm text-white/80 mt-2 [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]">{step.label}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Separator } from '@/components/ui/separator';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useState, useEffect, useRef } from 'react';

export function ValueProposition() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(1.2);

  const handleScroll = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      // Calculate a progress value from 0 to 1 as the section scrolls through the viewport
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        // Start at 1.2 scale and zoom in to 1.35 as user scrolls
        const newScale = 1.2 + scrollProgress * 0.15; 
        setScale(newScale);
      }
    }
  };
 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial position on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whyPoints = [
      t.valueProposition.whyPoint1,
      t.valueProposition.whyPoint2,
      t.valueProposition.whyPoint3,
      t.valueProposition.whyPoint4,
      t.valueProposition.whyPoint5,
      t.valueProposition.whyPoint6,
      t.valueProposition.whyPoint7,
      t.valueProposition.whyPoint8,
  ];

  return (
    <section id="value-prop" ref={sectionRef} className="bg-background overflow-hidden pt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
                <div className="max-w-2xl">
                    <h2 className="font-headline text-7xl font-bold uppercase text-primary">
                        {t.valueProposition.title2}
                    </h2>
                    <Separator className="w-24 bg-primary h-1 mt-4 mb-6" />
                    <ul className="space-y-4 font-body text-white/80">
                        {whyPoints.map((point, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
                <div className="relative h-[60vh] overflow-hidden rounded-lg">
                    <div
                        className="absolute inset-0 w-full h-full"
                        style={{ transform: `scale(${scale})` }}
                    >
                        <Image
                            src="/values.jpg"
                            alt="Close up of hands holding coffee beans"
                            fill
                            className="object-cover w-full h-full"
                            data-ai-hint="holding coffee beans"
                            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 45vw, 90vw"
                        />
                    </div>
                </div>
            </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

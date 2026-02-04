"use client";

import { useRef, useEffect } from 'react';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Separator } from '@/components/ui/separator';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function WhatWeDo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(error => {
            console.error("Video autoplay failed:", error);
          });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(video);

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <section id="what-we-do" ref={sectionRef} className="relative bg-black text-white min-h-[80vh] md:min-h-screen flex items-center justify-center p-0 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src="/steaming-coffee-beans-in-a-cup-with-a-warm.mp4"
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          data-ai-hint="coffee pouring"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-xl mx-auto text-center space-y-6">
            <h2 className="font-headline text-7xl md:text-8xl font-bold uppercase text-primary leading-none">
              {t.whatWeDo.title}
            </h2>
            <Separator className="w-24 bg-primary h-1 mx-auto" />
            <p className="font-body text-lg text-white/80 leading-relaxed [text-shadow:0_6px_20px_rgba(0,0,0,1)]">
              {t.whatWeDo.p1}
            </p>
            <ul className="space-y-3 font-body text-white/80 text-lg text-left inline-block [text-shadow:0_6px_20px_rgba(0,0,0,1)]">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span>{t.whatWeDo.listItem1}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span>{t.whatWeDo.listItem2}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span>{t.whatWeDo.listItem3}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span>{t.whatWeDo.listItem4}</span>
              </li>
            </ul>
            <p 
              className="font-body text-lg text-white/80 leading-relaxed [text-shadow:0_6px_20px_rgba(0,0,0,1)]"
              dangerouslySetInnerHTML={{ __html: t.whatWeDo.p2 }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

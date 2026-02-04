"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/context/LanguageContext';

export function Grading() {
    const sectionRef = useRef<HTMLElement>(null);
    const [offsetY, setOffsetY] = useState(0);
    const { t } = useLanguage();

    const gradingInfo = [
      {
        value: "item-1",
        title: t.grading.accordionTitle1,
        content: t.grading.accordionContent1,
      },
      {
        value: "item-2",
        title: t.grading.accordionTitle2,
        content: t.grading.accordionContent2,
      },
      { 
        value: "item-3",
        title: t.grading.accordionTitle3,
        content: t.grading.accordionContent3,
      },
    ];
    
    const handleScroll = () => {
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            // scrollProgress goes from 0 to 1 as the section moves through the viewport
            const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            
            if (scrollProgress >= 0 && scrollProgress <= 1) {
                // Animate from a negative offset (up) to a positive offset (down)
                const startOffset = -150;
                const endOffset = 150;
                const newOffsetY = startOffset - (scrollProgress * (startOffset - endOffset));
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
    <section id="grading" ref={sectionRef} className="relative bg-black overflow-hidden pt-32 md:pt-44 lg:pt-52 pb-16 md:pb-24 lg:pb-32">
        <div
            className="absolute inset-0 w-full h-full"
            style={{ transform: `translateY(${offsetY}px)` }}
        >
            <Image
                src="/coffeeBeens.jpg"
                alt="Roasted coffee beans background"
                fill
                className="object-cover"
                data-ai-hint="coffee beans"
            />
         </div>
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <ScrollReveal>
                <div className="space-y-6">
                    <h2 className="font-headline text-7xl md:text-8xl font-bold uppercase text-primary">
                        {t.grading.title}
                    </h2>
                    <Separator className="w-24 bg-primary h-1" />
                    <p className="font-body text-lg text-white/80 leading-relaxed [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]">
                        {t.grading.subtitle}
                    </p>
                </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
                <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                    {gradingInfo.map((item) => (
                        <AccordionItem key={item.value} value={item.value} className="border-b-white/20 bg-black/30 backdrop-blur-sm rounded-lg px-4 mb-2">
                            <AccordionTrigger className="font-headline text-xl text-white hover:text-primary no-underline hover:no-underline">
                                {item.title}
                            </AccordionTrigger>
                            <AccordionContent className="font-body text-base text-white/70">
                                {item.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

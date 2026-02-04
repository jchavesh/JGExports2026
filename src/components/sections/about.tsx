"use client";

import Image from 'next/image';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="font-headline text-7xl md:text-8xl font-bold uppercase text-primary">
                {t.about.title}
              </h2>
              <Separator className="w-24 bg-primary h-1" />
              <p className="font-body text-lg text-white/80 leading-relaxed">
                {t.about.p1}
              </p>
              <p className="font-body text-lg text-white/80 leading-relaxed">
                {t.about.p2}
              </p>
              <p className="font-body text-lg text-white/80 leading-relaxed">
                {t.about.p3}
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 grid-rows-3 gap-4 h-[600px]">
                <div className="col-span-2 row-span-1 rounded-lg overflow-hidden shadow-2xl relative">
                    <Image
                    src="/about1.jpg"
                    alt="Lush green coffee plantation"
                    fill
                    className="object-cover"
                    data-ai-hint="coffee plantation"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    />
                </div>
                <div className="col-span-1 row-span-1 rounded-lg overflow-hidden shadow-2xl relative">
                    <Image
                    src="/about4.jpg"
                    alt="A coffee farmer holding fresh coffee cherries"
                    fill
                    className="object-cover"
                    data-ai-hint="coffee farmer"
                    sizes="(min-width: 768px) 25vw, 50vw"
                    />
                </div>
                <div className="col-span-1 row-span-1 rounded-lg overflow-hidden shadow-2xl relative">
                    <Image
                    src="/about2.jpg"
                    alt="Close up of roasted coffee beans"
                    fill
                    className="object-cover"
                    data-ai-hint="coffee beans"
                    sizes="(min-width: 768px) 25vw, 50vw"
                    />
                </div>
                 <div className="col-span-2 row-span-1 rounded-lg overflow-hidden shadow-2xl relative">
                    <Image
                    src="/about3.jpg"
                    alt="A steaming cup of black coffee"
                    fill
                    className="object-cover"
                    data-ai-hint="coffee cup"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    />
                </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
 
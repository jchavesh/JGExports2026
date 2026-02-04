"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Separator } from '@/components/ui/separator';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function QaLogistics() {
  const { t } = useLanguage();
  const inspectingImage = PlaceHolderImages.find(p => p.id === 'qa-inspecting');
  const cuppingImage = PlaceHolderImages.find(p => p.id === 'qa-cupping');
  const sacksImage = PlaceHolderImages.find(p => p.id === 'qa-sacks');

  const qualityPoints = [
    t.qa.point1,
    t.qa.point2,
    t.qa.point3,
    t.qa.point4,
  ];

  const logisticsPoints = [
    t.qa.logisticsPoint1,
    t.qa.logisticsPoint2,
    t.qa.logisticsPoint3,
    t.qa.logisticsPoint4,
  ]; 

  const priorityHtml = t.qa.priority
    .replace("uniformity", "<b>uniformity</b>")
    .replace("reliability", "<b>reliability</b>")
    .replace("uniformidad", "<b>uniformidad</b>")
    .replace("confiabilidad", "<b>confiabilidad</b>");

  return (
    <section id="qa" className="bg-background pt-8 md:pt-12 lg:pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[600px]">
                {inspectingImage && (
                <div className="col-span-1 row-span-1 rounded-lg overflow-hidden shadow-2xl relative">
                    <Image
                    src={inspectingImage.imageUrl}
                    alt={inspectingImage.description}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 25vw, 50vw"
                    data-ai-hint={inspectingImage.imageHint}
                    />
                </div>
                )}
                {cuppingImage && (
                <div className="col-span-1 row-span-1 rounded-lg overflow-hidden shadow-2xl relative">
                    <Image
                    src={cuppingImage.imageUrl}
                    alt={cuppingImage.description}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 25vw, 50vw"
                    data-ai-hint={cuppingImage.imageHint}
                    />
                </div>
                )}
                <div className="col-span-1 row-span-1 flex justify-end p-4 text-right items-center">
                    <p className="font-body text-2xl text-white/80 leading-tight"
                       dangerouslySetInnerHTML={{ __html: priorityHtml }}>
                    </p>
                </div>
                {sacksImage && (
                <div className="col-span-1 row-span-1 rounded-lg overflow-hidden shadow-2xl relative">
                    <Image
                    src={sacksImage.imageUrl}
                    alt={sacksImage.description}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 25vw, 50vw"
                    data-ai-hint={sacksImage.imageHint}
                    />
                </div>
                )}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-16">
              <div>
                <h2 className="font-headline text-5xl md:text-6xl font-bold uppercase text-primary">
                  {t.qa.title2}
                </h2>
                <Separator className="w-24 bg-primary h-1 my-6" />
                <ul className="space-y-4 font-body text-white/80 text-lg">
                  {logisticsPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-headline text-5xl md:text-6xl font-bold uppercase text-primary">
                  {t.qa.title1}
                </h2>
                <Separator className="w-24 bg-primary h-1 my-6" />
                <ul className="space-y-4 font-body text-white/80 text-lg">
                  {qualityPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
          
        </div>
      </div>
    </section>
  );
}

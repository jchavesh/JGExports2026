"use client";

import * as React from "react";
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Separator } from '@/components/ui/separator';
import { Logo } from '@/components/shared/logo';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from "@/context/LanguageContext";

export function Products() {
  const { t } = useLanguage();

  const portfolioItems = [
      {
          title: t.products.coffee,
          items: [
              t.products.coffeeItem1,
              t.products.coffeeItem2
          ],
          imageSrc: "/coffeeBeens.jpg",
          imageHint: "coffee beans",
          alt: "High-quality green coffee beans from Costa Rica ready for export."
      },
      { 
          title: t.products.cacao,
          items: [
              t.products.cacaoItem1,
              t.products.cacaoItem2
          ],
          imageSrc: "/cacaoBens.jpg",
          imageHint: "cacao beans",
          alt: "Dried Trinitario and hybrid cacao beans for international markets."
      },
      {
          title: t.products.ornamental,
          items: [
              t.products.ornamentalItem1,
              t.products.ornamentalItem2
          ],
          imageSrc: "/ornamentalPlants.jpg",
          imageHint: "ornamental plants",
          alt: "Bougainvillea and Heliconia ornamental plants from Costa Rica."
      },
      {
          title: t.products.other,
          items: [
              t.products.otherItem1,
              t.products.otherItem2
          ],
          imageSrc: "/otherPlants.jpg",
          imageHint: "other products",
          alt: "Various organic and non-organic agricultural products from Costa Rica."
      }
  ];


  return (
    <section id="products" className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
                <Logo width={256} height={64} className="mx-auto" />
                <h2 className="font-headline text-7xl md:text-8xl font-bold uppercase text-primary">
                    {t.products.title}
                </h2>
                <Separator className="w-24 bg-primary h-1 mx-auto" />
            </ScrollReveal>

            <div className="mt-16">
                 <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                    >
                    <CarouselContent>
                        {portfolioItems.map((category, index) => (
                            <CarouselItem key={category.title} className="md:basis-1/2 lg:basis-1/3">
                                <ScrollReveal delay={index * 150}>
                                    <div className="text-center p-0 m-4 h-full rounded-lg bg-background shadow-xl border border-border/50 overflow-hidden">
                                        <div className="aspect-[4/3] relative">
                                            <Image
                                                src={category.imageSrc}
                                                alt={category.alt}
                                                fill
                                                className="object-cover"
                                                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                                data-ai-hint={category.imageHint}
                                            />
                                        </div>
                                        <div className="p-8">
                                            <h3 className="font-headline text-2xl text-white mb-4">{category.title}</h3>
                                            <ul className="space-y-2 font-body text-white/70">
                                                {category.items.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
            </div>
        </div>
    </section>
  );
}

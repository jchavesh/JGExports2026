import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { WhatWeDo } from '@/components/sections/what-we-do';
import { ValueProposition } from '@/components/sections/value-proposition';
import { Products } from '@/components/sections/products';
import { Grading } from '@/components/sections/grading';
import { ExportProcess } from '@/components/sections/export-process';
import { QaLogistics } from '@/components/sections/qa-logistics';
import { Contact } from '@/components/sections/contact';
import { ScrollToTopButton } from '@/components/shared/scroll-to-top';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <ValueProposition />
        <Products />
        <Grading />
        <QaLogistics />
        <ExportProcess />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

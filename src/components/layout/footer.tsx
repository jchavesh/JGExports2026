"use client";

import { useState, useEffect } from 'react';
import { Logo } from '@/components/shared/logo';
import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const { t } = useLanguage();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
            <Logo width={128} height={32} className="opacity-70" />
            <p className="font-body text-sm text-white/70">
                &copy; {currentYear} J&G Exports. {t.footer.rights}
            </p>
        </div>
        <div className="font-body text-sm text-white/50">
            <p>{t.footer.slogan}</p>
        </div>
      </div>
    </footer> 
  );
}

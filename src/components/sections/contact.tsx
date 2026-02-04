"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { t } = useLanguage();

  const handleSendMessage = () => {
    const whatsAppNumber = "50661330225";
    const text = `${t.contact.whatsappMessage} ${name}.\n\n${t.contact.whatsappMessageLabel}: ${message}\n\n${t.contact.whatsappEmail}: ${email}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };
 
  return (
    <section id="contact" className="bg-background pb-16 md:pb-24 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-headline text-7xl md:text-8xl font-bold uppercase text-primary">
            {t.contact.title}
          </h2>
          <Separator className="w-24 bg-primary h-1 mx-auto" />
          <p className="font-body text-lg text-white/80">
            {t.contact.subtitle}
          </p>
        </ScrollReveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-16">
          <ScrollReveal delay={200} className="space-y-8">
            <h3 className="font-headline text-3xl text-white">{t.contact.infoTitle}</h3>
            <div className="space-y-6 font-body">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary"/>
                <a href="mailto:info@jgexportscr.com" className="text-white/80 hover:text-primary transition-colors">info@jgexportscr.com</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary"/>
                <span className="text-white/80">+506 6133 0225</span>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1"/>
                <span className="text-white/80">Escazu, Costa Rica</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="space-y-6">
              <div>
                <Input 
                  type="text" 
                  placeholder={t.contact.namePlaceholder} 
                  className="bg-background h-12"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder={t.contact.emailPlaceholder}
                  className="bg-background h-12"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Textarea 
                  placeholder={t.contact.messagePlaceholder}
                  rows={5} 
                  className="bg-background"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button 
                onClick={handleSendMessage}
                className="w-full md:w-auto font-bold" 
                size="lg"
              >
                {t.contact.button}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

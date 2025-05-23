
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen bg-gray-900">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('/lovable-uploads/hero.png')"
        }}
      >
        <div className="hero-overlay absolute inset-0"></div>
      </div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Вдоль Соловьиного края
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Интерактивный путеводитель по Курской области в вашем кармане. Откройте для себя исторические, 
            культурные и природные достопримечательности Соловьиного края.
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a 
              href="https://www.rustore.ru/catalog/app/com.solovinyykray.solovinyykray" 
              target="_blank" 
              rel="noopener noreferrer"
              className="no-underline"
            >
              <Button className="app-download-btn bg-white text-forest hover:bg-gray-100">
                <Download size={20} className="mr-2" />
                <span>Скачать на Android</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L12 18L17 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 6L12 11L17 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

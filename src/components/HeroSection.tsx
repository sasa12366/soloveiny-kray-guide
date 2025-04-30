
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen bg-gray-900">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80')"
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
            Интерактивный путеводитель по достопримечательностям Курской области в вашем кармане. Откройте для себя красоту и историю Соловьиного края.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button className="app-download-btn bg-white text-forest hover:bg-gray-100">
              <Download size={20} className="mr-2" />
              <span>Скачать на Android</span>
            </Button>
            <Button className="app-download-btn bg-white text-forest hover:bg-gray-100">
              <Download size={20} className="mr-2" />
              <span>Скачать на iOS</span>
            </Button>
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

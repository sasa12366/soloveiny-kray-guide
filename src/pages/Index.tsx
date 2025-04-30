
import React from 'react';
import Nav from '@/components/Nav';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Вдоль Соловьиного края - Путеводитель по Курской области</title>
        <meta name="description" content="Мобильное приложение-путеводитель по достопримечательностям Курской области. Откройте для себя красоту и историю Соловьиного края." />
        <meta name="keywords" content="Курская область, путеводитель, достопримечательности, мобильное приложение, туризм, Соловьиный край" />
        <meta name="author" content="Овсянников Александр" />
      </Helmet>

      <Nav />
      
      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;

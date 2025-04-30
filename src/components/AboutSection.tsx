
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forest">О проекте</h2>
          <p className="text-gray-700">
            Приложение «Вдоль Соловьиного края» родилось из любви к уникальной природе и богатой истории Курской области. 
            Наша миссия — сделать культурное и природное наследие региона доступным для каждого.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-forest">История создания</h3>
              <p className="text-gray-700">
                Проект был основан в 2023 году группой энтузиастов и краеведов Курской области, 
                объединенных идеей создания современного и удобного инструмента для изучения и популяризации 
                культурно-исторического наследия региона.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-forest">Цели и задачи</h3>
              <p className="text-gray-700">
                Наша главная цель — повышение туристической привлекательности Курской области через 
                создание инновационного цифрового продукта, который поможет жителям и гостям региона 
                легко ориентироваться среди его достопримечательностей.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-forest">Команда разработчиков</h3>
              <p className="text-gray-700">
                В нашу междисциплинарную команду входят краеведы, историки, 
                разработчики, дизайнеры и контент-менеджеры. Вместе мы создаем 
                продукт, соединяющий историческую точность с современными технологиями.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

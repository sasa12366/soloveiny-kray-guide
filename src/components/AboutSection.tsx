
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forest">О проекте</h2>
          <p className="text-gray-700">
            "Вдоль Соловьиного края" — это мобильный путеводитель по Курской области, 
            разработанный для путешественников и туристов, стремящихся познакомиться 
            с историческими, культурными и природными достопримечательностями региона.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-forest">Наша миссия</h3>
              <p className="text-gray-700">
                Создание цифрового инструмента, который поможет путешественникам по Курской 
                области с планированием поездок, предоставляя полную информацию о 
                достопримечательностях, маршрутах и культурных событиях.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-forest">Доступность</h3>
              <p className="text-gray-700">
                Приложение разработано с учётом потребностей всех категорий пользователей, 
                включая маломобильных граждан. Особое внимание уделено простоте навигации 
                и удобству использования на различных устройствах.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-forest">Развитие проекта</h3>
              <p className="text-gray-700">
                Мы постоянно работаем над улучшением приложения, добавляя новые 
                достопримечательности, маршруты и функции. Пользователи также могут 
                вносить свой вклад, добавляя новые интересные места в нашу базу данных.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

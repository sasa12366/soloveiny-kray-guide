
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Map, MapPin } from 'lucide-react';

const MapSection = () => {
  return (
    <section id="map" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forest">Карта достопримечательностей</h2>
          <p className="text-gray-700">
            Исследуйте интерактивную карту Курской области с отмеченными достопримечательностями и 
            маршрутами. Приложение поможет вам спланировать идеальное путешествие по Соловьиному краю.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-forest rounded-lg p-3 mr-4 shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Более 100 достопримечательностей</h3>
                  <p className="text-gray-700">
                    В нашем приложении собрана информация о более чем 100 исторических, культурных и природных 
                    объектах Курской области с подробными описаниями, фотографиями и рейтингами.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sky rounded-lg p-3 mr-4 shrink-0">
                  <Map className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Удобная навигация</h3>
                  <p className="text-gray-700">
                    Построение оптимальных маршрутов, определение вашего местоположения, расчёт расстояний и 
                    времени в пути — всё в одном приложении для комфортного путешествия.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-earth rounded-lg p-3 mr-4 shrink-0">
                  <Map className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Готовые маршруты</h3>
                  <p className="text-gray-700">
                    Мы подготовили популярные туристические маршруты разной продолжительности и сложности. 
                    Выбирайте тот, который подходит именно вам, и отправляйтесь в путь!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <Card className="border-0 shadow-xl overflow-hidden h-full">
              <CardContent className="p-0 h-full">
                <div className="aspect-video h-full">
                  <img 
                    src="/lovable-uploads/f6443dd9-f2ee-4392-89e0-60d8ff6e6095.png"
                    alt="Интерактивная карта Курской области в приложении" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

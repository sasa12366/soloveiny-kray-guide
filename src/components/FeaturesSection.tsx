
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Map, Headphones, Calendar, Users } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forest">Особенности приложения</h2>
          <p className="text-gray-700">
            «Вдоль Соловьиного края» — это больше, чем просто путеводитель. Это персональный гид, 
            который поможет вам открыть для себя самые интересные места Курской области и спланировать 
            идеальное путешествие.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-forest rounded-lg p-3 mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Интерактивные карты и маршруты</h3>
                  <p className="text-gray-700">
                    Поиск интересных мест и построение оптимальных маршрутов до них с использованием 
                    Google Maps. Более 100 достопримечательностей Курской области отмечены с подробными 
                    описаниями и фотографиями.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sky rounded-lg p-3 mr-4">
                  <Headphones className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Аудиогиды</h3>
                  <p className="text-gray-700">
                    Специально разработанные аудиогиды для маломобильных граждан и всех туристов 
                    помогут ощутить атмосферу каждого места через звуковые описания и исторические 
                    комментарии.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-earth rounded-lg p-3 mr-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Афиша событий</h3>
                  <p className="text-gray-700">
                    Всегда актуальная информация о культурных мероприятиях, фестивалях и 
                    событиях Курской области с возможностью добавления в личный календарь.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-forest-light rounded-lg p-3 mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Пользовательский контент</h3>
                  <p className="text-gray-700">
                    Возможность для пользователей добавлять новые места и достопримечательности, 
                    делиться своими впечатлениями и рекомендациями с другими путешественниками.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl border-8 border-white transform rotate-3 hover:rotate-0 transition-all duration-300">
                <img 
                  src="/lovable-uploads/dos2.png" 
                  alt="Курская природа" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 rounded-xl overflow-hidden shadow-2xl border-8 border-white w-3/4 transform -rotate-6 hover:rotate-0 transition-all duration-300 hidden md:block">
                <img 
                   src="/lovable-uploads/dos1.png" 
                  alt="Достопримечательности Курской области" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

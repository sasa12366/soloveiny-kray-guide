
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Map, Link } from 'lucide-react';

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
                  <h3 className="text-xl font-semibold mb-2">Интерактивная карта</h3>
                  <p className="text-gray-700">
                    Более 100 достопримечательностей Курской области отмечены на интерактивной карте с подробными 
                    описаниями, историческими справками и красочными фотографиями.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sky rounded-lg p-3 mr-4">
                  <Map className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Планирование маршрутов</h3>
                  <p className="text-gray-700">
                    Создавайте индивидуальные туристические маршруты, добавляйте понравившиеся места 
                    в избранное и делитесь ими с друзьями и близкими.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-earth rounded-lg p-3 mr-4">
                  <Link className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Аудиогиды</h3>
                  <p className="text-gray-700">
                    Специально разработанные аудиогиды для маломобильных граждан помогут 
                    ощутить атмосферу каждого места через звуковые описания и исторические комментарии.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl border-8 border-white transform rotate-3 hover:rotate-0 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80" 
                  alt="Курская природа" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 rounded-xl overflow-hidden shadow-2xl border-8 border-white w-3/4 transform -rotate-6 hover:rotate-0 transition-all duration-300 hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80" 
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

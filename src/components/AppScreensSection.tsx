
import React from 'react';
import { Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AppScreensSection = () => {
  const appScreens = [
    {
      id: 1,
      image: "/lovable-uploads/b79a20ff-2d72-41c4-bc6f-0ba446c61d36.png",
      alt: "Список достопримечательностей Курской области"
    },
    {
      id: 2,
      image: "/lovable-uploads/02942293-0dcc-4597-89bf-69e6eaf626b2.png",
      alt: "Карточка достопримечательности с подробной информацией"
    },
    {
      id: 3,
      image: "/lovable-uploads/123073c1-4a84-4ec2-8e92-a87277b65a6f.png",
      alt: "Обзорная экскурсия по Курску"
    },
    {
      id: 4,
      image: "/lovable-uploads/f852cdf6-0f3f-4113-9716-50c5aeb45bb4.png",
      alt: "Карточка Курского государственного университета"
    },
    {
      id: 5,
      image: "/lovable-uploads/81c0d43b-b2bd-4b78-bd4e-48eca7f2590e.png",
      alt: "Экран входа в приложение"
    },
    {
      id: 6,
      image: "/lovable-uploads/f6443dd9-f2ee-4392-89e0-60d8ff6e6095.png",
      alt: "Карта маршрутов в приложении"
    }
  ];

  return (
    <section id="app-screens" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forest">Интерфейс приложения "Вдоль Соловьиного края"</h2>
          <p className="text-gray-700">
            Ознакомьтесь с удобным и интуитивно понятным интерфейсом приложения "Вдоль Соловьиного края". 
            Мы разработали его с учетом потребностей всех категорий пользователей.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {appScreens.map((screen) => (
                <CarouselItem key={screen.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="border-0 shadow-lg overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-[9/16] relative flex items-center justify-center">
                          <img 
                            src={screen.image} 
                            alt={screen.alt} 
                            className="object-contain w-full h-full rounded-lg"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static mr-2 translate-y-0" />
              <CarouselNext className="relative static ml-2 translate-y-0" />
            </div>
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.rustore.ru/catalog/app/com.solovinyykray.solovinyykray" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-forest hover:underline font-semibold"
          >
            <Download size={20} className="mr-2" />
            <span>Скачать приложение и увидеть больше</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppScreensSection;

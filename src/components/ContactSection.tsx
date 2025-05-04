
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-forest-light/10 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forest">Свяжитесь с нами</h2>
          <p className="text-gray-700">
            Есть вопросы или предложения? Мы всегда рады обратной связи от наших пользователей.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-forest">Контактная информация</h3>
                  <p className="text-gray-700 mb-6">
                    Наша команда всегда готова ответить на ваши вопросы и помочь с использованием приложения.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-900">Контактное лицо</p>
                      <p className="text-gray-700">Овсянников Александр</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-forest mr-2" />
                      <p className="text-gray-700">+7 (909) 239-87-39</p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-forest mr-2" />
                      <p className="text-gray-700">ovsyannikovxxx@yandex.ru</p>
                    </div>
                  </div>
                </div>
                

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

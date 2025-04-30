
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Facebook, Instagram } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Сообщение отправлено! В реальном приложении здесь была бы настоящая форма.');
  };

  return (
    <section id="contact" className="bg-forest-light/10 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forest">Свяжитесь с нами</h2>
          <p className="text-gray-700">
            Есть вопросы или предложения? Мы всегда рады обратной связи от наших пользователей.
            Заполните форму ниже, и мы свяжемся с вами в ближайшее время.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Имя</label>
                  <Input id="name" placeholder="Введите ваше имя" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <Input id="email" type="email" placeholder="example@mail.ru" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Сообщение</label>
                  <Textarea id="message" placeholder="Введите ваше сообщение" rows={5} required />
                </div>
                
                <Button type="submit" className="w-full bg-forest hover:bg-forest-light text-white">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-forest">Контактная информация</h3>
              <p className="text-gray-700 mb-6">
                Наша команда всегда готова ответить на ваши вопросы и помочь с использованием приложения.
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">Адрес</p>
                  <p className="text-gray-700">г. Курск, ул. Ленина, 123</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Телефон</p>
                  <p className="text-gray-700">+7 (4712) 12-34-56</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-700">info@soloviny-kray.ru</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-forest">Мы в социальных сетях</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors" aria-label="Facebook">
                  <Facebook />
                </a>
                <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors" aria-label="Instagram">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

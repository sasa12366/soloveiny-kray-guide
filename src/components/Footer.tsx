
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-forest text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Соловьиный край</h3>
            <p className="text-gray-300">
              Мобильное приложение-путеводитель по достопримечательностям Курской области
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-300 hover:text-white transition-colors">Главная</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">О проекте</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Особенности</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="flex flex-col space-y-3 text-gray-300">
              <p>Овсянников Александр</p>
              <a href="tel:+79092398739" className="hover:text-white transition-colors">+7 (909) 239-87-39</a>
              <a href="mailto:ovsyannikovxxx@yandex.ru" className="hover:text-white transition-colors">ovsyannikovxxx@yandex.ru</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Соловьиный край. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

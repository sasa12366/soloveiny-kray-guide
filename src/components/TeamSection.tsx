
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Овсянников Александр Владимирович',
      photo: '/lovable-uploads/team2.png',
      initials: 'ОАВ',
      role: 'Разработчик'
    },
    {
      id: 2,
      name: 'Ноздрачёва Ульяна Дмитриевна',
      photo: '/lovable-uploads/team3.png',
      initials: 'НУД',
      role: 'Разработчик'
    },
    {
      id: 3,
      name: 'Старосельцев Олег Владимирович',
      photo: '/lovable-uploads/team1.png',
      initials: 'СОВ',
      role: 'Звукорежиссер, композитор'
    },
    {
      id: 4,
      name: 'Ноздрачев Дмитрий Евгеньевич',
      photo: '/lovable-uploads/c2dc7a97-201c-44f4-89c2-0b7fa57d923f.png',
      initials: 'НДЕ',
      role: 'Администратор проекта'
    },
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Наша команда</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 relative w-40 h-40 overflow-hidden rounded-full border-4 border-forest-light">
                {member.photo ? (
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Avatar className="w-full h-full">
                    <AvatarFallback className="text-2xl bg-forest-light text-white">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
              <p className="text-forest text-center font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

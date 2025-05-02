
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Старосельцев Олег Владимирович',
      photo: '/lovable-uploads/team1.png',
      initials: 'СОВ',
    },
    {
      id: 2,
      name: 'Овсянников Александр Владимирович',
      photo: '/lovable-uploads/81c0d43b-b2bd-4b78-bd4e-48eca7f2590e.png',
      initials: 'ОАВ',
    },
    {
      id: 3,
      name: 'Ноздрачёва Ульяна Дмитриевна',
      photo: '/lovable-uploads/f852cdf6-0f3f-4113-9716-50c5aeb45bb4.png',
      initials: 'НУД',
    },
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Наша команда</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className={`flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}
            >
              <div className="mb-4 w-full h-64 overflow-hidden rounded-lg">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

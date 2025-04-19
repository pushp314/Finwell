import React from 'react';
import { HandshakeIcon, ThumbsUp, Lightbulb, Mountain, Eye, Clock } from 'lucide-react';

const Values: React.FC = () => {
  const values = [
    { icon: HandshakeIcon, title: 'Trust', color: 'bg-red-50 text-red-400' },
    { icon: ThumbsUp, title: 'Engagement', color: 'bg-red-50 text-red-400' },
    { icon: Lightbulb, title: 'Innovation', color: 'bg-green-50 text-green-400' },
    { icon: Mountain, title: 'Audacity', color: 'bg-orange-50 text-orange-400' },
    { icon: Eye, title: 'Transparency', color: 'bg-blue-50 text-blue-400' },
    { icon: Clock, title: 'Agility', color: 'bg-purple-50 text-purple-400' }
  ];

  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#86C440] mb-6">
            Our values drive us.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our values are at the core of every team interaction. They can be found in all our employees, wherever they are in their journey within our company.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className={`w-12 h-12 rounded-full ${value.color} flex items-center justify-center mb-6`}>
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700">
                {value.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
import React from 'react';
import PressCard from './PressCard';
import { pressData } from './PressData';

const PressRelease: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-500 mb-3">Press Release</h2>
          <p className="text-lg text-gray-600">They talk about us in the press.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressData.map((item, index) => (
            <PressCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressRelease;
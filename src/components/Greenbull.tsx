import React from 'react';

const Greenbull: React.FC = () => {
  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            We are part of the Greenbull Group.
          </h2>
          <p className="text-xl text-gray-600">
            ARYA is part of the French group Greenbull, which aims to become the world leader in personal finance.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg"
            alt="Black bull with glowing green eye"
            className="w-full h-[400px] object-cover brightness-75"
          />
          <div className="absolute bottom-8 right-8 flex items-center">
            <div className="bg-[#83C54F] rounded-md p-2 mr-3">
              <img
                src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/bull.svg"
                alt="Bull icon"
                className="w-8 h-8 text-white"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <span className="text-3xl font-bold text-white">Greenbull</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greenbull;
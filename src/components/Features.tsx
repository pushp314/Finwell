import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/4050388/pexels-photo-4050388.jpeg"
              alt="Modern workspace with laptop"
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          {/* Right Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/7256897/pexels-photo-7256897.jpeg"
              alt="Modern office space"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Get your money to work for you.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            The financial markets provide daily opportunities for investors to grow their capital. Improve your trading skills, and leverage the right trading tech to grow your wealth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
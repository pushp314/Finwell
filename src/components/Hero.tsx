import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-8 px-6 lg:py-12 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Image */}
        <div className="lg:col-span-4 order-2 lg:order-1">
          <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="https://images.pexels.com/photos/6347729/pexels-photo-6347729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Greenbull trading dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Center Image */}
        <div className="lg:col-span-4 order-1 lg:order-2">
          <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Financial professional working"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Text Content */}
        <div className="lg:col-span-4 order-3 lg:order-3">
          <h1 className="text-5xl font-bold leading-tight mb-6 text-[#86C440]">
            Revolutionize the way you invest.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our primary mission is to empower individuals to take control of their personal finances and invest sensibly. ARYA protects and strengthens your financial wealth through technology solutions, a social platform, education, and training.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
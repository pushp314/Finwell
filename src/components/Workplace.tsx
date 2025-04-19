import React from 'react';

const Workplace: React.FC = () => {
  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-8">
            A workplace that fosters excellence.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            In every project, we are committed to our responsibilities of delivering a world-class trading experience so that we allow our community to accomplish their life's mission.
          </p>
          <p className="text-xl text-gray-600 mb-8">
            <span className="font-semibold">"Together we achieve more"</span> is the code that our team lives and breathes each day. Accordingly, we designed our environment around the collaboration of interdisciplinary teams.
          </p>
          <p className="text-xl text-gray-600">
            Our corporate culture has been shaped over time and is authentic and unique. It pushes creativity while also delivering on a powerful impact. We operate with empathy and trust to go as far as possible together.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Top Row - 2 larger images */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[300px]">
              <img
                src="https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg"
                alt="Professional working on laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[300px]">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                alt="Team working in modern office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom Row - 3 equal-sized images */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[250px]">
            <img
              src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg"
              alt="Modern meeting room"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-[250px]">
            <img
              src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
              alt="Collaboration session"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-[250px]">
            <img
              src="https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg"
              alt="Modern workspace with laptop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workplace;
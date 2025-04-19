import React from 'react';
import { ArrowRight } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-[#86C440] text-center mb-16">
          Careers in ARYA
        </h2>

        {/* Job Listing */}
        <div className="mb-8">
          <a href="#" className="block p-6 hover:bg-gray-50 rounded-lg transition-colors duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h3 className="text-xl font-semibold text-gray-800">Back-end Developer</h3>
                <span className="text-gray-600">Dubai</span>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </div>
          </a>
        </div>

        {/* View All Link */}
        <div className="text-center">
          <a href="#" className="text-[#86C440] hover:text-[#6BA63E] font-medium transition-colors duration-200">
            View all job openings
          </a>
        </div>

        {/* History Section */}
        <div className="mt-32 text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-[#83C54F] rounded-full p-4">
              <img
                src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/play.svg"
                alt="Play icon"
                className="w-8 h-8"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-[#86C440] mb-6">
            A journey through our history<br />with Greenbull Group
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            It is the birth of a group that is revolutionizing personal finances. The company has stood out for its boldness and its willingness to innovate from the outset.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Careers;
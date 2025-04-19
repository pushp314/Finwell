import React from 'react';
import { PressItem } from './PressData';

const PressCard: React.FC<PressItem> = ({ image, logo, title, link }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {logo && (
          <div className="absolute top-4 left-4">
            <img 
              src={logo} 
              alt="Press Logo" 
              className="h-8"
            />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2 min-h-[3.5rem]">
          {title}
        </h3>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
        >
          Read the article
          <svg 
            className="w-4 h-4 ml-1" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PressCard;
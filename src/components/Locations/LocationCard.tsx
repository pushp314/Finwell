import React from 'react';
import { LocationItem } from './LocationData';

const LocationCard: React.FC<LocationItem> = ({ image, city, address, country }) => {
  return (
    <div className="group">
      <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={`${city} office`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{city}</h3>
        <p className="text-gray-600">{address}</p>
        <p className="text-gray-600">{country}</p>
      </div>
    </div>
  );
};

export default LocationCard;
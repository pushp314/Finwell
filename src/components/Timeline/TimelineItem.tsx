import React, { useEffect, useRef, useState } from 'react';
import { TimelineItem as TimelineItemType } from './TimelineData';

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
  isActive: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, isActive }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`timeline-item flex mb-16 relative ${
        isVisible ? 'animate-fadeIn' : 'opacity-0'
      }`}
      style={{ 
        transitionDelay: `${index * 0.2}s`,
        transitionDuration: '0.8s'
      }}
    >
      {/* Year column */}
      <div className="w-1/4 pr-8 text-right">
        <h3 className={`text-4xl font-bold sticky top-8 transition-colors duration-300 ${
          isActive ? 'text-green-500' : 'text-gray-400'
        }`}>
          {item.year}
        </h3>
      </div>

      {/* Timeline dot */}
      <div className="timeline-dot-container">
        <div className={`timeline-dot ${isActive ? 'active' : ''}`}></div>
      </div>

      {/* Content column */}
      <div className="timeline-content max-w-xs">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
          <h4 className="text-2xl font-semibold text-gray-800 p-6 pb-4">{item.title}</h4>
          <p className="text-gray-600 leading-relaxed px-6 pb-6">{item.description}</p>
          <div className="w-full">
            <img 
              src={item.imageUrl} 
              alt={`${item.title}`}
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
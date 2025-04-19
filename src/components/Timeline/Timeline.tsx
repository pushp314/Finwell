import React, { useRef, useEffect, useState } from 'react';
import TimelineItem from './TimelineItem';
import { timelineData } from './TimelineData';
import './Timeline.css';

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const element = timelineRef.current;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const totalHeight = rect.height;
        
        let progressValue = 0;
        if (rect.top <= 0) {
          progressValue = Math.min((-rect.top) / (totalHeight - windowHeight) * 100, 100);
        }
        
        setProgress(progressValue);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="timeline-section py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">A Journey Through Our History</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From our humble beginnings to our ambitious vision for the future, 
            explore the key milestones that have shaped Greenbull Group.
          </p>
        </div>

        <div className="timeline-container relative" ref={timelineRef}>
          <div className="timeline-line"></div>
          <div 
            className="timeline-progress" 
            style={{ height: `${progress}%` }}
          ></div>
          
          <div className="timeline-items space-y-16">
            {timelineData.map((item, index) => (
              <TimelineItem 
                key={item.year} 
                item={item} 
                index={index}
                isActive={progress > (index / timelineData.length) * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
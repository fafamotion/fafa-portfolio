import React from 'react';
import { playMedia } from '../playMedia';

const GAP = 8; // Reduced gap

const Play = () => {
  return (
    <div className="w-full min-h-screen pt-0 pb-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" style={{ gap: GAP }}>
        {playMedia.map((item, index) => {
          const isVideo = item.src.endsWith('.webm') || item.src.endsWith('.mp4');
          
          return (
            <div 
              key={index} 
              className="aspect-square w-full"
            >
              {isVideo ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={item.src}
                  alt=""
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Play;

import React from 'react';

const VideoContainer = ({ src, title }) => (
  <div className="w-full aspect-video bg-black overflow-hidden">
    <iframe
      className="w-full h-full"
      src={src}
      title={title}
      frameBorder="0"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
    />
  </div>
);

export default function Reel() {
  return (
    <section className="py-2">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-6">
        <VideoContainer 
          src="https://www.youtube.com/embed/_Cba6MoJOAA?rel=0&modestbranding=1" 
          title="Reel 2025" 
        />
      </div>
    </section>
  );
}

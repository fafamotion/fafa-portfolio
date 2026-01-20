import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { works } from '../data';

const isVideo = (url) => url.endsWith('.webm') || url.endsWith('.mp4');

const VimeoPlayer = ({ url }) => (
  <div className="relative w-full pt-[56.25%] bg-black/5">
    <iframe
      src={url.replace('vimeo.com/', 'player.vimeo.com/video/')}
      className="absolute top-0 left-0 w-full h-full"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    />
  </div>
);

const MediaItem = ({ src, className = '' }) => {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={`w-full h-auto ${className}`}
      />
    );
  }
  return <img src={src} alt="" className={`w-full h-auto ${className}`} />;
};

const DetailPage = ({ isDark }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const work = works.find((w) => w.slug === slug);

  useEffect(() => {
    if (!work) {
      navigate('/');
    }
  }, [work, navigate]);

  if (!work) return null;

  return (
    <div className={`w-full min-h-screen pt-12 pb-20 ${isDark ? 'text-white' : 'text-black'}`}>
      <div className="max-w-[1200px] mx-auto px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-1">{work.title}</h1>

        <div className="flex flex-col gap-0 mb-2 text-base opacity-80">
          <div>
            <span className="block text-xs opacity-60 mb-0.5">YEAR</span>
            {work.year}
          </div>
          <div>
            <span className="block text-xs opacity-60 mb-0.5">ROLE</span>
            {work.role}
          </div>
        </div>

        <div className="w-full mb-4">
          {work.videoUrl ? (
            <VimeoPlayer url={work.videoUrl} />
          ) : (
            <div className="w-full">
              <MediaItem src={work.url} />
            </div>
          )}
        </div>

        {work.description && (
          <div className="max-w-2xl mb6 whitespace-pre-line text-lg leading-relaxed opacity-90">
            {work.description}
          </div>
        )}

        <div className="space-y-24">
          {work.mediaGroups ? (
            work.mediaGroups.map((group, index) => (
              <div key={index} className="space-y-8">
                {group.videoUrl && <VimeoPlayer url={group.videoUrl} />}
                
                {group.images && group.images.length > 0 && (
                  <div className={`grid gap-4 ${
                    group.images.length === 1 ? 'grid-cols-1' :
                    group.images.length === 2 ? 'grid-cols-2' :
                    'grid-cols-1 md:grid-cols-3'
                  }`}>
                    {group.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="w-full">
                        <MediaItem src={img} className="object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            work.detailImages && work.detailImages.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {work.detailImages.map((img, index) => (
                  <div key={index} className="w-full">
                    <MediaItem src={img} className="object-cover" />
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

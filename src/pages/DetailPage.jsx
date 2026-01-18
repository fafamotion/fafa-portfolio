import React from 'react';
import { useParams } from 'react-router-dom';
import { works } from '../data'; // 导入数据

export default function DetailPage({ isDark }) {
  const { id } = useParams(); // 这里的 id 实际上是 slug

  // 根据 slug 查找对应的项目
  const work = works.find(item => item.slug === id);

  // 如果没有找到项目，可以显示一个提示信息
  if (!work) {
    return <div>项目未找到</div>;
  }

  return (
    <div className="max-w-5xl mx-auto py-12 mb-12">
      <h1 className="text-6xl font-bold mb-1">{work.title}</h1>
      <div className={`grid grid-cols-2 gap-4 mb-8 text-sm ${isDark ? 'text-white' : 'text-black'}`}>
        <div>
          <p>Year</p>
          <p>{work.year}</p>
        </div>
        <div>
          <p>Role</p>
          <p>{work.role}</p>
        </div>
      </div>

      {/* 项目简介 */}
      {work.description && (
        <div className="mb-12">
          {work.description.split('\n').map((line, index) => (
            <p key={index} className={index === 0 ? 'text-base' : 'text-sm text-black/50 dark:text-white/50'}>
              {line}
            </p>
          ))}
        </div>
      )}

      {/* Media Section: Renders mediaPairs or default video/grid */}
      {(() => {
        const getEmbedUrl = (url) => {
          if (!url) return null;
          const youtubeRegex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
          const youtubeMatch = url.match(youtubeRegex);
          if (youtubeMatch && youtubeMatch[1]) {
            return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
          }
          const vimeoRegex = /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/;
          const vimeoMatch = url.match(vimeoRegex);
          if (vimeoMatch && vimeoMatch[1]) {
            return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
          }
          return null;
        };

        // Layout for projects with mediaGroups (e.g., OnePlus Community)
        if (work.mediaGroups && work.mediaGroups.length > 0) {
          return (
            <div>
              {work.mediaGroups.map((group, index) => {
                const embedUrl = getEmbedUrl(group.videoUrl);
                const imgCount = group.images.length;
                const gridClass = (imgCount === 4 || imgCount === 2)
                  ? 'grid-cols-1 sm:grid-cols-2'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

                return (
                  <div key={index} className="mb-12">
                    {embedUrl && (
                      <div style={{padding: '56.25% 0 0 0', position: 'relative'}} className="mb-8">
                        <iframe
                          src={embedUrl}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                          title={`Video ${index + 1}`}
                        ></iframe>
                      </div>
                    )}
                    {group.images && group.images.length > 0 && (
                      <div className={`grid ${gridClass} gap-8`}>
                        {group.images.map((src, idx) => {
                          const isVideo = /\.(webm|mp4)$/i.test(src);
                          return (
                            <div key={idx} className="bg-gray-100 dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md">
                              {isVideo ? (
                                <video
                                  src={src}
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  preload="metadata"
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <img
                                  src={src}
                                  alt={`Detail ${index + 1}-${idx + 1}`}
                                  loading="lazy"
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        }

        // Default layout for single video and image grid
        return (
          <>
            {work.videoUrl && (() => {
              const embedUrl = getEmbedUrl(work.videoUrl);
              if (!embedUrl) return null;
              return (
                <div style={{padding: '56.25% 0 0 0', position: 'relative'}} className="mb-12">
                  <iframe
                    src={embedUrl}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                    title={work.title}
                  ></iframe>
                </div>
              );
            })()}

            {work.detailImages && work.detailImages.length > 0 && (() => {
              const imageCount = work.detailImages.length;
              const gridClass = (imageCount === 4 || imageCount === 2)
                ? 'grid-cols-1 sm:grid-cols-2'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
              return (
                <div className={`grid ${gridClass} gap-8`}>
                  {work.detailImages.map((src, index) => {
                    const isVideo = /\.(webm|mp4)$/i.test(src);
                    return (
                      <div key={index} className="bg-gray-100 dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md">
                        {isVideo ? (
                          <video
                            src={src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <img
                            src={src}
                            alt={`${work.title} detail ${index + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })()}
          </>
        );
      })()}
    </div>
  );
}

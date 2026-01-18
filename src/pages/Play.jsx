import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { playMedia } from '../playMedia';

const GAP = 8;

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const isVideo = (src) => src.endsWith('.webm') || src.endsWith('.mp4');

const MediaItem = ({ src }) => {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-contain"
      />
    );
  }
  return <img src={src} alt="" className="w-full h-full object-contain" />;
};

const Play = () => {
  const hasMounted = useRef(false);
  useEffect(() => {
    hasMounted.current = true;
  }, []);

  return (
    <motion.main
      className="w-full min-h-screen pt-0 pb-20"
      variants={containerVariants}
      initial={hasMounted.current ? false : 'hidden'}
      animate="show"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" style={{ gap: GAP }}>
        {playMedia.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial={hasMounted.current ? false : undefined}
            className="aspect-square w-full"
          >
            <MediaItem src={item.src} />
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
};

export default Play;

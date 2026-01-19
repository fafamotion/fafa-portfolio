import React, { useRef, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { playMedia } from '../playMedia';

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
        className="w-full h-auto block object-cover"
      />
    );
  }
  return <img src={src} alt="" className="w-full h-auto block object-cover" />;
};

const Play = () => {
  const hasMounted = useRef(false);
  useEffect(() => {
    hasMounted.current = true;
  }, []);

  const colClass = useMemo(() => {
    const n = playMedia.length
    const smCols = n >= 2 ? 2 : 1
    const lgCols = n >= 4 ? 4 : n === 3 ? 3 : n === 2 ? 2 : 1
    const xlCols = n >= 5 ? 5 : n === 4 ? 4 : n === 3 ? 3 : n === 2 ? 2 : 1

    const smMap = { 1: 'sm:columns-1', 2: 'sm:columns-2' }
    const lgMap = { 1: 'lg:columns-1', 2: 'lg:columns-2', 3: 'lg:columns-3', 4: 'lg:columns-4', 5: 'lg:columns-5' }
    const xlMap = { 1: 'xl:columns-1', 2: 'xl:columns-2', 3: 'xl:columns-3', 4: 'xl:columns-4', 5: 'xl:columns-5' }

    return `columns-1 ${smMap[smCols]} ${lgMap[lgCols]} ${xlMap[xlCols]}`
  }, []);

  return (
    <motion.main
      className={`${colClass} space-y-6 [column-gap:1rem] mt-0`}
      variants={containerVariants}
      initial={hasMounted.current ? false : 'hidden'}
      animate="show"
    >
      {playMedia.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          initial={hasMounted.current ? false : undefined}
          className="break-inside-avoid flex flex-colno mb-3"
        >
          <MediaItem src={item.src} />
        </motion.div>
      ))}
    </motion.main>
  );
};

export default Play;

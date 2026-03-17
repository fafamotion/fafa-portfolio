import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function About() {
  const hasMounted = useRef(false);
  useEffect(() => {
    hasMounted.current = true;
  }, []);

  return (
    <motion.section 
      className="min-h-[calc(100vh-120px)] flex items-center"
      variants={containerVariants}
      initial={hasMounted.current ? false : 'hidden'}
      animate="show"
    >
      <div className="w-full">
        <div className="max-w-[1100px] mx-auto py-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            <motion.div 
              className="flex-shrink-0"
              variants={itemVariants}
              initial={hasMounted.current ? false : undefined}
            >
              <img 
                src="/about.jpg" 
                alt="Fafa" 
                className="w-full md:w-[500px] h-auto md:h-[500px] object-cover aspect-square"
              />
            </motion.div>

            <motion.div 
              className="flex-1 text-[26px] leading-tight opacity-100 text-left"
              variants={itemVariants}
              initial={hasMounted.current ? false : undefined}
            >
              <p className="mb-5">
                I'm Fafa, a senior 2D motion designer based in Qingdao, China, currently working at{' '}
                <a
                  href="https://flatwhitemotion.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 font-bold hover:opacity-60 transition-opacity"
                >
                  FlatwhiteMotion
                </a>.
              </p>

              <p className="mb-5">
               I create abstract and geometric motion, exploring natural movement and balance through ideas inspired by Taoist philosophy.
              </p>

              <p className="mb-5">
               Recently exploring Rive and Cavalry, experimenting with different ways of building motion systems.
              </p>

              <p>
                When I'm not in front of the screen, you'll probably find me practicing calligraphy.
              </p>
            </motion.div>
          </div>

          {/* 三张图片 */}
          <motion.div 
            className="mt-6 grid grid-cols-3 gap-4"
            variants={containerVariants}
            initial={hasMounted.current ? false : 'hidden'}
            animate="show"
          >
            <motion.img 
              src="/about2.jpg" 
              alt="About 2" 
              className="w-full aspect-square object-cover"
              variants={itemVariants}
              initial={hasMounted.current ? false : undefined}
            />
            <motion.img 
              src="/about3.jpg" 
              alt="About 3" 
              className="w-full aspect-square object-cover"
              variants={itemVariants}
              initial={hasMounted.current ? false : undefined}
            />
            <motion.img 
              src="/about4.jpg" 
              alt="About 4" 
              className="w-full aspect-square object-cover"
              variants={itemVariants}
              initial={hasMounted.current ? false : undefined}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

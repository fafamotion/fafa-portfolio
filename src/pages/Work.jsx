import React, { useMemo, useRef, useEffect, memo } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

import { works } from '../data';

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
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

function Work() {
  const isVideo = (src) => /\.(webm|mp4|mov)$/i.test(src)
  const isImage = (src) => /\.(gif|png|jpe?g|webp|avif)$/i.test(src)

  const hasMounted = useRef(false)
  useEffect(() => {
    hasMounted.current = true
  }, [])

  const colClass = useMemo(() => {
    const n = works.length
    const smCols = n >= 2 ? 2 : 1
    const lgCols = n >= 4 ? 4 : n === 3 ? 3 : n === 2 ? 2 : 1

    const smMap = { 1: 'sm:columns-1', 2: 'sm:columns-2' }
    const lgMap = { 1: 'lg:columns-1', 2: 'lg:columns-2', 3: 'lg:columns-3', 4: 'lg:columns-4' }

    return `columns-1 ${smMap[smCols]} ${lgMap[lgCols]}`
  }, [])

  return (
    <motion.main
      className={`${colClass} space-y-6 [column-gap:1rem] mt-0`}
      variants={containerVariants}
      initial={hasMounted.current ? false : 'hidden'}
      animate="show"
    >
      {works.map((work) => {
        const Wrapper = ({ children }) => {
          if (work.interactive && work.slug) {
            return (
              <NavLink to={`/work/${work.slug}`} className="block">
                {children}
              </NavLink>
            )
          }
          return <div>{children}</div>
        }

        const src = encodeURI(work.url)

        return (
          <motion.div
            key={work.id}
            variants={itemVariants}
            initial={hasMounted.current ? false : undefined}
            className={[
              'break-inside-avoid flex flex-col mb-3',
              work.interactive ? 'group cursor-pointer' : 'cursor-default',
            ].join(' ')}
          >
            <Wrapper>
              <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-neutral-800">
                {isVideo(work.url) ? (
                  <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className={[
                      'w-full h-auto block object-cover transition-all duration-300',
                      work.interactive ? 'group-hover:opacity-30 group-hover:scale-[1.02]' : '',
                    ].join(' ')}
                  />
                ) : isImage(work.url) ? (
                  <img
                    src={src}
                    alt={work.title || ''}
                    loading="lazy"
                    className={[
                      'w-full h-auto block object-cover transition-all duration-300',
                      work.interactive ? 'group-hover:opacity-30 group-hover:scale-[1.02]' : '',
                    ].join(' ')}
                  />
                ) : null}

                {work.interactive && (
                  <>
                    <div className="absolute inset-0 bg-white/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex flex-col items-center text-center gap-[1px]">
                        <div className="text-[52px] md:text-[35px] font-bold tracking-tight text-black leading-[1]">
                          {work.title}
                        </div>
                        {work.category && (
                          <div className="text-[10px] tracking-widest text-black/70 leading-none">
                            {work.category}
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </Wrapper>
          </motion.div>
        )
      })}
    </motion.main>
  )
}

export default memo(Work)

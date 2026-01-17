import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.35 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const works = [

   {
    id: 2,
    title: 'Ink & The City',
    category: 'Personal',
    url: '/project_test/5.jpg',
    interactive: true,
    href: '/work/ink-and-the-city',
  },


  {
    id: 1,
    title: '11111',
    category: '1',
    url: '/project/Startrek/star_trek.webm',
    interactive: false,
  },
 
]

export default function Work({ isDark }) {
  const isVideo = (src) => /\.(webm|mp4|mov)$/i.test(src)
  const isImage = (src) => /\.(gif|png|jpe?g|webp|avif)$/i.test(src)

  // ✅ 根据作品数量动态控制列数：作品少 -> 列也少（不会固定空出 3 列）
  const colClass = useMemo(() => {
    const n = works.length

    const smCols = n >= 2 ? 2 : 1
    const lgCols = n >= 3 ? 3 : n === 2 ? 2 : 1

    // 你现在是 lg:3，如果以后想最多 4 列，可以把 lgCols 的逻辑改掉
    return `columns-1 sm:columns-${smCols} lg:columns-${lgCols}`
  }, [])

  return (
    <motion.main
      className={`${colClass} gap-4 space-y-6`}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {works.map((work) => {
        const Wrapper = ({ children }) => {
          if (work.interactive && work.href) {
            return <NavLink to={work.href}>{children}</NavLink>
          }
          return <div>{children}</div>
        }

        return (
          <motion.div
            key={work.id}
            variants={itemVariants}
            className={[
              'break-inside-avoid flex flex-col mb-3',
              work.interactive ? 'group cursor-pointer' : 'cursor-default',
            ].join(' ')}
          >
            <Wrapper>
              <div
                className={`relative w-full overflow-hidden ${
                  isDark ? 'bg-neutral-800' : 'bg-gray-100'
                }`}
              >
                {/* media */}
                {isVideo(work.url) ? (
                  <video
                    src={work.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className={[
                      'w-full h-auto block object-cover transition-all duration-300',
                      work.interactive
                        ? 'group-hover:opacity-30 group-hover:scale-[1.02]'
                        : '',
                    ].join(' ')}
                  />
                ) : isImage(work.url) ? (
                  <img
                    src={work.url}
                    alt={work.title || ''}
                    loading="lazy"
                    className={[
                      'w-full h-auto block object-cover transition-all duration-300',
                      work.interactive
                        ? 'group-hover:opacity-30 group-hover:scale-[1.02]'
                        : '',
                    ].join(' ')}
                  />
                ) : null}

                {/* hover overlay：只由 interactive 控制 */}
                {work.interactive && (
                  <>
                    <div
                      className="absolute inset-0 bg-white/50 opacity-0 transition-opacity duration-300
                                 group-hover:opacity-100"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300
                                 group-hover:opacity-100"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="text-[22px] md:text-[58px] font-bold uppercase tracking-tight text-black leading-none">
                          {work.title}
                        </div>
                        {work.category && (
                          <div className="mt-2 text-[11px] uppercase tracking-widest text-black/70">
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

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
    id: 12,
    title: 'Krayon',
    category: '2025/Animation',
    url: '/project/2025/Krayon/Krayon.webm',
    interactive: true,
  },

 {
    id: 12,
    title: 'ZZZ',
    category: '2025/Animation',
    url: '/project/2025/ZZZ/zzz.webm',
    interactive: false,
  },

 {
    id: 11,
    title: 'Mid',
    category: '2025/Animation',
    url: '/project/2025/Mid/中秋.webm',
    interactive: false,
  },

 {
    id: 10,
    title: 'IQOO',
    category: '2025/Animation',
    url: '/project/2025/IQOO/电竞双芯.webm',
    interactive: false,
  },

 {
    id: 9,
    title: 'VivoS30',
    category: '2025/Animation',
    url: '/project/2025/VIVO/vivos30.webm',
    interactive: true,
  },



 {
    id: 8,
    title: 'Book',
    category: '2025/Animation',
    url: '/project/2025/Fruit/book.webm',
    interactive: true,
  },


 {
    id: 7,
    title: 'Ink CIty',
    category: '2025/Animation',
    url: '/project/2025/Ink City/inkcity.webm',
    interactive: true,
  },


 {
    id: 6,
    title: 'WhiteNoise',
    category: '2024/Animation',
    url: '/project/2024/Whitenoise/whitenoise.webm',
    interactive: true,
  },


    {
    id: 5,
    title: 'OnePlus Oxygen',
    category: '2024/Animation',
    url: '/project/2024/ObeplusOxygen/oneplusoxygen.webm',
    interactive: true,
  },


    {
    id: 4,
    title: 'OnePlus Nord',
    category: '2024/Animation',
    url: '/project/2024/OneplusNode/oneplusnode.webm',
    interactive: true,
  },


    {
    id: 3,
    title: 'MindPark',
    category: '2023/Animation',
    url: '/project/2023/Mindpark/Mindpark.webm',
    interactive: true,
  },


  {
    id: 2,
    title: 'OnePlus',
    category: '2023/Animation',
    url: '/project/2023/Oneplus_community/OnePlus - Power of Community Composition.webm',
    interactive: true,
  },

  {
    id: 1,
    title: '',
    category: '',
    url: '/project/2023/Startrek/star_trek.webm',
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
  const lgCols = n >= 4 ? 4 : n === 3 ? 3 : n === 2 ? 2 : 1

  const smMap = {
    1: 'sm:columns-1',
    2: 'sm:columns-2',
  }

  const lgMap = {
    1: 'lg:columns-1',
    2: 'lg:columns-2',
    3: 'lg:columns-3',
    4: 'lg:columns-4',
  }

  return `columns-1 ${smMap[smCols]} ${lgMap[lgCols]}`
}, [works.length])


  return (
    <motion.main
      className={`${colClass} gap-4 space-y-6 mt-0`}
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
                      <div className="flex flex-col items-center text-center gap-[1px]">
  <div className="text-[22px] md:text-[38px] font-bold tracking-tight text-black leading-[0.9]">
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

import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.35,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

// data
const works = [
  { id: 6, title: "Long Art", category: "Experimental", url: "project_test/5.jpg" },
  { id: 7, title: "Vertical Project", category: "Motion", url: "project_test/Print-1.jpg" },
  { id: 8, title: "Square Design", category: "Graphic", url: "project_test/print-3.00061.jpg" },
  { id: 9, title: "Landscape Film", category: "Video", url: "project_test/Snapshot 2.png" },
  { id: 10, title: "Long Art", category: "Experimental", url: "project_test/微信图片_20250428194048.png" },
  { id: 5, title: "Long Art", category: "Experimental", url: "project_test/Comp 2_00000.jpg" },
  { id: 1, title: "Vertical Project", category: "Motion", url: "project_test/d0af8c91d8405a266678ab6633d1e0a4ae6fe0f5.jpg" },
  { id: 2, title: "Square Design", category: "Graphic", url: "project_test/print-4.00126.jpg" },
  { id: 3, title: "Landscape Film", category: "Video", url: "project_test/Snapshot 2.png" },
  { id: 4, title: "Long Art", category: "Experimental", url: "project_test/微信图片_20250428194048.png" },
]

export default function Work({ isDark }) {
  return (
    <motion.main
      className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {works.map((work) => (
        <motion.div
          key={work.id}
          variants={itemVariants}
          className="break-inside-avoid flex flex-col group cursor-pointer mb-3"
        >
          <div className={`relative w-full overflow-hidden ${isDark ? 'bg-neutral-800' : 'bg-gray-100'}`}>
            <img
              src={work.url}
              loading="lazy"
              alt={work.title}
              className="w-full h-auto block object-cover transition-all duration-300
                         group-hover:opacity-30 group-hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-white/50 opacity-0 transition-opacity duration-300
                            group-hover:opacity-100" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300
                            group-hover:opacity-100">
              <div className="flex flex-col items-center text-center">
                <div className="text-[22px] md:text-[58px] font-bold uppercase tracking-tight text-black leading-none">
                  {work.title}
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-widest text-black/70">
                  {work.category}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.main>
  )
}

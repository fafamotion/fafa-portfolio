import React from 'react'

export default function Reel() {
  return (
    <section className="py-2">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-6">
        <h1 className="text-4xl font-bold tracking-tight">Reel 2025</h1>

        <div className="relative w-full bg-black max-h-[70vh] aspect-video">
          <video
            src="project_test/REEL.mp4"
            controls
            muted
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}

import React from 'react'

export default function Reel() {
  return (
    <section className="py-2">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-6">


        <div className="w-full aspect-video bg-black rounded-xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/_Cba6MoJOAA?rel=0&modestbranding=1"
            title="Reel 2025"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

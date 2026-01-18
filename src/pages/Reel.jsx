import React from 'react'

export default function Reel() {
  return (
    <section className="py-2">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-6">
        <h1 className="text-4xl font-bold tracking-tight">Reel 2025</h1>

        <div className="relative w-full bg-black max-h-[70vh] aspect-video">
          {/* 要更改视频，请替换 src 中的视频ID: dQw4w9WgXcQ */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/_Cba6MoJOAA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

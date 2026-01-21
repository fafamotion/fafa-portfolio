import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Work from './pages/Work'
import Play from './pages/Play'
import Reel from './pages/Reel'
import About from './pages/About'
import DetailPage from './pages/DetailPage'


export default function App() {
  // ✅ 主题状态：存到 sessionStorage
  const [isDark, setIsDark] = useState(
    sessionStorage.getItem('dark') === 'true'
  )

  const [time, setTime] = useState(
    new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
  )

  // 刷新/首次进入强制回顶 + 禁止浏览器恢复滚动位置
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  // 时间更新
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        })
      )
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // ✅ 主题持久化（sessionStorage）
  useEffect(() => {
    sessionStorage.setItem('dark', String(isDark))
  }, [isDark])

  const linkClass = ({ isActive }) =>
    isActive
      ? 'leading-none border-b-[2px] border-current pb-0'
      : 'leading-none opacity-100 hover:opacity-100 pb-0'

  // ✅ 正常网站
  return (
    <BrowserRouter>
      {/* ✅ 用 isDark 直接控制整站背景/文字 */}
      <div
        className={`min-h-screen font-sans ${
          isDark ? 'bg-black text-white' : 'bg-white text-black'
        }`}
      >
        <div className="mx-auto max-w-none px-[clamp(16px,4vw,64px)]">
          {/* Nav：也跟随 isDark（别用 dark:） */}
          <nav
            className={`sticky top-0 z-50 backdrop-blur border-b ${
              isDark
                ? 'bg-black/80 border-white/10 text-white'
                : 'bg-white/80 border-black/10 text-black'
            }`}
          >
            <div className="flex justify-between items-end pt-3 pb-0">
              <div className="flex flex-col items-start">
                <button
                  type="button"
                  className="text-[200px] font-bold tracking-tighter leading-none -ml-[0.06em]
                             cursor-pointer select-none bg-transparent border-0 p-0 text-inherit"
                  onPointerDown={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setIsDark((prev) => !prev)
                  }}
                >
                  Fafa
                </button>

                <span className="text-[28px] tabular-nums -translate-y-[8px]">
                  QINGDAO,CN - {time}
                </span>
              </div>

              <div className="flex gap-2 sm:gap-4 text-[28px] pb-1 leading-none -translate-y-[8px] flex-col sm:flex-row items-start sm:items-end">
                <NavLink
                  to="/"
                  end
                  onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
                  }
                  className={linkClass}
                >
                  Work
                </NavLink>

                <NavLink 
                  to="/Play" 
                  onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
                  }
                  className={linkClass}
                >
                  Play
                </NavLink>

                <NavLink to="/reel" className={linkClass}>
                  Reel
                </NavLink>

                <NavLink to="/about" className={linkClass}>
                  About
                </NavLink>

                <button
                  onClick={() => {
                    const footer = document.getElementById('contact')
                    footer?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="leading-none opacity-100 hover:opacity-100 pb-0 border-0 bg-transparent text-inherit cursor-pointer inline-block p-0 m-0 font-inherit text-[28px] self-start sm:self-end"
                >
                  Contact
                </button>
              </div>
            </div>
          </nav>

          {/* Pages：不传 isDark 给 Work，避免作品区"像刷新" */}
          <Routes>
            <Route path="/" element={<Work />} />
            <Route path="/work/:slug" element={<DetailPage isDark={isDark} />} />
            <Route path="/Play" element={<Play />} />
            <Route path="/reel" element={<Reel />} />
            <Route path="/about" element={<About />} />
          </Routes>

          {/* Footer：border 跟随 isDark */}
          <footer
            id="contact"
            className={`mt-24 border-t py-10 text-[28px] ${
              isDark ? 'border-white/10' : 'border-black/10'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="min-w-[220px]">
                <a
                  href="mailto:heyfafamotion@gmail.com"
                  className="leading-none hover:opacity-60 transition-opacity"
                >
                  heyfafamotion@gmail.com
                </a>
              </div>

              <div className="text-left">
                <a
                  href="https://www.instagram.com/fafa_motion?igsh=aW56NnBuY2I4dWs%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block leading-none hover:opacity-60 transition-opacity"
                >
                  Instagram
                </a>

                <a
                  href="https://linkedin.com/in/fafa-zhu-689035335"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block leading-none hover:opacity-60 transition-opacity"
                >
                  LinkedIn
                </a>

                <a
                  href="https://x.com/fafa818969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block leading-none hover:opacity-60 transition-opacity"
                >
                  X
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  )
}


import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import Work from './pages/Work'
import Reel from './pages/Reel'
import About from './pages/About'

export default function App() {
  // ✅ 密码门禁（sessionStorage：关掉浏览器再开会重新要密码）
  const [authorized, setAuthorized] = useState(
    sessionStorage.getItem('auth') === 'true'
  )
  const [password, setPassword] = useState('')

  const [time, setTime] = useState(
    new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
  )
  const [isDark, setIsDark] = useState(false)

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
      setTime(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const linkClass = ({ isActive }) =>
    isActive
      ? 'leading-none border-b-[2px] border-current pb-0'
      : 'leading-none opacity-30 hover:opacity-100 pb-0'

  // ✅ 未授权：只显示密码页
  if (!authorized) {
    const PASSWORD = 'fafapass' // ← 改成你自己的密码

    const submit = () => {
      if (password === PASSWORD) {
        sessionStorage.setItem('auth', 'true')
        setAuthorized(true)
      } else {
        alert('Wrong password')
      }
    }

    return (
      <div className="min-h-screen font-sans bg-white text-black flex items-center justify-center">
  <div className="w-full max-w-[320px] px-6 text-center">
    <div className="text-5xl font-bold tracking-tighter leading-none">
      Fafa
    </div>

    <div className="mt-2 text-[13px] font-bold opacity-60">
      Still working on
    </div>

    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') submit()
      }}
      placeholder="Password"
      className="mt-10 w-full border border-black/20 px-4 py-3 text-[14px] outline-none text-center"
    />

    <button
      onClick={submit}
      className="mt-4 w-full border border-black/40 py-3 text-[14px] font-bold
                 hover:bg-black hover:text-white transition-colors"
    >
      Enter
    </button>

    <div className="mt-6 text-[11px] opacity-40">
      Tip: close browser to re-lock
    </div>
  </div>
</div>

    )
  }

  // ✅ 已授权：正常网站
  return (
    <BrowserRouter>
      <div className={`min-h-screen font-sans ${isDark ? 'bg-[#121212] text-white' : 'bg-white text-black'}`}>
        <div className="mx-auto max-w-none px-[clamp(16px,4vw,64px)]">

          {/* Nav */}
          <nav className="sticky top-0 z-50 flex justify-between items-end py-1 backdrop-blur border-b
            bg-white/80 border-black/10 text-black">
            <div className="flex flex-col items-start">
  <div className="text-8xl font-bold tracking-tighter leading-none -ml-[0.06em]">
    Fafa
  </div>
  <span className="text-[15px] font-bold">
    QINGDAO,CN - {time}
  </span>
</div>

            <div className="flex gap-5 text-[18px] font-bold pb-1 leading-none">
              <NavLink
                to="/"
                end
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })}
                className={linkClass}
              >
                Work
              </NavLink>

              <NavLink to="/reel" className={linkClass}>
                Reel
              </NavLink>

              <NavLink to="/about" className={linkClass}>
                About
              </NavLink>
            </div>
          </nav>

          {/* Pages */}
          <Routes>
            <Route path="/" element={<Work isDark={isDark} />} />
            <Route path="/reel" element={<Reel />} />
            <Route path="/about" element={<About />} />
          </Routes>

          {/* Footer */}
          <footer className="py-20 text-center opacity-10 text-[9px] uppercase tracking-widest">
            End of Index
          </footer>

        </div>
      </div>
    </BrowserRouter>
  )
}

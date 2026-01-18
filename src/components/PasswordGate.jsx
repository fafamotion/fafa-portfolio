import React, { useState } from 'react'

export default function PasswordGate({ storageKey, title, children }) {
  const [authorized, setAuthorized] = useState(
    sessionStorage.getItem(storageKey) === 'true'
  )
  const [password, setPassword] = useState('')

  const PASSWORD = 'fafapass'

  const submit = () => {
    if (password === PASSWORD) {
      sessionStorage.setItem(storageKey, 'true')
      setAuthorized(true)
    } else {
      alert('Wrong password')
    }
  }

  if (!authorized) {
    return (
      <div className="min-h-screen font-sans bg-white text-black flex items-center justify-center">
        <div className="w-full max-w-[320px] px-6 text-center">
          <div className="text-5xl font-bold tracking-tighter leading-none">
            {title}
          </div>

          <div className="mt-2 text-[13px] font-bold opacity-60">
            Password required
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
            type="button"
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

  return <>{children}</>
}

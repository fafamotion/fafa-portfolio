import React from 'react'
import PasswordGate from '../components/PasswordGate'

export default function Play() {
  return (
    <PasswordGate storageKey="playAuth" title="Play">
      <section className="py-20">
        <div className="max-w-[900px]">
          <h1 className="text-5xl font-bold tracking-tight">Play</h1>
          <p className="mt-10 text-[16px] leading-relaxed opacity-80">
            Welcome to the Play section!
          </p>
        </div>
      </section>
    </PasswordGate>
  )
}

import React from 'react'
import PasswordGate from '../components/PasswordGate'

export default function About() {
  return (
    <PasswordGate storageKey="aboutAuth" title="About">
      <section className="py-20">
        <div className="max-w-[900px]">
          <h1 className="text-5xl font-bold tracking-tight">About</h1>
          <p className="mt-10 text-[16px] leading-relaxed opacity-80">
            I'm Fafa, a motion designer based in Qingdao, China.
          </p>
        </div>
      </section>
    </PasswordGate>
  )
}

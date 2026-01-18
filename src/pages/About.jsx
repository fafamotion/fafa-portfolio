import React from 'react';

export default function About() {
  return (
    <section className="py-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <img 
              src="/about.jpg" 
              alt="Fafa" 
              className="w-full md:w-[400px] h-auto md:h-[500px] object-cover"
            />
          </div>
          <div className="flex-1 text-[18px] leading-tight opacity-80 text-left">
            <p className="mb-2">
              I'm Junfeng Zhu, also known as <span className="font-bold">Fafa</span>.

              I'm a senior 2D motion designer based in Qingdao, China, currently working at <a href="https://flatwhitemotion.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-60 transition-opacity">FlatwhiteMotion</a>.
            </p>
            <p className="mb-2">
              My practice centers around abstract geometry, systems, and rhythm. Influenced by the idea of balance in Taoist philosophy—yin and yang—I approach visual design not as static composition, but as a dynamic relationship between opposing elements: motion and stillness, density and emptiness, control and randomness.
            </p>
            <p className="mb-2">
              I enjoy combining motion with a wide range of disciplines and cultural contexts, especially reinterpreting historical elements through contemporary visual language. Rather than preserving the past as it was, I'm more interested in exploring how it might exist today, in a new form.
            </p>
            <p className="mb-2">
              At the core of my work is the translation of abstract ideas into perceptible experiences. Motion, for me, is not decoration—it's a medium that reveals meaning through time.
            </p>
            <p>
              I aim to create work that doesn't rely on trends or surface-level effects, but instead holds its presence over time—quietly, steadily, and with intention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

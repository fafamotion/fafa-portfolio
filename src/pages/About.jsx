import React from 'react';

export default function About() {
  return (
    <section className="min-h-[calc(100vh-120px)] flex items-center">
      {/* 120px ≈ 你的 nav + footer 预留高度，可按实际调 */}
      <div className="w-full">
        <div className="max-w-[1700px] mx-auto py-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            
            <div className="flex-shrink-0">
              <img 
                src="/about.jpg" 
                alt="Fafa" 
                className="w-full md:w-[600px] h-auto md:h-[800px] object-cover"
              />
            </div>

            <div className="flex-1 text-[28px] leading-tight opacity-80 text-left">
              <p className="mb-5">
                I'm Junfeng Zhu, also known as <span className="font-bold">Fafa</span>.
                <br />
                I'm a senior 2D motion designer based in Qingdao, China, currently working at{' '}
                <a
                  href="https://flatwhitemotion.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:opacity-60 transition-opacity"
                >
                  FlatwhiteMotion
                </a>.
              </p>

              <p className="mb-5">
                With nearly 8 years of experience, my work is shaped by ideas of stillness and movement.
I’m drawn to balance in motion — where calm and energy, structure and flow, exist side by side.
              </p>

              

              <p className="mb-5">
                I enjoy combining motion design with different disciplines and cultural contexts, especially reinterpreting historical elements through a contemporary visual language. For me, motion is a language — a way to tell stories through time.
              </p>

              <p>
                When I’m not glued to my screen, you’ll probably find me practicing calligraphy.
              </p>
<p className="mt-6">
  If you have an interesting project in mind — or just want to say hi<a
  href="mailto:heyfafamotion@gmail.com"
  className="
    block
    mt-0
    font-bold
    text-[30px]
    underline
    underline-offset-2
    hover:opacity-60
    transition-opacity
  "
>
  heyfafamotion@gmail.com
</a>

</p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

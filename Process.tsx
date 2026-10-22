"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { steps } from "@/data/process";
import { MediaFrame } from "./ui/MediaFrame";
import { RevealLines } from "./ui/Reveal";

export function Process() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 60%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    stepRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="proceso" aria-labelledby="proceso-title" className="section border-t border-pearl/10">
      <div className="wrap">
        <div className="mb-14 grid gap-6 md:mb-20 lg:grid-cols-12">
          <RevealLines id="proceso-title" lines={["De la idea", "a la campaña."]} className="display display-lg lg:col-span-7" />
          <p className="lede lg:col-span-4 lg:col-start-9 lg:self-end">
            Estrategia antes que publicaciones. Así trabajamos cada cuenta, de principio a fin.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          <ol ref={listRef} className="relative lg:col-span-6">
            {/* Línea de avance */}
            <div className="absolute bottom-0 left-0 top-0 w-px bg-pearl/10" aria-hidden="true">
              <motion.div className="h-full w-px origin-top bg-pearl" style={{ scaleY: progress }} />
            </div>

            {steps.map((s, i) => {
              const on = i === active;
              return (
                <li
                  key={s.n}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  data-index={i}
                  className="relative pl-7 md:pl-12 lg:flex lg:min-h-[70vh] lg:flex-col lg:justify-center"
                >
                  <div className={`py-8 transition-opacity duration-700 lg:py-0 ${on ? "opacity-100" : "lg:opacity-30"}`}>
                    <span className="display block text-[clamp(3rem,7vw,6.5rem)] text-pearl/15" aria-hidden="true">
                      {s.n}
                    </span>
                    <h3 className="display -mt-[0.35em] text-[clamp(1.6rem,2.8vw,2.75rem)]">{s.title}</h3>
                    <p className="mt-4 max-w-md text-silver">{s.text}</p>

                    {/* Móvil: clip debajo de cada paso */}
                    <div className="relative mt-6 aspect-[4/5] max-w-sm overflow-hidden rounded-sm bg-graphite lg:hidden">
                      <MediaFrame media={s.media} label={s.title} sizes="90vw" />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Escritorio: clip fijo que cambia con el paso activo */}
          <div className="hidden lg:col-span-5 lg:col-start-8 lg:block">
            <div className="sticky top-[calc(50vh-min(36vh,22rem))]">
              <div className="relative aspect-[4/5] max-h-[72vh] overflow-hidden rounded-sm bg-graphite">
                {steps.map((s, i) => (
                  <motion.div
                    key={s.n}
                    className="absolute inset-0"
                    initial={false}
                    animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.06 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    aria-hidden={i !== active}
                  >
                    <MediaFrame media={s.media} label={`${s.n} ${s.title}`} sizes="40vw" mode="controlled" playing={i === active} />
                  </motion.div>
                ))}
                <div className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-sm backdrop-blur">
                  {steps[active].n} / {String(steps.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

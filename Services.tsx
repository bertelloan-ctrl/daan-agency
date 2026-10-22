"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/data/services";
import { MediaFrame } from "./ui/MediaFrame";
import { RevealLines, FadeIn } from "./ui/Reveal";
import { PeakGlyph } from "./ui/Icons";

const ease = [0.16, 1, 0.3, 1] as const;

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="servicios" aria-labelledby="servicios-title" className="on-light section bg-mist text-ink">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12">
          <RevealLines
            id="servicios-title"
            lines={["No hacemos contenido", "por hacer contenido."]}
            className="display display-lg lg:col-span-8"
          />
          <FadeIn className="lg:col-span-4 lg:self-end">
            <p className="text-lg leading-relaxed text-ink/70">
              Entendemos qué vendes, cómo comunicarlo y qué necesita ver tu cliente para tomar acción.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-12">
          <ul className="lg:col-span-7" role="list">
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.id} className="border-t border-ink/15 last:border-b">
                  <button
                    type="button"
                    className="group flex w-full items-center justify-between gap-4 py-5 text-left md:py-7"
                    aria-expanded={isActive}
                    aria-controls={`svc-${s.id}`}
                    onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                  >
                    <span
                      className={`display text-[clamp(2rem,5.4vw,4.75rem)] transition-[color,transform] duration-500 ease-[var(--ease-expo)] ${
                        isActive ? "translate-x-0 text-ink" : "text-ink/30 group-hover:text-ink/60 md:translate-x-0"
                      }`}
                    >
                      {s.name}
                    </span>
                    <PeakGlyph
                      className={`h-4 w-7 shrink-0 transition-all duration-500 ease-[var(--ease-expo)] ${
                        isActive ? "opacity-100" : "translate-y-2 opacity-0"
                      }`}
                    />
                  </button>

                  {/* Móvil y tablet: acordeón con media */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        id={`svc-${s.id}`}
                        className="overflow-hidden lg:hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.55, ease }}
                      >
                        <div className="pb-7">
                          <p className="text-lg leading-snug">{s.line}</p>
                          <p className="mt-2 text-sm text-ink/60">{s.includes}</p>
                          <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-sm bg-ink">
                            <MediaFrame media={s.media} label={s.name} sizes="100vw" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* Escritorio: panel fijo que cambia con el servicio activo */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-[calc(var(--header-h)+2rem)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-ink">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={current.id}
                    className="absolute inset-0"
                    initial={{ clipPath: "inset(100% 0 0 0)" }}
                    animate={{ clipPath: "inset(0% 0 0 0)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease }}
                  >
                    <MediaFrame media={current.media} label={current.name} sizes="40vw" />
                  </motion.div>
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  id={`svc-${current.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.4, ease }}
                  className="mt-6"
                >
                  <p className="text-xl leading-snug">{current.line}</p>
                  <p className="mt-2 text-ink/60">{current.includes}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

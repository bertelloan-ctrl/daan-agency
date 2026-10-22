"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site, heroMedia } from "@/data/site";
import { LazyVideo } from "./ui/LazyVideo";
import { WhatsAppIcon } from "./ui/Icons";
import { SHOW_PENDING } from "@/lib/visible";

const ease = [0.16, 1, 0.3, 1] as const;
const headline = ["Marketing que", "se ve bien.", "Y funciona", "todavía mejor."];

function PeakWindow({ index }: { index: 0 | 1 }) {
  const m = heroMedia[index];
  const cls = index === 0 ? "peak-a" : "peak-b";
  const ready = m && !m.pending;
  return (
    <motion.div
      className={`absolute inset-0 ${cls}`}
      initial={{ opacity: 0, scale: 1.08 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, ease, delay: 1.1 + index * 0.15 }}
    >
      {ready && m.kind === "video" ? (
        <LazyVideo src={m.src} poster={m.poster} className="absolute inset-0 h-full w-full object-cover" />
      ) : ready && m.kind === "image" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={m.src} alt="" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div className={`absolute inset-0 ${index === 0 ? "metal-fill opacity-[0.16]" : "metal-fill opacity-[0.08]"}`} />
      )}
      {ready && <div className="absolute inset-0 bg-ink/15" />}
    </motion.div>
  );
}

/** Los dos picos del monograma se dibujan y se convierten en ventanas al showreel. */
function Peaks() {
  return (
    <div className="relative aspect-[16/10] w-full">
      <PeakWindow index={0} />
      <PeakWindow index={1} />
      <svg viewBox="0 0 640 400" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
        <defs>
          <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8e8a83" />
            <stop offset=".35" stopColor="#f5f3ef" />
            <stop offset=".55" stopColor="#b4b0a8" />
            <stop offset=".75" stopColor="#faf8f4" />
            <stop offset="1" stopColor="#97938c" />
          </linearGradient>
        </defs>
        {["20,380 200,40 380,380", "260,380 440,40 620,380"].map((pts, i) => (
          <motion.polyline
            key={pts}
            points={pts}
            fill="none"
            stroke="url(#metal)"
            strokeWidth="9"
            strokeLinejoin="miter"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.3, ease: [0.65, 0, 0.35, 1], delay: 0.2 + i * 0.25 }}
          />
        ))}
      </svg>
      {SHOW_PENDING && heroMedia.some((m) => m.pending) && (
        <p className="absolute bottom-0 right-0 translate-y-full pt-2 text-[0.7rem] text-silver">
          Pendiente: /public/assets/hero/showreel-a.mp4 y showreel-b.mp4
        </p>
      )}
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPeaks = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative overflow-hidden pt-[calc(var(--header-h)+env(safe-area-inset-top))]">
      <div className="wrap grid min-h-[calc(100svh-var(--header-h))] grid-cols-1 content-center gap-10 pb-14 pt-6 lg:grid-cols-12 lg:gap-6 lg:pb-20">
        <motion.div style={{ y: yPeaks }} className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
          <Peaks />
        </motion.div>

        <motion.div style={{ y: yText }} className="order-2 lg:order-1 lg:col-span-7 lg:row-start-1">
          <h1 id="hero-title" className="display display-xl">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.1, ease, delay: 0.5 + i * 0.09 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            className="lede mt-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            Estrategia, contenido y publicidad para negocios que ya están vendiendo y quieren crecer.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.25 }}
          >
            <a href={site.whatsapp.href} target="_blank" rel="noopener" className="btn btn-solid">
              <WhatsAppIcon /> Hablemos de tu negocio
            </a>
            <a href="#trabajo" className="btn btn-ghost">
              Ver nuestro trabajo
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

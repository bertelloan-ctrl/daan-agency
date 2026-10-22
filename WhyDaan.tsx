"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { manifesto } from "@/data/manifesto";

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}&nbsp;
    </motion.span>
  );
}

/** Manifiesto: las palabras se encienden conforme avanza el scroll. */
export function WhyDaan() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 45%"] });
  const words = manifesto.flatMap((line, li) => line.split(" ").map((w, wi) => ({ w, key: `${li}-${wi}`, brk: wi === 0 && li > 0 })));
  const n = words.length;

  return (
    <section aria-labelledby="por-que-title" className="section">
      <div className="wrap">
        <h2 id="por-que-title" className="sr-only">Por qué DAAN</h2>
        <p className="sr-only">{manifesto.join(" ")}</p>
        <div ref={ref} aria-hidden="true" className="display text-[clamp(2.1rem,5.6vw,6rem)] leading-[1.02]">
          {words.map(({ w, key, brk }, i) => (
            <span key={key}>
              {brk && <br />}
              <Word word={w} progress={scrollYProgress} range={[i / n, (i + 1) / n]} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

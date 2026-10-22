"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { bts, type BtsItem } from "@/data/bts";
import { visible } from "@/lib/visible";
import { ratioClass } from "@/lib/ratio";
import { MediaFrame } from "./ui/MediaFrame";
import { RevealLines } from "./ui/Reveal";

function Tile({ item }: { item: BtsItem }) {
  return (
    <figure className="group">
      <div className={`relative overflow-hidden rounded-sm bg-graphite ${ratioClass[item.ratio]}`}>
        <MediaFrame media={item.media} pending={item.pending} label={item.caption} sizes="(min-width: 1024px) 30vw, 50vw" />
      </div>
      <figcaption className="mt-2 text-sm text-silver">{item.caption}</figcaption>
    </figure>
  );
}

function Column({ items, y }: { items: BtsItem[]; y?: MotionValue<string> }) {
  return (
    <motion.div style={{ y }} className="flex flex-col gap-4 md:gap-6">
      {items.map((it) => (
        <Tile key={it.id} item={it} />
      ))}
    </motion.div>
  );
}

const split = <T,>(arr: T[], n: number) => Array.from({ length: n }, (_, c) => arr.filter((_, i) => i % n === c));

export function BehindScenes() {
  const items = visible(bts);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  if (items.length === 0) return null;
  const three = split(items, 3);
  const two = split(items, 2);

  return (
    <section aria-labelledby="bts-title" className="section overflow-hidden bg-graphite/60">
      <div className="wrap">
        <div className="mb-14 grid gap-6 md:mb-20 lg:grid-cols-12">
          <RevealLines id="bts-title" lines={["Así se construye", "una campaña."]} className="display display-lg lg:col-span-8" />
          <p className="lede lg:col-span-4 lg:self-end">
            Cámaras, luces, edición y Ads Manager. Lo que no se ve en el feed también es parte del resultado.
          </p>
        </div>

        <div ref={ref}>
          <div className="grid grid-cols-3 gap-6 pt-10 max-lg:hidden">
            <Column items={three[0]} y={y1} />
            <Column items={three[1]} y={y2} />
            <Column items={three[2]} y={y3} />
          </div>
          <div className="grid grid-cols-2 gap-3 lg:hidden">
            <Column items={two[0]} />
            <div className="pt-12">
              <Column items={two[1]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { clients } from "@/data/clients";

/** Todas las marcas a la vista, entrando una por una. */
export function LogoWall() {
  const ref = useRef<HTMLUListElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); o.disconnect(); } }, { rootMargin: "0px 0px -10% 0px" });
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return (
    <ul ref={ref} aria-label="Todas las marcas"
      className={`logo-wall wrap mt-14 grid grid-cols-2 gap-px border border-pearl/10 bg-pearl/10 sm:grid-cols-4 min-[1100px]:grid-cols-7 [--wh:2rem] md:[--wh:2.6rem] ${inView ? "in" : ""}`}>
      {clients.map((c, i) => (
        <li key={c.name} style={{ ["--i" as string]: i }} className="grid aspect-[3/2] place-items-center bg-ink p-4 hover:bg-graphite">
          <Image src={c.logo} alt={c.name} width={400} height={160} sizes="200px" className="w-auto max-w-full object-contain opacity-80"
            style={{ height: `calc(var(--wh) * ${c.scale ?? 1})` }} />
        </li>
      ))}
    </ul>
  );
}

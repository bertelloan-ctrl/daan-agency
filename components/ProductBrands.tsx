"use client";

import { useRef } from "react";
import { productPieces } from "@/data/products";
import { visible } from "@/lib/visible";
import { site } from "@/data/site";
import { MediaFrame } from "./ui/MediaFrame";
import { RevealLines, FadeIn } from "./ui/Reveal";
import { WhatsAppIcon } from "./ui/Icons";

export function ProductBrands() {
  const items = visible(productPieces);
  const rail = useRef<HTMLUListElement>(null);
  const move = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="producto" aria-labelledby="producto-title" className="section border-t border-pearl/10">
      <div className="wrap grid gap-8 lg:grid-cols-12">
        <RevealLines
          id="producto-title"
          lines={["¿Tienes un producto", "que merece llegar", "a más personas?"]}
          className="display display-lg lg:col-span-8"
        />
        <FadeIn className="flex flex-col items-start gap-7 lg:col-span-4 lg:self-end">
          <p className="text-lg leading-relaxed text-silver">
            Creamos contenido y campañas diseñadas para llamar la atención, posicionar tu marca y convertir esa atención en ventas.
          </p>
          <a href={site.whatsapp.href} target="_blank" rel="noopener" className="btn btn-solid">
            <WhatsAppIcon /> Quiero hacer crecer mi marca
          </a>
        </FadeIn>
      </div>

      {items.length > 0 && (
        <div className="mt-14 md:mt-20">
          <ul
            ref={rail}
            className="rail flex gap-3 overflow-x-auto px-5 md:gap-5 md:px-10 [scroll-padding-inline:1.25rem] md:[scroll-padding-inline:2.5rem]"
            aria-label="Contenido de producto"
          >
            {items.map((p) => (
              <li key={p.id} className="w-[62vw] shrink-0 sm:w-[40vw] md:w-[26vw] lg:w-[19vw]">
                <div className="relative aspect-[9/16] overflow-hidden rounded-sm bg-graphite">
                  <MediaFrame media={p.media} pending={p.pending} label={`${p.brand}: ${p.label}`} sizes="(min-width: 1024px) 19vw, 62vw" />
                </div>
                <p className="mt-3 text-sm font-semibold">{p.brand}</p>
                <p className="text-sm text-silver">{p.label}</p>
              </li>
            ))}
          </ul>
          <div className={`wrap mt-6 hidden justify-end gap-2 ${items.length > 4 ? "md:flex" : ""}`}>
            <button type="button" onClick={() => move(-1)} className="btn btn-ghost !h-11 !px-4" aria-label="Anterior">
              Anterior
            </button>
            <button type="button" onClick={() => move(1)} className="btn btn-ghost !h-11 !px-4" aria-label="Siguiente">
              Siguiente
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

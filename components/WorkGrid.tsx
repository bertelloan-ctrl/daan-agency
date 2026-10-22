import Image from "next/image";
import { projects, type Project } from "@/data/projects";
import { visible } from "@/lib/visible";
import { LazyVideo } from "./ui/LazyVideo";
import { Placeholder } from "./ui/Placeholder";
import { RevealLines } from "./ui/Reveal";

/** Muro de reels: columnas que suben y bajan solas. Los videos se muestran completos, como se publicaron. */
function Tile({ p }: { p: Project }) {
  return (
    <figure className="group relative mb-3 overflow-hidden rounded-[4px] bg-graphite min-[900px]:mb-5">
      {p.pending ? (
        <div className="relative aspect-[9/16]"><Placeholder path={p.media.src} label={`${p.client}: ${p.title}`} /></div>
      ) : p.media.kind === "video" ? (
        <LazyVideo
          src={p.media.src}
          poster={p.media.poster}
          className="aspect-[9/16] w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-expo)] group-hover:scale-[1.04]"
        />
      ) : (
        <Image src={p.media.src} alt={p.media.alt} width={720} height={720} sizes="(min-width: 900px) 25vw, 50vw"
          className="h-auto w-full transition-transform duration-[1200ms] ease-[var(--ease-expo)] group-hover:scale-[1.04]" />
      )}
      {!p.pending && (
        <figcaption className="absolute inset-x-0 bottom-0 flex flex-col bg-gradient-to-t from-ink/85 to-transparent px-3 pb-3 pt-10 text-[0.8rem] leading-tight min-[900px]:translate-y-2 min-[900px]:opacity-0 min-[900px]:transition-all min-[900px]:duration-500 min-[900px]:group-hover:translate-y-0 min-[900px]:group-hover:opacity-100">
          <b className="text-[0.92rem]">{p.client}</b>
          <span className="text-pearl/70">{p.title}</span>
        </figcaption>
      )}
    </figure>
  );
}

function Columns({ items, n, className }: { items: Project[]; n: number; className: string }) {
  const cols = Array.from({ length: n }, (_, c) => items.filter((_, i) => i % n === c));
  return (
    <div className={`reels ${className}`} style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
      {cols.map((col, i) => (
        <div key={i} className="overflow-hidden">
          <div className="reel-track" data-reverse={i % 2 === 1} style={{ ["--d" as string]: `${38 + col.length * 6 + i * 4}s` }}>
            {col.map((p) => <Tile key={p.id} p={p} />)}
            <div className="reel-dup" aria-hidden="true">{col.map((p) => <Tile key={`d-${p.id}`} p={p} />)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function WorkGrid() {
  const all = visible(projects);
  if (all.length === 0) return null;
  return (
    <section id="trabajo" aria-labelledby="trabajo-title" className="section !pb-0">
      <div className="wrap mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
        <RevealLines id="trabajo-title" lines={["Contenido que llama la atención.", "Campañas que hacen algo con ella."]} className="display display-lg" />
        <p className="max-w-sm text-silver">Piezas reales para clientes reales, en movimiento.</p>
      </div>
      <Columns items={all} n={4} className="hidden px-10 min-[900px]:grid" />
      <Columns items={all} n={2} className="grid h-[150svh] px-3 min-[900px]:hidden" />
    </section>
  );
}

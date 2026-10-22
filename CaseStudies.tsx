import Image from "next/image";
import { cases, type CaseStudy } from "@/data/cases";
import { visible } from "@/lib/visible";
import { MediaFrame } from "./ui/MediaFrame";
import { RevealLines, FadeIn } from "./ui/Reveal";

const fields: Array<[keyof CaseStudy, string]> = [
  ["challenge", "El reto"],
  ["approach", "Qué hicimos"],
  ["content", "Contenido"],
  ["campaign", "Campaña"],
];

function Case({ c }: { c: CaseStudy }) {
  return (
    <article className="border-t border-pearl/15 pt-10 md:pt-14" aria-labelledby={`case-${c.id}`}>
      {c.pending && (
        <p className="mb-6 inline-block rounded-full border border-dashed border-pearl/30 px-3 py-1 text-xs text-silver">
          Plantilla de ejemplo, solo visible en desarrollo. Edita data/cases.ts
        </p>
      )}
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          {c.logo ? (
            <Image src={c.logo} alt={c.client} width={400} height={160} className="h-12 w-auto" />
          ) : null}
          <h3 id={`case-${c.id}`} className={`display display-md ${c.logo ? "sr-only" : ""}`}>
            {c.client}
          </h3>
          <p className="mt-2 text-silver">{c.industry}</p>

          <dl className="mt-10 grid gap-7">
            {fields.map(([key, label]) => (
              <div key={key} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="text-sm text-silver">{label}</dt>
                <dd className="leading-relaxed">{String(c[key])}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-7">
          {c.metrics.length > 0 && (
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3">
              {c.metrics.map((m) => (
                <FadeIn key={m.label}>
                  <dt className="order-2 mt-2 text-sm text-silver">{m.label}</dt>
                  <dd className="display text-[clamp(2.4rem,5vw,4.5rem)] leading-none">{m.value}</dd>
                </FadeIn>
              ))}
            </dl>
          )}
          <div className={`grid grid-cols-2 gap-3 md:gap-5 ${c.metrics.length ? "mt-12" : ""}`}>
            {c.media.map((m, i) => (
              <div key={m.src} className={`relative overflow-hidden rounded-sm bg-graphite ${i === 0 ? "aspect-[9/16]" : "aspect-[4/5] self-end"}`}>
                <MediaFrame media={m} pending={c.pending} label={m.alt} sizes="(min-width: 1024px) 28vw, 50vw" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function CaseStudies() {
  const list = visible(cases);
  if (list.length === 0) return null;
  return (
    <section id="casos" aria-labelledby="casos-title" className="section">
      <div className="wrap">
        <div className="mb-14 grid gap-6 md:mb-20 lg:grid-cols-12">
          <RevealLines id="casos-title" lines={["Resultados que", "se pueden medir."]} className="display display-lg lg:col-span-8" />
          <p className="lede lg:col-span-4 lg:self-end">
            Contenido que se ve. Estrategia que se siente. Resultados que se miden.
          </p>
        </div>
        <div className="flex flex-col gap-20 md:gap-28">
          {list.map((c) => (
            <Case key={c.id} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

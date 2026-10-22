import Image from "next/image";
import { clients, type Client } from "@/data/clients";
import { RevealLines } from "./ui/Reveal";
import { LogoWall } from "./LogoWall";

function Row({ items, reverse, duration }: { items: Client[]; reverse?: boolean; duration: number }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee overflow-hidden">
      <ul className="marquee-track" data-reverse={reverse} style={{ ["--dur" as string]: `${duration}s` }}>
        {loop.map((c, i) => (
          <li
            key={`${c.name}-${i}`}
            aria-hidden={i >= items.length}
            className="flex h-20 shrink-0 items-center px-8 md:h-28 md:px-14"
          >
            <Image
              src={c.logo}
              alt={i < items.length ? c.name : ""}
              width={400}
              height={160}
              sizes="240px"
              className="w-auto opacity-55 transition-opacity duration-500 hover:opacity-100"
              style={{ height: `calc(var(--logo-h) * ${c.scale ?? 1})` }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ClientsMarquee() {
  const half = Math.ceil(clients.length / 2);
  return (
    <section id="marcas" aria-labelledby="marcas-title" className="border-y border-pearl/10 py-16 md:py-24 [--logo-h:2.4rem] md:[--logo-h:3.4rem]">
      <div className="wrap mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
        <RevealLines id="marcas-title" lines={["Trabajamos con marcas", "que quieren crecer."]} className="display display-md" />
        <p className="max-w-sm text-silver">
          Restaurantes, salones, clínicas, hospedaje, industria y producto. Cada logo es un cliente real.
        </p>
      </div>
      <div className="flex flex-col gap-2 md:gap-4">
        <Row items={clients.slice(0, half)} duration={55} />
        <Row items={clients.slice(half)} duration={65} reverse />
      </div>
      <LogoWall />
    </section>
  );
}

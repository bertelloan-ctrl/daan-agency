import Image from "next/image";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-pearl/10 pb-[calc(6rem+env(safe-area-inset-bottom))] pt-14 md:pb-12">
      <div className="wrap grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Image src="/assets/logos/daan-logo-full.webp" alt="DAAN Agency" width={872} height={662} className="h-24 w-auto" />
          <p className="mt-6 max-w-xs text-sm text-silver">Convertimos marketing en resultados.</p>
        </div>
        <nav aria-label="Pie de página" className="grid grid-cols-2 gap-2 text-sm md:col-span-3">
          {site.nav.map((l) => (
            <a key={l.href} href={l.href} className="text-pearl/70 hover:text-pearl">{l.label}</a>
          ))}
        </nav>
        <div className="flex flex-col gap-2 text-sm md:col-span-4 md:items-end">
          <a href={site.whatsapp.href} target="_blank" rel="noopener" className="text-pearl/70 hover:text-pearl">WhatsApp {site.whatsapp.display}</a>
          <a href={site.instagram.href} target="_blank" rel="noopener" className="text-pearl/70 hover:text-pearl">Instagram {site.instagram.handle}</a>
          {site.email && <a href={`mailto:${site.email}`} className="text-pearl/70 hover:text-pearl">{site.email}</a>}
          <p className="mt-6 text-pearl/40">© {new Date().getFullYear()} DAAN Agency</p>
        </div>
      </div>
    </footer>
  );
}

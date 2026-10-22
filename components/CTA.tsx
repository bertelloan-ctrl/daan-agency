import { site } from "@/data/site";
import { RevealLines, FadeIn } from "./ui/Reveal";
import { WhatsAppIcon, InstagramIcon, PeakGlyph } from "./ui/Icons";

export function CTA() {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="section relative overflow-hidden border-t border-pearl/10">
      <PeakGlyph className="pointer-events-none absolute -right-[8vw] bottom-0 h-auto w-[70vw] text-pearl/[0.04] md:w-[48vw]" />
      <div className="wrap relative">
        <RevealLines
          id="contacto-title"
          lines={["Tu negocio ya está", "en marcha. Ahora", "hagamos que crezca."]}
          className="display display-xl"
        />
        <FadeIn className="mt-12 flex flex-col gap-10 md:mt-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={site.whatsapp.href} target="_blank" rel="noopener" className="btn btn-solid !h-16 !px-8 !text-lg justify-center">
              <WhatsAppIcon className="h-6 w-6" /> Hablemos por WhatsApp
            </a>
            <a href={site.instagram.href} target="_blank" rel="noopener" className="btn btn-ghost !h-16 !px-8 !text-lg justify-center">
              <InstagramIcon className="h-6 w-6" /> Ver Instagram
            </a>
          </div>
          <address className="flex flex-col gap-1 not-italic text-silver lg:text-right">
            <a href={site.whatsapp.href} target="_blank" rel="noopener" className="hover:text-pearl">{site.whatsapp.display}</a>
            <a href={site.instagram.href} target="_blank" rel="noopener" className="hover:text-pearl">{site.instagram.handle}</a>
            {site.email && (
              <a href={`mailto:${site.email}`} className="hover:text-pearl">{site.email}</a>
            )}
          </address>
        </FadeIn>
      </div>
    </section>
  );
}

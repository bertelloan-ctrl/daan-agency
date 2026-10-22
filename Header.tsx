"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { site } from "@/data/site";
import { WhatsAppIcon, InstagramIcon } from "./ui/Icons";

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 24);
    setHidden(y > 480 && y > prev && !open);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-colors duration-500 ${
          solid || open ? "bg-ink/80 backdrop-blur-xl" : "bg-transparent"
        }`}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="wrap flex h-[var(--header-h)] items-center justify-between gap-6">
          <a href="#contenido" className="flex items-center gap-3" aria-label="DAAN Agency, inicio">
            <Image src="/assets/logos/daan-monogram.webp" alt="" width={872} height={363} priority className="h-6 w-auto md:h-7" />
            <span className="wordmark hidden text-[0.7rem] text-pearl/90 sm:inline">DAAN</span>
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
            {site.nav.map((l) => (
              <a key={l.href} href={l.href} className="group relative text-sm text-pearl/75 transition-colors hover:text-pearl">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-pearl transition-transform duration-500 ease-[var(--ease-expo)] group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={site.whatsapp.href} target="_blank" rel="noopener" className="btn btn-solid !h-10 !px-5 text-sm">
              Hablemos
            </a>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-pearl/25 lg:hidden"
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3 w-4">
                <span className={`absolute left-0 h-px w-4 bg-pearl transition-transform duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 h-px w-4 bg-pearl transition-transform duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            className="fixed inset-0 z-40 flex flex-col bg-ink px-5 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-[calc(var(--header-h)+env(safe-area-inset-top)+2rem)] lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav aria-label="Móvil" className="flex flex-col gap-1">
              {site.nav.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="display text-[2.6rem] py-1"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <a href={site.whatsapp.href} target="_blank" rel="noopener" className="btn btn-solid justify-center">
                <WhatsAppIcon /> Hablemos por WhatsApp
              </a>
              <a href={site.instagram.href} target="_blank" rel="noopener" className="btn btn-ghost justify-center">
                <InstagramIcon /> {site.instagram.handle}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

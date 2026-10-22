"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";
import { WhatsAppIcon } from "./ui/Icons";

/** CTA fijo y discreto en móvil: aparece después del hero y se oculta en la sección de contacto. */
export function MobileWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let pastHero = false;
    let atContact = false;
    const update = () => setShow(pastHero && !atContact);
    const onScroll = () => {
      pastHero = window.scrollY > window.innerHeight * 0.7;
      update();
    };
    const contact = document.getElementById("contacto");
    const obs = new IntersectionObserver(([e]) => {
      atContact = e.isIntersecting;
      update();
    });
    if (contact) obs.observe(contact);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={site.whatsapp.href}
          target="_blank"
          rel="noopener"
          className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 flex h-12 items-center gap-2 rounded-full border border-pearl/15 bg-ink/85 pl-3.5 pr-4 text-sm font-semibold shadow-[0_8px_30px_rgba(0,0,0,.45)] backdrop-blur-xl lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <WhatsAppIcon /> Hablemos
        </motion.a>
      )}
    </AnimatePresence>
  );
}

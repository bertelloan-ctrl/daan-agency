import type { Media, Pendable } from "@/lib/types";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

/**
 * Mensaje opcional que se precarga en WhatsApp. Déjalo vacío para abrir el chat
 * exactamente en https://wa.me/525525195417
 */
const whatsappMessage = "";

export const site = {
  name: "DAAN Agency",
  url: siteUrl,
  title: "DAAN Agency | Marketing, Contenido y Publicidad",
  description:
    "Estrategia, contenido y publicidad para marcas y negocios que quieren crecer. Creamos campañas, contenido y experiencias digitales enfocadas en resultados.",
  whatsapp: {
    display: "+52 55 2519 5417",
    href:
      "https://wa.me/525525195417" +
      (whatsappMessage ? `?text=${encodeURIComponent(whatsappMessage)}` : ""),
  },
  instagram: { handle: "@daanagencymx", href: "https://instagram.com/daanagencymx" },
  /** Agrega el correo cuando exista y aparecerá en contacto y footer. */
  email: "",
  nav: [
    { label: "Trabajo", href: "#trabajo" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Marcas", href: "#marcas" },
    { label: "Contacto", href: "#contacto" },
  ],
};

/** Los dos “picos” del monograma en el hero. Cada uno es una ventana a un clip del showreel. */
export const heroMedia: Array<Media & Pendable> = [
  {
    kind: "video",
    src: "/assets/hero/showreel-a.mp4",
    poster: "/assets/hero/showreel-a.webp",
    alt: "Escapada en Cabañas ZiraLago, Zirahuén",
  },
  {
    kind: "video",
    src: "/assets/hero/showreel-b.mp4",
    poster: "/assets/hero/showreel-b.webp",
    alt: "Costillas Texas Ribs en cámara lenta",
  },
];

import type { Media, Pendable } from "@/lib/types";

export type Step = { n: string; title: string; text: string; media: Media & Pendable };

export const steps: Step[] = [
  { n: "01", title: "Entendemos tu negocio", text: "Qué vendes, a quién, cuánto vale un cliente y dónde se está perdiendo la venta hoy.",
    media: { kind: "video", src: "/assets/process/01-negocio.mp4", poster: "/assets/process/01-negocio.webp", alt: "Reunión con cliente", pending: true } },
  { n: "02", title: "Diseñamos la estrategia", text: "Mensajes, formatos y canales. Antes de grabar un segundo, sabemos qué tiene que lograr cada pieza.",
    media: { kind: "video", src: "/assets/process/02-estrategia.mp4", poster: "/assets/process/02-estrategia.webp", alt: "Planeación de estrategia", pending: true } },
  { n: "03", title: "Creamos el contenido", text: "Producción, fotografía, video y diseño pensados para detener el scroll y explicar por qué tú.",
    media: { kind: "video", src: "/assets/projects/coloracion-transformacion.mp4", poster: "/assets/projects/coloracion-transformacion.webp", alt: "Contenido de transformación de color" } },
  { n: "04", title: "Lanzamos campañas", text: "Anuncios con objetivo claro: mensajes, leads o ventas. Presupuesto puesto donde responde.",
    media: { kind: "video", src: "/assets/projects/texas-ribs-reserva.mp4", poster: "/assets/projects/texas-ribs-reserva.webp", alt: "Anuncio de campaña para Texas Ribs" } },
  { n: "05", title: "Medimos y optimizamos", text: "Leemos los números, cortamos lo que no funciona y escalamos lo que sí.",
    media: { kind: "video", src: "/assets/process/05-optimizacion.mp4", poster: "/assets/process/05-optimizacion.webp", alt: "Revisión de métricas", pending: true } },
];

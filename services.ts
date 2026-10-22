import type { Media, Pendable } from "@/lib/types";

export type Service = {
  id: string;
  name: string;
  line: string;
  includes: string;
  media: Media & Pendable;
};

export const services: Service[] = [
  {
    id: "estrategia",
    name: "Estrategia",
    line: "Definimos qué comunicar, a quién y cómo convertir atención en oportunidades.",
    includes: "Estrategia de marketing, estrategia de redes, mensajes clave y embudo.",
    media: { kind: "image", src: "/assets/services/estrategia.webp", alt: "Sesión de estrategia", pending: true },
  },
  {
    id: "contenido",
    name: "Contenido",
    line: "Conceptualización, producción, fotografía, video, reels, diseño y edición.",
    includes: "Fotografía de producto, reels, anuncios en video, diseño gráfico y edición.",
    media: { kind: "video", src: "/assets/projects/konet-barba.mp4", poster: "/assets/projects/konet-barba.webp", alt: "Reel producido para Kónet Barber Shop" },
  },
  {
    id: "publicidad",
    name: "Publicidad",
    line: "Diseñamos, lanzamos y optimizamos campañas enfocadas en resultados.",
    includes: "Meta Ads para mensajes, leads y ventas, pruebas creativas y optimización.",
    media: { kind: "video", src: "/assets/projects/expo-iluminacion-anuncio.mp4", poster: "/assets/projects/expo-iluminacion-anuncio.webp", alt: "Anuncio para Expo Eléctrica Iluminación" },
  },
  {
    id: "redes",
    name: "Redes sociales",
    line: "Planificación, contenido, publicación, seguimiento y estrategia.",
    includes: "Calendario editorial, publicación, comunidad y seguimiento mensual.",
    media: { kind: "video", src: "/assets/projects/ziralago-temporada.mp4", poster: "/assets/projects/ziralago-temporada.webp", alt: "Reel de Cabañas ZiraLago" },
  },
  {
    id: "branding",
    name: "Branding",
    line: "Identidad, dirección visual y comunicación de marca.",
    includes: "Identidad visual, dirección de arte, tono de voz y lineamientos.",
    media: { kind: "image", src: "/assets/projects/texas-ribs-uniforme.webp", alt: "Uniforme Rib Masters para Texas Ribs" },
  },
  {
    id: "analisis",
    name: "Análisis",
    line: "Revisamos métricas, anuncios y contenido para entender qué funciona.",
    includes: "Reportes de resultados, lectura de métricas y recomendaciones de ajuste.",
    media: { kind: "image", src: "/assets/services/analisis.webp", alt: "Reporte de resultados", pending: true },
  },
];

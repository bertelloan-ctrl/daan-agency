import type { Media, Pendable } from "@/lib/types";

export type Metric = { value: string; label: string };

export type CaseStudy = Pendable & {
  id: string;
  client: string;
  logo?: string;
  industry: string;
  challenge: string;
  approach: string;
  content: string;
  campaign: string;
  /** Solo métricas reales y verificables. Si el arreglo está vacío no se muestra el bloque. */
  metrics: Metric[];
  media: Media[];
};

/**
 * Casos de éxito. La entrada de ejemplo es una PLANTILLA (pending: true):
 * solo se ve en desarrollo para revisar el diseño. Duplica el objeto,
 * llénalo con datos reales y quita `pending`.
 */
export const cases: CaseStudy[] = [
  {
    id: "plantilla",
    pending: true,
    client: "Nombre del cliente",
    logo: undefined,
    industry: "Giro del negocio",
    challenge: "Cuál era el problema real: ventas estancadas, mensajes que no llegaban, contenido sin dirección.",
    approach: "Qué decidimos hacer y por qué.",
    content: "Qué producimos: sesiones, reels, anuncios, diseño.",
    campaign: "Objetivo de campaña, segmentación y duración.",
    metrics: [
      { value: "$0.00", label: "Costo por conversación" },
      { value: "0", label: "Mensajes generados" },
      { value: "0", label: "Alcance" },
    ],
    media: [
      { kind: "video", src: "/assets/cases/plantilla/pieza-01.mp4", poster: "/assets/cases/plantilla/pieza-01.webp", alt: "Pieza de la campaña" },
      { kind: "image", src: "/assets/cases/plantilla/resultados.webp", alt: "Captura de resultados" },
    ],
  },
];

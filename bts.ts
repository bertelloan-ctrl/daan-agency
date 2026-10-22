import type { Media, Pendable, Ratio } from "@/lib/types";

export type BtsItem = Pendable & { id: string; caption: string; ratio: Ratio; media: Media };

/** Detrás de cámaras. Mezcla clips verticales con fotos horizontales para que el collage respire. */
const raw: Array<[string, string, Ratio, "video" | "image"]> = [
  ["bts-01", "Set de grabación", "vertical", "video"],
  ["bts-02", "Iluminación", "horizontal", "image"],
  ["bts-03", "Sesión de producto", "portrait", "image"],
  ["bts-04", "Edición", "horizontal", "video"],
  ["bts-05", "Cámara en mano", "vertical", "video"],
  ["bts-06", "Reunión de estrategia", "horizontal", "image"],
  ["bts-07", "Ads Manager", "horizontal", "image"],
  ["bts-08", "Backstage", "vertical", "video"],
  ["bts-09", "Preparación de contenido", "portrait", "image"],
];

export const bts: BtsItem[] = raw.map(([id, caption, ratio, kind]) => ({
  id,
  caption,
  ratio,
  pending: true,
  media:
    kind === "video"
      ? { kind, src: `/assets/bts/${id}.mp4`, poster: `/assets/bts/${id}.webp`, alt: caption }
      : { kind, src: `/assets/bts/${id}.webp`, alt: caption },
}));

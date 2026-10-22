import type { Media, Pendable } from "@/lib/types";

export type ProductPiece = Pendable & { id: string; brand: string; label: string; media: Media };

/** Contenido de producto en formato vertical (9:16). El orden del arreglo es el orden del riel. */
export const productPieces: ProductPiece[] = [
  { id: "texas-ribs-antojo", brand: "Texas Ribs", label: "Anuncio de producto",
    media: { kind: "video", src: "/assets/projects/texas-ribs-antojo.mp4", poster: "/assets/projects/texas-ribs-antojo.webp", alt: "Anuncio de costillas Texas Ribs" } },
  { id: "texas-ribs-reserva", brand: "Texas Ribs", label: "Anuncio de promoción",
    media: { kind: "video", src: "/assets/projects/texas-ribs-reserva.mp4", poster: "/assets/projects/texas-ribs-reserva.webp", alt: "Anuncio de descuento por reservar en redes, Texas Ribs" } },
  { id: "texas-ribs-uniforme-frente", brand: "Texas Ribs", label: "Mercancía de marca",
    media: { kind: "image", src: "/assets/products/texas-ribs-uniforme-frente.webp", alt: "Polo negra con logo de Texas Ribs" } },
];

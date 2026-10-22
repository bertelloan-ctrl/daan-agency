import type { Media, Pendable, Ratio } from "@/lib/types";

export const workCategories = ["Video", "Publicidad", "Fotografía", "Branding", "Redes"] as const;
export type WorkCategory = (typeof workCategories)[number];

export type Project = Pendable & {
  id: string;
  client: string;
  title: string;
  category: WorkCategory;
  ratio: Ratio;
  media: Media;
  /** true: se reproduce sola (sin sonido) al entrar en pantalla. false: al pasar el mouse. */
  autoplay?: boolean;
};

const v = (id: string, alt: string): Media => ({
  kind: "video",
  src: `/assets/projects/${id}.mp4`,
  poster: `/assets/projects/${id}.webp`,
  alt,
});
const img = (file: string, alt: string): Media => ({ kind: "image", src: `/assets/projects/${file}`, alt });

/**
 * Portafolio. Para agregar una pieza: sube el .mp4 (H.264, sin audio) y su poster .webp
 * a /public/assets/projects/ con el mismo nombre y añade una línea aquí.
 * El orden del arreglo es el orden en pantalla.
 */
export const projects: Project[] = [
  { id: "amelie-blanch-reel", client: "House Amelie Blanch", title: "Reel de barbería", category: "Video", ratio: "vertical", autoplay: true,
    media: v("amelie-blanch-reel", "Reel para House Amelie Blanch, barbería en la colonia Nápoles") },
  { id: "expo-iluminacion-anuncio", client: "Expo Eléctrica", title: "Anuncio Expo Eléctrica Iluminación", category: "Publicidad", ratio: "vertical",
    media: v("expo-iluminacion-anuncio", "Anuncio en video para Expo Eléctrica Iluminación") },
  { id: "ziralago-temporada", client: "Cabañas ZiraLago", title: "Reel de temporada", category: "Redes", ratio: "vertical", autoplay: true,
    media: v("ziralago-temporada", "Reel de Cabañas ZiraLago en Zirahuén, Michoacán") },
  { id: "texas-ribs-uniforme", client: "Texas Ribs", title: "Uniforme Rib Masters", category: "Branding", ratio: "landscape",
    media: img("texas-ribs-uniforme.webp", "Mockup de uniforme Rib Masters para Texas Ribs") },
  { id: "konet-barba", client: "Kónet Barber Shop", title: "Reel de servicio", category: "Video", ratio: "vertical",
    media: v("konet-barba", "Reel de arreglo de barba para Kónet Barber Shop") },
  { id: "clinipod-personaje", client: "Clinipod", title: "Anuncio con personaje animado", category: "Publicidad", ratio: "vertical", autoplay: true,
    media: v("clinipod-personaje", "Anuncio de Clinipod con un pie animado como personaje") },
  { id: "texas-ribs-antojo", client: "Texas Ribs", title: "Anuncio de producto", category: "Publicidad", ratio: "vertical",
    media: v("texas-ribs-antojo", "Anuncio de costillas Texas Ribs") },
  { id: "expo-iluminacion-post", client: "Expo Eléctrica", title: "Pieza de pre registro", category: "Publicidad", ratio: "square",
    media: img("expo-iluminacion-post.webp", "Publicación de pre registro para Expo Eléctrica Iluminación") },
  { id: "coloracion-transformacion", client: "Salón de belleza", title: "Transformación de color", category: "Video", ratio: "vertical",
    media: v("coloracion-transformacion", "Video de transformación de color de cabello") },
  { id: "expo-electrica-invitacion", client: "Expo Eléctrica", title: "Invitación con expositor", category: "Video", ratio: "vertical", autoplay: true,
    media: v("expo-electrica-invitacion", "Video invitación a Expo Eléctrica Internacional grabado en piso de exposición") },
  { id: "clinipod-cuidado", client: "Clinipod", title: "Reel de servicio", category: "Redes", ratio: "vertical",
    media: v("clinipod-cuidado", "Reel de servicio de podología para Clinipod") },
  { id: "texas-ribs-reserva", client: "Texas Ribs", title: "Anuncio de promoción", category: "Publicidad", ratio: "vertical",
    media: v("texas-ribs-reserva", "Anuncio de descuento por reservar en redes, Texas Ribs") },
  { id: "clinipod-clinica", client: "Clinipod", title: "Video en clínica", category: "Video", ratio: "vertical",
    media: v("clinipod-clinica", "Video grabado en la clínica Clinipod") },
];

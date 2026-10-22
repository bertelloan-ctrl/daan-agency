export type Client = {
  name: string;
  /** Logo monocromo claro sobre transparente (WebP/PNG/SVG), en /public/assets/clients/ */
  logo: string;
  /** Ancho visual relativo: ajusta si un logo se ve demasiado grande o pequeño en el marquee */
  scale?: number;
};

/** Solo marcas con logo entregado. Para agregar una: sube el logo y añade una línea. */
export const clients: Client[] = [
  { name: "Kónet Barber Shop", logo: "/assets/clients/konet.webp", scale: 1.5 },
  { name: "Cabañas ZiraLago", logo: "/assets/clients/cabanas-ziralago.webp", scale: 1.25 },
  { name: "Hair Magic", logo: "/assets/clients/hair-magic.webp", scale: 1.2 },
  { name: "House Amelie Blanch", logo: "/assets/clients/house-amelie-blanch.webp", scale: 1.15 },
  { name: "Clinipod", logo: "/assets/clients/clinipod.webp" },
  { name: "Texas Ribs", logo: "/assets/clients/texas-ribs.webp", scale: 0.85 },
  { name: "Limpiq", logo: "/assets/clients/limpiq.webp", scale: 0.85 },
  { name: "Expo Eléctrica", logo: "/assets/clients/expo-electrica.webp" },
  { name: "Expo Franquicias Guadalajara", logo: "/assets/clients/expo-franquicias.webp", scale: 0.9 },
  { name: "LEV Industrial", logo: "/assets/clients/lev-industrial.webp", scale: 0.95 },
  { name: "Castel", logo: "/assets/clients/castel.webp", scale: 0.9 },
  { name: "Vimar", logo: "/assets/clients/vimar.webp", scale: 0.6 },
  { name: "Caris Studio", logo: "/assets/clients/caris-studio.webp", scale: 1.1 },
  { name: "Güesos", logo: "/assets/clients/guesos.webp", scale: 0.75 },
];

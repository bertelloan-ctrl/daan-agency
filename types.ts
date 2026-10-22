export type Ratio = "vertical" | "square" | "portrait" | "landscape" | "horizontal";

export type Media =
  | { kind: "video"; src: string; poster?: string; alt: string }
  | { kind: "image"; src: string; alt: string };

/** Todo elemento con `pending: true` muestra un marcador en desarrollo y se oculta en producción. */
export type Pendable = { pending?: boolean };

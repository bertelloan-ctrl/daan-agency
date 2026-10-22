import type { Pendable } from "./types";

const showPending =
  process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_SHOW_PENDING === "1";

/** En producción oculta lo que todavía no tiene material real. */
export function visible<T extends Pendable>(items: T[]): T[] {
  return showPending ? items : items.filter((i) => !i.pending);
}

export const SHOW_PENDING = showPending;

import type { Ratio } from "./types";

export const ratioClass: Record<Ratio, string> = {
  vertical: "aspect-[9/16]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  landscape: "aspect-[5/4]",
  horizontal: "aspect-[16/10]",
};

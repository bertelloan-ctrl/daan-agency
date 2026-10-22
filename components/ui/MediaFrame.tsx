import Image from "next/image";
import type { Media, Pendable } from "@/lib/types";
import { LazyVideo } from "./LazyVideo";
import { Placeholder } from "./Placeholder";

type Props = {
  media: Media & Pendable;
  pending?: boolean;
  label?: string;
  sizes?: string;
  className?: string;
  mode?: "inview" | "controlled";
  playing?: boolean;
  priority?: boolean;
};

/** Contenedor de imagen o video. Ocupa todo su padre (que debe ser relative). */
export function MediaFrame({ media, pending, label, sizes = "100vw", className = "", mode, playing, priority }: Props) {
  if (pending || media.pending) return <Placeholder path={media.src} label={label} />;
  if (media.kind === "image") {
    return (
      <Image
        src={media.src}
        alt={media.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${className}`}
      />
    );
  }
  return (
    <>
      <LazyVideo
        src={media.src}
        poster={media.poster}
        mode={mode}
        playing={playing}
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
      />
      <span className="sr-only">{media.alt}</span>
    </>
  );
}

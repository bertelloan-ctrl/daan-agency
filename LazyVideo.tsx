"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Props = {
  src: string;
  poster?: string;
  className?: string;
  /** inview: se reproduce al entrar en pantalla. controlled: obedece a `playing`. */
  mode?: "inview" | "controlled";
  playing?: boolean;
};

/**
 * Video silencioso que no descarga nada hasta acercarse al viewport,
 * se pausa al salir y respeta prefers-reduced-motion (muestra solo el poster).
 */
export function LazyVideo({ src, poster, className, mode = "inview", playing = false }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);
  const [inView, setInView] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const loadObs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setNear(true);
          loadObs.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    const viewObs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    loadObs.observe(el);
    viewObs.observe(el);
    return () => {
      loadObs.disconnect();
      viewObs.disconnect();
    };
  }, []);

  const shouldPlay = !reduce && near && inView && (mode === "inview" || playing);

  useEffect(() => {
    const el = ref.current;
    if (!el || !near) return;
    if (shouldPlay) el.play().catch(() => {});
    else el.pause();
  }, [shouldPlay, near]);

  return (
    <video
      ref={ref}
      className={className}
      src={near ? src : undefined}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}

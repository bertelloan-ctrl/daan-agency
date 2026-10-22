import { SHOW_PENDING } from "@/lib/visible";
import { PeakGlyph } from "./Icons";

/**
 * En desarrollo: marcador con la ruta del archivo que falta.
 * En producción: panel neutro con el monograma, para que nunca se vea un hueco.
 */
export function Placeholder({ path, label, className = "" }: { path?: string; label?: string; className?: string }) {
  if (!SHOW_PENDING) {
    return (
      <div className={`absolute inset-0 grid place-items-center bg-graphite ${className}`} aria-hidden="true">
        <PeakGlyph className="h-auto w-1/3 text-pearl/[0.07]" />
      </div>
    );
  }
  return (
    <div className={`placeholder absolute inset-0 flex flex-col justify-end p-4 ${className}`}>
      <span className="text-[0.8rem] font-semibold text-pearl/80">{label ?? "Material pendiente"}</span>
      {path && <code className="mt-1 break-all text-[0.7rem] leading-snug text-silver">{path}</code>}
    </div>
  );
}

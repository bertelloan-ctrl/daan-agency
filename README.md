# DAAN Agency · sitio web

Next.js 15 (App Router) · React 19 · Tailwind CSS 4 · Framer Motion 12. Tipografía Archivo variable auto-hospedada.

## Arrancar

```bash
npm install
cp .env.example .env.local      # pon tu dominio real en NEXT_PUBLIC_SITE_URL
npm run dev                     # http://localhost:3000
npm run build && npm start      # producción
```

Despliegue recomendado: Vercel (detecta Next.js solo). Define `NEXT_PUBLIC_SITE_URL` en las variables del proyecto.

## Cómo funciona el material pendiente

Todo elemento con `pending: true` en `/data`:
- **en desarrollo** se ve como un marcador rayado con la ruta exacta del archivo que falta;
- **en producción** se oculta. Si una sección queda sin piezas, la sección entera desaparece.

Para revisar los marcadores en producción: `NEXT_PUBLIC_SHOW_PENDING=1`.

Para activar una pieza: sube el archivo a la ruta indicada y borra `pending: true`.

## Qué archivo va en cada lugar

| Sección | Carpeta | Archivos | Formato |
|---|---|---|---|
| Hero (los dos picos) | `public/assets/hero/` | `showreel-a.mp4` + `.webp`, `showreel-b.mp4` + `.webp` | Clips de 6–10 s, horizontales, sin audio, ≤ 3 MB |
| Servicios | `public/assets/services/` | `estrategia.webp`, `contenido.mp4/.webp`, `publicidad.webp`, `redes.mp4/.webp`, `branding.webp`, `analisis.webp` | 4:5 vertical |
| Trabajo | `public/assets/projects/` | uno por pieza (ver `data/projects.ts`) | Video + poster, o imagen |
| Proceso | `public/assets/process/` | `01-negocio` … `05-optimizacion` (.mp4 + .webp) | 4:5, 5–8 s |
| Detrás de cámaras | `public/assets/bts/` | `bts-01` … `bts-09` | Mezcla 9:16 y 16:10 |
| Casos | `public/assets/cases/<cliente>/` | piezas + capturas de resultados | Libre |
| Producto | `public/assets/products/` | `producto-01` … `producto-06` (.mp4 + .webp) | 9:16 |
| Logos de clientes | `public/assets/clients/` | logo claro sobre transparente | WebP/PNG/SVG |

### Especificación de video
- MP4 H.264, sin pista de audio, `faststart`. Ejemplo:
  `ffmpeg -i in.mov -an -vf "scale=-2:1080" -c:v libx264 -crf 26 -preset slow -movflags +faststart out.mp4`
- Poster: primer cuadro en WebP, misma proporción, ~80–150 KB.
  `ffmpeg -i out.mp4 -frames:v 1 -q:v 80 out.webp`
- Los videos no se descargan hasta que están cerca de la pantalla, se pausan al salir y con *reduced motion* solo se ve el poster.

## Editar contenido

| Qué | Archivo |
|---|---|
| WhatsApp, Instagram, correo, SEO | `data/site.ts` |
| Logos del marquee | `data/clients.ts` |
| Servicios | `data/services.ts` |
| Portafolio | `data/projects.ts` |
| Proceso | `data/process.ts` |
| Detrás de cámaras | `data/bts.ts` |
| Casos y métricas | `data/cases.ts` |
| Contenido de producto | `data/products.ts` |
| Manifiesto “Por qué DAAN” | `data/manifesto.ts` |

## Componentes

`components/`: Header, Hero, ClientsMarquee, Services, WorkGrid, Process, BehindScenes, CaseStudies, ProductBrands, WhyDaan, CTA, Footer, MobileWhatsApp.
`components/ui/`: LazyVideo, MediaFrame, Placeholder, Reveal, Icons.

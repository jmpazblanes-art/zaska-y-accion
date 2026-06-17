# ✅ RESUELTO — Serie "24" (Nº010)

**Fecha:** 2026-06-16
**Quién avisa:** Claude Code (paso 8)
**Estado:** arreglado por Codex. Listo para que Claude Code lo suba cuando toque.

## Problema original

`series/24/index.html` está **mal montado**. No enlaza las 12 imágenes y los paneles
están descolocados.

- El HTML solo referencia **9 imágenes**: image1, image2, image4, image5, image7, image8, image9, image10, image11.
- **Faltan en el HTML:** `image3.png`, `image6.png`, `image12.png` y el `poster.png`.
- Hay paneles con la imagen cambiada (ej: "Panel 2" usa `image4.png`) y paneles sin su `<img>`.

## Lo que SÍ está bien (no regenerar)

- Las **12 imágenes** (`series/24/image1.png` … `image12.png`) están en local, son correctas
  y son Rulo y Toni (verificado). NO regenerar.
- El **póster** (`series/24/poster.png` y copia en `Posters/24.png`) está bien.
- El **contenido 2.0 completo** (12 viñetas, críticas, veredictos, etc.) está en la ficha de Notion:
  "📺 24" dentro de "01 Series" — page_id `378dd7d0-aa61-8165-b005-d4a630a08eab`.

## Arreglo aplicado

`series/24/index.html` queda montado con `poster.png` y las 12 viñetas locales enlazadas.
La comprobación local en navegador carga 13 imágenes en total (póster + image1..image12),
sin recursos rotos y sin errores de consola.

## Para subir

Incluir `series/24/` completo, `Posters/24.png` y la card ya existente en `index.html`.

---
**Nota:** el 2026-06-16 subí esto por error y lo reverti (commits 677e727 → 4d80a8b).
Las imágenes y el póster siguen en local sin subir, listos para cuando el HTML esté bien.

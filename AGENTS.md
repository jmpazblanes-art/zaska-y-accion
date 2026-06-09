# Zaska y Acción — Blog de cine
## Instrucciones para Codex

> Para el flujo completo de CREACIÓN de storybooks, lee PROYECTO.md

---

## ESTRUCTURA DE CARPETAS

```
blog cine/
  series/
    [slug]/
      index.html   ← el storybook completo (cómic + críticas)
      image1.png … image11.png
  peliculas/
    [slug]/
      index.html
      image1.png … image11.png
  documentales/
    [slug]/
      index.html
      image1.png … image11.png
  index.html
  styles.css
  AGENTS.md
  PROYECTO.md
```

- Cada título = una carpeta dentro de su categoría
- Nada suelto en la raíz salvo los archivos de proyecto

---

## TU TRABAJO AQUÍ

Hay dos tareas principales:

### 1. CREAR STORYBOOKS (ver PROYECTO.md)
Cuando Pachi pegue contenido de una peli/serie o diga solo el título.

### 2. SUBIR AL BLOG (instrucciones aquí abajo)
Cuando Pachi diga "sube los nuevos títulos", "despliega", "mete esto en la web", etc.

---

## CÓMO SUBIR NUEVOS STORYBOOKS

### Paso 1 — Detectar qué hay nuevo

```bash
cd "C:\Users\wiswo\Desktop\TRABAJO\proyectos-paralelos\blog cine"
git status --short
```

Las carpetas `series/[slug]/`, `peliculas/[slug]/` o `documentales/[slug]/` que aparezcan como `??` son las nuevas.

### Paso 2 — Eliminar archivos de estructura antigua (si los hay)

Si quedan archivos `storybook-*.html` o carpetas `storybook-*/` en la raíz, elimínalos:

```bash
cd "C:\Users\wiswo\Desktop\TRABAJO\proyectos-paralelos\blog cine"
git rm -r storybook-*.html storybook-*/
```

### Paso 3 — Añadir los títulos nuevos al index.html

Antes de subir, meter los nuevos storybooks en la sección `<!-- ===== STORYBOOKS ===== -->` del index.html.
Cada card sigue este patrón (adaptar slug, categoría, título, nota, plataforma, tipo SERIE/PELÍCULA):

```html
<article class="card">
  <div class="img">
    <span class="chip chip-serie chip-pos">SERIE</span>
    <div class="ph" data-tone="blue" data-label="TÍTULO EN MAYÚSCULAS"></div>
  </div>
  <div class="card-body">
    <h3 class="card-title"><a href="series/[slug]/">[Título]</a></h3>
    <p class="card-excerpt">[Descripción corta, 1-2 frases del tono del blog]</p>
    <div class="card-foot">
      [estrellas CSS según nota — ver ejemplos existentes]
      <span class="author">[nota]/10 · [Plataforma]</span>
    </div>
  </div>
</article>
```

`data-tone` según el color del storybook: `red`, `blue`, `magenta` según qué encaje mejor.
Para películas: `href="peliculas/[slug]/"`. Para documentales: `href="documentales/[slug]/"`.

### Paso 4 — Commit y push con git

```bash
cd "C:\Users\wiswo\Desktop\TRABAJO\proyectos-paralelos\blog cine"
git add -A
git commit -m "Add: [lista de títulos nuevos]"
git push origin main
```

Vercel despliega automáticamente en ~1 minuto tras el push.

---

## ARCHIVOS A INCLUIR EN CADA COMMIT

✅ Siempre:
- `index.html` (si se ha añadido un storybook a la lista)
- `series/[slug]/` o `peliculas/[slug]/` o `documentales/[slug]/` (la carpeta del nuevo título)

✅ Si han cambiado:
- `styles.css`, `PROYECTO.md`, `AGENTS.md`

❌ Nunca subir:
- `*.mp4`, `*.mov`, `*.gif` — videos
- `*.jpg`, `*.JPG`, `IMG_*` — fotos personales
- `*.zip`, `*.txt` — archivos temporales
- carpetas: `yo/`, `uploads/`, `FOTOS/`, `portada the wire_files/`, `zaska_handoff/`

---

## STORYBOOKS PUBLICADOS

| Nº | Categoría | Slug | Título | Nota | Plataforma |
|---|---|---|---|---|---|
| 001 | series | the-wire | The Wire | 9.5 | HBO Max |
| 002 | series | los-soprano | Los Soprano | 9.5 | HBO Max |
| 003 | series | perdidos | Perdidos (Lost) | 8.0 | Disney+ |
| 004 | series | chernobyl | Chernobyl | 9.5 | HBO Max |
| 005 | peliculas | el-sargento-de-hierro | El Sargento de Hierro | 7.5 | Físico/VHS |
| 006 | series | godless | Godless | 8.5 | Netflix |
| 007 | series | the-americans | The Americans | 9.5 | Prime Video |
| 008 | series | ozark | Ozark | 8.0 | Netflix |
| 009 | series | westworld | Westworld | 8.5 | HBO Max |
| 010 | series | 24 | 24 | 8.5 | FOX / Disney+ |
| 011 | series | prison-break | Prison Break | 8.0 | FOX / Netflix |
| 012 | series | hijos-de-la-anarquia | Hijos de la Anarquía | 8.5 | FX / Amazon Prime |
| 013 | series | juego-de-tronos | Juego de Tronos | 8.5 | HBO Max |
| 014 | series | breaking-bad | Breaking Bad | 9.5 | Netflix |
| 015 | series | a-dos-metros-bajo-tierra | A dos metros bajo tierra | 9.5 | HBO Max |
| 016 | series | better-call-saul | Better Call Saul | 9.0 | Netflix |

El siguiente es **Nº017**.

---

## REGLAS

- La rama principal es `main`
- Tras el push, Vercel despliega solo — no hace falta hacer nada más
- Si hay conflicto: `git pull --rebase origin main` antes del push
- El usuario de GitHub es `jmpazblanes-art`

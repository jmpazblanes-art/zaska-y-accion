# Zaska y Acción — Blog de cine
## Instrucciones para Claude Code

> Para el flujo completo de CREACIÓN de storybooks, lee PROYECTO.md

---

## 🔴 REGLA DURA Nº1 — JAMÁS RESUMIR NI CORTAR UNA CRÍTICA (por encima de todo)

**Incidente 2026-06-16: las críticas serias y canallas del HTML salieron RESUMIDAS / RECORTADAS respecto al texto largo que está en Notion. Las metió CLAUDE CODE (yo) en sesiones anteriores al montar/subir el HTML — NO fue Codex. El texto largo está en Notion; el fallo fue mío al volcarlo resumido. Pachi se cabreó con razón. NO SE REPITE NUNCA.**

1. **PROHIBIDO meter una crítica resumida, recortada o "a ojo".** La crítica seria debe ser LARGA y profesional (mínimo ~350-450 palabras, varios párrafos). La crítica canalla debe ser LARGA y macarra (referencia: Michael y The Wire, ~1000+ palabras). Nada de versiones cortas.
2. **El texto largo de Notion MANDA.** Si Notion tiene la versión larga, se vuelca ÍNTEGRA al HTML, palabra por palabra, sin resumir ni una línea.
3. **Si hay que elaborar:** se parte de la opinión real de Pachi (en Notion: "Opinión Pachi", "Qué le gustó", "Qué no le gustó", "Frase que la define") y se ALARGA hasta sonar profesional. Luego se escribe la CANALLA larga con la voz de Rulo/Pachi. Nunca inventar datos de la obra (reparto, notas) sin verificar.
4. **Estructura mínima por storybook (Biblia 2.0):** póster + 12 viñetas + Veredicto Rulo + Veredicto Toni + Crítica seria LARGA + Crítica canalla LARGA + Opinión Pachi (seria + macarra, conservar las de la web) + Personajes + curva de temporadas (si es serie).
5. **Antes de subir:** verificar con conteo de palabras que ninguna crítica seria baja de ~350 y ninguna canalla de ~800. Si baja, NO subir: está recortada.

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
  CLAUDE.md
  PROYECTO.md
```

- Cada título = una carpeta dentro de su categoría
- Nada suelto en la raíz salvo los archivos de proyecto

---

## PIPELINE COMPLETO ZASKA (recomendación → publicación)

Flujo de 8 pasos con responsable por eslabón:

| # | Paso | Responsable |
|---|------|-------------|
| 1 | Pachi pide recomendación | Claude.ai (chat) |
| 2 | Pachi ve la peli/serie | Pachi |
| 3 | Pachi vuelve: "vi [título], un X/10" | Pachi → Claude.ai |
| 4 | Claude.ai pregunta 3 cosas (qué gustó / qué no / frase) | Claude.ai |
| 5 | Claude.ai genera la crítica (seria + canalla + opinión Pachi) | Claude.ai |
| 6 | Ficha en Notion → BD **"Pipeline Zaska"** (estado `Pendiente storybook`) | Claude.ai |
| 7 | **Codex** crea el storybook: 12 imágenes + póster + `index.html` | Codex |
| 8 | **Claude Code (YO) reviso y SUBO a Zaska** | **Claude Code** |

**MI ESLABÓN ES EL PASO 8.** Codex CREA, yo SUBO. Yo no genero imágenes ni críticas:
reviso la carpeta que deja Codex (Rulo/Toni desde the-wire, 12 imágenes + póster, enlaces),
añado la card al `index.html`, hago commit + push y verifico el deploy en Vercel.

Cola en Notion → BD **"Pipeline Zaska"**:
https://app.notion.com/p/d4d4702f6d6d4cb39aa496782ac59393
Proceso las fichas en estado `Storybook creado` y, al publicar, las marco `Publicado`
(rellenando "URL publicada" y "Nº").

### Regla dura de cola en Notion

**Pipeline Zaska manda.** Para saber qué queda por crear o subir, mirar SIEMPRE la BD
`Pipeline Zaska`, no las páginas sueltas de `01 Series`.

- Las páginas sueltas de `01 Series` son **fichas fuente / material largo**, no cola operativa.
- Si una ficha fuente no aparece en `Pipeline Zaska`, crear primero una fila allí con `Estado`,
  `Slug`, `Nº`, `Tipo`, `Categoría carpeta`, `Nota Pachi`, `Plataforma` y enlace a la ficha fuente
  en `Notas Codex/CC`.
- Codex trabaja solo filas en `Pendiente storybook`.
- Claude Code trabaja solo filas en `Storybook creado`.
- Tras publicar, Claude Code rellena `URL publicada` y marca `Publicado`.
- Estado normalizado el 2026-06-17:
  - `Pendiente storybook`: `godless`, `the-americans`, `westworld`, `prison-break`,
    `hijos-de-la-anarquia`.
  - `Storybook creado`: `24`.
  - `Publicado`: `michael`.

---

## TU TRABAJO AQUÍ

### SUBIR AL BLOG — PASO 8 del pipeline (lo principal)
Cuando Pachi diga "sube los nuevos títulos", "monta/sube las pendientes", "despliega",
"mete esto en la web", etc. → seguir "CÓMO SUBIR NUEVOS STORYBOOKS" aquí abajo.

> La CREACIÓN del storybook (imágenes, póster, HTML) la hace **Codex** (paso 7), no Claude Code.
> PROYECTO.md describe ese proceso de creación como referencia.

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
<article class="card" data-cat="serie">
  <a class="card-link" href="series/[slug]/index.html" aria-label="[Título]"></a>
  <div class="img">
    <span class="chip chip-serie chip-pos">SERIE</span>
    <img src="Posters/[slug].png" alt="Póster [Título]" loading="lazy">
  </div>
  <div class="card-body">
    <h3 class="card-title"><a href="series/[slug]/index.html">[Título]</a></h3>
    <p class="card-excerpt">[Descripción corta, 1-2 frases del tono del blog]</p>
    <div class="card-foot">
      [estrellas CSS según nota — ver ejemplos existentes]
      <span class="author">[nota]/10 · [Plataforma]</span>
    </div>
  </div>
</article>
```

**La imagen de la card SIEMPRE es el póster real:** `<img src="Posters/[slug].png" ...>`.
El CSS (`.card .img img { object-fit: cover }`) ya está puesto, encaja solo.
- Solo si ese título **no tiene** `Posters/[slug].png` todavía, usar el placeholder de texto
  `<div class="ph" data-tone="blue|red|magenta" data-label="TÍTULO EN MAYÚSCULAS"></div>`
  y dejar nota para cambiarlo a `<img>` cuando Codex genere el póster.
- Antes de subir, comprobar que `Posters/[slug].png` existe (`ls Posters/`). Si Codex no dejó
  la copia, copiarla desde `series/[slug]/poster.png`.

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
- `styles.css`, `PROYECTO.md`, `CLAUDE.md`

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
| 017 | peliculas | michael | Michael | 8.0 | Cines |

El siguiente es **Nº018**.

---

## REGLAS

- La rama principal es `main`
- Tras el push, Vercel despliega solo — no hace falta hacer nada más
- Si hay conflicto: `git pull --rebase origin main` antes del push
- El usuario de GitHub es `jmpazblanes-art`

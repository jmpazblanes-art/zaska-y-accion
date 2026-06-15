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

## PIPELINE COMPLETO ZASKA (recomendación → publicación)

Flujo de 8 pasos. **Cada eslabón tiene un responsable. No los mezcles.**

| # | Paso | Responsable |
|---|------|-------------|
| 1 | Pachi pide recomendación | Claude.ai (chat) |
| 2 | Pachi ve la peli/serie | Pachi |
| 3 | Pachi vuelve: "vi [título], un X/10" | Pachi → Claude.ai |
| 4 | Claude.ai pregunta 3 cosas (qué gustó / qué no / frase que la define) | Claude.ai |
| 5 | Claude.ai genera la crítica (seria + canalla + opinión Pachi) | Claude.ai |
| 6 | Se guarda la ficha en Notion → BD **"Pipeline Zaska"** (estado `Pendiente storybook`) | Claude.ai |
| 7 | **CODEX crea el storybook**: 12 imágenes + póster + `index.html` en su carpeta | **Codex** |
| 8 | **Claude Code revisa y SUBE a Zaska** (card en index + commit + push + verifica deploy) | **Claude Code** |

- **Codex CREA. Claude Code SUBE.** Codex no hace commit/push; Claude Code no genera imágenes ni críticas.
- El handoff Codex → Claude Code es la carpeta lista en disco (igual que Chernobyl / Ozark / Perdidos el 2026-06-15).
- La BD de Notion **"Pipeline Zaska"** es la fuente de la cola:
  https://app.notion.com/p/d4d4702f6d6d4cb39aa496782ac59393
  (dentro del proyecto "🎬 Zaska y Acción"). Estados: `Recomendado` → `Visto` →
  `Pendiente storybook` → `Storybook creado` → `Publicado`.
- **Codex** monta el storybook cuando una ficha está en `Pendiente storybook`, y al terminar
  la marca `Storybook creado`. **Claude Code** procesa las `Storybook creado` cuando Pachi dice
  "sube las pendientes", y al publicar las marca `Publicado`.

---

## TU TRABAJO AQUÍ (Codex)

Hay dos tareas principales:

### 1. CREAR STORYBOOKS (ver PROYECTO.md) — PASO 7 del pipeline
Cuando Pachi pegue contenido de una peli/serie o diga solo el título.

### MANDAMIENTO VISUAL ABSOLUTO — THE WIRE ES LA REFERENCIA

- **THE WIRE es la referencia canónica de Rulo y Toni.**
- Para cualquier storybook nuevo, Rulo y Toni se sacan de `series/the-wire/` como referencia/base visual.
- **Rulo y Toni no se generan desde cero nunca.**
- Rulo debe seguir siendo Rulo: pelo largo oscuro, camiseta negra, tatuajes, físico y cara reconocibles.
- Toni debe seguir siendo Toni: polo azul, pantalón caqui, físico y cara reconocibles.
- Si el universo exige vestuario (armadura, abrigo, bata, etc.), se añade encima o se adapta mínimamente, pero **la identidad visual no cambia**.
- Para personajes oficiales de la obra, buscar referencias reales en internet de los actores/personajes y usarlas antes de generar o componer.
- Si una imagen devuelve “dos tipos parecidos” en lugar de Rulo y Toni, se descarta. No se sube, no se da por buena.
- En pósters Zaska, Rulo y Toni deben verse claramente y ser protagonistas del cartel. No valen máscaras que tapen la cara ni secundarios ocupando su sitio.

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

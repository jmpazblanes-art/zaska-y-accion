# Zaska y Acción — Blog de cine
## Instrucciones para Claude Code

> Para el flujo completo de CREACIÓN de storybooks, lee PROYECTO.md

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

Los archivos `storybook-*.html` y carpetas `storybook-*/` que aparezcan como `??` o `M` son los nuevos.

### Paso 2 — Añadir los títulos nuevos al index.html

Antes de subir, meter los nuevos storybooks en la sección `<!-- ===== STORYBOOKS ===== -->` del index.html.
Cada card sigue este patrón (adaptar título, slug, nota, plataforma, tipo SERIE/PELÍCULA):

```html
<article class="card">
  <div class="img">
    <span class="chip chip-serie chip-pos">SERIE</span>
    <div class="ph" data-tone="blue" data-label="TÍTULO EN MAYÚSCULAS"></div>
  </div>
  <div class="card-body">
    <h3 class="card-title"><a href="storybook-[slug].html">[Título]</a></h3>
    <p class="card-excerpt">[Descripción corta, 1-2 frases del tono del blog]</p>
    <div class="card-foot">
      [estrellas CSS según nota — ver ejemplos existentes]
      <span class="author">[nota]/10 · [Plataforma]</span>
    </div>
  </div>
</article>
```

`data-tone` según el color del storybook: `red`, `blue`, `magenta` según qué encaje mejor.

### Paso 3 — Commit y push con git

```bash
cd "C:\Users\wiswo\Desktop\TRABAJO\proyectos-paralelos\blog cine"
git add storybook-*.html storybook-*/ index.html
git commit -m "Add: [lista de títulos nuevos]"
git push origin main
```

Vercel despliega automáticamente en ~1 minuto tras el push.

---

## SETUP INICIAL (solo la primera vez)

Si el repo no existe en GitHub todavía, usar el MCP de GitHub:

1. **Crear el repo** con el MCP de GitHub: nombre `zaska-y-accion`, público
2. **Inicializar git local**:
```bash
cd "C:\Users\wiswo\Desktop\TRABAJO\proyectos-paralelos\blog cine"
git init
git add index.html critica.html styles.css PROYECTO.md CLAUDE.md .gitignore storybook-*.html storybook-*/
git commit -m "Initial commit: Zaska y Acción — 9 storybooks"
git remote add origin https://github.com/jmpazblanes/zaska-y-accion.git
git branch -M main
git push -u origin main
```
3. **Conectar a Vercel** con el MCP de Vercel: importar desde GitHub → `zaska-y-accion` → Deploy

---

## ARCHIVOS A INCLUIR EN CADA COMMIT

✅ Siempre:
- `index.html` (si se ha añadido un storybook a la lista)
- `storybook-[slug].html` (el nuevo storybook)
- `storybook-[slug]/` (carpeta de imágenes del storybook)

✅ Si han cambiado:
- `critica.html`, `styles.css`, `PROYECTO.md`, `CLAUDE.md`

❌ Nunca subir:
- `*.mp4`, `*.mov`, `*.gif` — videos
- `*.jpg`, `*.JPG`, `IMG_*` — fotos personales
- `*.zip`, `*.txt` — archivos temporales
- carpetas: `yo/`, `uploads/`, `FOTOS/`, `portada the wire_files/`

---

## STORYBOOKS PUBLICADOS

| Nº | Slug | Título | Nota | Plataforma |
|---|---|---|---|---|
| 001 | the-wire | The Wire | 10 | HBO Max |
| 002 | los-soprano | Los Soprano | 9.5 | HBO Max |
| 003 | perdidos | Perdidos (Lost) | 8.0 | Disney+ |
| 004 | chernobyl | Chernobyl | 9.5 | HBO Max |
| 005 | el-sargento-de-hierro | El Sargento de Hierro | 7.5 | Físico/VHS |
| 006 | godless | Godless | 8.5 | Netflix |
| 007 | the-americans | The Americans | 9.5 | Prime Video |
| 008 | ozark | Ozark | 8.0 | Netflix |
| 009 | westworld | Westworld | 8.5 | HBO Max |

El siguiente es **Nº010**.

---

## REGLAS

- La rama principal es `main`
- Tras el push, Vercel despliega solo — no hace falta hacer nada más
- Si hay conflicto: `git pull --rebase origin main` antes del push
- El usuario de GitHub es `jmpazblanes` — ajustar si es diferente

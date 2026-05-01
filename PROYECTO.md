# ZASKA Y ACCIÓN — Blog de cine y series
## Instrucciones para Claude (leer al inicio de cada sesión)

---

## QUÉ ES ESTO

Blog de críticas de cine y series llamado **Zaska y Acción**.
El formato estrella es el **Storybook**: una historia en cómic HTML con dos personajes, Rulo y Toni, que comentan la película o serie en 11 paneles con bocadillos de diálogo.

**Regla de oro: Claude hace TODO. No se delega nada a Gemini, n8n, Perplexity ni ninguna herramienta externa.**

---

## DOS MODOS DE TRABAJO

### MODO A — Pachi pega contenido (modo actual)
Pachi pega contenido ya preparado con: resumen crítico, crítica sarcástica, personajes, opinión personal.
Claude genera el storybook completo a partir de ese contenido.

### MODO B — Pachi pega solo el título (modo futuro)
Pachi escribe solo el título de la peli o serie.
Claude hace TODO:
1. Busca con WebSearch en estas fuentes por orden:
   - **FilmAffinity** — puntuación prensa + usuarios + sinopsis
   - **IMDb** — puntuación global, datos técnicos (año, director, reparto, duración)
   - **Metacritic** — críticas de prensa internacional agregadas (Metascore)
   - **Rotten Tomatoes** — Tomatometer (críticos) + Audience Score (usuarios)
   - **Sensacine** — opinión del mercado español si es relevante
2. Lee reviews reales de usuarios en:
   - **FilmAffinity** — reviews de usuarios españoles (los más útiles para el tono del blog)
   - **IMDb** — reviews de usuarios internacionales, especialmente los más votados
   - **Letterboxd** — opiniones de cinéfilos, muy útiles para series y cine de autor
   - Buscar las reviews más votadas/útiles, no las extremas (ni el 10 fanático ni el 1 hater)
3. Con toda esa información redacta:
   - **Resumen críticos** — qué destacan y qué critican los críticos profesionales
   - **Resumen usuarios** — qué piensan los espectadores reales, en qué coinciden y difieren con la prensa. Frases tipo "los usuarios destacan...", "la queja más repetida es...", "los fans de la serie defienden que..."
4. Redacta la **crítica profesional propia** (basada en lo anterior, voz propia)
5. Redacta la **crítica canalla estilo 80/90**
6. Pregunta la opinión de Pachi (o usa lo que diga si ya la ha dado)
7. Genera el storybook HTML completo
8. Crea la carpeta de imágenes
9. Sube todo a Notion con todos los campos rellenos

---

## FLUJO COMPLETO (ambos modos)

### Paso 1 — Carpeta del título

Estructura según tipo:
- Serie → `series\[slug]\`
- Película → `peliculas\[slug]\`
- Documental → `documentales\[slug]\`

Crear la carpeta y copiar las 11 imágenes desde `series\the-wire\` mapeadas por emoción/situación:

| Imagen Wire | Situación emocional |
|---|---|
| image1.png | Rulo y Toni en el sofá — pitch inicial, los dos estableciendo |
| image2.png | Rulo pensativo solo — reflexión, argumento complejo |
| image3.png | Ambos tranquilos en sofá — momento de calma, disfrute |
| image4.png | Rulo solo riendo/emocionado — momento positivo, revelación |
| image5.png | Toni pensativo/preocupado — dilema, duda, algo oscuro |
| image6.png | Ambos serios mirando — tensión compartida, momento grave |
| image7.png | Toni enganchado a la tele — adicción, no puede parar |
| image8.png | Toni furioso/señalando — reacción fuerte, algo impactante |
| image9.png | Rulo de pie explicando — contexto, información importante |
| image10.png | Ambos cara a cara intensos — confrontación, debate, giro |
| image11.png | Ambos brindando/celebrando — veredicto final |

El mapeo exacto varía según la historia de cada título. Claude decide qué imagen encaja mejor en cada panel.

### Paso 2 — HTML del storybook
Archivo: `index.html` dentro de la carpeta del título.
Rutas internas:
- Imágenes: `src="image1.png"` (están en la misma carpeta)
- Volver al blog: `href="../../index.html"`

**Número de storybook:** seguir la secuencia. Consultar CLAUDE.md tabla STORYBOOKS PUBLICADOS para saber el siguiente número.

**Estructura fija de 11 paneles:**
- Panel 1: El pitch (Rulo presenta la peli/serie a Toni)
- Panel 2-3: Los protagonistas principales
- Panel 4-5: Lo que hace grande a la obra
- Panel 6: FX 1 — palabra icónica en grande
- Panel 7-8: Puntos de debate, secundarios, contexto
- Panel 9: FX 2 — segunda palabra icónica
- Panel 10: Elemento especial (curva de calidad, quote, box de datos)
- Panel 11: El veredicto (Toni pregunta la nota, Rulo la da)
- Sección VERDICT final fuera de panel

**Paleta:** cada título tiene colores propios. Elegir según el tono/género:
- Drama oscuro: fondos casi negros, accent color saturado
- Western: tierra, ocre, cuero, sangre
- Sci-fi: negro-morado, neon, frío
- Bélico: verde militar, caqui, rojo soviético
- Thriller: negro-azul, grises, un accent color
- Comedia/ligero: colores más cálidos y brillantes

**Tipos de bubble:**
- `.rulo` — color del accent principal de la serie
- `.toni` — blanco neutro
- Tercero opcional (personaje icónico de la obra) — color propio

**Elementos especiales opcionales (uno por storybook):**
- Curva de calidad (barras CSS) — para series que van de más a menos
- Box de datos (número, cantidad, fecha icónica)
- Quote box — frase icónica del título
- Split panel — dos columnas para contraste (ej: KGB vs FBI)

**FX words — ejemplos por género:**
- Western: ¡ADAPT! ¡IMPROVISE! ¡OVERCOME! / ¡LA BELLE! / ¡GODLESS!
- Sci-fi: ¡LOOP! ¡REVERIE! / ¡REBOOT!
- Bélico: ¡3,6 RÖNTGENS! ¡SARCÓFAGO! / ¡KGB! ¡PELUCA!
- Thriller criminal: ¡LAVADO! ¡CARTEL!
- Serie coral oscura: el nombre de la serie en grande

### Paso 3 — Notion
Base de datos: **Críticas** (data_source_id: `b33801fb-8a0a-4c85-a43e-389da75da224`)

Propiedades (nombres exactos — respetar mayúsculas y tildes):
- `Título` (title)
- `Valoración` (number) — nota sobre 10
- `Director` (text)
- `Año` (number)
- `Plataforma` (select) — valores válidos: "Netflix", "HBO Max", "Prime Video", "Disney+", "Cines", "Físico/VHS", "Otro"
- `Género` (multi_select) — valores válidos: "Acción", "Comedia", "Drama", "Terror", "Ciencia Ficción", "Thriller", "Clásico 80/90", "Documental", "Animación"
- `Tipo` (select) — valores válidos: "🎬 Película", "📺 Serie", "🎥 Documental"
- `Duración` (text) — ej: "6 temporadas · 75 ep." o "130 min"
- `Slug` (text) — ej: "the-wire", "los-soprano"
- `Crítica seria` (text)
- `Crítica canalla` (text)
- `Opinión Pachi seria` (text)
- `Opinión Pachi canalla` (text)
- `Reparto principal` (text)
- `Sinopsis` (text)
- `Resumen críticos` (text)
- `Resumen usuarios` (text)

---

## STORYBOOKS PUBLICADOS

| Nº | Categoría | Slug | Título | Nota |
|---|---|---|---|---|
| 001 | series | the-wire | The Wire | 9.5 |
| 002 | series | los-soprano | Los Soprano | 9.5 |
| 003 | series | perdidos | Perdidos (Lost) | 8.0 |
| 004 | series | chernobyl | Chernobyl | 9.5 |
| 005 | peliculas | el-sargento-de-hierro | El Sargento de Hierro | 7.5 |
| 006 | series | godless | Godless | 8.5 |
| 007 | series | the-americans | The Americans | 9.5 |
| 008 | series | ozark | Ozark | 8.0 |
| 009 | series | westworld | Westworld | 8.5 |
| 010 | series | 24 | 24 | 8.5 |
| 011 | series | prison-break | Prison Break | 8.0 |
| 012 | series | hijos-de-la-anarquia | Hijos de la Anarquía | 8.5 |
| 013 | series | juego-de-tronos | Juego de Tronos | 8.5 |
| 014 | series | breaking-bad | Breaking Bad | 9.5 |
| 015 | series | a-dos-metros-bajo-tierra | A dos metros bajo tierra | 9.5 |

El siguiente es el **Nº016**.

---

## CARPETA DEL PROYECTO

```
C:\Users\wiswo\Desktop\TRABAJO\proyectos-paralelos\blog cine\
├── index.html
├── styles.css
├── PROYECTO.md
├── CLAUDE.md
├── series\
│   ├── the-wire\        index.html + image1-11.png  ← Nº001
│   ├── los-soprano\     index.html + image1-11.png  ← Nº002
│   ├── perdidos\        index.html + image1-11.png  ← Nº003
│   ├── chernobyl\       index.html + image1-11.png  ← Nº004
│   ├── godless\         index.html + image1-11.png  ← Nº006
│   ├── the-americans\   index.html + image1-11.png  ← Nº007
│   ├── ozark\           index.html + image1-11.png  ← Nº008
│   └── westworld\       index.html + image1-11.png  ← Nº009
├── peliculas\
│   └── el-sargento-de-hierro\  index.html + image1-11.png  ← Nº005
└── documentales\        (vacío por ahora)
└── storybook-the-wire/                  ← imágenes fuente (image1-11.png)
```

---

## ESTILO DE CRÍTICA

### Crítica seria
Tono de crítico profesional. Analiza dirección, guion, interpretaciones, ritmo, contexto. Menciona premios si son relevantes. 4-5 frases directas.

### Crítica canalla (estilo 80/90)
Humor macarra y directo. Lenguaje coloquial español (no latinoamericano). Puede incluir palabrotas suaves. Referencias a cultura pop de los 80/90. Energía siempre positiva aunque sea para criticar.

### Opinión Pachi
Militar, directo, sin filtros. Le encanta la acción, el thriller, el espionaje, el western. Valora las interpretaciones, los giros, el ritmo. Le molestan los finales precipitados. Nota que el nivel suele ir de más a menos en series largas. Frases cortas, contundentes.

---

## PERSONAJES DEL STORYBOOK

**RULO** — el que sabe. Presenta, contextualiza, explica. Bubble color accent de la serie.
**TONI** — el espectador. Reacciona, pregunta, se sorprende, se engancha. Bubble blanco.
**Personaje invitado** — personaje icónico de la obra, 1-2 paneles, frase lapidaria. Bubble color propio.

---

## NOTAS TÉCNICAS CRÍTICAS

- **NUNCA mezclar clase de posición (ej `.cr`) con `bottom` inline** — estira el elemento. Usar solo un eje.
- `overflow:visible` en `.panel` para que los bubbles salgan del panel.
- Tail (cola) siempre apunta hacia la imagen, no hacia el texto.
- Fonts: Bangers (títulos/FX), Comic Neue (diálogos), Inter (tags/meta).
- Imágenes fuente: `storybook-the-wire/image1.png` a `image11.png`

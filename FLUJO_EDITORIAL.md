# Flujo Editorial Oficial — Zaska y Acción

## El sistema

Internet pone los ingredientes. Nosotros hacemos el plato.

Tú das el nombre de la película o serie. El sistema rastrea la recepción online, saca el consenso y las discrepancias, lo convierte en material editorial y lo devuelve ya cocinado para el blog: primero en versión seria, luego en versión canalla.

---

## Flujo paso a paso

1. **El usuario indica** el nombre de la película o serie.

2. **Se buscan fuentes** en webs de cine priorizadas:
   - FilmAffinity (votación, recomendación, diario de cine)
   - IMDb (valoraciones + reseñas de usuarios + enlaces a crítica profesional)
   - El Séptimo Arte
   - Aullidos
   - AcciónCine
   - Otras fuentes de apoyo si hace falta contraste

3. **Se recopilan dos tipos de recepción:**
   - Crítica profesional / medios
   - Opiniones de usuarios / público general

4. **Se identifican patrones repetidos:**
   - Guion
   - Dirección
   - Ritmo
   - Actuaciones
   - Apartado visual
   - Música
   - Montaje
   - Fidelidad al género o saga
   - Impacto emocional

5. **Se redactan dos resúmenes base:**
   - Resumen de la crítica profesional
   - Resumen de la opinión de usuarios

6. **Con esos resúmenes se generan dos piezas propias:**
   - Crítica general: tono profesional, clara y publicable
   - Crítica canalla: tono sarcástico, ágil y con personalidad 80/90

7. **Se añaden elementos para el blog:**
   - Personajes principales (nombre, actor, descripción breve)
   - Imágenes sugeridas (2-3)
   - Estructura lista para copiar y pegar en el CMS

8. **Se pregunta al usuario su opinión personal** sobre la obra.

9. **Esa opinión del usuario se reescribe en dos versiones:**
   - Opinión estilo crítico profesional
   - Opinión estilo canalla / humor sarcástico

---

## Entregable por título

Cada crítica generada incluye:

| Campo | Descripción |
|---|---|
| Título del post | SEO + titular editorial |
| Ficha rápida | Año, duración, director, reparto, género, país |
| Sinopsis breve | Sin spoilers |
| Personajes principales | Nombre, actor, rol en la historia |
| Resumen crítica profesional | Destilación de medios y críticos |
| Resumen opinión usuarios | Percepción real del público |
| Crítica general | Tono profesional, publicable |
| Crítica canalla | Tono sarcástico, energía 80/90 |
| Imágenes sugeridas | 2-3 opciones para el artículo |
| Opinión del usuario | Reescrita en ambos registros |

---

## Qué NO es este flujo

- No es copiar críticas ajenas y rezar para que parezca contenido propio.
- No es una ensalada triste de opiniones mezcladas.
- No es repetir "a unos les gustó y a otros no".

Es una **destilación editorial**: se toman los ingredientes de internet y se elabora un plato propio con identidad reconocible.

---

## Conexión con el sistema técnico

El entregable de este flujo alimenta directamente la estructura JSON del blog:

```json
{
  "titulo": "Nombre de la película",
  "slug": "nombre-de-la-pelicula",
  "tipo": "pelicula",
  "anio": 1984,
  "director": "Nombre",
  "reparto": ["Actor 1", "Actor 2"],
  "genero": ["Acción", "Comedia"],
  "duracion": "105 min",
  "plataforma": "",
  "sinopsis": "Texto breve sin spoilers",
  "personajes": [
    { "nombre": "Personaje", "actor": "Actor", "descripcion": "Rol" }
  ],
  "critica_profesional_resumen": "Resumen de medios",
  "opinion_usuarios_resumen": "Resumen del público",
  "critica_seria": "Texto completo versión profesional",
  "critica_canalla": "Texto completo versión sarcástica",
  "imagenes": ["url1", "url2"],
  "valoracion": 4.5,
  "relacionados": ["slug-1", "slug-2"]
}
```

---

## Automatización (roadmap técnico)

El objetivo es que este flujo sea 100% automático:

1. Pachi da el título en Notion (nueva entrada)
2. n8n detecta la nueva entrada y lanza el flujo
3. Claude busca fuentes, genera las dos críticas y rellena todos los campos
4. El contenido se guarda en Notion con estructura lista
5. El blog (Next.js) lee de Notion vía API y publica automáticamente

**Stack:** n8n + Claude API + Notion CMS + Next.js + Vercel

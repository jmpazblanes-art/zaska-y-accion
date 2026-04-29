#!/bin/bash
# deploy.sh — Sube storybooks nuevos a GitHub (Vercel despliega automáticamente)
# Uso: bash deploy.sh
# O desde Claude Code: "ejecuta el deploy"

BLOG_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$BLOG_DIR"

echo "🎬 Zaska y Acción — Deploy Script"
echo "=================================="

# Comprobar si hay algo nuevo
NEW_FILES=$(git status --short | grep "storybook" | awk '{print $2}')

if [ -z "$NEW_FILES" ]; then
  echo "✅ Todo está al día. No hay storybooks nuevos."
  git log --oneline -3
  exit 0
fi

echo "📦 Archivos nuevos detectados:"
echo "$NEW_FILES"
echo ""

# Añadir solo storybooks y sus carpetas
git add storybook-*.html
git add storybook-*/
git add index.html critica.html styles.css PROYECTO.md CLAUDE.md 2>/dev/null

# Generar nombre del commit con los títulos nuevos
TITLES=$(git diff --cached --name-only | grep "storybook-.*\.html" | sed 's/storybook-//g' | sed 's/\.html//g' | tr '\n' ', ' | sed 's/,$//')

if [ -z "$TITLES" ]; then
  COMMIT_MSG="Update: storybooks y ficheros del blog"
else
  COMMIT_MSG="Add: $TITLES"
fi

echo "💬 Commit: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

echo ""
echo "🚀 Subiendo a GitHub..."
git push origin main

echo ""
echo "✅ Listo. Vercel desplegará en ~1 minuto."
echo "   → https://zaska-y-accion.vercel.app"

---
name: buenas-practicas-astro
description: Define y supervisa la correcta estructuración y modularidad de los componentes Astro, asegurando limpieza en el HTML, aislamiento de estilos y correcto uso de scripts del lado cliente.
---

# Experto en Maquetación Modular (Astro)

## Contexto y Propósito
El agente asume el rol de experto en Astro para garantizar que el proyecto se mantenga modular y escalable. Su misión es velar por la separación de responsabilidades entre el servidor (frontmatter) y el navegador (scripts), así como la correcta descomposición de las páginas en componentes atómicos.

## Cuándo Activar
- Al crear nuevas vistas o secciones en el sitio web de la sociedad.
- Al editar o estructurar páginas existentes como `index.astro`.
- Al realizar tareas de limpieza y refactorización del maquetado HTML.

## Reglas de Ejecución y Mejores Prácticas (Clean Code)

### 1. Estructura de Tres Bloques
- Todo componente o página Astro debe seguir estrictamente el flujo de:
  1. Frontmatter (`---`) para lógica de servidor e imports.
  2. HTML/Maquetación.
  3. Scripts de comportamiento interactivo (`<script>`) y Estilos locales (`<style>`).

### 2. Modularidad y Componentización
- Evita tener páginas principales masivas.
- Si una sección de maquetación (como la cinta de estadísticas o áreas) contiene coordenadas, bucles dinámicos o animaciones específicas, debe extraerse en un componente separado bajo `src/components/` para mantener `src/pages/` limpio e importarse de manera sencilla.

### 3. Aislamiento de Estilos y Animaciones
- Usa Tailwind CSS para la mayoría del diseño responsivo y la disposición.
- Para animaciones complejas (como `@keyframes` de hexágonos flotantes u ondas) y efectos que requieran especificidad, colócalas en una etiqueta `<style>` local de Astro para asegurar que queden encapsuladas sin contaminar el resto del sitio.

# Plan de Trabajo: Sección de Áreas

Este documento detalla las fases y tareas necesarias para la construcción de la sección "Nuestras Áreas de Impacto", siguiendo las directrices de diseño (neón oscuro, premium) y buenas prácticas de Astro y TypeScript.

## Fase 1: Preparación y Estructura Base
- [x] Crear rama `feat/areas`.
- [x] Crear estructura de carpetas (`Areas`, `Areas/assets`) y documentos de planificación.
- [ ] Recopilar y optimizar recursos gráficos e introducirlos en `Areas/assets`.
- [ ] Definir la interfaz (Typescript) para los datos de las áreas (`AreaInfo`).
- [ ] Crear la base de datos local o archivo de configuración con la info de las 6 áreas.

## Fase 2: Desarrollo de Componentes UI (Astro)
- [ ] Crear layout o página `src/pages/areas/index.astro` reutilizando Navbar y Footer.
- [ ] Crear componente `AreaShowcase.astro` para la vista detallada (Imagen destacada, Título Neón, Misión, Botón).
- [ ] Crear componente `AreaSelector.astro` y `AreaCard.astro` para la grilla inferior de selección.

## Fase 3: Estilos y Sistema de Diseño
- [ ] Configurar variables HSL (fondos oscuros, acento cyan neón).
- [ ] Estilizar `AreaShowcase` asegurando el glassmorphism y legibilidad.
- [ ] Estilizar `AreaCard` con estados inactivos, hover y activos (borde neón para el área seleccionada).
- [ ] Adaptabilidad (Responsive Design) para móviles y tablets.

## Fase 4: Interactividad y Animaciones (Client-side)
- [ ] Implementar script en Vanilla JS dentro de Astro para manejar el cambio de área mostrada sin recargar la página.
- [ ] Aplicar transiciones fluidas de entrada (fade-in, transformaciones suaves) al cambiar el contenido.
- [ ] Micro-animaciones en tarjetas al hacer hover.

## Fase 5: Revisión y Testing
- [ ] Validación de buenas prácticas (aislamiento CSS, limpieza HTML).
- [ ] Validación estricta de TypeScript.
- [ ] Revisión de contraste y accesibilidad.

# Plan de Implementación: Sección de Áreas

Este documento registra el progreso, las funcionalidades aplicadas y los componentes desarrollados para la página de "Áreas", sirviendo como bitácora viva del proyecto.

## Estado Actual
- **Fase 1 (Preparación):** ✅ Completada.
- **Fase 2, 3 y 4 (Componentes, Diseño e Interactividad):** ✅ Completadas.
- **Fase 5:** Pendiente (Revisión Final).

## Registro de las Fases 2, 3 y 4: Desarrollo, UI y Animaciones

### Componentes Construidos (`src/components/areas/`)
- `AreaCard.astro`: 
  - Renderiza una tarjeta de selección con SVGs in-line nativos (sin librerías).
  - Manejo de estados (activo/inactivo) usando atributos de datos (`data-active`) y CSS.
  - Diseño: Modo oscuro con bordes sutiles, hover con brillos, y glow neón azul interno en su estado activo.
- `AreaShowcase.astro`:
  - Contenedor dinámico (Display principal).
  - Composición 50/50: Imagen optimizada con filtros `mix-blend-screen` y alto contraste en la izquierda; texto, misión y botón de acción en la derecha.
  - Título con efecto Neón (`text-glow-blue`) apoyado en estilos del proyecto.

### Página Principal (`src/pages/areas/index.astro`)
- **Layout General**: 
  - Incluye `Navbar` y `Footer`.
  - Fondo `bg-[#0B0F19]` con "auras" creadas por un div difuso y redondeado (blur-150px) para un ambiente profundo "premium".
  - Grid general estructurado para contener los displays apilados y la matriz inferior de tarjetas (responsive).
- **Interactividad (Vanilla JS)**:
  - Script empotrado en la página que escucha eventos de clic en las tarjetas (`.area-btn`).
  - Lógica simple e instantánea: Cambia el atributo `data-active` en los botones y los componentes `showcase-item` en milisegundos.
  - Transiciones fluidas manejadas 100% por Tailwind (fade-in, transformaciones verticales) para un rendimiento nativo.

### Diseño y "Frontend Design"
Se han respetado estrictamente las heurísticas de la "skill" de diseño de interfaz:
- **Ausencia de utilidades de diseño masivas / genéricas.**
- **Transiciones fluidas** sin bibliotecas masivas como Framer Motion.
- **Atención al detalle y contraste**: Micro-interacciones (botón de ver proyectos que se eleva).

### Verificación
- `@reference "../../styles/global.css"` implementado en los bloques `<style>` locales de Astro para habilitar las utilidades `@apply` de Tailwind v4.

## Funcionalidades Planificadas (Checklist del Mockup)
- [x] Visor de Área Destacada.
- [x] Selector de Áreas Interactivo (Grilla Inferior).
- [x] Estética y Animación (Dark/Neon + Glassmorphism).

## Registro de Commits
- `docs(areas): add planning documents and assets folder`
- `feat(areas): add area images and typed data source`
- `feat(areas): build ui components, page layout and interactive selector`

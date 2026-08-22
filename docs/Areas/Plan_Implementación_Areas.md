# Plan de Implementación: Sección de Áreas

Este documento registra el progreso, las funcionalidades aplicadas y los componentes desarrollados para la página de "Áreas", sirviendo como bitácora viva del proyecto.

## Estado Actual
- **Fase 1 (Preparación):** ✅ Completada.
- **Fase 2, 3 y 4 (Componentes, Diseño e Interactividad):** ✅ Completadas.
- **Fase 5 (Revisión y Testing):** ✅ Completada.

## Registro de las Fases 2, 3 y 4: Desarrollo, UI y Animaciones

### Componentes Construidos (`src/components/areas/`)
- `AreaCard.astro`: 
  - Renderiza una tarjeta-tab de selección con SVGs in-line nativos (sin librerías).
  - Manejo de estados (activo/inactivo) usando atributos de datos (`data-active`) y CSS.
  - Diseño: Modo oscuro con bordes sutiles, hover con brillos, y glow neón azul interno en su estado activo.
  - Atributos de accesibilidad: `aria-label` y `aria-pressed` sincronizados con el estado activo.
- `AreaShowcase.astro`:
  - Contenedor dinámico (Display principal).
  - Composición 5/7: Imagen optimizada con filtros `mix-blend-screen` y alto contraste en la izquierda (5 columnas); texto, misión y botón de acción en la derecha (7 columnas).
  - Título con efecto Neón (`text-glow-blue`) apoyado en estilos del proyecto.
  - Indicador de posición `1 / 6` (font-mono) para comunicar la navegabilidad del carrusel.
  - Ícono decorativo grande del área (SVG a baja opacidad, 7%) que reemplaza el hexágono genérico original.

### Página Principal (`src/pages/areas/index.astro`)
- **Layout General**: 
  - Incluye `Navbar` y `Footer`.
  - Fondo `bg-[#0B0F19]` con "auras" creadas por un div difuso y redondeado (blur-150px) para un ambiente profundo "premium".
  - Encabezado compacto: eyebrow + título en fila (flex-row), descripción alineada a la derecha en desktop.
  - Patrón tabs-arriba/detalle-abajo: los 6 botones selectores se muestran **encima** de la tarjeta de detalle para visibilidad inmediata sin scroll.
  - Ancho máximo `max-w-6xl` (~1152px) para contener el layout en monitores anchos.
- **Interactividad (Vanilla JS)**:
  - Script empotrado en la página que escucha eventos de clic en las tarjetas (`.area-btn`).
  - Lógica simple e instantánea: Cambia `data-active` y `aria-pressed` en los botones y los componentes `showcase-item`.
  - Actualización dinámica del contador de posición (`1 / 6`).
  - Transiciones fluidas manejadas 100% por Tailwind (fade-in, transformaciones verticales) para un rendimiento nativo.

### Diseño y "Frontend Design"
Se han respetado estrictamente las heurísticas de la "skill" de diseño de interfaz:
- **Ausencia de utilidades de diseño masivas / genéricas.**
- **Transiciones fluidas** sin bibliotecas masivas como Framer Motion.
- **Atención al detalle y contraste**: Micro-interacciones (botón de ver proyectos que se eleva).

## Registro de la Fase 5: Revisión y Testing

### Validación de Buenas Prácticas (Skill: `buenas-practicas-astro`)
- ✅ **Estructura de Tres Bloques**: Todos los componentes siguen `Frontmatter → HTML → Scripts/Estilos`.
- ✅ **Modularidad**: La página `index.astro` delega la presentación a `AreaShowcase` y `AreaCard`. No contiene lógica de renderizado masiva.
- ✅ **Aislamiento de Estilos**: Cada componente usa un bloque `<style>` local con `@reference` a `global.css` para habilitar `@apply` de Tailwind v4. Las animaciones de estado están encapsuladas en cada componente.

### Validación Estricta de TypeScript (Skill: `buenas-practicas-typescript`)
- ✅ **Cero usos de `any`**: Verificado con grep en todos los archivos `.astro` y `.ts` del módulo de áreas.
- ✅ **Interfaces Props tipadas**: `AreaCard` define `Props` con `id: string`, `title: string`, `iconName: AreaIconName`, `isActive?: boolean`. `AreaShowcase` define `Props` con `area: AreaInfo`, `isActive?: boolean`, `index: number`, `total: number`.
- ✅ **DOM tipado**: `querySelectorAll<HTMLButtonElement>`, `querySelectorAll<HTMLDivElement>`, `getElementById` con guard `if (counter)`.

### Revisión de Contraste y Accesibilidad
- ✅ Todas las imágenes del showcase tienen `alt` descriptivos (definidos en `areasData`).
- ✅ Los botones de selección incluyen `aria-label` (ej: "Ver área: Académica") y `aria-pressed` sincronizado dinámicamente.
- ✅ Textos sobre fondo oscuro usan `text-white`, `text-blue-300` y `text-gray-400` con contraste suficiente (>4.5:1 para texto principal).

### Verificación de Build
- ✅ `npm run build` ejecutado satisfactoriamente (exit code 0, ~4.5s).
- ✅ `@reference "../../styles/global.css"` implementado en bloques `<style>` locales para compatibilidad con Tailwind v4.

## Funcionalidades Planificadas (Checklist del Mockup)
- [x] Visor de Área Destacada.
- [x] Selector de Áreas Interactivo (Tabs arriba del detalle).
- [x] Estética y Animación (Dark/Neon + Glassmorphism).
- [x] Indicador de posición (`1 / 6`).
- [x] Ícono decorativo grande por área.

## Registro de Commits
- `docs(areas): add planning documents and assets folder`
- `feat(areas): add area images and typed data source`
- `feat(areas): build ui components, page layout and interactive selector`
- `fix(areas): adjust vertical spacing to fit on a single screen`
- `fix(areas): adjust vertical spacing for better viewport fit`
- `fix(areas): constrain max-width and optimize spacing for compact viewport display`
- `fix(areas): make showcase background solid to prevent ghosting during slide animation`
- `feat(areas): move tabs above showcase, add position indicator and decorative area icons`
- `fix(areas): add accessibility attributes and complete phase 5 review`

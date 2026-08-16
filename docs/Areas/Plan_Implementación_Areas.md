# Plan de Implementación: Sección de Áreas

Este documento registra el progreso, las funcionalidades aplicadas y los componentes desarrollados para la página de "Áreas", sirviendo como bitácora viva del proyecto.

## Estado Actual
- **Fase 1 (Preparación):** ✅ Completada.
- **Fase 2-5:** Pendientes.

## Registro de la Fase 1: Preparación y Estructura Base

### Estructura de Directorios Creada
- `docs/Areas/` — Documentación de planificación.
- `docs/Areas/assets/` — Carpeta destinada a recursos gráficos de documentación.
- `src/assets/Areas/` — Imágenes optimizadas para uso en la página (importadas por Astro).
- `src/data/areas.ts` — Archivo de datos tipados y contratos TypeScript.

### Imágenes Generadas (`src/assets/Areas/`)
| Archivo | Área |
|---|---|
| `area_academica.jpg` | Académica |
| `area_relaciones.jpg` | Relaciones Institucionales |
| `area_marketing.jpg` | Marketing y Comunicaciones |
| `area_tecnologia.jpg` | Tecnología e Infraestructura |
| `area_proyectos.jpg` | Dirección de Proyectos |
| `area_auspicio.jpg` | Auspicio y Sponsors |

### Tipado TypeScript (`src/data/areas.ts`)
- **`AreaIconName`** — Unión de literales (`"academica" | "relaciones" | ...`) para los iconos del selector.
- **`AreaInfo`** — Interfaz estricta: `id`, `title`, `subtitle`, `mission`, `iconName`, `image` (ImageMetadata de Astro), `imageAlt`.
- **`areasData`** — Array tipado con las 6 áreas completas, listo para ser consumido por los componentes.

### Verificación
- ✅ `npm run build` — Build exitoso sin errores TypeScript ni advertencias.

## Funcionalidades Planificadas y Diseño
Basado en el mockup de referencia, la sección "Nuestras Áreas de Impacto" contará con:

1. **Visor de Área Destacada:**
   - Una sección principal que mostrará una imagen representativa del área seleccionada en la mitad izquierda.
   - En la mitad derecha se visualizará el nombre del área con un efecto tipográfico llamativo (Neón/Cyan), un icono representativo en opacidad baja de fondo, el texto de la "Misión" y un botón interactivo "Ver Proyectos".
2. **Selector de Áreas (Grilla Inferior):**
   - Una fila de tarjetas (cards) interactivas correspondientes a las áreas: Académica, Relaciones Institucionales, Marketing y Comunicaciones, Tecnología e Infraestructura, Dirección de Proyectos, Auspicio y Sponsors.
   - La tarjeta activa resaltará su borde y contenido para denotar el estado actual.
3. **Estética y Animación:**
   - Colores profundos (Dark Mode), uso del cyan como acento, y aplicación de micro-animaciones para cambios de estado, ofreciendo una experiencia inmersiva y de alta fidelidad ("Premium").

## Componentes a Implementar (Borrador)
- `pages/areas/index.astro`: Integrará la Navbar, Footer y la sección de áreas.
- `components/areas/AreaShowcase.astro`: Renderizado dinámico del área enfocada.
- `components/areas/AreaGrid.astro` / `AreaCard.astro`: Elementos de selección interactiva.

## Registro de Commits
- `docs(areas): add planning documents and assets folder` — Inicialización de docs.
- `feat(areas): add area images and typed data source` — Imágenes + interfaz TS + datos.

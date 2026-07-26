# Plan de Trabajo - Sección Eventos

## Fase 1
* **Encargado:** Joaquin Berrospi

### 1. Lista de Eventos Próximos
* **Requerimiento:** La sección debe presentar la lista de eventos próximos de la agrupación.
* **Descripción de la tarea:**
  - Definición del modelo de datos e interfaz TypeScript (`UpcomingEvent`) para almacenar la información de los eventos programados a futuro.
  - Creación del componente modular `src/components/events/UpcomingEvents.astro` especializado en destacar los próximos eventos.
  - Diseñar la interfaz siguiendo la línea neón oscuro de AIS (fondos `#0B0F19` y `#233B4E`, acentos celestes `text-cyan-300` y auras difusas).
  - Incluir llamadas a la acción (CTA) dinámicas como "Inscribirse" o "Más detalles" enlazadas a los formularios o plataformas de registro.

### 2. Cifras e Impacto de Eventos
* **Requerimiento:** La sección debe presentar las cifras de la agrupación en el aspecto de eventos (cantidad de eventos realizados, público alcanzado).
* **Descripción de la tarea:**
  - Creación del componente `src/components/events/EventStatsBanner.astro` para proyectar el alcance e impacto de las actividades.
  - Declaración de la estructura de datos (`EventStat`) para métricas como total de eventos, asistentes alcanzados y ponentes invitados.
  - Implementación de un script en cliente (`<script>`) tipado en TypeScript con `IntersectionObserver` y `requestAnimationFrame` para animar los contadores numéricos al hacer scroll.
  - Maquetación con tarjetas de cristal (glassmorphism) e iconos/hexágonos flotantes responsivos.

### 3. Auspiciadores y Aliados Estratégicos
* **Requerimiento:** La sección debe presentar una lista de auspiciadores de los eventos e instituciones aliadas para el desarrollo de estos.
* **Descripción de la tarea:**
  - Creación del componente `src/components/events/EventSponsors.astro` para renderizar la grilla de instituciones y marcas colaboradoras.
  - Definición de la interfaz `Sponsor` (nombre, logo URL, categoría y enlace web).
  - Maquetación de una grilla responsiva con efectos interactivos de brillo en hover (`hover:shadow-[0_0_20px_rgba(96,165,250,0.8)]`).
  - Organización de aliados en categorías (Auspiciadores Oficiales, Co-organizadores, Aliados Académicos).

### 4. Panel de Eventos con Filtrado por Etiquetas
* **Requerimiento:** La sección debe mostrar un panel de eventos con las distintas etiquetas, con opción para poder filtrar eventos por etiquetas.
* **Descripción de la tarea:**
  - Creación del componente `src/components/events/EventDirectory.astro` para la navegación y exploración general de eventos.
  - Desarrollo del selector de etiquetas de filtro ("Todos", "Talleres", "Conferencias", "Hackathons", "IA Generativa", etc.).
  - Implementación del script interactivo en TypeScript para filtrar dinámicamente en el DOM las tarjetas de eventos sin recargar la página.
  - Inclusión de animaciones sutiles de transición (fade/scale) al actualizar la vista de los eventos filtrados.

### 5. Tarjeta y Detalle de Evento con Ponentes
* **Requerimiento:** Cada subsección de evento debe presentar el nombre del evento, la fecha, las etiquetas, las descripciones y los ponentes involucrados.
* **Descripción de la tarea:**
  - Declaración del tipo e interfaz estricta en TypeScript `interface Event` y `interface Speaker` (evitando el uso de `any`).
  - Creación del componente atómico `src/components/events/EventCard.astro` para encapsular la presentación visual de cada evento.
  - Estructuración de la tarjeta con: título, fecha formateada, lista de badges de etiquetas, descripción del evento y lista de ponentes con su avatar, nombre, rol y organización.
  - Maquetación responsiva con estilos Tailwind CSS y soporte para vista detallada o desplegable de ponentes.

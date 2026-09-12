# Plan de Trabajo - Sección Conócenos

Este documento detalla el plan estratégico de diseño, estructuración y desarrollo de la sección **Conócenos** (`conocenos.astro` / `src/components/conocenos/`) de la plataforma de la **Artificial Intelligence Society (AIS)**, basada en el diseño de interfaz oficial.

---

## Fase 1: Estructuración y Maquetación del Encabezado
- **Layout Global:** Integración dentro del ecosistema `Layout.astro` con el `Navbar.astro` (resaltando el ítem activo *Conócenos*) y `Footer.astro`.
- **Badge y Subtítulo Superior:** Etiqueta `— SOBRE NOSOTROS` en cian atenuado con línea decorativa.
- **Título de Sección:** Tipografía de gran impacto `Outfit` con efecto de resplandor `text-glow-cyan` y frase descriptiva institucional.

## Fase 2: Sección "Nuestra Historia"
- **Contenedor Visual Izquierdo:** Integración de fotografía estilizada tipo laboratorio de investigación con científicos analizando hologramas e interfaces de IA (formato WebP optimizado).
- **Tarjeta Neón Derecha:** Bloque informativo con el relato fundacional en la Universidad Nacional de Ingeniería (UNI) en Lima, Perú, y su proyección interdisciplinaria en Latinoamérica.

## Fase 3: Sección "Misión y Visión"
- **Componentes Simétricos:** Maquetación de dos tarjetas neón lado a lado con bordes sutiles en `cyan-500/20` y fondos `#0D1B2A`.
- **Iconografía Integrada:**
  - **Misión:** Icono de Bandera (`🚩`) junto al título + Cohete de despegue (`🚀`).
  - **Visión:** Icono de Red/Globo (`🌐`) junto al título + Ojo enfocado (`👁️`).
- **Redacción Institucional:** Texto alineado a los objetivos de excelencia académica, investigación de vanguardia e IA responsable.

## Fase 4: Grilla de "Valores Constitucionales"
- **Título Centralizado:** Tipografía destacada para el encabezado `Valores constitucionales`.
- **Estructura de Tarjetas Modular (`ValorCard.astro`):**
  1. `Excelencia Técnica` (Icono de Medalla/Premio)
  2. `Ética e Integridad` (Icono de Balanza/Código Ético)
  3. `Inclusión y Diversidad` (Icono de Comunidad/Personas)
  4. `Colaboración` (Icono de Manos Entrelazadas/Trabajo en equipo)
  5. `Innovación Responsable` (Icono de Ampolleta/Idea Neón)
  6. `Transparencia` (Icono de Escudo de Seguridad)
  7. `Accesibilidad al Conocimiento` (Icono de Libro Abierto)
- **Disposición Fluida:** 4 tarjetas en la primera fila y 3 tarjetas centradas en la segunda fila para resoluciones de escritorio, adaptables a 1 o 2 columnas en móviles.

## Fase 5: Experiencia Interactiva y Micro-animaciones
- **Efectos Hover Neón:** Sombras `shadow-[0_0_20px_rgba(34,211,238,0.25)]`, bordes brillantes y elevaciones suaves de `-translate-y-1`.
- **Optimización de Assets:** Organización de imágenes en `src/assets/Conocenos/`.

# Plan de Implementación - Sección Conócenos

Este documento registra el plan de implementación técnico y la descomposición modular para la sección **Conócenos** (`conocenos.astro`) de la **Artificial Intelligence Society (AIS)**, desarrollado en base a la maqueta visual y las especificaciones de diseño neón oscuro.

---

## 📈 Resumen de Fases de Implementación

| Fase de Trabajo | Estado | Hito a Entregar |
| :--- | :--- | :--- |
| **Fase 1: Maquetación y Encabezado** | Pendiente de Aprobación | Estructura general de la vista `conocenos.astro`, layout con Navbar/Footer y cabecera con glow neón. |
| **Fase 2: Bloque Nuestra Historia** | Pendiente de Aprobación | Layout de 2 columnas con imagen futurista WebP y tarjeta informativa de la fundación en la UNI. |
| **Fase 3: Bloque Misión y Visión** | Pendiente de Aprobación | Tarjetas simétricas con bordes neón, iconografía vectorizada SVG (Bandera, Cohete, Globo, Ojo). |
| **Fase 4: Grilla de Valores Constitucionales** | Pendiente de Aprobación | Cuadrícula responsiva de 7 tarjetas con micro-animaciones hover y resplandor celeste. |
| **Fase 5: Organización de Assets y Pruebas** | Pendiente de Aprobación | Optimización de imágenes en WebP dentro de `src/assets/Conocenos/` y compilación `npm run build`. |

---

## 🛠️ Descomposición de Componentes e Iconografía

### 1. `src/components/conocenos/ConocenosHeader.astro`
- **Rol:** Subtítulo institucional `— SOBRE NOSOTROS` + Título principal con resplandor neón `Conócenos` + Párrafo de introducción.

### 2. `src/components/conocenos/NuestraHistoria.astro`
- **Rol:** Se compone de una imagen responsiva `nuestra_historia.webp` a la izquierda y una tarjeta `#0D1B2A` a la derecha con bordes redondeados y tipografía sobria.

### 3. `src/components/conocenos/MisionVision.astro`
- **Rol:** Renderizado de tarjetas gemelas en grid `md:grid-cols-2`:
  - Card 1: **Misión** (Fomentar estudio, investigación y aplicación ética de la IA).
  - Card 2: **Visión** (Ser referente latinoamericano en avance científico y tecnológico de IA responsable).

### 4. `src/components/conocenos/ValoresGrid.astro` & `ValorCard.astro`
- **Rol:** Despliegue de los 7 valores constitucionales en formato 4 (fila 1) + 3 (fila 2 centrada):
  1. `Excelencia Técnica`
  2. `Ética e Integridad`
  3. `Inclusión y Diversidad`
  4. `Colaboración`
  5. `Innovación Responsable`
  6. `Transparencia`
  7. `Accesibilidad al Conocimiento`

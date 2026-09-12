# Plan de Trabajo - Página de Inicio (Home)

Este documento detalla el plan estratégico de diseño, estructuración y desarrollo de la página principal (`index.astro`) de la plataforma de la **Artificial Intelligence Society (AIS)**.

---

## Fase 1: Estructuración y Maquetación Base
* **Maquetación Global:** Implementación del contenedor principal y del sistema de layouts (`Layout.astro`).
* **Componentes de Navegación:** Diseño de la barra de navegación superior (`Navbar.astro`) y pie de página (`Footer.astro`) con tipografías unificadas e interactividad responsiva.
* **Estilo Visual e Identidad:** Configuración de fondos oscuros profundos (`#0B0F19`), mallas de resplandor decorativas y el uso estructurado de las fuentes del sistema (tipografía **Outfit** para títulos y **Plus Jakarta Sans** para el cuerpo de texto).

## Fase 2: Sección Hero e Identidad Visual Principal
* **Sección de Impacto:** Implementación de un título principal con tipografía grande y pesada, utilizando efectos de resplandor (`text-glow-blue`).
* **Logotipo Central:** Integración del logo de AIS con luz de fondo ambiental para dotarlo de una profundidad premium.
* **Etiquetas de Estado:** Inclusión de indicadores dinámicos y badges ("PERIODO 2026", "INTELLIGENCE FOR HUMANITY").

## Fase 3: Sección de Ejes Temáticos (Rubros)
* **Cuadrícula Responsiva:** Creación de una grilla adaptable que organice las áreas científicas de la organización.
* **Componente Modular `CategoryCard`:** Modularización de las tarjetas en `CategoryCard.astro` para encapsular la lógica de hover y el renderizado de gráficos vectoriales (SVG).
* **Iconografía Especializada:** Desarrollo y mapeo de iconos vectoriales interactivos para representar las áreas de investigación:
  * CPU (`Machine Learning`)
  * Chat (`Procesamiento de Lenguaje`)
  * Ojo (`Visión Artificial`)
  * Balanza (`Ética y Gobernanza de la IA`)
  * Robot (`Robótica, IoT e IA Física`)
  * Red de Conexiones (`Agentes Inteligentes`)
  * Servidor (`Infraestructura y Edge AI`)
  * Átomo / Órbitas (`AI for Science`)
  * Escudo (`AI Security`)
* **Control de Diseño de Texto:** Ajuste restrictivo de la longitud de las descripciones para garantizar que todos los bloques de las tarjetas ocupen un máximo de dos líneas en resoluciones de escritorio.

## Fase 4: Experiencia Interactiva y Micro-animaciones
* **Transiciones y Hover:** Programación de animaciones en las tarjetas al pasar el cursor (cambios de color de borde a azul brillante, escalados suaves y sombras neon).
* **Control de Desplazamiento de Layout (Jitter):** Aislamiento de elementos absolute y de alturas constantes en wrappers para evitar que animaciones afecten la posición de elementos vecinos.

## Fase 5: Organización de Recursos (Assets)
* **Optimización de Estructuras:** Aislamiento de imágenes y fondos de la página principal dentro de una carpeta dedicada (`src/assets/Home/`).
* **Logotipos Compartidos:** Mantener los recursos reutilizables (logos del navbar/footer) en la raíz de `src/assets/` para facilitar su llamado global y evitar duplicados.

---

*(PÁGINA SUJETA A PRÓXIMOS CAMBIOS)*

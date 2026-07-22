# 🏗️ Arquitectura y Componentes del Proyecto

Este documento describe la estructura técnica, flujo de datos y organización de componentes en el sitio web de **AIS**.

---

## 🗺️ Mapa de Carpetas y Código Principal

La estructura fundamental del código fuente dentro de la carpeta `src/` está distribuida de la siguiente manera:

```text
src/
├── assets/             # Recursos estáticos (Imágenes WebP, SVG, PNG)
│   ├── logo_blanco.webp     # Isotipo del logo blanco
│   ├── logo_horizontal.webp # Logotipo completo horizontal
│   └── hero-bg.webp         # Fondo de cuadrícula neón de la sección Hero
├── components/         # Componentes Astro reutilizables
│   ├── home/           # Componentes específicos de la página de inicio
│   │   └── StatsBanner.astro # Cinta de estadísticas con hexágonos animados
│   ├── Navbar.astro    # Barra de navegación superior (Sticky y responsive)
│   └── Footer.astro    # Pie de página con enlaces institucionales
├── layouts/            # Plantillas base HTML del sitio
│   └── Layout.astro    # Estructura HTML básica, meta tags SEO e Inter
└── pages/              # Páginas y rutas del sitio
    └── index.astro     # Landing page principal (Home)
```

---

## 🧩 Componentes Destacados

### 1. `src/pages/index.astro` (Página de Inicio)
* **Sección Hero:** Presenta la declaración de misión oficial ("Liderando el avance de la IA") y el párrafo histórico de fundación por estudiantes de la Universidad Nacional de Ingeniería (UNI) en Lima.
* **Sección en Construcción:** Contiene el aviso interactivo pulsante celeste para las secciones que se encuentran bajo diseño.

### 2. `src/components/home/StatsBanner.astro` (Cinta de Estadísticas)
* **Propósito:** Muestra los contadores de impacto (Miembros, Proyectos, Eventos).
* **Animaciones CSS:** Redes de hexágonos en los extremos izquierdo y derecho que flotan y parpadean asimétricamente (`pulse-async`).
* **Animación JS:** Utiliza `IntersectionObserver` para detectar cuándo la cinta entra en el viewport e incrementa dinámicamente los números de `0` a `67` con una función de flexibilización cuadrática (`easeOutQuad`).

---

## 🎨 Sistema de Diseño y Estilado

* **Tailwind CSS:** Se usa para el 95% del diseño responsivo, espaciados y flexbox/grid layouts.
* **Colores Predominantes:**
  * Fondo base oscuro: `#0B0F19`
  * Fondo de componentes: `#233B4E` (azul pizarra oscuro)
  * Acentos de luz neón: `text-blue-300` / `text-cyan-300` (celeste brillante)
* **Glow Auras:** Logrado mediante combinaciones de filtros de desenfoque gaussianos en SVGs (`feGaussianBlur`) y sombras de caída CSS (`filter drop-shadow`).

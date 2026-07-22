# 🌐 AIS - Artificial Intelligence Society Website

Este es el repositorio oficial del sitio web de **AIS (Artificial Intelligence Society)**, una organización dedicada a la promoción, investigación, formación y difusión de la Inteligencia Artificial en el Perú y América Latina, fundada por estudiantes de la Universidad Nacional de Ingeniería (UNI).

El portal web está diseñado con una estética moderna de alto rendimiento, micro-animaciones fluidas y un sistema responsivo optimizado para reflejar la vanguardia científica y tecnológica de la comunidad.

---

## 🛠️ Stack Tecnológico

El proyecto se desarrolla bajo los más altos estándares de rendimiento y buenas prácticas SEO usando las siguientes tecnologías:

* **Astro Framework (v4.0+)**: Utilizado por su excelente velocidad, renderizado híbrido y arquitectura de islas que reduce la sobrecarga de JavaScript entregando HTML ultraliviano.
* **Tailwind CSS**: Implementado para todo el sistema de estilos utilitarios, grillas fluidas, breakpoints responsivos y transiciones visuales consistentes.
* **Vercel Serverless Adapter**: Configurado para optimizar la entrega de contenido estático y funciones dinámicas serverless en la nube.
* **TypeScript & JavaScript**: Usados para interactividades nativas de alto rendimiento (como el Intersection Observer de las estadísticas).

---

## 📁 Estructura del Proyecto

La estructura actual del código fuente se organiza de la siguiente manera para garantizar modularidad y mantenibilidad:

```text
/
├── docs/                 # Documentación técnica extendida del proyecto
│   ├── README.md         # Índice de la documentación técnica
│   └── architecture.md   # Detalles de arquitectura, componentes y colores
├── src/
│   ├── assets/           # Recursos estáticos (Logos optimizados, fondos neón)
│   │   ├── logo_blanco.webp
│   │   ├── logo_horizontal.webp
│   │   └── hero-bg.webp
│   ├── components/       # Componentes web modulares y reutilizables
│   │   ├── home/
│   │   │   └── StatsBanner.astro # Cinta con hexágonos y contadores incrementales
│   │   ├── Navbar.astro  # Barra superior de navegación adaptable y pegajosa
│   │   └── Footer.astro  # Pie de página institucional y enlaces
│   ├── layouts/          # Plantilla base HTML del proyecto
│   │   └── Layout.astro  # Configuración meta SEO, tipografías (Inter) y estructura global
│   └── pages/            # Rutas y vistas principales
│       └── index.astro   # Landing page oficial de la sociedad (Home)
├── package.json          # Gestión de dependencias y scripts de ejecución
└── tailwind.config.mjs   # Configuración de temas y fuentes del proyecto
```

---

## ⚙️ Instrucciones de Ejecución y Desarrollo

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior) en tu entorno de trabajo local.

### 1. Clonar el repositorio e instalar dependencias:
```sh
npm install
```

### 2. Iniciar servidor de desarrollo en local:
```sh
npm run dev
```
*El servidor local estará disponible en: [http://localhost:4321](http://localhost:4321)*

### 3. Compilar el sitio para producción:
```sh
npm run build
```
*Genera los archivos estáticos y funciones optimizadas en la carpeta `.vercel/`.*

### 4. Previsualizar el sitio de producción en local:
```sh
npm run preview
```

---

## 📖 Documentación Extendida

Para ver detalles avanzados sobre la arquitectura de componentes, guías de estilo estéticas (como la paleta de colores HSL neón) o guías del desarrollador, consulta la carpeta de documentación:
👉 [**Carpeta de Documentación Local (docs/)**](./docs/README.md)

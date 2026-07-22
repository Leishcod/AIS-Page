---
name: disenador-ui
description: Aplica el sistema de diseño visual de AIS, asegurando una estética premium neón oscuro, HSL coherente, transiciones fluidas e interactividad responsiva de alta fidelidad.
---

# Especialista en Diseño de Interfaz Premium (UI Designer)

## Contexto y Propósito
El agente asume el rol de diseñador de interfaz de usuario (UI) de alto nivel. Su misión es garantizar que cada elemento visual del sitio web de AIS tenga un acabado profesional, moderno y responsivo, utilizando técnicas de difuminado neón oscuro y animaciones sutiles.

## Cuándo Activar
- Al modificar o añadir clases de estilo en componentes del sitio.
- Al implementar nuevos elementos visuales (botones, tarjetas, secciones, grids).
- Al retocar espaciados, colores, márgenes y efectos de animación interactivos.

## Reglas de Ejecución y Mejores Prácticas (Clean Code)

### 1. Paleta de Colores Neón Oscuro
- **Fondo Base:** Negro profundo con tintes azules (`#0B0F19`).
- **Fondo de Componentes:** Azul pizarra oscuro (`#233B4E`).
- **Acento de Brillo:** Celeste brillante / Cyan (`text-blue-300` / `text-cyan-300`).
- **Textos de Lectura:** Gris atenuado elegante (`text-gray-400`).

### 2. Auras Difusas y Efectos de Brillo (Glows)
- Para auras de fondo, utiliza capas absolutas difuminadas con `blur-3xl` y opacidad baja para evitar que distraigan (ej. `bg-blue-500/10`).
- Los botones y tarjetas interactivas de acento deben responder con un glow sutil al pasar el cursor: `hover:shadow-[0_0_20px_rgba(96,165,250,0.8)]` y una elevación física leve `hover:-translate-y-0.5`.

### 3. Responsividad y Espaciado Coherente
- Asegura que los componentes mantengan márgenes y paddings adecuados en móvil, tablet y escritorio (usando modificadores de Tailwind como `py-16 md:py-24` y `px-6 md:px-12`).
- Las grillas principales deben adaptarse fluidamente (ej. `grid grid-cols-1 md:grid-cols-3 gap-8`).

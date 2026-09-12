# Plan de Trabajo: Página de Proyectos (AIS Landing Page)

## Contexto
Este documento detalla el plan de implementación para la página de "Proyectos" de la landing page de la Artificial Intelligence Society (AIS). Dado que es una primera versión, la información estará estática (hardcodeada) y la página será netamente informativa, respetando el sistema de diseño visual de la organización.

---

## Fase 1: Maquetación y Componentes Principales de la Página
**Objetivo:** Construir la estructura visual principal de la página, abarcando desde la sección destacada hasta las preguntas frecuentes.

- **Tarea 1.1: Sección Hero (Proyecto Destacado)**
  - Construir el contenedor del Hero.
  - Diseñar e implementar la **Tarjeta de Proyecto Destacado** (una versión más grande de la tarjeta estándar con la misma estructura de datos).
  - Agregar el botón interactivo "Ver más Proyectos".
  - Implementar la funcionalidad de *smooth scroll* en el botón para dirigir a la grilla inferior.

- **Tarea 1.2: Grilla de "Nuestros Proyectos"**
  - Diseñar el componente **Project Card** estándar (para mostrar estado, título, descripción breve, etc.).
  - Construir el contenedor en formato de grilla responsiva para alojar múltiples tarjetas.
  - *Nota: En esta iteración no se incluirán barras de búsqueda ni filtros.*

- **Tarea 1.3: Sección de Preguntas Frecuentes (FAQ)**
  - Implementar el componente **Acordeón**.
  - Desarrollar la lógica de interacción: al abrir una respuesta, cualquier otra que esté abierta debe cerrarse, empujando el contenido inferior de forma fluida.

---

## Fase 2: Implementación de la Vista de Detalle (Drawer)
**Objetivo:** Desarrollar el panel emergente lateral para mostrar la información completa de cada proyecto sin abandonar la página actual.

- **Tarea 2.1: Estructura base del Drawer**
  - Construir un componente *Drawer* que se deslice desde el borde derecho.
  - Configurar las dimensiones: ocupará el 50% del ancho de la pantalla en versión de escritorio (ajustable en móviles).
  - Implementar un *Backdrop* oscuro/borroso sobre el resto de la página que bloquee las interacciones en el fondo y resalte el panel emergente.

- **Tarea 2.2: Contenido y Navegación del Drawer**
  - Habilitar scroll interno independiente para el contenido del panel.
  - Estructurar el layout interior para mostrar los detalles completos del proyecto (fechas, líderes de proyecto, miembros, detalles ampliados).

- **Tarea 2.3: Lógica de Interacción (Abrir/Cerrar)**
  - Conectar el evento de *click* de todas las Project Cards (tanto la del Hero como las de la grilla) para que abran el Drawer.
  - Añadir un ícono de cierre ("X") en la esquina superior derecha del panel.
  - Implementar la capacidad de cierre mediante gesto de arrastre (swipe) para mejorar la experiencia en dispositivos móviles.

---

## Fase 3: Integración de Datos (Hardcoded) y Refinamiento
**Objetivo:** Poblar la interfaz con información simulada y pulir los detalles finales de responsividad y diseño.

- **Tarea 3.1: Configuración de Datos Simulados**
  - Crear la estructura de datos (JSON/Objeto) con la información estática requerida para todos los proyectos (imágenes, títulos, estados, descripciones, miembros, etc.).
- **Tarea 3.2: Renderizado Dinámico**
  - Mapear los datos estáticos hacia los componentes construidos (Hero, Grilla y Drawer).
- **Tarea 3.3: Pruebas Responsivas y Control de Calidad (QA)**
  - Verificar que las tarjetas, la grilla, el acordeón y el panel lateral se comporten correctamente en dispositivos móviles, tablets y escritorio.
  - Confirmar el buen funcionamiento del *swipe* en móviles y el bloqueo de scroll del fondo cuando el panel está abierto.

---
name: buenas-practicas-typescript
description: Aplica un control riguroso de tipos usando TypeScript en el proyecto Astro para prevenir errores, tipar propiedades de componentes y asegurar interactividades estables.
---

# Arquitecto de Tipado Estricto (TypeScript)

## Contexto y Propósito
El agente asume el rol de un guardián de la calidad del código mediante la aplicación de TypeScript. Su misión es asegurar que los componentes de Astro reciban datos tipados correctamente y que cualquier interactividad del DOM esté tipada de forma segura para prevenir fallos en tiempo de ejecución.

## Cuándo Activar
- Al declarar o editar variables, funciones, helpers o controladores de eventos.
- Al definir o modificar las propiedades (`Props`) que recibe un componente.
- Siempre que se detecte el uso de un tipo `any` implícito o explícito en el código.

## Reglas de Ejecución y Mejores Prácticas (Clean Code)

### 1. Prohibición de `any`
- Queda totalmente prohibido el uso de `any`. Todo dato, función y propiedad en el proyecto debe estar tipado explícitamente mediante una `interface` o `type`.

### 2. Contratos de Componentes Astro (Props)
- Todos los componentes que reciban propiedades deben definir su interfaz de `Props` en el bloque frontmatter superior de Astro.
- Ejemplo estricto:
  ```astro
  ---
  interface Props {
    title: string;
    description?: string;
    filled?: boolean;
  }
  const { title, description = "", filled = false } = Astro.props as Props;
  ---
  ```

### 3. Tipado en Manipulación del DOM y Animaciones
- Al trabajar con eventos del navegador o APIs del DOM (como `IntersectionObserver`), se deben castear correctamente los elementos utilizando las interfaces nativas correspondientes (ej. `target as HTMLElement`).
- Todas las firmas de callbacks de animación (como en `requestAnimationFrame`) deben tener sus argumentos tipados (ej. `now: number`).

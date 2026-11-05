---
name: tailwind-design-system
description: "Crear o refactorizar estilos con Tailwind, tokens, variantes, diseño adaptable o su integración de compilación. Excluir lógica React y contenido sin cambios de estilos o configuración Tailwind."
---

# Buenas prácticas de Tailwind

## Partir de las decisiones existentes

- Inspeccionar versión, configuración, CSS global, componentes y utilidades actuales. Mantener
  los tokens y las convenciones del proyecto. Consultar la versión oficial al tocar integración.
- Para Tailwind 4 en Astro, comprobar el plugin `@tailwindcss/vite` y la importación global de
  Tailwind según la guía vigente. No mezclar recetas de v3 y v4 ni migrar sin necesidad del cambio.
- Mantener a Astro/React como responsables del comportamiento y a Tailwind de la presentación;
  no usar CSS para simular un estado que deba existir en la lógica del control.

## Mantener un sistema visual pequeño

- Centralizar colores, fuentes y escala de espaciado que representen decisiones compartidas.
  En v4, usar variables de tema y CSS según el mecanismo existente; adaptar la estrategia si es otra versión.
- Preferir nombres y variantes con significado estable. Mantener valores arbitrarios locales
  cuando sean una necesidad real de una pieza; elevarlos a tokens si se vuelven una decisión compartida.
- Extraer componentes por una intención visual o funcional repetida. No crear un componente
  solo para ocultar una cadena de clases ni una clase global por cada combinación de utilidades.
- Reutilizar el mecanismo existente para variantes. Usar mapas o composición sencilla si bastan;
  no instalar una librería de variantes o fusión de clases por rutina.
- Evitar clases contrapuestas para la misma propiedad y estado; no asumir que el último elemento
  de `className` gana siempre en CSS. Resolver la variante antes de construir las clases finales.

## Generar estilos que sobrevivan al build

- Mantener nombres de clases completos y detectables. No construir `bg-${color}-500` ni
  fragmentos equivalentes: usar mapas explícitos de clases completas para valores finitos.
- Para valores continuos, como coordenadas o colores arbitrarios controlados, usar propiedades
  CSS o estilos permitidos por el proyecto, sin intentar generar una clase por cada valor.
- Inspeccionar rutas de fuentes si se comparten componentes fuera de lo detectado automáticamente.
  Configurar el mecanismo de la versión instalada; no añadir listas enormes de clases por defecto.
- Mantener utilidades o CSS específicos para keyframes, dibujo SVG y transformaciones complejas
  cuando mejoren la lectura. Evitar `!important`, duplicación de selectores y `@apply` generalizado como parche.

## Adaptación y accesibilidad

- Construir el flujo base para pantallas pequeñas y añadir puntos de ruptura según el contenido.
  Mantener orden semántico y lectura natural al cambiar columnas o posición visual.
- Resolver anchos mínimos, contenido largo, overflow y proporciones de imágenes. Evitar alturas
  fijas que recorten texto o formularios; comprobar tamaños intermedios además de móvil y escritorio.
- Incluir foco visible, estados disabled/error y contraste suficiente. No depender solo de hover,
  color o movimiento para comunicar estado. Mantener etiquetas y comportamiento en el HTML/componente.
- Respetar movimiento reducido y toque. Si el sitio usa tema oscuro/claro, seguir el mecanismo
  existente; no añadir un segundo origen de verdad para el tema.

## Verificar y entregar

- Comprobar estilos en build, especialmente clases de variantes y fuentes compartidas.
  Inspeccionar la interfaz real si hay herramientas: móvil, escritorio, foco, estados y textos largos.
- Reutilizar los scripts de formato y lint existentes compatibles; no añadir un ordenamiento
  de clases o plugin nuevo sin una ventaja concreta para el proyecto.
- Explicar tokens o componentes reutilizados y cambios de integración. Declarar lo no verificado.

## Fuentes oficiales

- Astro: https://tailwindcss.com/docs/installation/framework-guides/astro
- Tema: https://tailwindcss.com/docs/theme
- Detección de clases: https://tailwindcss.com/docs/detecting-classes-in-source-files
- Diseño adaptable: https://tailwindcss.com/docs/responsive-design
- Estados: https://tailwindcss.com/docs/hover-focus-and-other-states

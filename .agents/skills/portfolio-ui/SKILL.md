---
name: portfolio-ui
description: "Crear o ajustar interfaz del portfolio de Luis según su diseño pixel art. Usar para secciones, componentes visuales, estilos y adaptación móvil; excluir lógica sin interfaz."
---

# Interfaz del portfolio

## Partir del diseño real

- Inspeccionar tokens, componentes y capturas disponibles. Usar las decisiones actuales del proyecto
  como autoridad; tratar las referencias de esta skill como punto de partida y no como tema inmutable.
- Mantener el carácter: fondo oscuro, acentos cian y violeta/rosa, ilustraciones pixel art y búho.
  Favorecer lectura y jerarquía por encima de ornamentación constante.
- Para un proyecto sin tokens, proponer una base: fondo `#080d10`, cian `#00e5ed`, violeta
  `#a855f7`, rosa `#dc83ec`, texto `#f4f4ef`. Verificar contraste de cada combinación y estado;
  no asumir que una paleta garantiza accesibilidad.
- Confirmar licencias y archivos de fuentes disponibles. Reservar la tipografía pixelada para
  títulos breves si perjudica la lectura de párrafos, formularios o tamaños pequeños.

## Construir piezas reutilizables

- Buscar Button, Link, SectionHeading, ProjectCard y otros equivalentes antes de crearlos.
- Centralizar tokens en el mecanismo existente, evitando colores y espaciados repetidos sin criterio.
- Usar composición y variantes semánticas pequeñas. Evitar props que mezclen página, proveedor,
  animación y lógica de negocio en un componente visual.
- Mantener iconos consistentes. Conservar `viewBox`, título accesible cuando corresponda y
  `aria-hidden` para decoración; no introducir otra librería por un icono aislado.
- Aplicar `clean-code-architecture` si se añade lógica, estado o componentes con comportamiento.

## Adaptar y hacer accesible

- Resolver primero el flujo de lectura y después los puntos de ruptura que pida el contenido.
  Comprobar anchos de referencia cercanos a 390 y 1440 px, además de un ancho intermedio.
- Evitar alturas fijas que recorten texto y desplazamiento horizontal accidental. Permitir
  palabras largas y títulos con varias líneas sin deformar tarjetas ni formularios.
- Usar HTML semántico, encabezados coherentes, etiquetas asociadas y mensajes de error comprensibles.
  Conservar foco visible, orden de tabulación natural y objetivos táctiles cómodos.
- Ofrecer la misma función mediante teclado o toque si depende de hover. No depender solo del color.
- Respetar `prefers-reduced-motion`; mantener el contenido disponible cuando las animaciones se reduzcan.
- Mantener a la mascota y los fondos fuera del camino del puntero si son decorativos.

## Verificar

- Comparar con las referencias observando jerarquía, proporciones, alineación y espacio, no solo colores.
- Comprobar textos largos, foco, hover, disabled y error cuando existan esos estados.
- Inspeccionar la vista real con herramientas disponibles. Si no hay navegador o referencia,
  declarar qué se verificó por código y qué quedó sin inspección visual.
- Evitar cambios ajenos a la sección solicitada. Entregar una explicación breve del resultado.

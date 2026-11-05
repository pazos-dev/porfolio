# Ejercicio de uso de las tres skills técnicas

Se pidió a un agente independiente usar las tres skills para proponer un listado de proyectos
en Astro con búsqueda, categorías, botón de reset, contenido inicial y colores por categoría en
Tailwind 4. No recibió las conclusiones de esta evaluación ni un repositorio de aplicación.

La propuesta resultante:

- Mantuvo una fuente de contenido y una página Astro para composición y carga de datos.
- Propuso una isla React para filtros y listado con HTML inicial e hidratación `client:load`;
  aclaró que la interactividad depende de descargar e hidratar el JavaScript.
- Conservó solo búsqueda y categoría como estado, calculando resultados durante render.
- Resolvió el reset como actualización explícita del estado de los controles.
- Propuso un mapa de clases completas para categorías finitas, en vez de concatenar fragmentos.
- Separó los criterios propuestos de APIs que deben verificarse con las versiones del proyecto.
- Incluyó verificación de build, tipos, hidratación, teclado, reset, estados vacíos y CSS generado.

El ejercicio evalúa la propuesta producida al usar las skills. No incluye implementación,
compilación de una aplicación ni inspección de su resultado en un navegador. No cubre todos los posibles
disparadores de las skills ni garantiza que un agente las aplique correctamente en toda situación.

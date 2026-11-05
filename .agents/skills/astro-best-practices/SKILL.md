---
name: astro-best-practices
description: "Crear o modificar páginas, layouts, componentes .astro, colecciones o integración e hidratación en Astro. Excluir tareas de React aisladas y estilos sin cambios en la integración Astro."
---

# Buenas prácticas de Astro

## Inspeccionar el proyecto

- Leer las instrucciones aplicables y localizar `package.json`, lockfile, configuración de Astro
  y archivos implicados. Respetar versiones, gestor e integraciones reales; usar pnpm en una base nueva de Luis.
- Consultar la arquitectura del proyecto cuando se creen módulos. Consultar `docs/stack.md`
  si está disponible para convenciones del portfolio; esta skill también debe servir sin ese documento.
- Verificar APIs e integración en documentación oficial de la versión usada. No instalar o migrar
  Astro, React o Tailwind solo para aplicar una receta de otra versión.

## Elegir renderizado y límites

- Preferir HTML estático para contenido que no necesite servidor por petición. Elegir renderizado
  bajo demanda solo por una necesidad actual; comprobar adaptador y plataforma antes de depender de ellos.
- Mantener rutas como composición y carga de datos; compartir estructura mediante layouts y piezas
  Astro con props tipadas. Usar slots para composición de contenido cuando encajen con su propósito.
- Reutilizar el esquema de contenido existente. Centralizar proyectos, navegación y metadatos;
  no duplicar fichas para destacados, listado y detalle.
- Validar contenido mediante esquemas y consultar colecciones con APIs y loaders compatibles
  con la versión instalada. Generar rutas y resolver elementos ausentes según el modo de renderizado.
- Distinguir código de frontmatter ejecutado durante build/servidor de scripts del navegador.
  No intentar que un evento React ejecute una función del frontmatter por pasarla como prop.
- Mantener secretos y accesos privilegiados en el servidor; validar entradas de endpoints.
  No confundir un endpoint disponible en desarrollo con un servicio desplegable en hosting estático.

## Hidratar con intención

- Renderizar componentes React sin directiva cliente si solo se necesita su HTML. Si deben responder
  a eventos, elegir `client:*` según el momento en que deban estar disponibles.
- Usar `client:load` para interacción necesaria desde la carga. Considerar `client:visible` para
  islas fuera de pantalla y `client:idle` si esperar no perjudica interacción ni accesibilidad.
- Reservar `client:only` para render exclusivo cliente justificado. Investigar diferencias servidor/cliente
  antes de usarlo como parche de hidratación; mantener contenido inicial útil cuando corresponda.
- Enviar props serializables a islas hidratadas. Colocar callbacks y estado compartido dentro del
  árbol cliente correspondiente; no asumir que React Context atraviesa raíces de islas independientes.
- Acceder a APIs del navegador en el ciclo cliente apropiado. Evitar lecturas de `window` o `document`
  al evaluar módulos que también se renderizan en servidor.
- Usar scripts o CSS para interacciones sencillas si la infraestructura existente basta.
  Evitar convertir toda una página en React para activar un único control.
- Si hay navegación cliente o transiciones, comprobar el ciclo de inicialización vigente de Astro.
  Evitar duplicar listeners y disponer controladores al abandonar la vista según la integración real.

## Recursos, HTML y entrega

- Mantener metadatos, idioma, título y estructura semántica en el layout apropiado. Preservar enlaces
  reales, encabezados coherentes, formularios etiquetados y foco utilizable.
- Usar el tratamiento de imágenes del proyecto: dimensiones, texto alternativo y tamaños adecuados.
  Distinguir recursos procesados de archivos públicos; no hidratar una imagen decorativa para mostrarla.
- Ejecutar los scripts reales de análisis de Astro/tipos y build que afecte la tarea.
  Verificar rutas, carga inicial e interacción hidratada en navegador si está disponible.
- Revisar la salida y el JavaScript cliente cuando el cambio afecte carga o hidratación.
  Declarar lo no ejecutado y las limitaciones; no afirmar que build equivale a verificación de tipos.

## Fuentes oficiales

Consultar solo las necesarias para la tarea y la versión real:

- Componentes e islas: https://docs.astro.build/en/guides/framework-components/
- Directivas: https://docs.astro.build/en/reference/directives-reference/
- Colecciones: https://docs.astro.build/en/guides/content-collections/
- TypeScript: https://docs.astro.build/en/guides/typescript/
- Imágenes: https://docs.astro.build/en/guides/images/

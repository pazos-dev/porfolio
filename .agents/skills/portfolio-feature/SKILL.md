---
name: portfolio-feature
description: "Implementar funcionalidades del portfolio de Luis de principio a fin. Usar al añadir rutas, filtros, proyectos o flujos; excluir revisiones sin cambios y tareas solo de ilustración."
---

# Implementar funcionalidades del portfolio

## Entender el objetivo

1. Leer las instrucciones aplicables y localizar la funcionalidad relacionada.
2. Inspeccionar el stack, scripts y convenciones reales. Tomar Astro + React + TypeScript
   + Tailwind como propuesta para un proyecto nuevo; conservar un proyecto existente y no migrarlo por rutina.
3. Concretar entrada, acción y resultado; incluir estados vacío, error y carga solo donde correspondan.
   Aprovechar el contexto disponible y preguntar únicamente por decisiones que bloqueen el comportamiento.
4. Definir entre dos y cinco criterios observables para cambios con varios comportamientos.
   Mantener breve una corrección pequeña y continuar hasta completar el alcance autorizado.

## Distribuir el trabajo

- Buscar componentes, datos y contratos existentes antes de añadir equivalentes.
- Consultar documentación de arquitectura si la tarea afecta límites o crea módulos.
- Identificar piezas que se reutilizan y responsabilidad de cada archivo nuevo.
- Aplicar `clean-code-architecture` al escribir lógica o componentes si está disponible.
  Cargar `portfolio-ui`, `portfolio-assets` u `owl-animation` solo para las partes que correspondan.
  No releer todas las skills por cada edición ni repetir sus listas de revisión.
- Componer secciones en páginas; mantener una fuente de contenido para tarjeta, listado y detalle.
  Mantener lo específico de una funcionalidad dentro de ella y extraer lo común cuando haya uso real.

## Implementar

- Usar el mínimo JavaScript cliente necesario. Si el stack es Astro, mantener contenido estático
  en Astro e hidratar las islas interactivas cuando lo necesiten.
- Mantener proyectos en la fuente de contenido existente. No inventar clientes, resultados,
  experiencia profesional o testimonios para completar el diseño.
- Conservar intención de navegación: enlaces para destinos, botones para acciones y URLs útiles
  para filtros cuando se haya requerido compartir o conservar esas vistas.
- Resolver estados de interacción y teclado. No presentar una simulación de envío como contacto real.
  Si falta un servicio imprescindible, indicar la limitación y preparar una integración explícita.
- Coordinar la mascota mediante eventos semánticos o callbacks; no introducir reglas de formularios
  o proyectos dentro de su dibujo o motor de animación.
- Mantener el cambio enfocado y evitar dependencias o configuraciones que no requiera el objetivo.

## Verificar y entregar

- Ejecutar los scripts existentes pertinentes: tipos, lint, build y pruebas afectadas.
  No inventar comandos ni afirmar haber probado un navegador que no estuvo disponible.
- Comprobar los criterios y estados relevantes, incluida navegación, móvil y teclado si hay UI.
- Revisar el diff por duplicación y responsabilidades mezcladas; corregir los problemas del cambio.
- Resumir resultado, verificación y limitaciones. No publicar ni enviar mensajes externos
  salvo que la instrucción del usuario lo autorice.

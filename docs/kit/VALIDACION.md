# Validación del kit completo

Se recuperaron las dos bases y el plan originales, se leyeron sus contenidos y se reunieron
sus piezas en una estructura visible. El AGENTS.md se consolidó para seleccionar documentos y
skills según la tarea. Se añadió la guía técnica del stack con referencias oficiales consultadas.

Se comprueban los siguientes puntos durante la construcción:

- Existen las nueve carpetas de skills y sus nueve `SKILL.md`.
- Las seis skills originales conservan exactamente los bytes de la versión del ZIP de origen.
- Las tres nuevas skills técnicas pasan el validador de skills y la revisión de metadatos.
- El frontmatter incluye nombre y descripción, y el nombre coincide con la carpeta.
- Los metadatos del selector existen y mencionan la skill correcta.
- Las referencias locales de cada skill se resuelven dentro del paquete.
- Los documentos principales y la guía del stack existen.
- Ninguna carpeta del ZIP empieza con punto; `skills/` y `docs/` tienen entradas explícitas.
- El inventario y las huellas describen los archivos entregados; el ZIP se puede extraer y coincide
  byte por byte con el contenido preparado.

Las seis skills originales se conservan sin cambios; los ejercicios de uso previos se describen en
`docs/validacion-anterior.md`. No se repiten esos ejercicios por cambiar su empaquetado.

Se realizó un ejercicio independiente de propuesta de un listado interactivo usando las tres
skills técnicas nuevas. El resultado y sus límites están en `docs/validacion-stack.md`.

Esta validación verifica el paquete. No se ha construido ni ejecutado el portfolio real,
configurado sus herramientas o conectado un servicio de contacto. Verificar descubrimiento y
comportamiento al integrar los archivos en el proyecto y el agente que se vaya a utilizar.

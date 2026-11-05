---
name: portfolio-review
description: "Revisar un diff, funcionalidad o refactor del portfolio. Usar cuando se solicite revisión o auditoría de un cambio; no activar por cada edición trivial."
---

# Revisar cambios del portfolio

## Delimitar la revisión

1. Identificar el objetivo y el diff o archivos indicados. Seguir los consumidores y límites
   afectados, sin auditar todo el proyecto por rutina.
2. Leer las reglas aplicables y los contratos relevantes. Evaluar el comportamiento acordado
   antes de proponer preferencias personales de estilo.
3. En una revisión sin solicitud de cambios, informar hallazgos y no modificar archivos.
   Si la tarea autoriza implementar y corregir, resolver los fallos del cambio y verificarlo.

## Buscar problemas concretos

- Comportamiento: errores de datos, estados faltantes, fallos silenciados, carreras y regresiones.
- Reutilización: reglas duplicadas, fuentes de contenido divergentes y componentes equivalentes ya existentes.
  Distinguir duplicación semántica de coincidencias visuales legítimas.
- Cohesión: páginas que contienen reglas y proveedores externos; componentes que mezclan responsabilidades;
  hooks o utilidades sin propósito propio; abstracciones con muchas excepciones.
- Dependencias: ciclos, imports desde módulos internos ajenos, UI genérica dependiente de funcionalidades,
  dominio dependiente de React/ORM/HTTP y contratos que propagan detalles externos innecesarios.
- Complejidad: capas, clases, patrones o dependencias sin necesidad actual. No exigir un patrón por costumbre.
- Efectos: listeners, temporizadores, RAF, observers y solicitudes sin limpieza o cancelación cuando proceda.
- Interfaz: teclado, semántica, móvil, contraste, estados de error, movimiento reducido y contenido accesible.
- Integridad: secretos, datos personales en logs, validación ausente en límites y simulaciones presentadas como reales.
- Alcance: modificaciones no relacionadas, configuración debilitada, pruebas eliminadas o errores ocultados.

## Verificar con evidencia

- Ejecutar comprobaciones pertinentes disponibles y seguras según las instrucciones del proyecto.
  Priorizar los scripts y pruebas existentes. No instalar herramientas o modificar configuración
  para una revisión de lectura sin necesidad y autorización dentro del alcance.
- Reproducir fallos cuando sea posible. Separar fallos del cambio de problemas previos.
- Tratar líneas y complejidad como señales para investigar; no declarar un defecto solo por superar un número.
- Revisar pruebas de comportamiento y casos límite reales; no recomendar una prueba para cada línea o detalle interno.

## Informar

Ordenar hallazgos por impacto. Para cada uno, indicar archivo y línea si se conocen,
condición que lo activa, consecuencia y corrección concreta. Diferenciar errores demostrados,
riesgos pendientes de confirmar y sugerencias opcionales.
Si no hay hallazgos, decirlo sin inventarlos e indicar las limitaciones de la revisión.
No afirmar que pasar lint o build demuestra una arquitectura correcta o ausencia de errores.

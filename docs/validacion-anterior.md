# Validación del paquete

Se han validado los seis `SKILL.md` con el validador de la guía de creación de skills:
frontmatter, campos requeridos y nombres. También se comprueban las referencias locales,
los metadatos del selector, la ausencia de plantillas pendientes y la integridad del ZIP.

Se han realizado dos ejercicios independientes con agentes que recibieron la skill y una tarea,
sin proporcionarles las conclusiones de la revisión:

| Ejercicio | Resultado observado |
| --- | --- |
| Añadir búsqueda y filtro a un pequeño archivo de proyectos que ya contenía una función de filtrado | Reutilizó la función existente, mantuvo la llamada sin parámetros y pasó cuatro pruebas de comportamiento con `node --test` a través del script del proyecto de ejemplo. |
| Proponer mirada y saludo para una ilustración PNG plana, con pausa, móvil y movimiento reducido | Identificó la necesidad de separar o redibujar piezas; propuso canales independientes, límites de mirada, pausa persistente y limpieza de recursos. No afirmó haber articulado el PNG. |

Estos ejercicios son una muestra de uso. No prueban todos los disparadores ni garantizan que
cualquier agente aplique siempre las instrucciones. La mascota del segundo ejercicio no fue
implementada: se revisó la propuesta, no una animación funcionando.

No se han instalado herramientas, configurado CI ni compilado el portfolio de Luis mediante
este paquete. Al integrarlo, comprobar el descubrimiento de skills en el agente utilizado y
verificar cada cambio con los scripts y las pruebas del proyecto real.

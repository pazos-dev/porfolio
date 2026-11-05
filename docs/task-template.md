# Plantilla de funcionalidad

Usar una ficha breve por funcionalidad con comportamiento significativo. Para una corrección trivial basta con resumir los mismos puntos en la tarea. No es necesario crear un documento por cada cambio de estilo.

## Objetivo

Qué debe poder hacer la persona que visita la web y por qué.

## Comportamiento esperado

- Estado inicial.
- Acción del usuario o evento que lo activa.
- Resultado visible.
- Estados vacíos, de carga y de error, cuando correspondan.
- Teclado, móvil y movimiento reducido, cuando sean relevantes.

## Alcance

Qué partes afecta. Qué decisiones ya están fijadas. Qué queda fuera de esta tarea.

## Reutilización y responsabilidades

- Componentes, tipos y estilos existentes que pueden servir.
- Origen de los datos.
- Responsabilidad de cada pieza nueva.
- Dependencias o acoplamientos que la propuesta introduce.

El agente propone la distribución concreta después de inspeccionar el repositorio. La ficha no necesita prescribir todos los nombres de funciones ni cada detalle interno.

## Criterios de aceptación

Escribir resultados observables. Por ejemplo:

- El filtro muestra solo los proyectos de la categoría elegida.
- Al volver a Todas se restaura el listado completo.
- Si no hay resultados aparece un estado vacío claro.
- Las fichas siguen utilizando el componente de tarjeta existente.
- La interacción funciona con teclado.

## Verificación

Qué comprobaciones automáticas y visuales demostrarán esos resultados. Elegirlas según el riesgo y el comportamiento, no por volumen de pruebas.

## Cierre

Resumen del cambio, decisiones relevantes, comprobaciones ejecutadas y limitaciones pendientes.

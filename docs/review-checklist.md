# Revisión de cada cambio

## Diseño del código

- [ ] Cada archivo tiene una responsabilidad principal identificable.
- [ ] Las páginas componen secciones sin absorber motores o lógica extensa.
- [ ] Se buscaron piezas existentes antes de crear otras nuevas.
- [ ] La extracción de componentes tiene un motivo concreto.
- [ ] Las abstracciones tienen contratos claros y pocas variantes justificadas.
- [ ] Se revisaron copias de datos, condiciones, estilos y comportamiento.
- [ ] Las dependencias respetan las fronteras definidas.
- [ ] No hay estructuras vacías ni dependencias para necesidades hipotéticas.
- [ ] El diff se mantiene dentro del objetivo de la tarea.

## Comportamiento

- [ ] Se cumplen los criterios de aceptación observables.
- [ ] Se comprueban los errores y estados vacíos relevantes.
- [ ] Los efectos limpian sus recursos cuando corresponde.
- [ ] La interfaz se revisó en móvil y escritorio cuando el cambio lo requiere.
- [ ] Teclado, foco y movimiento reducido funcionan en la interacción afectada.

## Comprobaciones

- [ ] Se ejecutaron los comandos reales pertinentes de formato, análisis, tipos y compilación.
- [ ] Las pruebas añadidas protegen comportamiento significativo.
- [ ] Se indican las verificaciones no realizadas.
- [ ] Se revisaron las advertencias de tamaño y complejidad con criterio.
- [ ] Las excepciones de reglas son locales y están justificadas.

Un archivo corto no garantiza una buena separación; muchos archivos pequeños tampoco. El objetivo es comprender y cambiar el comportamiento con el menor acoplamiento razonable.

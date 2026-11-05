---
name: owl-animation
description: "Crear o modificar animaciones e interacciones del búho del portfolio web: ojos, puntero, estados y fondos animados asociados. Excluir mascotas de ChatGPT Work y tareas solo de exportación de imágenes."
---

# Animar el búho del portfolio

## Comprobar qué se puede animar

- Inspeccionar los assets y la implementación real. Distinguir SVG con piezas separadas,
  PNG por piezas, sprite sheet e imagen plana. No suponer que una ilustración ya es un rig.
- Para articulación, requerir ojos/pupilas/párpados, cabeza, alas y cuerpo identificables y
  pivotes definidos. Si faltan piezas, explicar qué se puede mover y qué habría que dibujar.
- Conservar la identidad y textura pixel art. Evitar deformaciones extremas y pérdida de bordes.
- Reutilizar una mascota configurable entre páginas. Crear arte nuevo solo para acciones o
  perspectivas que lo necesiten; no generar un sprite distinto por cada ruta.

## Separar dibujo, control e integración

- Mantener el dibujo libre de reglas de negocio. Separar controlador de movimiento,
  enlace con el framework y configuración de la instancia si sus responsabilidades lo justifican.
- Exponer la API mínima requerida: acciones como `lookAt`, `play`, `pause`, `resume` y `dispose`
  son posibilidades, no obligaciones de crear métodos sin uso.
- Traducir acciones de la página a eventos semánticos: `greet`, `focus`, `success`, `error`.
  No hacer que la mascota conozca selectores internos de formularios, SDKs de email o rutas ajenas.
- Elegir CSS para bucles simples; Web Animations API cuando se requiera control temporal;
  `requestAnimationFrame` para seguimiento continuo. Reutilizar el motor instalado si cumple el objetivo.
  No añadir varias librerías para animar las mismas propiedades.

## Controlar estados y canales

- Definir estados y transiciones antes de añadir acciones simultáneas. Usar un estado explícito
  o una máquina pequeña cuando evite combinaciones inválidas; no añadir una librería por rutina.
- Dar a cada propiedad animada un propietario. Usar grupos SVG anidados o composición de transforms
  para evitar que seguimiento del puntero, inclinación y saludo sobrescriban el mismo `transform`.
- Separar canales compatibles, por ejemplo mirada y alas; interrumpir o encolar acciones incompatibles.
  Definir cuándo vuelve a reposo y qué sucede si la misma acción se repite.
- Mantener una configuración central para amplitud, velocidad y límites. Respetar la pausa
  explícita del usuario al cambiar visibilidad, preferencia de movimiento o ruta.
- Leer [control de estados](references/state-control.md) al añadir prioridades o combinar acciones.

## Seguir el puntero y mover fondos

- Convertir coordenadas del puntero al espacio local del personaje; usar la transformación
  inversa del SVG cuando haya `viewBox` o escalado. Limitar el desplazamiento al rango de cada ojo/cabeza.
- Guardar el último objetivo fuera del estado reactivo por frame. Actualizar con un único bucle
  por controlador, interpolar con tiempo transcurrido y evitar renders completos por `pointermove`.
- Medir geometría al montar y cuando cambie; evitar lecturas de layout y escrituras alternadas por frame.
  No acumular saltos al volver de una pestaña oculta.
- En salida del puntero, toque o dispositivos sin hover, volver a una pose cómoda y conservar la función de la página.
- Aplicar parallax sutil a capas independientes del fondo, sin mover texto ni bloquear controles.
  Detener el movimiento fuera de pantalla o cuando la pestaña esté oculta si corresponde.

## Accesibilidad, limpieza y pruebas

- Respetar `prefers-reduced-motion` al iniciar y cuando cambie: ofrecer pose estable, reducir
  movimiento no esencial y conservar feedback mediante texto o estados accesibles.
- Mantener interacción funcional con teclado y toque. Ocultar decoración a lectores de pantalla;
  dar nombre y foco a controles reales. Evitar destellos y movimiento invasivo.
- Cancelar RAF, animaciones, timers y observers y retirar listeners al desmontar/disponer.
  Hacer `dispose` seguro si se llama más de una vez; evitar callbacks tardíos sobre una instancia cerrada.
- Verificar prioridad, interrupción, repetición, pausa/reanudación, límites de mirada, navegación
  entre rutas y preferencia de movimiento reducido. Usar las herramientas y pruebas reales del proyecto.
- Distinguir control implementado de acciones que solo están documentadas. Informar limitaciones del arte.

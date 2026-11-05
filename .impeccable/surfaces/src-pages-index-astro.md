---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Portada

Modo: `Experience`. El trabajo manda; la interfaz se retira.

## Autoridad visual

Las cinco capturas de `../exampleDesing/` son la autoridad, no un punto de partida. La portada
reproduce la composición de `1000042444.png`; no se inventa estructura nueva. Los marcos de ventana
del diseño pertenecen a Proyectos (`1000042446.png`), no a la portada.

## Job y audiencia

Cliente con un proyecto (prioridad) y reclutador técnico. Llega desde un enlace, casi siempre en
celular, con poco tiempo. En cinco segundos tiene que saber quién es Luis y qué hace.

## Resultado y prueba

Acción primaria `Ver proyectos`; secundaria `Hablemos` (mailto). Prueba que lidera: el búho animado,
que demuestra oficio y sostiene la identidad pixel art.

## Dirección: contrato

THESIS: la portada es una escena pixel art de escritorio nocturno con el texto montado a la
izquierda y el búho vivo abajo, no un hero de tarjetas ni un header con ilustración de fondo.

OWN-WORLD: fondo `#080d10`, cian `#00e5ed`, violeta `#a855f7`, rosa `#dc83ec`, texto `#f4f4ef`;
titulares pixel, cuerpo mono legible; botones rectangulares con borde y desplazamiento de sombra,
sin radios redondeados; iconos de línea de 1px.

STORY: entiende quién es y qué hace, ve que sabe construir cosas que se mueven, y elige entre mirar
proyectos o escribirle.

FIRST VIEWPORT: barra superior con pluma, marca `{Luis Pazos}`, badge `DISPONIBLE` y navegación con
corchetes; columna izquierda con antetítulo, titular pixel de dos líneas (`Hola, soy Luis Pazos.` /
`Ing. de software.`), párrafo de cuatro líneas y los dos botones; derecha, la ilustración del
escritorio sangrando al borde; franja de paisaje al pie con el búho sobre las rocas a la izquierda y
la flecha de scroll a la derecha.

FORM: composición de la captura de referencia, orden 2 de la lista propia; semilla `6d8bc191`,
índice sorteado 3 (ventana de sistema) descartado por contradecir la autoridad visual.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the
verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Alcance

Solo la portada. Header, navegación y footer se construyen acá porque la captura los muestra, pero
las otras tres secciones no se tocan. Sin formulario. Español primero.

## Estados y rangos

Título y párrafo reales; 390 px y 1440 px; `prefers-reduced-motion` deja el búho quieto; sin
JavaScript el texto y los botones siguen visibles y el canvas queda como marco con borde.

## Abiertos

- Familia tipográfica: se propone Pixelify Sans (títulos) + JetBrains Mono (cuerpo), pendiente de
  confirmar contra las capturas.
- Si los controles de la barra son decorativos (hoy: sí).
- Si el paisaje del pie se anima (hoy: quieto).

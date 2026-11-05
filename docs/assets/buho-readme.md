# Búho animado para la web de Luis

> Documento original del paquete de assets. En este repositorio, `owl-player.js`,
> `owl-player.d.ts` y `react/OwlMascot.tsx` viven en `src/features/mascot/` y los assets en
> `public/buho/`. Las rutas de ejemplo de más abajo corresponden al paquete suelto.

## Probar ahora

Abre `demo.html`: contiene las imágenes y el código en un único archivo y funciona sin instalar nada, sin claves y sin servicios externos. `index.html` es la misma demo usando las imágenes de la carpeta assets; conviene mantener el árbol del ZIP intacto.

Acciones: parpadear, saludar, aletear, saltar y celebrar. Puedes activar seguimiento del puntero, movimiento de fondo, animación automática, pausa, velocidad y cambiar entre bosque y escritorio. En móvil se puede tocar el escenario y usar los controles.

## Qué se entrega

- Tres animaciones de seis fotogramas: parpadeo, saludo y aleteo.
- `assets/sprites/`: atlas horizontal PNG y WebP con alfa, celdas de 256 × 256, seis columnas; reposo separado.
- `assets/frames/`: 18 PNG individuales para importar en Aseprite.
- `assets/previews/`: GIF con fondo oscuro y WebP animados con transparencia.
- `source-atlases/`: hojas originales de seis poses generadas con la referencia.
- `animations.json`: orden, duraciones y dimensiones de los fotogramas.
- `owl-player.js` y `owl-player.d.ts`: controlador reutilizable sin dependencias.
- `react/OwlMascot.tsx`: componente React con tipado.
- `PROMPTS.md`: instrucciones de generación y método.

## Integrar en React / Vite

1. Copia `assets/` dentro de `public/buho/assets/`.
2. Copia `owl-player.js`, `owl-player.d.ts` y la carpeta `react/` dentro de una carpeta de tu código, preservando sus rutas relativas. Por ejemplo `src/features/owl/`.
3. Importa el componente:

```tsx
import { useState } from 'react';
import { OwlMascot } from './features/owl/react/OwlMascot';
import type { OwlAction } from './features/owl/owl-player.js';

export function Demo() {
  const [action, setAction] = useState<OwlAction>('idle');
  const [actionKey, setActionKey] = useState(0);
  const run = (next: OwlAction) => {
    setAction(next);
    setActionKey(key => key + 1);
  };
  return <>
    <OwlMascot baseUrl="/buho" action={action} actionKey={actionKey}
      followPointer parallax automatic />
    <button onClick={() => run('wave')}>Saludar</button>
    <button onClick={() => run('celebrate')}>Celebrar</button>
  </>;
}
```

Para celebrar un envío real, ejecuta `run('celebrate')` cuando tu petición termine correctamente.

## Control directo

```js
import { OwlPlayer } from './owl-player.js';
const owl = new OwlPlayer(document.querySelector('canvas'), { baseUrl: '/buho' });
await owl.loadPromise;
owl.play('blink'); // idle | blink | wave | flap | jump | celebrate
owl.setOptions({ followPointer: true, speed: 1.2 });
owl.pause(true);
// Al desmontar la pantalla:
owl.destroy();
```

## Abrir en Aseprite

Abre `assets/sprites/parpadeo.png` y utiliza File > Import Sprite Sheet con celdas de 256 × 256, seis columnas y una fila. Repite con saludo y aleteo. Las duraciones están en animations.json. También puedes importar la secuencia de PNG individuales.

## Alcance y fidelidad

Las poses se generaron a partir de tu búho y después se alinearon tomando los pies como referencia. Hay pequeñas variaciones de dibujo entre fotogramas y un halo violeta/cian alrededor del personaje. Es una primera versión funcional, no una animación dibujada a mano con identidad perfecta píxel a píxel.

El seguimiento desplaza e inclina el búho completo dentro del escenario; no mueve las pupilas por separado. Salto y celebración combinan transformaciones con las poses disponibles. El fondo usa capas ya extraídas y estrellas añadidas por código; no se han separado las plantas o luces dentro de la ilustración del escritorio. Los visitantes con preferencia de movimiento reducido ven una versión quieta. Los fotogramas siguen disponibles para ajustar o ampliar la animación en Aseprite.

La demo no requiere React, Internet ni un servidor. La integración React sí necesita tu proyecto habitual. Ninguna acción modifica el inventario, el formulario ni otros datos de tu web: esos eventos se conectan desde tu aplicación.


## Verificación

La demo se probó en Chrome: carga de recursos, saludo, celebración, pausa y selección del fondo. Se comprobaron los atlas, los 18 fotogramas y la decodificación de los GIF/WebP animados. El componente React se entrega como código de integración; no se ejecutó dentro de tu proyecto.

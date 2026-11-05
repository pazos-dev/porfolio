# Recursos web · Luis Pazos

## Qué contiene

- `images/`: escritorio, búho y paisaje inferior aislados, PNG con transparencia y WebP.
- `svg/logo-mark.svg`: pluma con símbolos de código, reconstruida como vector editable.
- `svg/logo-horizontal.svg`: pluma y nombre con letras vectoriales, sin fuentes externas.
- `svg/icons/`: carpeta, conversación, flechas, destello, código y utilidades. Admiten `currentColor` al insertarlos en línea.
- `favicons/`: SVG, ICO multirresolución, PNG, Apple Touch Icon y manifest.
- `originales/`: recortes directos de la captura, con fondo, sin regeneración de píxeles.
- `preview.html`: catálogo local. Abrir después de descomprimir.

## Fidelidad de los recursos

La fuente es una captura PNG de 1536 × 961 px, no los archivos de diseño ni el código de la web. Los SVG son recreaciones vectoriales; no son los SVG originales. Las imágenes transparentes se aislaron con edición generativa y pueden mostrar diferencias en detalles, proporciones o encuadre. Para conservar los píxeles de la referencia están los recortes de `originales/`. El recorte inferior original incluye el búho; no es una capa independiente. El recorte del búho conserva un pequeño fragmento de roca. No se recuperan partes ocultas ni resolución original desde la captura.

## Uso en React / Vite

Copiar `images`, `svg` y `favicons` dentro de `public`.

```tsx
<img src="/images/escritorio.webp" alt="Programador ante sus monitores" width={1578} height={970} style={{ width: '100%', height: 'auto' }} />
<img src="/images/buho.webp" alt="" aria-hidden="true" />
<img src="/svg/logo-mark.svg" alt="Luis Pazos" width={64} height={60} />
```

Las dimensiones reales se documentan en `assets.json`; ajustar width/height al recurso elegido para evitar saltos de diseño.

En el `<head>`:

```html
<link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
<link rel="icon" href="/favicons/favicon.ico" sizes="any" />
<link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
<link rel="manifest" href="/favicons/site.webmanifest" />
<meta name="theme-color" content="#00e5ed" />
```

No convertir las ilustraciones complejas a SVG con una imagen incrustada: seguirían siendo mapas de bits. Los SVG de este paquete contienen geometría vectorial real.


## Ampliación: Sobre mí, Contacto, Archivo y Proyectos

Nuevas imágenes transparentes en `images/` (PNG y WebP):

- `buho-libro-farol`: búho, cuaderno, farol, rocas y pluma de Sobre mí.
- `buho-buzon`: búho con pluma sobre buzón de Contacto.
- `buho-asomado`: parte visible del búho que se asoma sobre la ventana del proyecto. Incluye un halo suave de la edición.
- `bosque-luna`: bosque, montañas, luna y rocas de Sobre mí.

Las seis miniaturas y las vistas grandes visibles están en `images/proyectos/`. Son recortes directos, sin regeneración ni aumento artificial de resolución. Las miniaturas tienen unos 182 px de ancho; conviene sustituirlas por capturas reales de tus proyectos al publicar. `proyecto-02-visible-parcial` y `paisaje-proyecto-02-visible-parcial` están incompletos porque la captura adjunta también lo está.

En `svg/decoraciones/` hay recreaciones vectoriales reutilizables de la pluma, estrellas, ruta horizontal, ruta vertical, textura de puntos y marco de ventana. Las rutas son aproximaciones de diseño, no trazados originales extraídos. Los bordes con plantas y rocas se conservan como recortes con fondo en `originales/nuevos/`; algunos contienen fragmentos de interfaz o texto porque son partes de una captura plana. Para componer un borde transparente se pueden combinar `images/paisaje-inferior.webp`, `images/bosque-luna.webp` y las rutas SVG.

Se añaden iconos de perfil, corazón, experiencia, empresa, calendario, estudios, correo, enviar, búsqueda, navegación y controles de ventana. El icono GitHub representa la marca de GitHub y no es una marca propia de este paquete.

`preview.html` muestra el paquete completo tras descomprimirlo. Los favicons y los recursos de la primera entrega están incluidos.

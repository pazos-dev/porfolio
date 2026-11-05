# Plan de desarrollo · Portfolio de Luis Pazos

## Objetivo

Publicar un portfolio que presente a Luis como desarrollador, explique proyectos reales y facilite el contacto. Mantener la identidad visual oscura con violeta, cian e ilustraciones de estilo pixel art. Incorporar movimiento de forma progresiva, sin convertir la mascota en un requisito para publicar.

## Punto de partida

- Hay una dirección visual definida mediante referencias de Inicio, Proyectos, Sobre mí y Contacto.
- Se han preparado recursos gráficos y una demo de animaciones por fotogramas.
- La mascota articulada requiere un trabajo diferente: dibujo por piezas y control de sus partes desde código. Queda para una segunda versión.
- Está pendiente identificar el repositorio real del portfolio y comprobar si ya existe una implementación. No se presupone que haya que rehacerla.
- Penpot será la herramienta propuesta para el diseño. Su conexión MCP es una ayuda opcional: la disponibilidad del MCP no debe bloquear el avance.

## Primera versión publicable

1. **Inicio:** nombre, especialidad, propuesta de valor, proyectos destacados y acceso a contacto.
2. **Proyectos:** selección de dos o tres trabajos reales. Cada uno tendrá problema, aportación, tecnologías, capturas y enlaces disponibles. Identificar claramente los proyectos en desarrollo.
3. **Sobre mí:** presentación breve, experiencia, formación y habilidades relevantes; sin inventar títulos ni resultados.
4. **Contacto:** un canal directo operativo. El formulario se incluirá cuando tenga un servicio real de envío y estados de éxito/error; hasta entonces puede usarse un enlace de correo.
5. **Elementos comunes:** navegación, footer, logo, favicon y versiones de escritorio y móvil.

Las secciones pueden pertenecer a una página principal. Las páginas de detalle y el archivo de proyectos se añaden cuando el contenido lo justifique. No se necesita un panel de administración, autenticación o base de datos para la primera versión.

## Fases y criterios de cierre

| Fase | Trabajo | Resultado que permite continuar |
| --- | --- | --- |
| 0. Revisar el punto de partida | Identificar el repositorio, ejecutar lo existente, revisar stack y recursos. Si no existe código, crear el proyecto una vez elegida su base. | Proyecto localizado y alcance acordado; listado de lo que se conserva y lo que falta. |
| 1. Cerrar contenido | Elegir proyectos, redactar presentación y descripciones, reunir capturas y verificar enlaces y datos profesionales. | Contenido suficiente para diseñar con textos e imágenes reales. |
| 2. Diseñar en Penpot | Importar recursos; definir colores, tipografía, espaciado y componentes; diseñar Inicio en escritorio y móvil; extender el sistema a las demás secciones. | Diseño consistente y adaptable a móvil, con orden de lectura y acciones claras. |
| 3. Implementar la estructura | Navegación, layout, componentes comunes y contenido. Conservar el stack si ya es adecuado; usar control de versiones y cambios acotados. | Todas las secciones se pueden recorrer y sus enlaces funcionan. |
| 4. Integrar recursos y movimiento básico | Optimizar imágenes, reservar sus dimensiones y añadir transiciones discretas. Encapsular la mascota como componente independiente. | Web estable visualmente, con movimiento que respeta la preferencia de reducir animaciones. |
| 5. Verificar y publicar | Comprobar móvil/escritorio, teclado, contraste, enlaces, carga de imágenes, metadatos, contacto real y compilación. Elegir alojamiento y dominio cuando se conozcan los requisitos. | URL utilizable y sin contenido provisional visible ni funciones simuladas. |
| 6. Mascota articulada | Redibujar el búho en SVG por partes; preparar pupilas, párpados, cabeza, alas, cuerpo y patas; programar acciones y conectar eventos. | Un personaje reutilizable que responde a la página sin bloquear la navegación. |

## Diseño: primera sesión

- Crear el archivo **Portfolio Luis** en Penpot.
- Organizar páginas de trabajo: **Fundamentos**, **Componentes** y **Pantallas**.
- Usar como valores iniciales: fondo `#080d10`, cian `#00e5ed`, violeta `#a855f7`, rosa `#dc83ec`, texto claro `#f4f4ef`. Comprobar contraste antes de fijarlos.
- Probar una tipografía legible para textos y reservar la apariencia pixelada para títulos o acentos.
- Crear tableros iniciales de 1440 px y 390 px de ancho como referencias de diseño, no como restricciones de la implementación.
- Diseñar primero la portada con nombre, propuesta de valor, dos acciones y una ilustración. Resolver su versión móvil antes de ampliar el resto.
- Crear componentes para navegación, botón principal/secundario, tarjeta de proyecto y encabezado de sección.

## Contenido: ficha de proyecto

Completar para cada proyecto seleccionado:

- Nombre y estado actual.
- Qué problema resuelve y a quién sirve.
- Qué desarrolló Luis y qué decisiones tomó.
- Tecnologías utilizadas.
- Una o varias capturas reales.
- Enlace a repositorio y demo, si son accesibles.
- Resultado comprobable o aprendizaje concreto, sin métricas inventadas.

Como candidatos iniciales pueden evaluarse el inventario de repuestos y el catálogo multimedia. Su selección depende del estado real del código y de las capturas disponibles. Un tercer proyecto es opcional.

## Preparación para la mascota, sin retrasar la publicación

Reservar un componente `Mascota` y un lugar definido en el layout. La primera versión puede mostrar una imagen estática o una animación discreta. Las páginas comunicarán eventos semánticos como `contactFocused`, `messageSent` y `projectOpened`; el controlador visual decidirá cómo reaccionar.

La versión articulada se construirá como un personaje único reutilizable. No habrá un SVG diferente para cada página. Para mover los ojos y las alas independientemente se necesitarán piezas reales; incrustar un PNG dentro de un SVG no crea articulaciones.

El motor de animación ya está elegido: GSAP, con entrada única en `src/motion/gsap.ts` y respeto de
`prefers-reduced-motion` mediante `gsap.matchMedia()`. Los nombres definitivos de los métodos del
personaje siguen abiertos y se deciden al implementarlo, según las interacciones necesarias.

## Primer paso concreto

**Localizar el proyecto actual y seleccionar dos proyectos reales para mostrar.** Con eso, preparar el contenido de la portada y diseñarla en Penpot en escritorio y móvil. La implementación comienza cuando esa portada y su contenido están suficientemente definidos.

## Pendientes para ajustar el plan

- Repositorio del portfolio, si existe.
- Proyectos que Luis quiere destacar y sus enlaces.
- Texto profesional y canal de contacto que se publicarán.
- Disponibilidad de dominio y requisitos de alojamiento.

No se estiman fechas hasta revisar cuánto código y contenido existe.

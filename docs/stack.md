# Guía técnica: Astro, React, TypeScript y Tailwind

## Skills técnicas incluidas y cuándo ampliarlas

No es obligatorio instalar una skill por tecnología para programar con ellas. Una skill sirve
para conservar procedimientos y decisiones propios del proyecto. Este kit incluye seis skills generales y tres técnicas: `astro-best-practices`,
`react-component-patterns` y `tailwind-design-system`. Las tres técnicas fijan procedimientos de
implementación, revisión y verificación del stack; esta guía conserva sus decisiones de integración. Consultar documentación oficial y las versiones reales para APIs y configuración.

Añadir una skill específica cuando exista un trabajo repetido con reglas propias que esta guía
ya no cubra bien: por ejemplo, crear colecciones complejas, integrar un sistema de componentes
establecido o mantener un proceso de migración. Delimitar su activación y evitar copiar un manual
completo del framework o instrucciones que contradigan estas reglas.

## Elegir la herramienta para cada responsabilidad

| Necesidad | Preferencia inicial | Motivo |
| --- | --- | --- |
| Layout, navegación, portada y contenido sin estado cliente | Astro | Generar HTML y reducir JavaScript enviado |
| Un botón que navega | Enlace HTML o componente Astro | Conservar navegación y accesibilidad nativas |
| Filtros con estado o mascota controlada desde React | Isla React cuando lo justifique | Mantener una interacción delimitada |
| Interacción breve ya resuelta con DOM/CSS | Script o CSS del proyecto | Evitar introducir otro árbol de componentes |
| Contratos de componentes y contenido | TypeScript | Detectar incompatibilidades y documentar entradas |
| Colores, espaciado, layout y estados visuales | Tailwind y tokens compartidos | Mantener consistencia |
| Pivotes y keyframes específicos del personaje | CSS o controlador de animación | Expresar movimiento con el control necesario |
| Animaciones de entrada, scroll o secuencias | GSAP desde `src/motion/gsap.ts` | Timeline, `matchMedia` y plugins en un motor común |
| Proyectos y experiencia | Fuente de contenido estructurada existente | Alimentar listado, detalle y destacados sin duplicación |

## Astro y React

- Inspeccionar `package.json`, lockfile y `astro.config.*`. Comprobar la integración React
  existente antes de añadirla. No fijar una versión de Astro o React desde memoria.
- Mantener las páginas y layouts como composición. Separar el origen de contenido de su representación.
- Un componente React puede renderizar HTML sin enviar su código de interacción. Añadir una
  directiva `client:*` cuando deba funcionar en el navegador y elegir cuándo se activa.
- Usar `client:load` para interacción que deba responder desde la carga; considerar `client:visible`
  para una isla bajo el primer pliegue. Evaluar `client:idle` solo si el retraso es aceptable.
  No retrasar funciones necesarias para teclado, foco o accesibilidad.
- Reservar `client:only="react"` para necesidades reales de render exclusivo cliente; no usarlo
  por rutina para esconder errores de hidratación. Ofrecer contenido alternativo cuando corresponda.
- Pasar props serializables desde Astro a islas hidratadas. Mantener callbacks de interacción
  dentro del árbol cliente que los usa, no intentar serializar funciones de servidor.
- Evitar acceso a `window`, `document` o almacenamiento del navegador al evaluar módulos que se
  rendericen en servidor. Inicializar efectos cliente en su ciclo de vida.
- Coordinar componentes estrechamente relacionados dentro de una isla cuando compartan estado.
  No asumir que el contexto React atraviesa raíces de islas independientes.
- Usar las colecciones de contenido y sus esquemas según la versión instalada, sin inventar
  una API heredada ni replicar el mismo proyecto en varias listas.

## Componentes y hooks de React

- Buscar piezas existentes y tipar sus props. Usar nombres por intención y variantes limitadas.
- Mantener render puro y una sola fuente de estado. Derivar filtros y totales cuando sea razonable
  en lugar de copiarlos a otro estado con un efecto.
- Usar manejadores para acciones de usuario; reservar efectos para sincronización externa.
  Extraer un hook si agrupa lógica coherente que merece nombre y ciclo de vida propios.
- Evitar un hook por cada operación, dependencias de efecto incompletas y supresiones para silenciar lint.
  Diseñar la limpieza para soportar montaje, desmontaje y nueva inicialización.
- Usar claves estables de datos. Memoizar después de identificar una necesidad o medida real,
  no añadir `useMemo` y `useCallback` a todos los valores por defecto.
- Mantener lógica independiente como funciones puras, sin imports de React cuando no los necesite.

## Tailwind

- Identificar la versión y el sistema existente antes de configurar. Para Tailwind 4 con Astro,
  la guía oficial utiliza `tailwindcss`, el plugin `@tailwindcss/vite` y `@import "tailwindcss"`
  en el CSS global. Comprobar compatibilidad y configuración actual antes de aplicar cambios.
- No mezclar instrucciones de Tailwind 3 y 4 ni migrar un proyecto funcional incidentalmente.
- Mantener tokens de color, tipografía y espaciado en el mecanismo apropiado de la versión.
  Dar nombres semánticos donde expresen decisiones de marca, sin inventar una abstracción por clase.
- Mantener nombres de clases completos y detectables. Para variantes dinámicas, usar un mapa
  explícito de clases completas en lugar de concatenar fragmentos que el compilador no encuentre.
- Extraer un componente cuando se repita una intención visual/funcional coherente; una cadena
  larga de utilidades por sí sola no demuestra mala arquitectura.
- Usar CSS específico cuando resulte más claro para keyframes, arte o transformaciones complejas.
  Evitar valores arbitrarios repetidos que deberían pertenecer a tokens compartidos.
- Comprobar foco visible, estados, contraste, móvil y movimiento reducido sobre el resultado real.

## GSAP

- Instalar y fijar la versión en `package.json`; GSAP es gratuito, incluidos los plugins que antes
  requerían Club (SplitText, MorphSVG, etc.). Registrar cada plugin en el módulo que lo usa para no
  enviar código que la página no necesita.
- Importar siempre desde `src/motion/gsap.ts`: concentra defaults (`duration`, `ease`) y
  `REDUCED_MOTION_QUERY`. No importar GSAP desde el frontmatter de una página o un componente
  `.astro`; es código de cliente y corre en un `<script>` o dentro de una isla hidratada.
- Agrupar animaciones con `gsap.matchMedia()`: permite reaccionar a cambios de tamaño o de
  preferencia de movimiento y revierte los tweens al desmontar. Respetar `prefers-reduced-motion`
  sin ocultar contenido cuando no hay JavaScript.
- Preferir `x`, `y`, `scale`, `autoAlpha` y otras propiedades de transformación antes que `left`,
  `width` o `margin`; limpiar con `ctx.revert()` o `useGSAP` cuando corresponda.
- En islas React usar `@gsap/react` (`useGSAP`) en lugar de `useEffect` manual: gestiona el scope y
  la limpieza. No está instalado todavía porque aún no hay isla animada.
- Con Astro View Transitions, recrear los `ScrollTrigger` después de `astro:after-swap` en lugar de
  asumir que el DOM sobrevive.

## Verificación

Distinguir build, análisis de tipos, lint y pruebas: no asumir que un único comando ejecuta
todos. Inspeccionar los scripts, documentar comandos reales y ejecutar los pertinentes al cambio.
En Astro, comprobar también `.astro`, además de `.ts` y `.tsx`, con herramientas compatibles.
Verificar interacción en la salida servida cuando se haya cambiado hidratación o scripts cliente.

Comandos del repositorio:

| Comando | Cobertura |
| --- | --- |
| `pnpm format:check` | Prettier sobre código, `README.md` y configuración (ver `.prettierignore`) |
| `pnpm lint` | ESLint: sintaxis, React, accesibilidad y fronteras de importación |
| `pnpm check` | `astro check`: tipos estrictos y plantillas `.astro` |
| `pnpm build` | `astro check` + build de producción |

Todavía no hay pruebas automatizadas: añadirlas (Vitest) cuando exista lógica de negocio que lo
justifique.

## Fuentes oficiales consultadas

- Astro, componentes de frameworks e hidratación: https://docs.astro.build/en/guides/framework-components/
- Astro, directivas: https://docs.astro.build/en/reference/directives-reference/
- Astro, colecciones: https://docs.astro.build/en/guides/content-collections/
- React, cuándo evitar efectos: https://react.dev/learn/you-might-not-need-an-effect
- React, hooks propios: https://react.dev/learn/reusing-logic-with-custom-hooks
- Tailwind con Astro: https://tailwindcss.com/docs/installation/framework-guides/astro
- Tailwind, detección de clases: https://tailwindcss.com/docs/detecting-classes-in-source-files

Revisar estas fuentes al tocar APIs o versiones. La guía describe criterios del proyecto,
no sustituye la documentación vigente ni instala sus integraciones.

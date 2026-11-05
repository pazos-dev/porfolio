# Arquitectura propuesta

## Criterio

Organización por funcionalidades con una base compartida pequeña. El portfolio es principalmente contenido; la mascota es una funcionalidad interactiva con ciclo de vida propio. La estructura debe crecer cuando aparezcan necesidades reales.

La siguiente distribución describe destinos de código, no una orden de crear todas las carpetas por adelantado.

| Ubicación | Responsabilidad | Ejemplos posibles |
| --- | --- | --- |
| `src/pages/` | Rutas, carga de datos y composición de páginas | `index.astro`, `proyectos/[slug].astro` |
| `src/layouts/` | Estructura compartida de página | `BaseLayout.astro` |
| `src/components/site/` | Navegación, footer y elementos propios de la marca | `Header.astro`, `Footer.astro` |
| `src/components/ui/` | Piezas visuales genéricas con contratos pequeños | `Button.astro`, `SectionHeading.astro` |
| `src/features/home/` | Secciones exclusivas de la portada | `Hero.astro` |
| `src/features/projects/` | Tarjetas, listados y acceso al contenido de proyectos | `ProjectCard.astro`, `getProjects.ts` |
| `src/features/contact/` | Presentación y comportamiento de contacto | `ContactPanel.astro` |
| `src/features/mascot/` | Dibujo articulado, controlador y vínculo con React | `OwlSvg.tsx`, `controller.ts`, `useMascot.ts` |
| `src/motion/` | Entrada única al motor de animación y defaults compartidos | `gsap.ts` |
| `src/content/projects/` | Fichas de proyectos | Archivos Markdown |
| `src/content.config.ts` | Esquemas y configuración de las colecciones | Esquema de proyecto |
| `src/config/` | Datos compartidos del sitio | Nombre, enlaces de navegación y contacto |
| `src/styles/` | Tokens y estilos globales mínimos | Colores, tipografía y espaciado |
| `src/assets/` | Recursos procesados en la compilación | Ilustraciones y capturas |
| `public/` | Recursos servidos sin procesamiento | Favicon y archivos públicos |

## Fronteras de importación

| Consumidor | Dependencias permitidas |
| --- | --- |
| Páginas | Layouts, componentes comunes, entradas públicas de funcionalidades, movimiento compartido, contenido, configuración, estilos y recursos |
| Layouts | Componentes comunes, entradas públicas de funcionalidades cuando sean globales, movimiento compartido, configuración, estilos y recursos |
| Componentes de sitio | Componentes UI y configuración |
| Componentes UI | Otros componentes UI, configuración y recursos; sin funcionalidades ni páginas |
| Una funcionalidad | Sus archivos internos, UI, configuración, movimiento compartido y recursos |
| Datos de proyectos | Colecciones de Astro y transformaciones puras; sin interfaz React |
| Controlador de mascota | Tipos del personaje y elementos de su dibujo; sin importar páginas o lógica del formulario |
| Movimiento compartido | GSAP y su propia configuración; sin páginas, funcionalidades ni componentes |
| Archivos sueltos de `src/` | Solo dependencias externas: un archivo que no encaja en ningún elemento no puede importar código propio |

Una funcionalidad no importa los detalles privados de otra. La página o un componente coordinador conecta sus eventos. Un archivo de entrada solo exporta lo que otros consumidores necesitan: no es necesario crear un index.ts para cada carpeta.

Las reglas automáticas de imports deben comprobar las rutas reales y los aliases usados en el proyecto. Una lista de patrones que pueda eludirse con imports relativos no basta para asegurar una frontera.

## Dos recorridos de ejemplo

**Proyectos:** la página obtiene proyectos mediante la función de acceso al contenido; pasa datos al listado; el listado compone tarjetas; la tarjeta utiliza elementos UI. La ficha del proyecto tiene una sola fuente de verdad.

**Contacto y mascota:** el formulario o el coordinador comunica un evento de éxito después de una respuesta real de envío. El controlador de la mascota decide cómo celebrarlo. El SVG no contiene código de envío de correo y el formulario no modifica directamente sus alas.

## Cómo decidir si extraer una pieza

Extraer cuando la pieza tenga una responsabilidad que se pueda nombrar, comportamiento o ciclo de vida propio, reutilización real, o cuando permita leer el componente principal sin mezclar niveles de detalle.

Mantenerla local cuando separarla obligue a seguir varios archivos para comprender una operación breve, cuando todavía no exista un contrato estable, o cuando la supuesta reutilización solo comparta unas pocas etiquetas con significado distinto.

Ejemplo: dos botones que comparten comportamiento y apariencia justifican un componente con variantes limitadas. Un bloque único de tres líneas puede quedarse en su sección. Dos formularios con reglas diferentes no deberían forzarse a compartir una abstracción solo porque ambos tengan inputs.

## Controles del repositorio

1. TypeScript estricto (`astro/tsconfigs/strict`) y `astro check`, que cubre `.astro` además de TS/TSX.
2. Prettier con `prettier-plugin-astro` y `.prettierrc.json`; `pnpm format:check` en CI.
3. ESLint en `eslint.config.js` con `eslint-plugin-astro`, reglas de React, accesibilidad y
   `max-lines` / `max-lines-per-function` como advertencias (250 por archivo, 80 por función,
   ignorando líneas vacías y comentarios).
4. `eslint-plugin-boundaries` clasifica cada carpeta de `src/` como elemento y aplica las
   dependencias permitidas de este documento. `partialMatch: false` e `import/resolver` con
   TypeScript evitan que la frontera se eluda con rutas relativas o imports sin extensión. Un
   archivo fuera de toda clasificación cae en el elemento `root`, que no puede importar código
   propio: la frontera falla en vez de dejar pasar. Se probaron ambos sentidos (`components/ui` →
   `features/mascot` y `ui` → carpeta sin clasificar) y se retiraron los casos.
5. Las infracciones de fronteras y los errores de tipos son errores; las advertencias de tamaño no
   bloquean el merge.
6. CI en `.github/workflows/ci.yml` ejecuta formato, lint y build en cada push y PR.
7. Todavía no hay pruebas automatizadas: añadirlas conforme aparezcan funcionalidades que lo
   necesiten, sin crear pruebas vacías para completar el checklist.

## Aplicación de patrones

- **Composición:** combinar piezas con responsabilidades claras en las secciones.
- **Funciones puras:** filtrar y ordenar proyectos sin acoplamiento a la vista.
- **Hook y controlador:** enlazar el ciclo de vida React con un motor de animación cuando resulte útil.
- **Máquina de estados:** introducirla en la mascota si sus prioridades y transiciones lo requieren; no en cada componente por defecto.
- **Adaptador:** incorporar uno si el formulario o un servicio externo necesitan aislar un contrato cambiante.

No se propone una arquitectura empresarial para un portfolio. Las capas y patrones adicionales necesitan un problema concreto que los justifique.

## Referencias

- Astro, estructura de proyecto: https://docs.astro.build/en/basics/project-structure/
- ESLint, tamaño de archivo: https://eslint.org/docs/latest/rules/max-lines
- ESLint, tamaño de función: https://eslint.org/docs/latest/rules/max-lines-per-function
- ESLint, restricciones de imports: https://eslint.org/docs/latest/rules/no-restricted-imports

## Integración con este kit

Consultar `stack.md` para las decisiones de Astro, React y GSAP. Las reglas generales y la selección
de skills están en `../AGENTS.md`; las skills viven en `.agents/skills/` del proyecto.

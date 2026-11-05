# Portfolio de Luis Pazos

Sitio personal con estética pixel art: fondo oscuro, acentos cian y violeta/rosa, ilustraciones
originales y un búho animado. Astro + React + TypeScript + Tailwind CSS, gestionado con pnpm.

## Estado

Andamiaje listo y verificado (formato, lint, tipos y build en verde), con CI en GitHub Actions.
La portada real todavía no está implementada: `src/pages/index.astro` es una página de verificación
que comprueba que Astro, React, Tailwind, GSAP y las rutas de assets funcionan. El alcance y las
fases están en [`docs/plan-desarrollo.md`](docs/plan-desarrollo.md).

## Requisitos

- Node.js 22.23 o superior (lo exige Astro 7)
- pnpm 11

## Comandos

| Comando             | Qué hace                                      |
| ------------------- | --------------------------------------------- |
| `pnpm install`      | Instala dependencias                          |
| `pnpm dev`          | Servidor de desarrollo en `localhost:4321`    |
| `pnpm build`        | Chequeo de tipos + build de producción        |
| `pnpm preview`      | Sirve el build de `dist/`                     |
| `pnpm check`        | `astro check` (TypeScript y plantillas)       |
| `pnpm lint`         | ESLint: Astro, TSX, accesibilidad y fronteras |
| `pnpm lint:fix`     | ESLint corrigiendo lo automático              |
| `pnpm format`       | Formatea con Prettier                         |
| `pnpm format:check` | Verifica formato sin escribir                 |

## Estructura

```text
.
├── AGENTS.md                  Reglas de trabajo para agentes (leer primero)
├── astro.config.mjs           Astro + React + Tailwind (plugin de Vite)
├── eslint.config.js           Lint y fronteras de importación
├── .github/workflows/ci.yml   Formato, lint y build en cada push y PR
├── skills-lock.json           Origen y hashes de las skills externas
├── public/                    Servido tal cual, sin procesar
│   ├── buho/                  Búho: sprites, fondos, previews y animations.json
│   ├── images/                Ilustraciones (PNG + WebP) y miniaturas de proyectos
│   ├── svg/                   Logos, iconos y decoraciones vectoriales
│   ├── favicons/              Set completo de iconos + site.webmanifest
│   └── assets.json            Dimensiones y origen de cada recurso
├── src/
│   ├── features/mascot/       Motor del búho: owl-player.js, tipos y OwlMascot.tsx
│   ├── motion/                Entrada única a GSAP: defaults y movimiento reducido
│   ├── pages/                 Páginas Astro
│   └── styles/global.css      Tailwind y tokens visuales
├── docs/                      Arquitectura, stack, plan, plantillas y revisión
├── design/                    Fuentes crudas y demos, fuera del sitio
│   ├── buho/                  Atlases originales y demos HTML del búho
│   └── recursos/              Recortes originales y catálogo de recursos
└── .agents/skills/            Skills del proyecto, de GSAP y de SEO (19 en total)
```

`design/` no se sirve ni se compila (está excluida en `tsconfig.json`): guarda material de origen
para volver a exportar assets sin depender de archivos externos.

## Assets

Las ilustraciones salen de una captura de la web de referencia; los SVG son recreaciones
vectoriales. Los detalles y límites de esa reconstrucción están en
[`docs/assets/recursos-readme.md`](docs/assets/recursos-readme.md) y las instrucciones de
generación en [`docs/assets/recursos-prompts.md`](docs/assets/recursos-prompts.md).

Rutas públicas principales:

| Recurso          | Ruta                                             |
| ---------------- | ------------------------------------------------ |
| Escritorio       | `/images/escritorio.webp`                        |
| Búho             | `/images/buho.webp`                              |
| Paisaje inferior | `/images/paisaje-inferior.webp`                  |
| Marca            | `/svg/logo-mark.svg`                             |
| Logo con nombre  | `/svg/logo-horizontal.svg`                       |
| Iconos           | `/svg/icons/*.svg` (usan `currentColor`)         |
| Favicons         | `/favicons/favicon.svg`, `/favicons/favicon.ico` |

Las dimensiones reales de cada archivo están en `public/assets.json`: usarlas en `width`/`height`
evita saltos de layout. Para colorear un icono cargado con `<img>`, la utilidad `.icon-mask` de
`src/styles/global.css` lo hace con `currentColor`.

## Búho animado

`src/features/mascot/` contiene un reproductor sin dependencias y un componente React con tipado.
Seis fotogramas por animación (parpadeo, saludo, aleteo) más reposo, en atlas de 256 × 256.

```astro
---
import { OwlMascot } from '../features/mascot/react/OwlMascot';
---

<OwlMascot client:load baseUrl="/buho" background="night" />
```

`baseUrl` apunta a la carpeta pública que contiene `assets/`; el valor por defecto ya es `/buho`.
El componente respeta `prefers-reduced-motion` a través de las opciones del reproductor y expone
navegación por teclado. Detalles de acciones y estados en
[`docs/assets/buho-readme.md`](docs/assets/buho-readme.md) y la skill `owl-animation`.

Un `<img>` de estos recursos no necesita optimización de imagen de Astro: son pixel art y se
sirven tal cual para no alterar los píxeles.

## Tokens visuales

Definidos una sola vez en `src/styles/global.css` con `@theme` de Tailwind 4:

| Token                   | Valor     |
| ----------------------- | --------- |
| `--color-base`          | `#080d10` |
| `--color-ink`           | `#f4f4ef` |
| `--color-accent-cyan`   | `#00e5ed` |
| `--color-accent-purple` | `#a855f7` |
| `--color-accent-pink`   | `#dc83ec` |

No repetir estos hex en componentes ni en estilos sueltos.

## Lint y fronteras de imports

`eslint.config.js` cubre `.astro`, `.ts`, `.tsx` y `.js`: `eslint-plugin-astro` (con reglas de
accesibilidad para `.astro`), `eslint-plugin-react-hooks`, `eslint-plugin-jsx-a11y-x` y
`eslint-plugin-boundaries`, que aplica las fronteras de [`docs/architecture.md`](docs/architecture.md).
`eslint-import-resolver-typescript` resuelve los imports sin extensión, así que la frontera no se
puede eludir escribiendo la ruta de otra manera.

`max-lines` (250) y `max-lines-per-function` (80) quedan como advertencias: señalan cuándo revisar,
no bloquean el merge. `src/features/mascot/owl-player.js` se conserva tal como se distribuyó y queda
fuera del lint.

## Movimiento (GSAP)

`gsap` se importa siempre desde `src/motion/gsap.ts`, que fija los valores por defecto y expone
`REDUCED_MOTION_QUERY`. Cada módulo registra solo los plugins que usa, de modo que una página sin
scroll animado no descarga `ScrollTrigger`.

Las animaciones se agrupan con `gsap.matchMedia()` para respetar `prefers-reduced-motion`:

```astro
<script>
  import { gsap, REDUCED_MOTION_QUERY } from '../motion/gsap';

  const media = gsap.matchMedia();
  media.add({ reduce: REDUCED_MOTION_QUERY }, (context) => {
    if (context.conditions?.reduce) return;
    gsap.from('[data-animado]', { autoAlpha: 0, y: 16 });
  });
</script>
```

En islas React conviene `@gsap/react` (`useGSAP`) cuando una isla necesite animación; todavía no está
instalado porque aún no hay isla animada. No importar `src/motion/gsap.ts` desde el frontmatter de
una página: GSAP es código de cliente.

## Documentación

| Archivo                                                | Cuándo consultarlo                                |
| ------------------------------------------------------ | ------------------------------------------------- |
| [`AGENTS.md`](AGENTS.md)                               | Reglas de trabajo, reutilización y verificación   |
| [`docs/architecture.md`](docs/architecture.md)         | Límites de módulos y dirección de imports         |
| [`docs/stack.md`](docs/stack.md)                       | Decisiones de Astro, React, TypeScript y Tailwind |
| [`docs/plan-desarrollo.md`](docs/plan-desarrollo.md)   | Alcance y fases del producto                      |
| [`docs/task-template.md`](docs/task-template.md)       | Pedir funcionalidades por resultados              |
| [`docs/review-checklist.md`](docs/review-checklist.md) | Revisar un cambio con evidencia                   |
| [`docs/kit/`](docs/kit/)                               | Manifiesto y validación del kit original          |

## Skills

Nueve skills propias en `.agents/skills/`, descubiertas automáticamente por agentes que soportan la
especificación Agent Skills (Pi, Codex):

`clean-code-architecture`, `portfolio-feature`, `portfolio-ui`, `portfolio-review`,
`portfolio-assets`, `owl-animation`, `astro-best-practices`, `react-component-patterns`,
`tailwind-design-system`.

Más siete skills oficiales de GreenSock para GSAP, instaladas desde
[`greensock/gsap-skills`](https://github.com/greensock/gsap-skills) y registradas en
`skills-lock.json`: `gsap-core`, `gsap-timeline`, `gsap-scrolltrigger`, `gsap-plugins`,
`gsap-utils`, `gsap-react`, `gsap-performance`.

Y tres de SEO, también en `skills-lock.json`:

- `seo` ([`addyosmani/web-quality-skills`](https://github.com/addyosmani/web-quality-skills)):
  SEO técnico y datos estructurados con auditoría basada en evidencia, no en promesas de ranking.
- `seo-aeo-best-practices` ([`sanity-io/agent-toolkit`](https://github.com/sanity-io/agent-toolkit)):
  implementación de metadatos, Open Graph, `robots.txt`, sitemap, JSON-LD, EEAT y AEO.
- `ai-seo` ([`coreyhaines31/marketingskills`](https://github.com/coreyhaines31/marketingskills)):
  visibilidad y citas en asistentes de IA: `llms.txt`, bloques de respuesta y agent readiness.

No se instala `gsap-frameworks` (apunta a Vue y Svelte) ni las skills de marketing general, porque
no aportan a un portfolio con contenido propio y sin campañas.

Cargar solo la que corresponde a la tarea. La tabla de selección está en `AGENTS.md`. Para
actualizarlas: `npx skills@latest update -p`.

## Próximos pasos

1. Definir contenido real (proyectos, experiencia, contacto) sin inventar datos.
2. Implementar la portada con el búho y el paisaje, adaptada a móvil.
3. Añadir pruebas (Vitest) para la lógica que lo justifique: filtros, acceso a contenido y control
   del búho.
4. Elegir alojamiento y dominio, y conectar el despliegue.

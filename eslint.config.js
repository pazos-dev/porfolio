import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import boundaries from 'eslint-plugin-boundaries';
import jsxA11y from 'eslint-plugin-jsx-a11y-x';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/**
 * Lint del portfolio.
 *
 * Cubre `.astro`, `.ts`, `.tsx` y `.js`; las fronteras de importación siguen
 * la tabla de `docs/architecture.md`. `partialMatch: false` exige rutas
 * completas desde la raíz: sin eso, un patrón como `components/ui` también
 * clasificaría cualquier carpeta con ese nombre en otra rama del árbol.
 */

const SCRIPTABLE = ['**/*.{js,mjs,ts,tsx,astro}'];
const SOURCE = ['src/**/*.{js,mjs,ts,tsx,astro}'];

const elements = [
  { type: 'page', pattern: 'src/pages', partialMatch: false },
  { type: 'layout', pattern: 'src/layouts', partialMatch: false },
  { type: 'site', pattern: 'src/components/site', partialMatch: false },
  { type: 'ui', pattern: 'src/components/ui', partialMatch: false },
  {
    type: 'feature',
    pattern: 'src/features/*',
    capture: ['featureName'],
    partialMatch: false,
  },
  { type: 'motion', pattern: 'src/motion', partialMatch: false },
  { type: 'config', pattern: 'src/config', partialMatch: false },
  { type: 'content', pattern: 'src/content', partialMatch: false },
  { type: 'styles', pattern: 'src/styles', partialMatch: false },
  { type: 'assets', pattern: 'src/assets', partialMatch: false },
  // Fallback de último recurso: un archivo no clasificado queda en `root`, sin
  // política de importación interna. Ante la duda, falla en vez de dejar pasar.
  { type: 'root', pattern: 'src', partialMatch: false },
];

const sameFeature = {
  to: {
    element: {
      type: 'feature',
      captured: { featureName: '{{ from.element.captured.featureName }}' },
    },
  },
};

const elementTypes = elements.map((element) => element.type);

const policies = [
  // Dependencias externas: la arquitectura regula el código propio, no la elección de librerías.
  {
    from: { element: { types: elementTypes } },
    allow: { to: { module: { origin: ['external', 'core'] } } },
  },

  // Páginas: componen el resto del sitio.
  {
    from: { element: { type: 'page' } },
    allow: {
      to: {
        element: {
          types: [
            'layout',
            'site',
            'ui',
            'feature',
            'motion',
            'config',
            'content',
            'styles',
            'assets',
          ],
        },
      },
    },
  },

  // Layouts: estructura compartida, nunca páginas.
  {
    from: { element: { type: 'layout' } },
    allow: {
      to: { element: { types: ['site', 'ui', 'feature', 'motion', 'config', 'styles', 'assets'] } },
    },
  },

  // Navegación y marca: solo piezas UI y configuración.
  {
    from: { element: { type: 'site' } },
    allow: { to: { element: { types: ['ui', 'config'] } } },
  },

  // Piezas UI: sin funcionalidades ni páginas.
  {
    from: { element: { type: 'ui' } },
    allow: { to: { element: { types: ['ui', 'config', 'assets'] } } },
  },

  // Una funcionalidad usa sus propios archivos, UI, configuración y movimiento compartido.
  {
    from: { element: { type: 'feature' } },
    allow: [sameFeature, { to: { element: { types: ['ui', 'config', 'motion', 'assets'] } } }],
  },

  // Base compartida: no depende de funcionalidades ni de páginas.
  {
    from: { element: { type: 'motion' } },
    allow: { to: { element: { types: ['motion', 'config'] } } },
  },
  {
    from: { element: { type: 'config' } },
    allow: { to: { element: { types: ['config', 'assets'] } } },
  },
  {
    from: { element: { type: 'content' } },
    allow: { to: { element: { types: ['content', 'assets'] } } },
  },
  { from: { element: { type: 'styles' } }, allow: { to: { element: { types: ['styles'] } } } },
  { from: { element: { type: 'assets' } }, allow: { to: { element: { types: ['assets'] } } } },
];

export default [
  {
    ignores: [
      'dist/**',
      '.astro/**',
      'node_modules/**',
      'public/**',
      'design/**',
      'docs/**',
      '.agents/**',
      '.atl/**',
      // Reproductor distribuido del búho: se conserva tal como se entregó.
      'src/features/mascot/owl-player.js',
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs['flat/recommended'],
  ...astro.configs['flat/jsx-a11y-recommended'],

  {
    files: ['**/*.tsx'],
    ...reactHooks.configs.flat.recommended,
  },
  {
    files: ['**/*.tsx'],
    ...jsxA11y.configs.recommended,
  },

  // Los bloques <script> extraídos de .astro corren en el navegador.
  {
    files: ['**/*.astro/*.js', '**/*.astro/*.ts'],
    languageOptions: { globals: globals.browser },
  },

  // El frontmatter de .astro se ejecuta en el servidor: globals de Node, sin APIs de navegador.
  {
    files: ['**/*.astro'],
    languageOptions: { globals: globals.node },
  },

  // Umbrales de revisión de docs/architecture.md: avisan, no bloquean el merge.
  {
    files: SCRIPTABLE,
    rules: {
      'max-lines': ['warn', { max: 250, skipBlankLines: true, skipComments: true }],
    },
  },
  {
    files: ['**/*.{js,mjs,ts,tsx}'],
    rules: {
      'max-lines-per-function': [
        'warn',
        { max: 80, skipBlankLines: true, skipComments: true, IIFEs: true },
      ],
    },
  },

  {
    files: SOURCE,
    plugins: { boundaries },
    settings: {
      // Sin resolver, un import sin extensión (`../features/x/Component`) no se
      // clasifica y la frontera pasa sin avisar.
      'import/resolver': { typescript: { project: './tsconfig.json' } },
      'boundaries/elements': elements,
      'boundaries/elements-single-match': true,
      'boundaries/legacy-templates': false,
    },
    rules: {
      ...boundaries.configs.recommended.rules,
      // Un destino local que no pertenece a ningún elemento tampoco pasa.
      'boundaries/no-unknown-dependencies': 'error',
      'boundaries/dependencies': ['error', { default: 'disallow', policies }],
    },
  },
];

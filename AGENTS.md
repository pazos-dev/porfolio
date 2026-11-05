# Desarrollo del portfolio de Luis

## Objetivo y autonomía

Crear un portfolio mantenible, accesible y fiel a los proyectos y datos profesionales reales de Luis.
Completar las tareas autorizadas, resolver decisiones rutinarias e informar de la verificación.
Preguntar solo cuando una decisión importante no pueda deducirse y bloquee el resultado.

Esta base propone Astro + React + TypeScript + Tailwind y pnpm. Inspeccionar el stack y las
instrucciones existentes antes de actuar. Conservar una implementación adecuada y no migrarla
incidentalmente para adaptarla a estos documentos.

## Consultar lo necesario

- Usar `docs/architecture.md` para organización, límites de módulos y cambios de estructura.
- Usar `docs/stack.md` al tocar Astro, React, Tailwind, hidratación o configuración de esas herramientas.
- Usar `docs/plan-desarrollo.md` para alcance y fases del producto; ajustar el estado al código real.
- Usar `docs/task-template.md` para funcionalidades con comportamiento significativo y
  `docs/review-checklist.md` al revisar un cambio de ese alcance.
- No cargar todos los documentos y skills antes de una corrección trivial.

## Seleccionar skills

Las skills viven en `.agents/skills/`: las nueve propias del proyecto, las siete oficiales de
GreenSock para GSAP y las tres de SEO (técnico, AEO y SEO para IA), registradas en
`skills-lock.json`. Usar una sola copia como fuente activa y conservar sus referencias y metadatos.
Consultar `README.md` para instalarlas o actualizarlas.

| Tarea | Skill |
| --- | --- |
| Escribir o refactorizar lógica, componentes, hooks o servicios | `clean-code-architecture` |
| Implementar una funcionalidad completa del portfolio | `portfolio-feature` |
| Crear o ajustar una sección visual, estilos o móvil | `portfolio-ui` |
| Revisar un diff o funcionalidad | `portfolio-review` |
| Preparar imágenes, SVG, iconos o favicon | `portfolio-assets` |
| Implementar movimiento e interacciones del búho web | `owl-animation` |
| Crear o cambiar páginas, contenido e hidratación de Astro | `astro-best-practices` |
| Crear o refactorizar componentes, estado o hooks React | `react-component-patterns` |
| Cambiar estilos, tokens, variantes o compilación Tailwind | `tailwind-design-system` |
| Animar con GSAP (tweens, timeline, scroll, islas React) | `gsap-core` + `gsap-timeline`, `gsap-scrolltrigger` o `gsap-react` según el caso |
| Auditar o implementar SEO técnico (metadatos, canónicas, sitemap, indexación) | `seo` |
| Metadatos, Open Graph, JSON-LD, EEAT y preparación para motores de respuesta | `seo-aeo-best-practices` |
| Buscar citas en asistentes de IA (GEO/AEO, `llms.txt`, agent readiness) | `ai-seo` |

Leer el `SKILL.md` pertinente y los recursos que indique para la tarea. Si el agente no descubre
skills automáticamente, consultar explícitamente su archivo dentro de `.agents/skills/`.
Seleccionar las skills técnicas según los archivos y responsabilidades que cambian. Combinar
`clean-code-architecture` con la skill técnica pertinente al escribir código; usar Astro y React juntas
si cambia la frontera de una isla, y Tailwind si también cambian sus estilos. No cargar las tres
para un cambio que solo afecte a una. No considerar sus instrucciones sustitutos de los controles del código.

## Antes de escribir código

1. Identificar el comportamiento pedido y los criterios observables que lo completan.
2. Buscar componentes, tipos, estilos, reglas y utilidades que ya sirvan.
3. Identificar origen de datos, transformaciones, vista y efectos externos implicados.
4. Si hay varias responsabilidades, resumir qué se reutiliza, qué se separa y cómo se verificará.
   Para una corrección pequeña, mantener la explicación proporcional y continuar.

## Responsabilidades y reutilización

- Componer secciones y cargar datos desde las páginas. Mantener fuera motores de animación y reglas extensas.
- Mantener layouts para estructura compartida; componentes para responsabilidades visuales concretas;
  hooks para estado y efectos con un propósito propio; controladores para comportamiento imperativo.
- Mantener una fuente de cada dato profesional, proyecto, regla de negocio y configuración compartida.
- Extraer por responsabilidad o reutilización real. Ante una segunda implementación equivalente,
  evaluar la extracción por significado y razones de cambio, no por parecido del texto.
- Preferir composición y contratos pequeños. Evitar componentes universales llenos de booleanos,
  utilidades sin dueño y capas creadas para necesidades hipotéticas.
- Aplicar Clean Code, SOLID y Clean Architecture según la complejidad presente. Mantener reglas
  internas independientes de la UI y de proveedores externos cuando exista lógica de negocio.
  No crear entidades o repositorios artificiales para una tarjeta estática.
- Justificar patrones que añadan estructura: explicar el problema concreto que resuelven.
- Tratar unas 250 líneas por archivo y 80 por función como señales de revisión, no como leyes.
  Excluir archivos generados, geometría SVG extensa, datos y lockfiles; revisar cohesión antes que números.

## Fronteras y stack

- Seguir las direcciones de importación de `docs/architecture.md`; evitar ciclos e imports privados entre funcionalidades.
- Mantener componentes UI genéricos sin dependencias de páginas o funcionalidades específicas.
- Preferir contenido estático en Astro. Usar React e hidratación para interacción que lo requiera;
  elegir la directiva según cuándo debe estar operativa, también para teclado y accesibilidad.
- Centralizar tokens visuales y evitar copias divergentes de colores, espaciado y tipografía.
- Mantener estado mínimo; derivar valores calculables. Gestionar timers, RAF y otras referencias
  imperativas sin forzar un render React por fotograma.
- Limpiar listeners, timers, observers, solicitudes y animaciones cuando corresponda.
  Respetar movimiento reducido y controles con teclado y toque.
- Comprobar versiones y documentación oficial antes de cambiar APIs o integraciones.
  Conservar el gestor y lockfile del proyecto; usar pnpm en un proyecto nuevo de esta base.
- Animar con GSAP a través de `src/motion/gsap.ts`, que centraliza defaults y la consulta de
  movimiento reducido. Registrar solo los plugins que usa cada módulo y agrupar con
  `gsap.matchMedia()` para respetar `prefers-reduced-motion`. En islas React, `useGSAP` de
  `@gsap/react`.

## Alcance y entrega

- Hacer cambios coherentes y revisables. Limitar refactorizaciones preparatorias a lo que necesita la tarea.
- Añadir dependencias solo por una ventaja concreta sobre lo disponible; evitar actualizaciones ajenas al objetivo.
- No inventar experiencia, clientes, testimonios ni resultados. No mostrar un envío simulado como contacto real.
- Ejecutar los comandos reales pertinentes de formato, análisis, tipos, build y pruebas disponibles.
  Añadir pruebas para comportamiento significativo; evitar pruebas que repitan la implementación.
- No debilitar tipos, desactivar reglas globalmente ni eliminar pruebas para esconder fallos.
- Revisar móvil, escritorio, teclado y estados relevantes cuando haya interfaz; declarar lo no comprobado.
- Entregar resultado, decisiones relevantes, reutilización, verificaciones y limitaciones.
  Publicar o enviar mensajes externos únicamente dentro de la autorización del usuario.

## Controles del repositorio

Ya instalados y en CI (`.github/workflows/ci.yml`). Ejecutar antes de entregar:

- `pnpm format:check` — Prettier.
- `pnpm lint` — ESLint sobre `.astro`, `.ts`, `.tsx` y `.js`, con reglas de React, accesibilidad y
  `eslint-plugin-boundaries` según las fronteras de `docs/architecture.md`.
- `pnpm check` y `pnpm build` — `astro check` (TypeScript estricto y plantillas) más build.

Al añadir una carpeta bajo `src/`, clasificarla como elemento en `eslint.config.js` con la política
que le corresponde. Un archivo sin clasificar cae en el elemento `root`, que solo puede importar
dependencias externas: la frontera falla en vez de dejar pasar. Una importación prohibida falla con
`boundaries/dependencies` y un destino local desconocido con `boundaries/no-unknown-dependencies`;
ambos casos se verificaron y se retiraron.

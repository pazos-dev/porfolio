# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dos audiencias confirmadas por Luis (5/11/2026), en este orden:

1. **Cliente con un proyecto** — alguien que necesita una web o una aplicación y busca quién la
   haga. Llega desde un contacto directo, una recomendación o el buscador, y decide en los primeros
   segundos si esta persona parece capaz de resolverle algo concreto.
2. **Reclutador o líder técnico** — evalúa contratar. Mira stack, proyectos y CV, y descarta rápido
   cuando el sitio no muestra trabajo verificable.

## Product Purpose

Portfolio personal de Luis Pazos, desarrollador Full Stack. Existe para que quien lo vea pueda
decidir en un minuto si quiere escribirle, y para darle un lugar propio al trabajo en vez de
depender de un perfil de red social.

Éxito declarado: **recibir contactos de trabajo**. Tensión registrada, no resuelta: el sitio habla
primero al cliente con un proyecto, pero la métrica que Luis eligió es el contacto laboral. Queda
como decisión abierta; no la resuelve el diseño por su cuenta.

## Positioning

Portfolio con trabajo real y estado honesto: los proyectos muestran qué se construyó, qué decisión
se tomó y en qué situación está hoy, sin métricas inventadas ni clientes ficticios. La identidad
pixel art con el búho animado es propia y no se parece a la plantilla de portfolio genérica.

## Operating Context

- El visitante llega desde un enlace compartido (CV, LinkedIn, GitHub, mensaje directo), casi
  siempre en el celular.
- Evalúa: quién es, qué hizo, con qué tecnologías, y si puede escribirle sin fricción.
- El contenido vive en el repositorio; Luis lo edita como archivos, no desde un panel.
- El sitio se publica estático; no hay backend propio en la primera versión.

## Capabilities and Constraints

- **Idioma:** español e inglés, ambos publicados (decisión de Luis). El español es el idioma
  fuente; el inglés es traducción, no contenido nuevo.
- **Contacto:** enlace `mailto:luis.pazos.dev@gmail.com`. El formulario del diseño queda definido
  pero no se implementa hasta que exista un servicio de envío real con estados de éxito y error.
- **Proyectos:** hoy hay un proyecto real (System-Tech, repositorio privado) y cinco registros de
  muestra para construir la interfaz. Los de muestra no se publican nunca.
- **Contenido personal:** sale del CV y de las decisiones de Luis; está en `docs/contenido.md` y
  `docs/proyectos/`.
- **Prohibido por regla del proyecto:** inventar experiencia, clientes, testimonios, métricas ni
  títulos; simular un envío de formulario; publicar un proyecto de muestra.
- **Sin backend:** nada de autenticación, base de datos ni panel de administración en esta versión.
- **Repositorio de System-Tech:** privado. No se enlaza; la ficha apunta a una demo cuando exista.

## Brand Commitments

- Nombre visible: `{Luis Pazos}` con la pluma como marca.
- Voz: primera persona, directa, sin superlativos. Español rioplatense en la versión ES.
- Identidad pixel art obligatoria: fondo oscuro, acentos cian, violeta y rosa; el búho animado es
  parte de la identidad y se queda.
- Tokens de color ya fijados en `src/styles/global.css` (`--color-base`, `--color-ink`,
  `--color-accent-cyan`, `--color-accent-purple`, `--color-accent-pink`).
- Textos de interfaz literales del diseño de referencia; no se reescriben al implementar.

## Evidence on Hand

- `docs/contenido.md`: textos de interfaz, identidad, experiencia, formación, habilidades y
  contacto, tomados del diseño y del CV.
- `docs/proyectos/`: un proyecto real (System-Tech) y cinco de muestra, con stack verificado en los
  `package.json` del repositorio.
- `../exampleDesing/`: cinco capturas del diseño de referencia (inicio, proyectos, archivo, sobre mí,
  contacto).
- `public/images/`, `public/buho/`, `public/svg/`, `public/favicons/`: ilustraciones pixel art,
  sprites del búho y marca.
- `src/features/mascot/`: reproductor del búho con sus animaciones.
- Ausencias que no se deben rellenar: no hay testimonios, ni clientes, ni métricas de resultado, ni
  capturas de System-Tech todavía, ni URL de demo.

## Product Principles

1. El trabajo manda: un proyecto concreto vale más que una lista de tecnologías.
2. Honestidad primero: estado real de cada proyecto, sin inflar ni inventar.
3. Escribirte tiene que ser trivial: un enlace de correo, sin formularios que prometen lo que no hay.
4. Identidad propia: pixel art y búho son la marca, no decoración intercambiable.
5. El contenido se edita como archivos y se puede traducir sin tocar componentes.

## Accessibility & Inclusion

- WCAG 2.2 AA obligatorio: contraste de texto, foco visible y navegación completa por teclado.
- `prefers-reduced-motion` respetado en toda animación, incluido el búho.
- Los textos en dos idiomas deben mantener el mismo nivel de accesibilidad; `lang` correcto por
  página.

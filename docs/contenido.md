# Contenido del portfolio

Fuente de textos del sitio. Lo que está entre comillas se copia **literal** al código: no se
reescribe al implementar.

Estado: textos de interfaz copiados del diseño de referencia (`../exampleDesing/`), datos
personales tomados del CV de Luis (5/11/2026) y **proyectos provisionales** a la espera de los
reales.

Marcas de este documento:

- `PROVISIONAL`: texto de relleno para construir la interfaz. **No se publica.**
- `PENDIENTE`: falta el dato y bloquea la publicación.

## 1. Inicio (portada)

| Elemento | Texto literal |
| --- | --- |
| Antetítulo | `Código, ideas y algo de pixel art.` |
| Título | `Hola, soy Luis Pazos.` + `Ing. de software.` |
| CTA principal | `Ver proyectos` |
| CTA secundario | `Hablemos` |

Párrafo de portada (literal):

> Creo webs y aplicaciones para que tu negocio se vea bien y funcione mejor. Combino diseño y
> desarrollo para que tus clientes encuentren lo que necesitan y vos puedas enfocarte en lo que
> hacés.

**Decisión de Luis (5/11/2026):** se publica `Ing. de software.` tal como está en el diseño. Se
lee como la disciplina (ingeniería de software), no como el título de ingeniero; el CV declara
Ingeniería Informática con 4.º año cursado. Revisar al recibirse.

## 2. Sobre mí (02 / Sobre mí)

| Elemento | Texto literal |
| --- | --- |
| Título | `La persona detrás del código.` |
| Subtítulo | `Lo que hago, lo que he aprendido y lo que me mueve.` |
| Panel lateral | `Fuera del código` → `Pixel art, curiosidad y ganas de seguir creando.` |
| CTA | `Ver proyectos` |
| CTA | `Hablemos` |
| Cierre de sección | `Seguimos: contacto →` |

### Perfil (bloque `perfil.js`)

- Nombre: `"Luis Pazos"`
- Profesión: `"Ing. de software"` (decisión de Luis; el rol del CV es Full Stack Developer)
- Intereses: `["Desarrollo web", "Pixel art"]`

### Resumen profesional (del CV, literal)

> Desarrollador Full Stack con experiencia en desarrollo de software y aplicaciones web, aplicando
> principios SOLID, Clean Architecture y buenas prácticas de arquitectura. Experiencia con React,
> TypeScript, Node.js y Express, además de Git, testing e integración de IA generativa.

### Experiencia laboral (del CV)

1. **Técnico TI · ESPAC** · 2023-2025 · Aeropuerto Internacional José Martí, La Habana
   - Desarrollé un sistema Full Stack de control de novedades para digitalizar y centralizar
     incidencias operativas.
   - Implementé mejoras en la gestión y seguimiento de las novedades, aplicando buenas prácticas de
     desarrollo.
   - Usé Git para el control de versiones y brindé soporte a redes, servidores Windows/Linux, bases
     de datos y CCTV.
2. **Técnico Informático · UCM** · 2020-2022 · Unidad de Construcciones Militares
   - Desarrollé un sistema Full Stack de gestión de inventarios y facturación para automatizar
     procesos administrativos.
   - Diseñé la lógica de negocio y la gestión de datos, aplicando principios de arquitectura de
     software.
   - Transformé necesidades administrativas en soluciones de software, colaborando con las áreas
     usuarias.
3. **Técnico Informático · Antillana de Acero** · 2016-2018
   - Participé en el desarrollo y mejora de la página web institucional.
   - Desarrollé componentes y funcionalidades para la plataforma web.
   - Transformé requerimientos en soluciones web funcionales.

El CV trae `2016 - 20181`; confirmado por Luis: el puesto terminó en **2018**. Se elimina también
la línea de plantilla `Arowwai Industries l 123 Anywhere St., Any City`, que no pertenece al CV.

### Formación (del CV)

1. **Ingeniería Informática** · CUJAE, Instituto Superior Politécnico José Antonio Echeverría ·
   2022-2026 · 4.º año, cuatro años cursados.
2. **Técnico Informático** · Cepero Bonilla · 2015-2019.

### Habilidades (del CV, agrupadas)

- **Frontend:** React · TypeScript · JavaScript · Astro · Zustand · TanStack
- **Backend:** Node.js · NestJS · Express · PostgreSQL
- **Arquitectura:** Git · SOLID · Clean Architecture · Patrones de diseño
- **Prácticas:** SDD · Testing / Unit Testing · IA generativa
- **Infraestructura:** Redes · Servidores Windows/Linux · Bases de datos · Soporte TI · CCTV

### Cómo trabajo (del CV, sección Actitudes)

Resolución de problemas · Comunicación efectiva · Pensamiento analítico · Adaptabilidad y
aprendizaje continuo · Trabajo en equipo · Atención al detalle · Gestión del tiempo

## 3. Proyectos destacados (01 / Proyectos)

Textos de interfaz (literales del diseño):

| Elemento | Texto literal |
| --- | --- |
| Título | `Lo que construyo.` |
| Subtítulo | `Proyectos, decisiones y detalles que hacen la diferencia.` |
| Botón de ficha | `Ver caso` |
| Botón de código | `Código` |
| Etiqueta de muestra | `Contenido de muestra` (se quita al publicar) |

### PROVISIONAL · Proyecto 01 — Sistema de control de novedades

- **Tipo:** `Aplicación web`
- **Intro (provisional):** Digitalización y centralización de las incidencias operativas de un
  aeropuerto, que antes se seguían en papel y planillas sueltas.
- **El reto (provisional):** Unificar el registro de novedades para que el equipo encontrara el
  estado de cada incidencia sin depender de una persona.
- **Mi aporte (provisional):** Diseñé el modelo de datos y la lógica de negocio, y construí la
  interfaz de seguimiento con estados por área.
- **Tecnologías (provisional):** React, TypeScript, Node.js, Express, PostgreSQL, Git.
- **Capturas:** `public/images/proyectos/proyecto-01-tareas.webp`
- **Enlaces:** `PENDIENTE`

### PROVISIONAL · Proyecto 02 — Inventario y facturación

- **Tipo:** `Aplicación web`
- **Intro (provisional):** Sistema de gestión de inventarios y facturación para reemplazar el
  control administrativo manual.
- **El reto (provisional):** Que el área administrativa emitiera comprobantes y consultara stock sin
  duplicar planillas.
- **Mi aporte (provisional):** Modelé el inventario, la facturación y los permisos, y traduje el
  circuito administrativo a reglas del sistema.
- **Tecnologías (provisional):** Node.js, Express, PostgreSQL, JavaScript.
- **Capturas:** `public/images/proyectos/proyecto-02-visible-parcial.webp`
- **Enlaces:** `PENDIENTE`

### PROVISIONAL · Proyecto 03 — Sitio institucional

- **Tipo:** `Sitio web`
- **Intro (provisional):** Mejora de la web institucional de una empresa siderúrgica.
- **El reto (provisional):** Actualizar la presencia pública con contenido que el área pudiera
  mantener sin depender del equipo técnico.
- **Mi aporte (provisional):** Desarrollé componentes y funcionalidades y ajusté la estructura de
  las páginas existentes.
- **Tecnologías (provisional):** JavaScript, HTML, CSS.
- **Capturas:** `public/images/proyectos/miniatura-proyecto-03.webp`
- **Enlaces:** `PENDIENTE`

Los tres están construidos sobre puestos reales del CV, pero **el detalle es de relleno**: los
proyectos reales (nombre, alcance, capturas y enlaces) los aporta Luis y reemplazan estas fichas.

## 4. Archivo de proyectos

| Elemento | Texto literal |
| --- | --- |
| Volver | `Volver al inicio` |
| Sección | `ARCHIVO / PROYECTOS` |
| Título | `Todo lo que voy creando.` |
| Subtítulo | `Proyectos, pruebas y nuevas ideas para explorar.` |
| Buscador | `Buscar un proyecto…` |
| Filtros | `Todos` / `Web` / `Aplicaciones` / `Experimentos` |
| Columnas | `PROYECTO` / `TIPO` / `VISTA` |
| Nota de cierre | `Cada proyecto tiene su propia historia.` |
| Botón de cierre | `Volver a destacados` |
| Etiqueta de muestra | `Ejemplos visuales` (se quita al publicar) |

Tipos que usa el diseño: `Aplicación web`, `Sitio web`, `Herramienta`, `Experimento`.

La maqueta dibuja seis filas; el plan pide dos o tres. Con los provisionales quedan **tres**, que es
lo que se puede sostener con contenido real.

## 5. Contacto (03 / Contacto)

| Elemento | Texto literal |
| --- | --- |
| Título | `Hablemos de lo que viene.` |
| Párrafo | `¿Necesitas una web, una aplicación o sumar a alguien a tu equipo? Cuéntame qué tienes en mente.` |
| Cierre del párrafo | `Todo empieza con una conversación.` |
| Encabezado del formulario | `mensaje = {` |
| Pregunta | `¿Qué tienes en mente?` |
| Opción 1 | `Un proyecto` |
| Opción 2 | `Una oportunidad laboral` |
| Campo nombre | `Nombre` → `Cómo te llamas` |
| Campo email | `Email` → `Para poder responderte` |
| Campo mensaje | `Mensaje` → `Cuéntame tu idea o la oportunidad que tienes en mente…` |
| Botón | `Enviar mensaje` |
| Nota de privacidad | `Usaré tu email para responder a tu mensaje.` |

Datos de contacto publicables:

- Correo: `luis.pazos.dev@gmail.com`. El CV tiene un typo (`gmial`); el correo correcto es el de
  `gmail.com`, confirmado por Luis.
- Teléfono: **no se publica**. Queda fuera del sitio para no exponerlo a scraping; si hace falta,
  va dentro de un CV descargable.

El formulario **no se publica** hasta que exista un servicio de envío real con estados de éxito y
error. Hasta entonces, enlace de correo.

## 6. Elementos comunes

| Elemento | Texto literal |
| --- | --- |
| Marca | `{Luis Pazos}` con pluma |
| Estado | `DISPONIBLE` |
| Navegación | `[Proyectos]` `[Sobre mí]` `[Contacto]` (el inicio es el logo) |
| Pie | `{Luis Pazos}` · `Código, curiosidad y pixel art.` |
| Volver | `Volver arriba` |
| Numeración | `01 / Proyectos`, `02 / Sobre mí`, `03 / Contacto` |

## 7. Pendientes antes de publicar

- [ ] Proyectos reales: nombre, tipo, reto, aporte, capturas y enlaces (reemplazan los tres
      provisionales).
- [ ] Servicio de envío del formulario o enlace de correo.
- [ ] Título y descripción para buscadores de cada página.
- [ ] ¿Se publica el badge `DISPONIBLE`?
- [ ] Quitar las etiquetas de maqueta: `Contenido de muestra`, `Ejemplos visuales`,
      `Vista de ejemplo`.

## Fuentes

- `../exampleDesing/`: cinco capturas del diseño (inicio, proyectos, archivo, sobre mí, contacto).
- `../Downloads/CV Luis Pazos FullStack Dev -598 91985976.pdf`: experiencia, formación, habilidades,
  resumen y contacto.
- `docs/plan-desarrollo.md`: alcance y ficha de proyecto.
- `AGENTS.md`: no inventar datos, títulos ni envíos simulados.

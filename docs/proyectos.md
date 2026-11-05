# Proyectos del portfolio

Datos de la sección de proyectos, separados del resto del contenido. La interfaz se construye con
estos registros; `docs/contenido.md` guarda solo los textos de interfaz.

## Regla de publicación

- `estado: muestra` son **datos de relleno** para construir y probar la interfaz. **No se publican.**
- `estado: real` es el único que sale al sitio. Hoy hay uno: System-Tech.
- Antes de publicar, cada registro de muestra se reemplaza o se borra. El sitio no debe mostrar
  nunca un proyecto de muestra, ni siquiera con una etiqueta que lo aclare.

## Campos de un proyecto

```ts
type Proyecto = {
  id: string; // slug estable, sin acentos
  nombre: string;
  tipo: 'Aplicación web' | 'Sitio web' | 'Herramienta' | 'Experimento';
  estado: 'real' | 'muestra';
  situacion: 'publicado' | 'en desarrollo' | 'prototipo';
  anio: number;
  destacado: boolean;
  intro: string; // una o dos líneas
  reto: string;
  aporte: string;
  stack: string[];
  captura: string | null; // ruta pública en /images/proyectos/
  enlaces: { demo: string | null; repo: string | null };
};
```

## 01 · System-Tech · `real`

- **id:** `system-tech`
- **tipo:** `Aplicación web`
- **situacion:** `en desarrollo` · versión `0.19.1`
- **anio:** 2026
- **destacado:** sí
- **intro:** Sistema de gestión para un taller de reparación de celulares: ingreso de equipos,
  estado de las reparaciones y catálogo, con API y panel web.
- **reto (borrador, confirmar):** sacar el taller de las planillas y los mensajes sueltos, y que
  cada reparación tenga un estado consultable por quien la atiende.
- **aporte (borrador, confirmar):** arquitectura del monorepo, modelo de datos en PostgreSQL, API,
  panel y las reglas de negocio del taller.
- **stack:** NestJS · PostgreSQL · Kysely · Zod · pino · Astro · React 19 · Ant Design ·
  TanStack Query · Zustand · Turborepo · Docker · Vitest · Playwright
- **captura:** `null` (pendiente)
- **enlaces:** `demo: null` (pendiente) · `repo: null` (privado, no se enlaza)

## 02 · Agenda de turnos · `muestra`

- **id:** `agenda-turnos` · **tipo:** `Aplicación web` · **situacion:** `prototipo` · **anio:** 2026
- **destacado:** no
- **intro:** Reserva de turnos con confirmación por correo y vista de agenda por profesional.
- **reto:** Evitar el ida y vuelta de mensajes para coordinar horarios.
- **aporte:** Modelé la disponibilidad, los solapamientos y las cancelaciones.
- **stack:** Astro · React · TypeScript · PostgreSQL
- **captura:** `/images/proyectos/miniatura-proyecto-02.webp`
- **enlaces:** `demo: null` · `repo: null`

## 03 · Sitio de estudio · `muestra`

- **id:** `sitio-estudio` · **tipo:** `Sitio web` · **situacion:** `publicado` · **anio:** 2025
- **destacado:** no
- **intro:** Sitio institucional de una sola página con catálogo de servicios y contacto directo.
- **reto:** Publicar sin depender de un desarrollador para cada cambio de texto.
- **aporte:** Contenido editable desde archivos y un layout que aguanta textos largos y cortos.
- **stack:** Astro · Tailwind CSS
- **captura:** `/images/proyectos/miniatura-proyecto-03.webp`
- **enlaces:** `demo: null` · `repo: null`

## 04 · Calculadora de presupuestos · `muestra`

- **id:** `calculadora-presupuestos` · **tipo:** `Herramienta` · **situacion:** `publicado` ·
  **anio:** 2025
- **destacado:** no
- **intro:** Cálculo de presupuestos por ítems, con exportación a PDF.
- **reto:** Reemplazar una planilla con fórmulas frágiles que nadie se animaba a tocar.
- **aporte:** Reglas de cálculo testeables y una salida imprimible que el cliente entiende.
- **stack:** TypeScript · React · Vitest
- **captura:** `/images/proyectos/miniatura-proyecto-04.webp`
- **enlaces:** `demo: null` · `repo: null`

## 05 · Visualizador de datos · `muestra`

- **id:** `visualizador-datos` · **tipo:** `Experimento` · **situacion:** `prototipo` ·
  **anio:** 2026
- **destacado:** no
- **intro:** Exploración de series de tiempo con filtros y gráficos interactivos.
- **reto:** Probar una idea de visualización sin montar un backend.
- **aporte:** Un prototipo con datos de ejemplo, filtros combinables y gráficos legibles en móvil.
- **stack:** React · Recharts · TanStack Query
- **captura:** `/images/proyectos/miniatura-proyecto-05.webp`
- **enlaces:** `demo: null` · `repo: null`

## 06 · Catálogo de productos · `muestra`

- **id:** `catalogo-productos` · **tipo:** `Sitio web` · **situacion:** `publicado` · **anio:** 2025
- **destacado:** no
- **intro:** Catálogo con búsqueda, filtros por categoría y fichas de producto.
- **reto:** Mostrar un catálogo grande sin volverlo lento ni ilegible en móvil.
- **aporte:** Filtros en cliente con paginación y carga diferida de imágenes.
- **stack:** Astro · TypeScript · Tailwind CSS
- **captura:** `/images/proyectos/miniatura-proyecto-06.webp`
- **enlaces:** `demo: null` · `repo: null`

## Cobertura de la interfaz

Los seis registros cubren a propósito los casos que el diseño necesita probar:

- los cuatro tipos de proyecto del archivo (`Aplicación web`, `Sitio web`, `Herramienta`,
  `Experimento`);
- introducciones de una línea y de dos, para ver cómo corta la tarjeta;
- proyectos con y sin captura;
- destacados (uno) contra no destacados (cinco);
- tres situaciones distintas (`publicado`, `en desarrollo`, `prototipo`).

## Al reemplazar por los reales

1. Cambiar `estado` a `real` solo cuando los datos sean verificables.
2. Confirmar o reescribir `reto` y `aporte` en primera persona; hoy los de System-Tech son borrador.
3. Sumar `captura` y `enlaces` reales; una ficha sin captura se muestra sin imagen, no con un
   placeholder inventado.
4. Borrar los registros de muestra que no se reemplacen.

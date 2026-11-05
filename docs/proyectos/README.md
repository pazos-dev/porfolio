# Proyectos

Un archivo por proyecto. La interfaz se construye con estos registros; `docs/contenido.md` guarda
solo los textos de interfaz del sitio.

## Regla de publicación

- `estado: muestra` son **datos de relleno** para construir y probar la interfaz. **No se publican.**
- `estado: real` es el único que sale al sitio. Hoy hay uno: System-Tech.
- Al publicar, cada archivo de muestra se reemplaza por el real o se borra. El sitio no debe mostrar
  nunca un proyecto de muestra, ni siquiera con una etiqueta que lo aclare.

## Formato

Cada archivo lleva los datos en el frontmatter, para poder moverlos después a una colección de
contenido de Astro sin reescribirlos, y el texto largo en el cuerpo.

```yaml
---
id: slug-sin-acentos
nombre: Nombre visible
tipo: Aplicación web | Sitio web | Herramienta | Experimento
estado: real | muestra
situacion: publicado | en desarrollo | prototipo
anio: 2026
destacado: true | false
rol: Qué parte hiciste
duracion: 6 semanas | null
stack: [Tecnología, Tecnología]
captura: /images/proyectos/archivo.webp | null
capturaAlt: Texto alternativo de la captura | null
galeria: []
demo: https://... | null
repo: https://... | null
---
```

Cuerpo: `## Intro`, `## El reto`, `## Mi aporte`, `## Decisiones`, `## Resultado`. El bloque
`## Notas` es opcional y no se publica.

## Proyectos

| Archivo | Proyecto | Tipo | Estado |
| --- | --- | --- | --- |
| [`01-system-tech.md`](01-system-tech.md) | System-Tech | Aplicación web | `real` |
| [`02-agenda-turnos.md`](02-agenda-turnos.md) | Agenda de turnos | Aplicación web | `muestra` |
| [`03-sitio-estudio.md`](03-sitio-estudio.md) | Sitio de estudio | Sitio web | `muestra` |
| [`04-calculadora-presupuestos.md`](04-calculadora-presupuestos.md) | Calculadora de presupuestos | Herramienta | `muestra` |
| [`05-visualizador-datos.md`](05-visualizador-datos.md) | Visualizador de datos | Experimento | `muestra` |
| [`06-catalogo-productos.md`](06-catalogo-productos.md) | Catálogo de productos | Sitio web | `muestra` |

## Cobertura de la interfaz

Los seis registros cubren a propósito los casos que el diseño necesita probar: los cuatro tipos del
archivo, intros de una y dos líneas, proyectos con y sin captura, uno destacado contra cinco no
destacados, y tres situaciones distintas.

---
id: system-tech
nombre: System-Tech
tipo: Aplicación web
estado: real
situacion: en desarrollo
anio: 2026
destacado: true
rol: Desarrollo completo (arquitectura, API y panel)
duracion: null
stack:
  - NestJS
  - PostgreSQL
  - Kysely
  - Zod
  - pino
  - Astro
  - React 19
  - Ant Design
  - TanStack Query
  - Zustand
  - Turborepo
  - Docker
  - Vitest
  - Playwright
captura: null
capturaAlt: null
galeria: []
demo: null
repo: null
---

## Intro

Sistema de gestión para un taller de reparación de celulares: ingreso de equipos, estado de las
reparaciones y catálogo, con API y panel web.

## El reto

Borrador, pendiente de confirmar: sacar el taller de las planillas y los mensajes sueltos, y que
cada reparación tenga un estado consultable por quien la atiende.

## Mi aporte

Borrador, pendiente de confirmar: arquitectura del monorepo, modelo de datos en PostgreSQL, API,
panel y las reglas de negocio del taller.

## Decisiones

Borrador, pendiente de confirmar. Candidatas a partir del código:

- Monorepo con API y panel separados, para poder desplegar cada parte por su lado.
- Kysely en lugar de un ORM completo: consultas tipadas sin generar código.
- Zod como única fuente de validación, compartida entre API y formulario.

## Resultado

Borrador: la ficha no se publica sin capturas y sin una demo o una descripción del estado actual.

## Notas

- Versión `0.19.1`. Repositorio privado: no se enlaza; la ficha apunta a una demo cuando exista.
- Stack tomado de los `package.json` del repositorio, no de memoria.

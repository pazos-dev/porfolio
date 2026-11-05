---
id: agenda-turnos
nombre: Agenda de turnos
tipo: Aplicación web
estado: muestra
situacion: prototipo
anio: 2026
destacado: false
rol: Desarrollo completo
duracion: 6 semanas
stack: [Astro, React, TypeScript, PostgreSQL]
captura: /images/proyectos/miniatura-proyecto-02.webp
capturaAlt: Pantalla de agenda con turnos distribuidos por profesional y horario
galeria: []
demo: null
repo: null
---

## Intro

Reserva de turnos con confirmación por correo y vista de agenda por profesional.

## El reto

Evitar el ida y vuelta de mensajes para coordinar horarios.

## Mi aporte

Modelé la disponibilidad, los solapamientos y las cancelaciones.

## Decisiones

- La disponibilidad se calcula en el servidor para que dos personas no puedan reservar el mismo
  horario.
- Las cancelaciones no borran el turno: cambian su estado y quedan auditables.

## Resultado

Aprendizaje: el calendario es la parte cara de este tipo de producto; conviene resolverlo antes que
la interfaz de reserva.

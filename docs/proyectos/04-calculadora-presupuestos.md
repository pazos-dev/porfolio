---
id: calculadora-presupuestos
nombre: Calculadora de presupuestos
tipo: Herramienta
estado: muestra
situacion: publicado
anio: 2025
destacado: false
rol: Desarrollo completo
duracion: 4 semanas
stack: [TypeScript, React, Vitest]
captura: /images/proyectos/miniatura-proyecto-04.webp
capturaAlt: Formulario de presupuesto con ítems, cantidades y total calculado
galeria: []
demo: null
repo: null
---

## Intro

Cálculo de presupuestos por ítems, con exportación a PDF.

## El reto

Reemplazar una planilla con fórmulas frágiles que nadie se animaba a tocar.

## Mi aporte

Reglas de cálculo testeables y una salida imprimible que el cliente entiende.

## Decisiones

- Las reglas de cálculo son funciones puras, fuera de React, y se prueban sin montar la interfaz.
- El PDF se genera desde la misma vista impresa, para no mantener dos plantillas.

## Resultado

Aprendizaje: separar el cálculo de la interfaz convirtió una planilla en algo que se puede probar.

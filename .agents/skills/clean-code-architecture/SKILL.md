---
name: clean-code-architecture
description: "Escribir o refactorizar código de aplicación con reutilización y límites de arquitectura. Usar al implementar funciones, componentes, hooks o servicios; excluir tareas solo de contenido, estilos o configuración."
---

# Código limpio y arquitectura

Producir código mantenible que cumpla el comportamiento solicitado. Aplicar Clean Code,
SOLID y Clean Architecture con la profundidad que requiera el problema. Conservar
la arquitectura existente salvo que el cambio necesite corregir un límite concreto.

## Antes de escribir

1. Leer las instrucciones aplicables y los archivos relacionados con la tarea. Consultar
   documentación de arquitectura cuando el cambio afecte límites; evitar leer todo el repo por rutina.
2. Buscar implementaciones, tipos, validaciones, componentes y utilidades equivalentes.
   Seguir imports y usos antes de crear una alternativa o cambiar un contrato compartido.
3. Identificar entrada, salida, reglas, efectos externos y estados de fallo relevantes.
4. Para cambios con varias responsabilidades, indicar brevemente qué reutilizar, qué separar
   y cómo verificarlo. Resolver decisiones rutinarias y continuar sin pedir aprobación por cada archivo.

## Reutilizar sin acoplar responsabilidades distintas

- Mantener una sola fuente de cada regla de negocio, configuración y transformación compartida.
  Si la regla ya está duplicada, consolidarla dentro del alcance del cambio y verificar sus consumidores.
- Comparar el significado y las razones de cambio, no solo la semejanza del texto.
  No unir un formulario de contacto y uno de compra porque ambos tienen un input de email.
- Ante una segunda implementación equivalente, evaluar una extracción. Elegir un nombre de dominio,
  un propietario y un contrato pequeño; explicar la excepción si conviene mantenerlas independientes.
- Preferir composición a componentes universales con flags que representan pantallas distintas.
  Evitar crear wrappers que solo renombren una llamada sin aportar política, adaptación o aislamiento útil.
- Mantener estado mínimo: derivar valores calculables en vez de sincronizar copias del mismo dato.

## Separar por responsabilidad

- Mantener páginas y rutas como puntos de composición. Extraer reglas, integraciones o ciclos de vida
  que puedan cambiar y verificarse de forma independiente.
- Mantener componentes visuales centrados en presentación e interacción local. Extraer un hook
  cuando agrupe estado y efectos con propósito propio; no dividir JSX arbitrariamente.
- Expresar cálculos y decisiones puras como funciones sin acceso implícito a red, DOM o almacenamiento.
- Situar una pieza compartida en el módulo que conozca su significado. Evitar cajones `utils`,
  `helpers` o servicios globales que mezclen responsabilidades sin relación.
- Tratar aproximadamente 250 líneas por archivo y 80 por función como señales de revisión,
  nunca como leyes. Respetar los límites del proyecto si existen; excluir arte generado y datos.

## Aplicar Clean Architecture con criterio

- Para lógica de negocio real, separar reglas de dominio, coordinación del caso de uso y adaptadores
  de entrada/salida. Hacer que las dependencias de las reglas apunten hacia contratos internos.
- Mantener reglas de dominio independientes de React, Astro, HTTP, ORM y DOM. Convertir DTOs externos
  en datos internos en el límite cuando sus formatos o invariantes lo justifiquen.
- Definir puertos pequeños solo para fronteras concretas: por ejemplo, un caso de uso que deba enviar
  un mensaje mediante un proveedor externo. Inyectar una función o interfaz enfocada, según el stack.
- Conectar implementaciones en el punto de composición. No instanciar adaptadores dentro de reglas puras.
- Para una tarjeta estática o un filtro local sencillo, usar componentes, datos y funciones suficientes.
  No crear entidades, repositorios, interfaces, fábricas o contenedores de inyección sin una necesidad actual.
- Aplicar los principios aunque no haya carpetas llamadas `domain`, `application` e `infrastructure`.
  Proponer una migración de arquitectura aparte si excede la funcionalidad autorizada.
- Leer [decisiones de diseño](references/design-decisions.md) al elegir una abstracción,
  introducir un patrón o resolver una frontera de negocio. No cargar la referencia para cambios triviales.

## Escribir y comprobar

- Nombrar por intención; mantener funciones cohesivas y contratos explícitos. Usar guard clauses
  cuando aclaren el flujo; evitar anidamiento y parámetros booleanos ambiguos.
- Validar datos no confiables en sus límites. No ocultar fallos devolviendo éxitos, listas vacías o
  valores por defecto engañosos. Conservar contexto útil y no registrar secretos.
- En TypeScript, aprovechar tipos estrictos; usar `unknown` y validación para entradas externas.
  Evitar `any`, aserciones y desactivaciones que solo silencien problemas.
- Gestionar cancelación y limpieza de recursos cuando existan efectos. Mantener efectos fuera del render.
- Hacer el cambio menor que resuelva completamente el objetivo. No añadir dependencias ni actualizar
  librerías por conveniencia si las capacidades existentes son suficientes.
- Ejecutar los scripts reales que correspondan a los archivos afectados. Añadir pruebas de comportamiento
  para reglas, estados y fallos significativos; no pruebas que copien la implementación.
- Revisar el diff y los consumidores modificados. No debilitar reglas o pruebas para obtener un resultado verde.

## Entregar

Explicar brevemente qué cambió, qué se reutilizó y cómo se verificó. Si se introdujo un patrón,
indicar qué problema observable resuelve. Declarar comprobaciones no ejecutadas y limitaciones reales.
No afirmar que la estructura o esta skill garantizan ausencia de duplicación o errores.

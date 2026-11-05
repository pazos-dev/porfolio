---
name: react-component-patterns
description: "Escribir o refactorizar componentes React, hooks, formularios y lógica de estado en JSX o TSX. Excluir contenido estático, estilos sin lógica React y archivos Astro sin cambios en componentes React."
---

# Buenas prácticas de React

## Diseñar desde la responsabilidad

- Inspeccionar versión, tipos, componentes y convenciones existentes. Reutilizar contratos y
  componentes por intención; aplicar la arquitectura real antes de proponer una estructura nueva.
- Separar vista, reglas puras y efectos cuando tengan responsabilidades independientes.
  Mantener funciones pequeñas y locales si extraerlas solo obliga a seguir archivos sin aportar claridad.
- Tipar props y eventos con contratos explícitos. Para un wrapper de HTML, aprovechar los tipos
  adecuados del elemento y conservar atributos útiles. Evitar `any` y aserciones que oculten errores.
- Preferir composición, children y variantes pequeñas a componentes universales con muchos flags.
  No imponer compound components, render props o contextos si una composición simple basta.

## Mantener estado mínimo y render puro

- Guardar solo datos que realmente cambien de forma independiente. Calcular filtros, totales y
  selecciones derivados de props/estado en vez de sincronizar copias mediante efectos.
- Mantener el estado cerca de quien lo usa; elevarlo al ancestro común cuando deba compartirse.
  No añadir un store global ni contexto para una necesidad local.
- Tratar props y estado como inmutables. Usar actualizaciones funcionales cuando el nuevo estado
  dependa del anterior y claves estables del dato al representar listas.
- Mantener efectos y mutaciones externas fuera del render. Respetar las reglas de hooks de la versión
  instalada; no condicionar hooks ordinarios ni llamar componentes como funciones para eludir el ciclo.
- Usar refs para elementos y valores imperativos que no deban producir UI por cada cambio,
  como objetivos de animación. No esconder en refs estado que la interfaz necesita representar.

## Efectos y hooks propios

- Manejar acciones de usuario en sus eventos. Reservar efectos para sincronizar con sistemas externos
  como DOM, suscripciones, un controlador o red cuando la arquitectura de datos lo requiera.
- Declarar dependencias completas. Replantear el flujo antes de desactivar reglas o usar una ref
  como parche para ignorar dependencias que sí cambian el comportamiento.
- Limpiar listeners, timers, observers y controladores. Gestionar respuestas tardías y cancelación
  según el proveedor; soportar desmontaje y nueva inicialización sin acumular recursos.
- Extraer un hook por lógica coherente que merezca nombre y ciclo de vida; los hooks comparten lógica,
  no convierten por sí solos dos estados independientes en un estado compartido.
- Usar reducer cuando las transiciones relacionadas se entiendan mejor juntas. No convertir
  un booleano sencillo en una máquina de estados o un reducer por plantilla.

## Formularios, SSR y rendimiento

- Elegir entradas controladas o no controladas según el caso y el patrón existente. Conservar
  etiquetas, errores asociados, semántica de envío, foco y estados pendientes reales.
- Validar en el límite adecuado; la validación cliente no sustituye la del servidor. Evitar
  envíos duplicados cuando el flujo lo necesite y no informar éxito antes de una respuesta real.
- Para render servidor, mantener salida inicial coherente y no leer APIs del navegador al evaluar
  módulos o durante render. Resolver diferencias de datos en su origen antes de suprimir avisos.
- En Astro, mantener callbacks cliente dentro de la isla y consultar la skill de Astro si se cambia
  hidratación o comunicación entre islas. No importar componentes `.astro` directamente dentro de React.
- Medir o justificar costes antes de añadir memoización. No usar `useMemo`, `useCallback` o `memo`
  en todas las piezas; comprobar las capacidades del compilador y la configuración reales.

## Verificar y entregar

- Ejecutar tipos, lint de hooks y pruebas existentes pertinentes. Probar comportamiento observado:
  acciones, cambios de props, estados vacíos, errores y limpieza donde haya riesgo real.
- Verificar teclado y toque para controles nuevos. Si cambia hidratación, comprobar la página
  servida y no solo el componente aislado cuando las herramientas estén disponibles.
- Explicar qué se reutilizó y por qué se separó un componente o hook. Declarar verificaciones pendientes.

## Fuentes oficiales

- Estado y componentes: https://react.dev/learn/thinking-in-react
- Efectos: https://react.dev/learn/you-might-not-need-an-effect
- Hooks propios: https://react.dev/learn/reusing-logic-with-custom-hooks
- Reglas de hooks: https://react.dev/reference/rules/rules-of-hooks

# Decidir abstracciones y patrones

Elegir la solución más directa que permita entender, cambiar y comprobar el comportamiento actual.
Registrar una decisión solo cuando haya una alternativa o coste que un mantenedor necesite conocer.

## Elegir según evidencia

| Problema observado | Solución posible | Evitar |
| --- | --- | --- |
| Mismo cálculo o regla en varios consumidores | Una función o módulo con propietario claro | Copiar la regla y corregir solo una copia |
| Variantes visuales de la misma intención | Props pequeñas, composición o slots | Un componente universal para flujos distintos |
| Conversión entre datos externos e internos | Adapter o mapper en el límite | Llevar DTOs de proveedor por toda la aplicación |
| Algoritmos intercambiables reales | Strategy con funciones o contratos pequeños | Una clase por algoritmo hipotético |
| Transiciones que se pisan entre sí | Estado explícito y tabla de transiciones | Flags incompatibles y temporizadores independientes |
| Creación variable y compleja de objetos | Factory enfocada | Fábricas para cada constructor simple |
| Caso de uso dependiente de red o almacenamiento | Puerto enfocado y adaptador inyectado | Interfaz por cada clase, sin frontera real |
| Acceso persistente con reglas de consulta compartidas | Repository enfocado si aporta un límite útil | Repository genérico sobre un archivo Markdown |

No intentar usar todos los patrones. Un patrón no usado es una decisión válida.

## Reconocer duplicación semántica

Si dos pantallas calculan la misma fecha de vencimiento, extraer la regla y parametrizar las
diferencias legítimas. Mantener el formato visual en cada pantalla si responde a necesidades distintas.
Si dos módulos tienen ambos `status`, no compartir un enum hasta comprobar que sus estados y
transiciones significan lo mismo. Compartir sintaxis no implica compartir dominio.

Buscar una fuente para el dato: metadatos del proyecto en contenido tipado; tarjeta y detalle
leen esa fuente, en lugar de mantener dos listas. Evitar dobles estados de filtros, totales y selecciones.

## Elegir profundidad de arquitectura

- Presentación estática: contenido -> página -> componentes. No necesitar dominio artificial.
- Interacción local: función pura de filtro + estado mínimo + vista.
- Integración externa: contrato de entrada validado + coordinación + adaptador de proveedor.
- Reglas de negocio complejas: dominio y casos de uso independientes con adaptadores externos.

No propagar una migración de carpetas si basta con extraer una responsabilidad. Preferir módulos
por funcionalidad y límites explícitos a capas globales que obliguen a tocar muchas carpetas por tarea.

## Comprobar la dirección de dependencias

Pedir a las reglas internas lo que necesitan mediante entradas y contratos pequeños. Hacer que
el adaptador externo implemente esos contratos; conectar las piezas fuera del dominio.
No importar un SDK de email desde una regla de validación, ni un componente React desde el controlador.
No crear un bus de eventos global cuando basta con un callback local.

## Refactorizar sin alterar contratos por accidente

Identificar consumidores; caracterizar el comportamiento relevante; extraer primero una pieza
y cambiar sus usos. Verificar exportaciones, errores y ciclo de vida. Eliminar la implementación
anterior cuando sus consumidores hayan migrado. Separar un cambio de comportamiento de una
refactorización amplia, salvo que sean inseparables para resolver el objetivo.

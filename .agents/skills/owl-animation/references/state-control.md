# Controlar estados y prioridades

Adoptar esta tabla como punto de partida y ajustarla a las acciones realmente implementadas.
No construir un framework de animación ni todos los estados por anticipado.

| Condición | Decisión |
| --- | --- |
| Instancia eliminada | Ignorar nuevas acciones y liberar recursos; no reiniciar |
| Pausa del usuario | Conservarla hasta reanudación explícita, aunque vuelva la visibilidad |
| Movimiento reducido | Mantener representación estática o feedback mínimo; no reactivar bucles por eventos de página |
| Documento oculto | Suspender trabajo; reanudar según pausa del usuario y preferencia vigente |
| Error o éxito solicitado | Ejecutar feedback breve y volver al estado base, sin tapar el mensaje textual |
| Saludo en curso y otro saludo | Reiniciar, ignorar o encolar según decisión documentada, con cola limitada |
| Mirada y parpadeo | Combinar canales si no compiten; mantener límites y párpados coherentes |
| Puntero fuera | Volver al centro suavemente si el movimiento está permitido |

Separar intención (estado, objetivo y acción) de reproducción (tiempo, keyframes y transforms).
Para una acción cancelada, impedir que su callback de fin restaure un estado que ya cambió;
usar el mecanismo de cancelación o una identidad de acción vigente.

Asignar un propietario por canal: grupo exterior para posición global, grupo de cabeza para
inclinación, pupilas para mirada y alas para saludo. Si dos acciones compiten por el mismo canal,
definir una prioridad en vez de acumular animaciones independientes.

Al reanudar, recalcular el tiempo base o limitar el delta para evitar que un intervalo de
pestaña oculta produzca un salto. Usar `cancelAnimationFrame` y cancelación real de Web Animations
según corresponda; gestionar la promesa de finalización de una animación cancelada.

Comprobar como mínimo la secuencia: iniciar -> mirar -> saludar -> interrumpir -> pausar ->
ocultar/mostrar -> reanudar -> disponer. Verificar además movimiento reducido y dos instancias
independientes si la página realmente necesita más de una.

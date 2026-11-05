---
name: portfolio-assets
description: "Preparar imágenes, SVG, fondos, iconos y favicon del portfolio para la web. Usar al importar, recortar, convertir u optimizar recursos; excluir crear un rig o motor de animación."
---

# Preparar recursos gráficos

## Inspeccionar antes de transformar

- Localizar los archivos proporcionados y comprobar dimensiones, formato, transparencia y contenido.
  Ver la imagen cuando una decisión dependa de su apariencia; no inferir el recorte solo por el nombre.
- Identificar destino, tamaño de presentación, variantes y necesidad de transparencia.
  Conservar el original y generar derivados con nombres descriptivos y estables.
- Registrar origen y licencia cuando estén disponibles; no inventar permisos ni atribuir
  a una extracción exacta lo que se ha reconstruido o generado.
- Si solo hay una captura, distinguir recorte, reconstrucción vectorial y recreación.
  No prometer recuperar capas o zonas tapadas que no están presentes en los píxeles.

## Preparar según el recurso

- Pixel art: conservar bordes y proporción, evitar suavizado y reescalados destructivos.
  Usar escalado entero cuando sea viable; comprobar el tamaño final antes de aplicar `image-rendering`.
- Fotografías e ilustraciones: seleccionar resolución y compresión según tamaño visible,
  comparar visualmente derivados y evitar servir el original enorme en una miniatura.
- Elegir PNG, WebP o AVIF según calidad, transparencia, herramientas y navegadores objetivo.
  Medir el peso obtenido; no asumir que un formato siempre gana.
- SVG: conservar `viewBox`, IDs necesarios, accesibilidad y grupos animables. Revisar scripts,
  recursos externos y contenido activo de SVG no confiables; no inyectar marcado arbitrario en el DOM.
- No convertir un bitmap en SVG envolviéndolo en `<image>` y llamarlo vector editable.
  No ejecutar optimizaciones que fusionen ojos, alas o IDs que necesite la mascota.
- Favicon: partir del símbolo de la marca, comprobar legibilidad a 16 y 32 px y preparar
  formatos/tamaños que requiera el sitio. Añadir icono para pantalla de inicio solo si corresponde.
- Fondos: preparar capas separadas únicamente cuando los archivos lo permitan o se autorice
  reconstruirlas; no presentar el movimiento de una imagen plana como articulación de sus elementos.

## Integrar y verificar

- Usar rutas y herramientas de assets del proyecto; evitar nombres duplicados y variantes huérfanas.
- Declarar dimensiones o proporción para reducir saltos de layout. Cargar de forma diferida
  recursos fuera de pantalla; priorizar con criterio la imagen principal visible.
- Añadir texto alternativo útil o vacío si es decoración. Mantener información funcional como texto real.
- Si se necesita un inventario, mantener nombre, destino, dimensiones, tamaño y origen en un solo archivo.
  Actualizar el inventario existente antes de crear otro formato equivalente.
- Abrir los derivados y verificar bordes, halos, recortes, transparencia y lectura pequeña.
  Informar recursos que no se pudieron extraer con fidelidad y transformaciones realizadas.
- Entregar archivos y cambios de integración dentro del alcance. No generar arte nuevo
  cuando la tarea solo pida optimizar los recursos suministrados.

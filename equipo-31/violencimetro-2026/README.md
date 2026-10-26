# Violencímetro 2026 — Escuadrón Morado

Reconstrucción del proyecto original de **Patrones Hermosos 2022, Equipo 31**. Es una aplicación web estática, educativa y privada: no diagnostica, no asigna un nivel de riesgo y no transmite ni almacena las respuestas del cuestionario.

## Abrir localmente

Abre `index.html` en el navegador. No requiere instalación, cuenta, servidor ni dependencias. Para una vista local con VS Code, puede utilizarse la extensión Live Server.

## Estructura

- `index.html`: interfaz semántica y accesible.
- `styles.css`: diseño responsive, sin recursos externos.
- `app.js`: cuestionario ejecutado exclusivamente en memoria del navegador.
- `data.js`: inventario de fuentes públicas revisadas; no contiene datos personales.

## Contenido y seguridad

El cuestionario permite omitir o terminar en cualquier momento. Su cierre nunca interpreta una respuesta como diagnóstico ni como ausencia de riesgo. Los recursos de apoyo se ofrecen siempre, con fecha de revisión y enlaces a las instituciones fuente.

La salida rápida redirige a un sitio externo, pero no borra el historial del navegador. No se reutilizaron las gráficas, escalas ni preguntas del Violentómetro del IPN.

## Antes de publicar

1. Revisar cada recurso de apoyo, sus horarios y cobertura territorial.
2. Revisar contenido con una persona experta en atención a violencias de género.
3. Ejecutar una evaluación manual de teclado, lector de pantalla, contraste y visualización móvil.
4. Publicar solo datos estadísticos con periodo, metodología y fuente visibles.

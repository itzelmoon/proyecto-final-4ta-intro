/* Contenido público validado. No contiene respuestas de personas usuarias. */
const questions = [
  '¿Alguien revisa tu teléfono, tus redes o tus conversaciones sin que quieras?',
  '¿Has sentido presión para dejar de ver a amistades, familia o personas importantes para ti?',
  '¿Alguien usa amenazas, celos, insultos o silencios para que hagas algo?',
  '¿Te han presionado para compartir imágenes, contraseñas o tener contacto íntimo?',
  '¿Te hacen sentir miedo de decir que no o de expresar lo que necesitas?',
  '¿Hay algo en una relación que te hace sentir incómoda, aislada o menos libre?'
];

const questionReasons = [
  { reason: 'La OMS reconoce las conductas de control; ENDIREH 2021 también incorpora violencia digital.', source: 'ENDIREH 2021 · INEGI', url: 'https://www.inegi.org.mx/programas/endireh/2021/' },
  { reason: 'Aislar de familia o amistades es una conducta de control reconocida por la OMS.', source: 'Violencia contra la mujer · OMS', url: 'https://www.who.int/es/news-room/fact-sheets/detail/violence-against-women' },
  { reason: 'Las amenazas e intimidación forman parte del maltrato psicológico según la OMS.', source: 'Violencia contra la mujer · OMS', url: 'https://www.who.int/es/news-room/fact-sheets/detail/violence-against-women' },
  { reason: 'La OMS reconoce la coacción sexual; ENDIREH incorpora temas de violencia digital.', source: 'ENDIREH 2021 · INEGI', url: 'https://www.inegi.org.mx/programas/endireh/2021/' },
  { reason: 'La coacción sexual y el maltrato psicológico son formas reconocidas de violencia de pareja.', source: 'Violencia contra la mujer · OMS', url: 'https://www.who.int/es/news-room/fact-sheets/detail/violence-against-women' },
  { reason: 'Las conductas de control pueden limitar autonomía, vínculos y libertad.', source: 'Violencia contra la mujer · OMS', url: 'https://www.who.int/es/news-room/fact-sheets/detail/violence-against-women' }
];

const sources = [
  { institution: 'Secretaría de las Mujeres · Gobierno de México', item: 'Línea de las Mujeres 079, opción 1', status: 'Verificado', reviewed: '2026-10-26', url: 'https://www.gob.mx/mujeres/prensa/si-vives-violencia-de-genero-no-estas-sola-llama-a-la-linea-de-las-mujeres-079-opcion-1-y-recibe-acompanamiento-integral?idiom=es' },
  { institution: 'Instituto Nacional de Estadística y Geografía', item: 'ENDIREH 2021: alcance y metodología', status: 'Histórico', reviewed: '2026-10-26', url: 'https://www.inegi.org.mx/programas/endireh/2021/' },
  { institution: 'Instituto Nacional de Estadística de Guatemala', item: 'ENCABIH 2023: resultados sobre violencia contra las mujeres', status: 'Histórico', reviewed: '2026-10-26', url: 'https://www.ine.gob.gt/2024/03/' },
  { institution: 'Ministerio Público de Guatemala', item: 'Línea 1572 para mujeres víctimas de violencia', status: 'Verificado', reviewed: '2026-10-26', url: 'https://www.mp.gob.gt/contactanos/' },
  { institution: 'Instituto Politécnico Nacional', item: 'Violentómetro: antecedente educativo; no se reproduce su gráfica ni escala', status: 'Histórico', reviewed: '2026-10-26', url: 'https://www.ipn.mx/genero/materiales/violentometro.html' }
];

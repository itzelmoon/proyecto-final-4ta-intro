let currentQuestion = 0;
let answeredAffirmatively = false;

const card = document.querySelector('#question-card');
const count = document.querySelector('#question-count');
const progress = document.querySelector('#progress-bar');

function renderQuestion() {
  if (currentQuestion >= questions.length) return renderClosing();
  count.textContent = `Pregunta ${currentQuestion + 1} de ${questions.length}`;
  progress.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  card.innerHTML = `<h3>${questions[currentQuestion]}</h3><div class="answer-options"><button type="button" data-answer="yes">Sí / a veces</button><button type="button" data-answer="no">No / no estoy segura</button></div>`;
  card.querySelectorAll('[data-answer]').forEach((button) => button.addEventListener('click', () => {
    if (button.dataset.answer === 'yes') answeredAffirmatively = true;
    currentQuestion += 1;
    renderQuestion();
  }));
}

function renderClosing() {
  count.textContent = 'Cuestionario terminado';
  progress.style.width = '100%';
  card.innerHTML = `<div class="closing"><span aria-hidden="true">✦</span><h3>Gracias por darte este momento.</h3><p>${answeredAffirmatively ? 'Lo que sentiste o identificaste merece atención y apoyo. No tienes que decidir nada ahora: puedes hablar con alguien de confianza o revisar los recursos cuando te resulte seguro.' : 'No existe una respuesta que descarte por completo una situación difícil. Puedes volver a estos recursos cuando lo necesites o compartirlos con alguien.'}</p><a class="button primary" href="#apoyo">Ver recursos de apoyo</a></div>`;
}

document.querySelector('#skip-question').addEventListener('click', () => { currentQuestion += 1; renderQuestion(); });
document.querySelector('#end-questionnaire').addEventListener('click', () => { currentQuestion = questions.length; renderClosing(); document.querySelector('#apoyo').scrollIntoView({ behavior: 'smooth' }); });
document.querySelector('[data-quick-exit]').addEventListener('click', () => { window.location.replace('https://www.google.com/'); });

document.querySelector('#source-list').innerHTML = sources.map((source) => `<article class="source-item"><div><span class="status ${source.status.toLowerCase().replace(' ', '-')}">${source.status}</span><h3>${source.item}</h3><p>${source.institution} · revisado ${source.reviewed}</p></div><a href="${source.url}" target="_blank" rel="noreferrer">Abrir fuente ↗</a></article>`).join('');
renderQuestion();

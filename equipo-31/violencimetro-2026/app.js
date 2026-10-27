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
    const answer = button.dataset.answer;
    if (answer === 'yes') answeredAffirmatively = true;
    renderResponseBridge(answer);
  }));
}

function renderResponseBridge(answer) {
  const isAffirmative = answer === 'yes';
  const evidence = questionReasons[currentQuestion];
  card.innerHTML = `<div class="response-bridge" role="status"><span aria-hidden="true">${isAffirmative ? '✦' : '⌁'}</span><h3>${isAffirmative ? 'Gracias por nombrarlo.' : 'Gracias por tomarte un momento.'}</h3><p>${isAffirmative ? 'Si esta situación te incomoda, te asusta o limita tu libertad, merece atención. No necesitas esperar a que aumente para buscar orientación.' : 'Una respuesta negativa no confirma que todo esté bien. Si algo no te hace sentir libre, puedes pedir apoyo de todos modos.'}</p><p class="question-reason"><strong>Por qué preguntamos:</strong> ${evidence.reason}</p><a class="verified-link" href="${evidence.url}" target="_blank" rel="noreferrer">Revisar información oficial: ${evidence.source} ↗</a><p class="bridge-note">No calcula riesgo ni sustituye atención profesional o de emergencia.</p><div class="bridge-actions"><button class="button primary" type="button" data-bridge-support>Ver recursos de apoyo</button><button class="button secondary" type="button" data-continue>Continuar</button></div></div>`;
  card.querySelector('[data-continue]').addEventListener('click', () => { currentQuestion += 1; renderQuestion(); });
  card.querySelector('[data-bridge-support]').addEventListener('click', () => {
    showSupport('orientation');
    document.querySelector('#apoyo').scrollIntoView({ behavior: 'smooth' });
  });
}

function renderClosing() {
  count.textContent = 'Cuestionario terminado';
  progress.style.width = '100%';
  card.innerHTML = `<div class="closing"><span aria-hidden="true">✦</span><h3>Gracias por darte este momento.</h3><div class="support-meter" aria-label="Ilustración de orientación hacia recursos de apoyo"><div class="meter-arc"><span class="meter-band reflect"></span><span class="meter-band concern"></span><span class="meter-band urgent"></span><span class="meter-needle" aria-hidden="true"></span><span class="meter-hub" aria-hidden="true"></span></div><div class="meter-labels" aria-hidden="true"><span>Reflexiona</span><span>Busca apoyo</span><span>Apoyo inmediato</span></div></div><p class="meter-disclaimer">Esta ilustración no suma respuestas ni mide una “velocidad de riesgo”. No diagnostica ni clasifica tu situación: los colores solo organizan rutas de información y apoyo.</p><p>${answeredAffirmatively ? 'Lo que sentiste o identificaste merece atención y apoyo. No tienes que decidir nada ahora: puedes hablar con alguien de confianza o elegir un recurso cuando te resulte seguro.' : 'No existe una respuesta que descarte por completo una situación difícil. Si no estás conforme con una relación interpersonal, puedes buscar orientación o compartir estos recursos con alguien.'}</p><div class="help-choices" aria-label="Elige qué quieres consultar"><button class="button secondary" type="button" data-help-choice="orientation">Quiero orientación</button><button class="button urgent-button" type="button" data-help-choice="urgent">Me preocupa mi seguridad ahora</button></div></div>`;
  card.querySelectorAll('[data-help-choice]').forEach((button) => button.addEventListener('click', () => {
    showSupport(button.dataset.helpChoice);
    document.querySelector('#apoyo').scrollIntoView({ behavior: 'smooth' });
  }));
}

function showSupport(choice) {
  const message = document.querySelector('#support-message');
  const cards = document.querySelectorAll('.support-grid article');
  cards.forEach((item) => item.classList.remove('resource-highlight'));
  if (choice === 'urgent') {
    message.innerHTML = '<strong>Si sientes peligro inmediato:</strong> llama a emergencias. En México, 911; en Guatemala, 1572 ofrece atención a mujeres víctimas de violencia. Si puedes hacerlo con seguridad, busca a una persona o lugar de confianza.';
    document.querySelector('.support-feature').classList.add('resource-highlight');
  } else {
    message.innerHTML = '<strong>Orientación:</strong> puedes consultar la Línea de las Mujeres 079, opción 1, en México, o revisar las fuentes institucionales disponibles. Los recursos siempre están disponibles, sin importar las respuestas del cuestionario.';
    document.querySelectorAll('.support-grid article:not(.support-feature)').forEach((item) => item.classList.add('resource-highlight'));
  }
}

document.querySelector('#skip-question').addEventListener('click', () => { currentQuestion += 1; renderQuestion(); });
document.querySelector('#end-questionnaire').addEventListener('click', () => { currentQuestion = questions.length; renderClosing(); document.querySelector('#apoyo').scrollIntoView({ behavior: 'smooth' }); });
document.querySelector('[data-quick-exit]').addEventListener('click', () => { window.location.replace('https://www.google.com/'); });

document.querySelector('#source-list').innerHTML = sources.map((source) => `<article class="source-item"><div><span class="status ${source.status.toLowerCase().replace(' ', '-')}">${source.status}</span><h3>${source.item}</h3><p>${source.institution} · revisado ${source.reviewed}</p></div><a href="${source.url}" target="_blank" rel="noreferrer">Abrir fuente ↗</a></article>`).join('');

function initMotion() {
  const targets = document.querySelectorAll('.hero-copy, .hero-visual, .urgent, .section-heading, .test-spotlight, .question-shell, .topic-grid article, .stat-grid article, .support-grid article, .source-item');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    targets.forEach((target) => target.classList.add('motion-visible'));
    return;
  }
  targets.forEach((target) => target.classList.add('motion-reveal'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('motion-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach((target) => observer.observe(target));
}

initMotion();
renderQuestion();

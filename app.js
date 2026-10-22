// Copy in Spanish and English. The other languages are generated into copy.extra.js (scripts/build-copy.py). Strings are
// static, so innerHTML only ever receives trusted markup.
const copy = {
  es: {
    title: 'PlayBack Padel — Tu mejor punto, siempre listo',
    description: 'PlayBack Padel convierte tu iPhone o iPad en una cámara de repeticiones para pádel: guardá la jugada con un gesto, revisala en VAR en cámara lenta y llevá el marcador del partido.',
    skip: 'Saltar al contenido', switchTo: 'Read in English', switchLabel: 'EN',
    navGestures: 'Gestos', navFeatures: 'Funciones', navDownload: 'Descargar',
    eyebrow: 'REPETICIONES Y MARCADOR EN VIVO',
    heroTitle: 'Tu mejor punto.<br><em>Un gesto</em> para guardarlo.',
    heroText: 'PlayBack Padel transforma un iPhone en una cámara de repeticiones y marcador para tu partido.',
    heroCta: 'Descargar gratis', heroCta2: 'Ver cómo funciona',
    courtAria: 'Marcador de ejemplo: Equipo A 40, Equipo B 30, jugada guardada',
    teamA: 'EQUIPO A', teamB: 'EQUIPO B', saved: 'JUGADA GUARDADA',
    intro: 'Sin accesorios ni suscripciones. Solo el partido, tus mejores jugadas y un marcador que todos pueden ver.',
    gestureEyebrow: 'CONTROLÁ EL PARTIDO', gestureTitle: 'Los gestos se entienden<br>de un vistazo.',
    gestureA: 'Punto Equipo A', gestureAText: 'Señalá a la izquierda un segundo y confirmá con la palma.',
    gestureUndo: 'Deshacer', gestureUndoText: 'Apuntá hacia abajo y confirmá con la palma para corregir el último punto.',
    gestureB: 'Punto Equipo B', gestureBText: 'Señalá a la derecha un segundo y confirmá con la palma.',
    gestureSave: 'Guardar jugada', gestureSaveText: 'Mostrá la palma abierta durante un segundo.',
    gestureVar: 'Activar VAR', gestureVarText: 'Dos palmas separadas, un segundo, abren la repetición en cámara lenta.',
    featureEyebrow: 'HECHO PARA LA CANCHA', featureTitle: 'Todo lo que necesitás<br>entre punto y punto.',
    f1: 'Repetición instantánea', f1t: 'Guardá los últimos 15, 30 o 60 segundos sin detener la cámara.',
    f2: 'VAR en cámara lenta', f2t: 'Revisá la jugada a ½×, ¼× o cuadro por cuadro. Doble toque para ampliar justo donde querés mirar.',
    f3: 'VAR en tus jugadas guardadas', f3t: 'Cada VAR queda guardado como jugada, con su etiqueta. Abrilo otra vez sobre cualquier jugada, empezando un momento antes de lo que estabas viendo.',
    f4: 'Marcador de partido completo', f4t: 'Sets, juegos, tie-break a 6–6 y punto de oro opcional. Sumá o deshacé con gestos o con un botón.',
    f5: 'Historial de partidos', f5t: 'Cada partido queda guardado con el resultado por sets, la fecha y sus jugadas. Mirá cómo te fue y borrá lo que quieras.',
    f6: 'Varias cámaras y marcador compartido', f6t: 'Conectá varios iPhone o iPad cercanos: mostrá el marcador en vivo y juntá en cada jugada los ángulos de todas las cámaras, sin internet, con un código de partido.',
    f7: 'Para iPhone y iPad', f7t: 'La app también funciona en iPad, en pantalla completa y en horizontal.',
    f9: 'Apple Watch', f9t: 'Sumá puntos, deshacé, guardá la jugada y abrí el VAR desde la muñeca, con el puntaje en el reloj.',
    f10: 'Quién saca', f10t: 'El marcador marca quién saca en cada punto: cambia solo en cada juego y respeta el tie-break.',
    f11: 'Compartir con marcador', f11t: 'Mandá una jugada con el marcador dibujado en la esquina, lista para WhatsApp. El original no se toca.',
    f12: 'Rally largo (beta)', f12t: 'Mira la cancha con la cámara y guarda solo los rallies de más de 8 segundos, desde que empiezan hasta que terminan.',
    f13: 'Highlight del partido o del día', f13t: 'Un video de hasta 1 minuto con tus mejores jugadas, solo con juego (la app escucha los golpes) y con el marcador de cada una. El del día revisa todos tus partidos. Queda guardado en la app para verlo o compartirlo.',
    f8: 'Tus jugadas, en tu dispositivo', f8t: 'Sin cuentas, servidores ni publicidad. Los videos no salen del dispositivo salvo que los compartas.',
    demoEyebrow: 'MIRÁ CÓMO FUNCIONA', demoTitle: 'Todo en<br>40 segundos.', demoNote: 'Ilustración con datos de ejemplo.', demoAria: 'Video de demostración de PlayBack Padel: guardar una jugada con la palma, sumar puntos apuntando, VAR en cámara lenta y highlight del día',
    shotsEyebrow: 'LA APP POR DENTRO', shotsTitle: 'Así se ve<br>en la cancha.',
    shotScore: 'Marcador a pantalla completa, con sets, juegos y puntos.', shotScoreAlt: 'Marcador de PlayBack Padel a pantalla completa: Equipo A 40, Equipo B 30, con los sets',
    shotGestures: 'Tres gestos para manejar el partido sin tocar el celular.', shotGesturesAlt: 'Gestos de PlayBack Padel: señalar para sumar un punto, palma abierta para guardar la jugada y dos palmas para el VAR',
    shotFeatures: 'VAR, highlight automático, compartir con marcador y sin cuentas.', shotFeaturesAlt: 'Funciones de PlayBack Padel: VAR en cámara lenta, highlight automático, compartir con marcador, sin cuentas ni internet',
    shotCameras: 'Todos los ángulos de cada punto, con varias cámaras conectadas.', shotCamerasAlt: 'Jugadas de PlayBack Padel con la insignia de varios ángulos y los botones para cambiar de cámara: Principal, iPad de Ana, iPhone de Bruno',
    shotHistory: 'Historial de partidos con sus jugadas.', shotHistoryAlt: 'Historial de partidos de PlayBack Padel',
    watchTitle: 'También en tu muñeca', watchText: 'Con el Apple Watch sumás puntos, deshacés, guardás la jugada y abrís el VAR sin tocar el iPhone de la reja. Es opcional.',
    watch1Alt: 'Apple Watch con el puntaje 40–30 y los botones +1, deshacer, guardar jugada y VAR', watch2Alt: 'Apple Watch con el aviso para activar el puntaje en el iPhone', watch3Alt: 'Apple Watch con el aviso de partido terminado',
    shotsNote: 'Capturas con datos de ejemplo.',
    faqEyebrow: 'PREGUNTAS FRECUENTES', faqTitle: 'Lo que casi todos<br>preguntan.',
    q1: '¿Necesito internet?', a1: 'No. Todo funciona en el dispositivo. El marcador compartido entre dos iPhone o iPad usa Wi-Fi o Bluetooth, sin internet.',
    q2: '¿A qué distancia funcionan los gestos?', a2: 'Hasta unos 1,5 metros de la cámara. Para jugar más lejos están el marcador con botones y el Apple Watch.',
    q3: '¿Necesito un Apple Watch?', a3: 'No. Los gestos y los botones de la pantalla alcanzan. El reloj es un extra para manejar el partido desde la muñeca.',
    q4: '¿Cuánto video guarda?', a4: 'Mantiene en bucle los últimos 15, 30 o 60 segundos, a tu elección. Solo se guarda un video cuando mostrás la palma, tocás Guardar jugada o, si lo activás, termina un rally largo.',
    q5: '¿Mis videos se suben a algún lado?', a5: 'No. No hay cuentas ni servidores: los videos, los nombres y los puntajes quedan en tu dispositivo, y solo salen si vos los compartís.',
    q6: '¿Qué necesito para usarla?', a6: 'Un iPhone o iPad con iOS 17 o superior. Para el reloj, un Apple Watch con watchOS 10 o superior.',
    waitEyebrow: 'YA DISPONIBLE', waitTitle: 'PlayBack Padel<br>ya está en la cancha.',
    waitText: 'Descargala gratis en la App Store para iPhone y iPad.',
    waitBadge: 'Descargar en la App Store',
    androidSoon: 'Android: pronto',
    support: 'Soporte', privacy: 'Privacidad',
    supportUrl: 'support/',
    privacyUrl: 'privacy/'
  },
  en: {
    title: 'PlayBack Padel — Your best point, always ready',
    description: 'PlayBack Padel turns your iPhone or iPad into a padel replay camera: save the play with a gesture, review it in slow-motion VAR and keep your match score.',
    skip: 'Skip to content', switchTo: 'Leer en español', switchLabel: 'ES',
    navGestures: 'Gestures', navFeatures: 'Features', navDownload: 'Download',
    eyebrow: 'REPLAY & LIVE SCORING',
    heroTitle: 'Your best point.<br><em>One gesture</em> saves it.',
    heroText: 'PlayBack Padel turns an iPhone into a replay camera and live scoreboard for your match.',
    heroCta: 'Download free', heroCta2: 'See how it works',
    courtAria: 'Sample scoreboard: Team A 40, Team B 30, play saved',
    teamA: 'TEAM A', teamB: 'TEAM B', saved: 'PLAY SAVED',
    intro: 'No accessories or subscriptions. Just the match, your best plays and a score everyone can see.',
    gestureEyebrow: 'CONTROL THE MATCH', gestureTitle: 'Gestures make sense<br>at a glance.',
    gestureA: 'Team A point', gestureAText: 'Point left for one second, then confirm with your palm.',
    gestureUndo: 'Undo', gestureUndoText: 'Point down and confirm with your palm to correct the latest point.',
    gestureB: 'Team B point', gestureBText: 'Point right for one second, then confirm with your palm.',
    gestureSave: 'Save a play', gestureSaveText: 'Show an open palm for one second.',
    gestureVar: 'Activate VAR', gestureVarText: 'Two separated palms, held one second, open the replay in slow motion.',
    featureEyebrow: 'BUILT FOR THE COURT', featureTitle: 'Everything you need<br>between points.',
    f1: 'Instant replay', f1t: 'Save the last 15, 30 or 60 seconds without stopping the camera.',
    f2: 'Slow-motion VAR', f2t: 'Review the play at ½×, ¼× or frame by frame. Double-tap to zoom in right where you want to look.',
    f3: 'VAR on your saved plays', f3t: 'Every VAR is saved as a play, with its own tag. Open it again on any play, starting a moment before what you were watching.',
    f4: 'Full match scoring', f4t: 'Sets, games, a tie-break at 6–6 and optional golden point. Add or undo with gestures or a button.',
    f5: 'Match history', f5t: 'Every match is saved with its score by set, the date and its plays. See how you did and delete what you want.',
    f6: 'Several cameras and shared score', f6t: 'Connect several nearby iPhones or iPads: show the live score and collect every camera\'s angle of each play, no internet needed, with a match code.',
    f7: 'For iPhone and iPad', f7t: 'The app also works on iPad, full screen and in landscape.',
    f9: 'Apple Watch', f9t: 'Add points, undo, save the play and open VAR from your wrist, with the score on the watch.',
    f10: 'Who serves', f10t: 'The scoreboard shows who is serving on every point: it changes each game by itself and follows the tie-break.',
    f11: 'Share with the score', f11t: 'Send a play with the score drawn in the corner, ready for WhatsApp. The original is untouched.',
    f12: 'Long rally (beta)', f12t: 'It watches the court with the camera and saves only rallies longer than 8 seconds, from start to end.',
    f13: 'Match or day highlight', f13t: 'A video of up to 1 minute with your best plays, only with game action (the app listens for the hits) and each with its score. The day one reviews all your matches. It stays saved in the app to watch or share.',
    f8: 'Your plays stay on your device', f8t: 'No accounts, servers or ads. Videos never leave the device unless you share them.',
    demoEyebrow: 'SEE HOW IT WORKS', demoTitle: 'Everything in<br>40 seconds.', demoNote: 'Illustration with sample data.', demoAria: 'PlayBack Padel demo video: save a play with your palm, score by pointing, slow-motion VAR and the highlight of the day',
    shotsEyebrow: 'INSIDE THE APP', shotsTitle: 'This is how it looks<br>on court.',
    shotScore: 'Full-screen scoreboard with sets, games and points.', shotScoreAlt: 'PlayBack Padel full-screen scoreboard: Team A 40, Team B 30, with the sets',
    shotGestures: 'Three gestures to run the match without touching the phone.', shotGesturesAlt: 'PlayBack Padel gestures: point to score, open palm to save the play, two palms for VAR',
    shotFeatures: 'VAR, automatic highlight, share with the score and no accounts.', shotFeaturesAlt: 'PlayBack Padel features: slow-motion VAR, automatic highlight, share with the score, no accounts or internet',
    shotCameras: 'Every angle of the point, with several cameras connected.', shotCamerasAlt: 'PlayBack Padel plays with the badge for several angles and the buttons to switch cameras: Main, iPad de Ana, iPhone de Bruno',
    shotHistory: 'Match history with its plays.', shotHistoryAlt: 'PlayBack Padel match history',
    watchTitle: 'On your wrist too', watchText: 'With the Apple Watch you add points, undo, save the play and open VAR without touching the iPhone on the fence. It is optional.',
    watch1Alt: 'Apple Watch showing the 40–30 score with +1, undo, save play and VAR buttons', watch2Alt: 'Apple Watch with the notice to turn scoring on on the iPhone', watch3Alt: 'Apple Watch with the match finished notice',
    shotsNote: 'Screenshots with sample data.',
    faqEyebrow: 'FAQ', faqTitle: 'What almost everyone<br>asks.',
    q1: 'Do I need internet?', a1: 'No. Everything runs on the device. The shared score between two iPhones or iPads uses Wi-Fi or Bluetooth, no internet.',
    q2: 'How far do the gestures work?', a2: 'Up to about 1.5 meters (5 ft) from the camera. To play farther away there are the scoreboard buttons and the Apple Watch.',
    q3: 'Do I need an Apple Watch?', a3: 'No. Gestures and the on-screen buttons are enough. The watch is an extra to run the match from your wrist.',
    q4: 'How much video does it keep?', a4: 'It keeps a loop of the last 15, 30 or 60 seconds, your choice. A video is saved only when you show your palm, tap Save play or, if you turn it on, a long rally ends.',
    q5: 'Do my videos go anywhere?', a5: 'No. There are no accounts or servers: videos, names and scores stay on your device and only leave if you share them.',
    q6: 'What do I need to use it?', a6: 'An iPhone or iPad running iOS 17 or later. For the watch, an Apple Watch running watchOS 10 or later.',
    waitEyebrow: 'NOW AVAILABLE', waitTitle: 'PlayBack Padel<br>is on the court.',
    waitText: 'Download it for free on the App Store for iPhone and iPad.',
    waitBadge: 'Download on the App Store',
    androidSoon: 'Android: coming soon',
    support: 'Support', privacy: 'Privacy',
    supportUrl: 'support/en.html',
    privacyUrl: 'privacy/en.html'
  }
};

// Screenshots differ by language only in their text, so each language names its own files.
// The new languages reuse the English images and video (their text is part of the picture).
const shots = {
  es: { scoreboard: 'slide-es-scoreboard', gestures: 'slide-es-gestures', cameras: 'slide-es-cameras', features: 'slide-es-features', matches: 'slide-es-matches', watch1: 'watch-es-01-partido', watch2: 'watch-es-02-puntaje-apagado', watch3: 'watch-es-03-partido-terminado' },
  en: { scoreboard: 'slide-en-scoreboard', gestures: 'slide-en-gestures', cameras: 'slide-en-cameras', features: 'slide-en-features', matches: 'slide-en-matches', watch1: 'watch-en-01-match', watch2: 'watch-en-02-scoring-off', watch3: 'watch-en-03-match-finished' }
};

// Spanish and English are here; every other language is a small file (copy/<code>.js) loaded only when it is needed.
const supported = ['es', 'en', 'it', 'pt', 'de', 'fr', 'sv', 'nl'];
function loadCopy(code) {
  if (code in copy) return Promise.resolve();
  return new Promise(resolve => {
    const script = document.createElement('script');
    script.src = `copy/${code}.js`;
    script.onload = () => { Object.assign(copy, window.extraCopy || {}); resolve(); };
    script.onerror = () => resolve();
    document.head.appendChild(script);
  });
}
const imageLanguage = code => (code === 'es' ? 'es' : 'en');

const store = {
  get() { try { return localStorage.getItem('lang'); } catch { return null; } },
  set(value) { try { localStorage.setItem('lang', value); } catch { /* private mode: not remembered */ } }
};

// ?lang=en > saved choice > browser language > Spanish.
function initialLanguage() {
  const param = new URLSearchParams(location.search).get('lang');
  if (supported.includes(param)) return param;
  const saved = store.get();
  if (supported.includes(saved)) return saved;
  // The first browser language we have a translation of; English for any other; Spanish when it is not known.
  for (const preferred of navigator.languages || [navigator.language || '']) {
    const code = preferred.toLowerCase().slice(0, 2);
    if (supported.includes(code)) return code;
  }
  return navigator.language ? 'en' : 'es';
}

let lang = initialLanguage();

function render() {
  const text = copy[lang];
  document.documentElement.lang = lang;
  document.title = text.title;
  document.querySelector('meta[name="description"]').setAttribute('content', text.description);
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = text[el.dataset.i18n]; });
  document.querySelectorAll('[data-shot]').forEach(img => { img.src = `assets/shots/${shots[imageLanguage(lang)][img.dataset.shot]}.webp?v=2`; });
  const demo = document.getElementById('demo-video');
  if (demo) {
    const media = imageLanguage(lang);
    const src = `assets/demo-${media}.mp4`;
    // Changing the source of a playing video would restart it for nothing: only swap when the language changed.
    if (!demo.getAttribute('src') || !demo.getAttribute('src').endsWith(`demo-${media}.mp4`)) {
      const wasPlaying = !demo.paused;
      demo.setAttribute('src', src);
      demo.setAttribute('poster', `assets/demo-poster-${media}.webp`);
      if (wasPlaying) demo.play().catch(() => {});
    }
  }
  document.querySelectorAll('[data-badge]').forEach(img => { img.src = `assets/badges/${lang}.svg`; });
  document.querySelectorAll('[data-i18n-alt]').forEach(img => img.setAttribute('alt', text[img.dataset.i18nAlt]));
  document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', text[el.dataset.i18nAria]));
  document.getElementById('support-link').href = text.supportUrl;
  document.getElementById('privacy-link').href = text.privacyUrl;
  document.getElementById('language').value = lang;
}

document.getElementById('language').addEventListener('change', async event => {
  const chosen = event.target.value;
  await loadCopy(chosen);
  lang = chosen in copy ? chosen : 'en';
  store.set(lang);
  render();
});

// Spanish and English draw at once; another language draws as soon as its file arrives (English if it cannot).
loadCopy(lang).then(() => {
  if (!(lang in copy)) lang = 'en';
  render();
});

// The demo plays by itself, muted and in a loop, while it is on screen, and stops when it leaves. Visitors who ask for
// less motion keep the controls and press play themselves.
(function autoplayDemo() {
  const demo = document.getElementById('demo-video');
  if (!demo || !('IntersectionObserver' in window)) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) demo.play().catch(() => {});
      else demo.pause();
    });
  }, { threshold: 0.5 }).observe(demo);
})();

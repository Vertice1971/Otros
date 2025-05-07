let names = [];
let props = {};
let seleccionados = [];
let highlightIndex = null;

// Generador criptográfico
function secureRandom() {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0] / 2**32;
}

// Gestión de pantallas
function showScreen(n) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen${n}`).classList.add('active');
}

// Configuración inicial de canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let size, center, startAngle = 0;

function prepararRuleta() {
  const barajados = [...cardenales].sort(() => Math.random() - 0.5).slice(0, 10);
  seleccionados = barajados;

  names = barajados.map(c => c.nombre.trim().split(' ').slice(-1)[0]);
  props = {};
  for (let i = 0; i < barajados.length; i++) {
    const c = barajados[i];
    const clave = names[i];
    props[clave] = {
      continent: c.continente,
      nes: c.nacionalidad.includes('Español') || c.nacionalidad.includes('Italiano'),
      age: c.edad_2025 >= 70 ? '70+' : '<70',
      ideology: c.perfil_doctrinal
    };
  }

  startAngle = 0;
  draw();
}

function resize() {
  const rect = document.getElementById('container').getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  size = Math.min(canvas.width, canvas.height);
  center = size / 2;
  draw(highlightIndex);
}

function draw(h = null) {
  if (!canvas.width || names.length === 0) return;
  const segments = names.length;
  const angleSize = 2 * Math.PI / segments;
  const r = center - 10;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < segments; i++) {
    const ang = startAngle + i * angleSize;
    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.arc(center, center, r, ang, ang + angleSize);
    ctx.closePath();
    ctx.fillStyle = (i === h ? '#fff9b1' : (i % 2 ? '#fff' : '#ddd'));
    ctx.fill();
    if (i === h) {
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#c0392b';
      ctx.stroke();
    }
    ctx.save();
    ctx.translate(
      center + Math.cos(ang + angleSize/2) * r * 0.7,
      center + Math.sin(ang + angleSize/2) * r * 0.7
    );
    ctx.rotate(ang + angleSize/2 + Math.PI/2);
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.font = `${Math.max(size*0.035,10)}px sans-serif`;
    ctx.fillText(names[i], 0, 0);
    ctx.restore();
  }
  ctx.fillStyle = '#e74c3c';
  ctx.beginPath();
  ctx.moveTo(center - 10, 10);
  ctx.lineTo(center + 10, 10);
  ctx.lineTo(center, 40);
  ctx.closePath();
  ctx.fill();
}

function spin() {
  prepararRuleta();

  highlightIndex = null;
  draw();
  spinBtn.disabled = true;

  const rounds = Math.floor(secureRandom()*3) + 4;
  const extra  = secureRandom()*2*Math.PI;
  const target = rounds*2*Math.PI + extra;
  const duration = 4000;
  const startTime = performance.now();

  function animate(now) {
    const elapsed = now - startTime;
    const t = Math.min(elapsed/duration,1);
    const ease = 1 - Math.pow(1 - t, 3);
    startAngle = ease * target;
    draw();
    if (t < 1) requestAnimationFrame(animate);
    else {
      const deg = (startAngle*180/Math.PI + 90) % 360;
      const norm = (deg+360)%360;
      highlightIndex = Math.floor((360 - norm)/(360/names.length)) % names.length;
      draw(highlightIndex);
      setTimeout(resolveSpin, 1500);
    }
  }

  requestAnimationFrame(animate);
}

function resolveSpin() {
  const nombreClave = names[highlightIndex];
  const cardenal = seleccionados[highlightIndex];

  document.getElementById('winner-name').textContent = 'Resultado: ' + cardenal.nombre;

  const ul = document.getElementById('winner-features');
  ul.innerHTML = '';

  const datos = [
    ['Edad en 2025', cardenal.edad_2025],
    ['Continente', cardenal.continente],
    ['Nacionalidad', cardenal.nacionalidad],
    ['Perfil doctrinal', cardenal.perfil_doctrinal],
    ['¿Cercano a Francisco?', cardenal.cercano_a_Francisco ? 'Sí' : 'No'],
    ['Orden religiosa', cardenal.orden_religiosa],
    ['Aficiones', cardenal.aficiones]
  ];

  datos.forEach(([label, val]) => {
    const li = document.createElement('li');
    li.textContent = `${label}: ${val}`;
    ul.appendChild(li);
  });

  // Mostrar la imagen del cardenal
  const apellido = cardenal.nombre.trim().split(' ').slice(-1)[0];
  const imgElement = document.getElementById('winner-photo');
  imgElement.onerror = () => {
    imgElement.src = `img/${apellido}.jpeg`;
  };
  imgElement.src = `img/${apellido}.jpg`;

  showScreen(2);
}

const spinBtn = document.getElementById('spin');
const nextBtn = document.getElementById('next');

spinBtn.addEventListener('click', spin);
nextBtn.addEventListener('click', () => {
  highlightIndex = null;
  startAngle = 0;
  draw();
  showScreen(1);
  spinBtn.disabled = false;
});

window.addEventListener('resize', resize);

window.addEventListener('load', () => {
  prepararRuleta();
  resize();
  draw();
  showScreen(1);
  spinBtn.disabled = false;
});

// temporizador-parte1.js

function iniciarTemporizadorParte1(contenedorPrincipal) {
  // 🔹 Clonamos los elementos importantes ANTES de vaciar el contenedor
  const h2Clonado = contenedorPrincipal.querySelector('h2')?.cloneNode(true);
  const correoClonado = contenedorPrincipal.querySelector('p')?.cloneNode(true);
  const etiquetaParte1 = document.getElementById('parte-1')?.cloneNode(true);

  contenedorPrincipal.innerHTML = '';

  const titulo = document.createElement('h3');
  titulo.textContent = 'Simulación del tiempo de la primera prueba';
  contenedorPrincipal.appendChild(titulo);

  const instruccion = document.createElement('p');
  instruccion.innerHTML = `
    Selecciona una modalidad y ajusta el tiempo si procede. La duración total no debe superar:<br>
    <b>Parte A o B:</b> hasta 2 h 30 min (150 min)<br>
    <b>Dos partes:</b> 4 h 30 min (270 min) repartidos a tu elección.
  `;
  contenedorPrincipal.appendChild(instruccion);

  const form = document.createElement('form');
  form.style.marginTop = '1em';

  const opciones = [
    { id: 'modo-a', label: 'Solo Parte A (máx. 150 min)' },
    { id: 'modo-b', label: 'Solo Parte B (máx. 150 min)' },
    { id: 'modo-ab-a', label: 'Dos partes, empezando por la Parte A' },
    { id: 'modo-ab-b', label: 'Dos partes, empezando por la Parte B' }
  ];

  const tiempoInputs = document.createElement('div');
  tiempoInputs.style.marginTop = '1em';

  const inputSolo = document.createElement('input');
  inputSolo.type = 'number';
  inputSolo.id = 'tiempoSolo';
  inputSolo.placeholder = 'Minutos totales';
  inputSolo.style.display = 'none';
  inputSolo.min = '1';
  inputSolo.max = '150';
  tiempoInputs.appendChild(inputSolo);

  const inputPrimera = document.createElement('input');
  inputPrimera.type = 'number';
  inputPrimera.id = 'tiempoPrimera';
  inputPrimera.placeholder = 'Minutos primera parte';
  inputPrimera.style.display = 'none';
  inputPrimera.min = '1';
  inputPrimera.max = '269';
  tiempoInputs.appendChild(inputPrimera);

  opciones.forEach(op => {
    const label = document.createElement('label');
    label.style.display = 'block';
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'modo';
    radio.value = op.id;
    radio.id = op.id;

    radio.addEventListener('change', () => {
      inputSolo.style.display = (radio.value === 'modo-a' || radio.value === 'modo-b') ? '' : 'none';
      inputPrimera.style.display = (radio.value === 'modo-ab-a' || radio.value === 'modo-ab-b') ? '' : 'none';
    });

    label.appendChild(radio);
    label.append(' ' + op.label);
    form.appendChild(label);
  });

  form.appendChild(tiempoInputs);

  const boton = document.createElement('button');
  boton.type = 'submit';
  boton.textContent = 'Iniciar temporizador';
  boton.className = 'boton-verde';
  boton.style.marginTop = '1.5em';
  form.appendChild(boton);

  contenedorPrincipal.appendChild(form);

  form.onsubmit = function (e) {
    e.preventDefault();
    const modo = form.modo.value;
    if (!modo) {
      alert('Selecciona una modalidad antes de iniciar.');
      return;
    }

    let fases = [];
    if (modo === 'modo-a' || modo === 'modo-b') {
      const min = parseInt(inputSolo.value, 10);
      if (isNaN(min) || min < 1 || min > 150) {
        alert('Introduce un número válido entre 1 y 150.');
        return;
      }
      const parte = modo === 'modo-a' ? 'Parte A' : 'Parte B';
      fases = [{ parte, minutos: min, terminarLabel: `Terminar ${parte} y pasar a la Parte 2` }];
    } else {
      const t1 = parseInt(inputPrimera.value, 10);
      if (isNaN(t1) || t1 < 1 || t1 >= 270) {
        alert('Introduce un número válido para la primera parte (1–269).');
        return;
      }
      const t2 = 270 - t1;
      if (modo === 'modo-ab-a') {
        fases = [
          { parte: 'Parte A', minutos: t1, nextLabel: 'Pasar a la Parte B' },
          { parte: 'Parte B', minutos: t2, terminarLabel: 'Terminar Parte B y pasar a la Parte 2' }
        ];
      } else {
        fases = [
          { parte: 'Parte B', minutos: t1, nextLabel: 'Pasar a la Parte A' },
          { parte: 'Parte A', minutos: t2, terminarLabel: 'Terminar Parte A y pasar a la Parte 2' }
        ];
      }
    }

    contenedorPrincipal.innerHTML = '';
    lanzarTemporizador(contenedorPrincipal, fases, () => {
      const contenedor = document.getElementById('contenedor-principal');
      contenedor.innerHTML = '';

      if (h2Clonado) contenedor.appendChild(h2Clonado);
      if (correoClonado) contenedor.appendChild(correoClonado);

      if (etiquetaParte1) {
        etiquetaParte1.id = 'parte-2';
        etiquetaParte1.textContent = 'Parte 2';
        contenedor.appendChild(etiquetaParte1);
      }

      const zonaNueva = document.createElement('div');
      zonaNueva.id = 'zona-prueba-b';
      contenedor.appendChild(zonaNueva);

      if (typeof iniciarPruebaB === 'function') {
        iniciarPruebaB(window.temasSorteados || []);
      } else {
        zonaNueva.innerHTML = '<p>Error: no se ha cargado Prueba-B.js o falta la función iniciarPruebaB().</p>';
      }
    });
  };
}


function lanzarTemporizador(contenedor, fases, alFinalizar) {
  let i = 0;
  let segundos = fases[i].minutos * 60;
  let pausado = false;
  let intervalo;

  function renderFase() {
    contenedor.innerHTML = '';

    const titulo = document.createElement('h3');
    titulo.textContent = `Temporizador – ${fases[i].parte}`;
    contenedor.appendChild(titulo);

    const reloj = document.createElement('div');
    reloj.style.fontSize = '2em';
    reloj.style.margin = '1em 0';
    contenedor.appendChild(reloj);

    const controles = document.createElement('div');
    controles.style.display = 'flex';
    controles.style.gap = '1em';

    const btnPausa = document.createElement('button');
    btnPausa.textContent = 'Pausar';
    btnPausa.className = 'boton-naranja';
    btnPausa.onclick = () => {
      pausado = !pausado;
      btnPausa.textContent = pausado ? 'Reanudar' : 'Pausar';
    };
    controles.appendChild(btnPausa);

    const btnSiguiente = document.createElement('button');
    btnSiguiente.textContent = fases[i].nextLabel || fases[i].terminarLabel;
    btnSiguiente.className = 'boton-verde';
    btnSiguiente.onclick = () => {
      clearInterval(intervalo);
      if (fases[i].nextLabel) {
        i++;
        segundos = fases[i].minutos * 60;
        renderFase();
        iniciarCuenta();
      } else {
        alFinalizar();
      }
    };
    controles.appendChild(btnSiguiente);

    contenedor.appendChild(controles);

    function actualizarReloj() {
      const m = Math.floor(segundos / 60).toString().padStart(2, '0');
      const s = (segundos % 60).toString().padStart(2, '0');
      reloj.textContent = `${m}:${s}`;
    }

    function iniciarCuenta() {
      actualizarReloj();
      intervalo = setInterval(() => {
        if (!pausado) {
          if (segundos <= 0) {
            clearInterval(intervalo);
            btnSiguiente.click();
          } else {
            segundos--;
            actualizarReloj();
          }
        }
      }, 1000);
    }

    iniciarCuenta();
  }

  renderFase();
}

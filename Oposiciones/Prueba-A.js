// Prueba-A.js

function iniciarPruebaA(temas) {
  // Guardamos la lista sorteada como global para reusar en "No"
  window.temasSorteados = temas;

  const zona = document.getElementById('zona-prueba');
  zona.innerHTML = ''; // Por si se ejecuta dos veces

  // Encabezado
  const encabezado = document.createElement('h3');
  encabezado.textContent = 'Temas seleccionados';
  zona.appendChild(encabezado);

  // Instrucción
  const instruccion = document.createElement('p');
  instruccion.textContent = 'Haz clic en el tema que desees seleccionar:';
  zona.appendChild(instruccion);

  // Lista interactiva
  const lista = document.createElement('ul');
  temas.forEach(tema => {
    const item = document.createElement('li');
    item.textContent = tema;
    item.style.cssText = 'cursor:pointer; margin:0.5em 0; padding:0.4em; border:1px solid #ccc; border-radius:5px; transition:background 0.2s;';
    item.onmouseover = () => item.style.background = '#eef';
    item.onmouseout  = () => item.style.background = 'white';
    item.onclick     = () => mostrarTemaDefinitivo(tema);
    lista.appendChild(item);
  });
  zona.appendChild(lista);
}

function mostrarTemaDefinitivo(temaSeleccionado) {
  const zona = document.getElementById('zona-prueba');
  zona.innerHTML = '';

  // Título
  const titulo = document.createElement('h3');
  titulo.textContent = 'Tema seleccionado';
  zona.appendChild(titulo);

  // Tema en negrita y tamaño mayor
  const parrafo = document.createElement('p');
  parrafo.innerHTML = `<span style="font-weight:bold; font-size:1.1em;">${temaSeleccionado}</span>`;
  zona.appendChild(parrafo);

  // Pregunta de confirmación
  const pregunta = document.createElement('p');
  pregunta.textContent = '¿Confirmas este tema?';
  pregunta.style.marginTop = '1.5em';
  zona.appendChild(pregunta);

  // Botones Sí / No
  const divBtns = document.createElement('div');
  divBtns.style.cssText = 'display:flex; gap:1em; margin-top:1em;';
  zona.appendChild(divBtns);

  const btnSi = document.createElement('button');
  btnSi.textContent = 'Sí';
  btnSi.className = 'boton-rojo';
  btnSi.onclick = () => mostrarGuiaFinal(temaSeleccionado);
  divBtns.appendChild(btnSi);

  const btnNo = document.createElement('button');
  btnNo.textContent = 'No';
  btnNo.onclick = () => iniciarPruebaA(window.temasSorteados);
  divBtns.appendChild(btnNo);
}

function mostrarGuiaFinal(temaSeleccionado) {
  const zona = document.getElementById('zona-prueba');
  zona.innerHTML = '';

  // Encabezado guía
  const encabezado = document.createElement('h3');
  encabezado.textContent = 'Guía para afrontar la primera prueba';
  zona.appendChild(encabezado);

  // Tema confirmado
  const temaFinal = document.createElement('p');
  temaFinal.innerHTML = `
    <b>Tema confirmado:</b><br>
    <span style="font-weight:bold; font-size:1.1em;">${temaSeleccionado}</span>
  `;
  temaFinal.style.margin = '1em 0';
  zona.appendChild(temaFinal);

  // Resumen explicativo
  const resumen = document.createElement('div');
  resumen.innerHTML = `
    <p><b>¿En qué consiste?</b><br>
    Esta primera prueba escrita es <b>eliminatoria</b> y consta de dos partes sin interrupción en una única sesión de hasta <b>4 h 30 min</b>.</p>
    <ul>
      <li><b>Parte A – Ejercicio práctico:</b> uno o varios ejercicios que evalúan tu formación técnica. Varían según especialidad.</li>
      <li><b>Parte B – Desarrollo de un tema:</b> redacción de un tema extraído al azar. Se valoran claridad, profundidad y organización.</li>
    </ul>
    <p><b>Calificación:</b> Cada parte se puntúa de 0 a 10. Necesitas al menos 2,5 en cada una para media. Se aprueba con media ≥ 5.</p>
  `;
  resumen.style.lineHeight = '1.6';
  zona.appendChild(resumen);

  // Botones de rúbrica (parte A y parte B)
  const contRub = document.createElement('div');
  contRub.style.cssText = 'display:flex; gap:1em; margin:2em 0 1em;';
  zona.appendChild(contRub);

  const btnRubA = document.createElement('button');
  btnRubA.textContent = 'Ver Rúbrica parte A';
  btnRubA.className = 'boton-naranja';
  btnRubA.onclick = () => mostrarPopup('Parte A', rubricaParteA());
  contRub.appendChild(btnRubA);

  const btnRubB = document.createElement('button');
  btnRubB.textContent = 'Ver Rúbrica parte B';
  btnRubB.className = 'boton-naranja';
  btnRubB.onclick = () => mostrarPopup('Parte B', rubricaParteB());
  contRub.appendChild(btnRubB);

  // Botón de simulación temporal que llama al temporizador
  const btnSimulacion = document.createElement('button');
  btnSimulacion.textContent = 'Simulación temporal';
  btnSimulacion.className = 'boton-verde';
  btnSimulacion.style.cssText = 'width:100%; margin-top:0;';
  btnSimulacion.onclick = () => {
    const contenedor = document.getElementById('contenedor-principal');
    contenedor.innerHTML = ''; // Limpia la interfaz actual
    iniciarTemporizadorParte1(contenedor); // Llama al temporizador desde el script externo
  };
  zona.appendChild(btnSimulacion);
}

// Función genérica de ventana emergente
function mostrarPopup(titulo, contenidoHTML) {
  const fondo = document.createElement('div');
  fondo.style.cssText = `
    position:fixed; top:0; left:0;
    width:100vw; height:100vh;
    background:rgba(0,0,0,0.5);
    display:flex; align-items:center; justify-content:center;
    z-index:9999;
  `;

  const ventana = document.createElement('div');
  ventana.style.cssText = `
    background:#fff; padding:2em;
    max-width:800px; max-height:80vh;
    overflow-y:auto; border-radius:8px;
    box-shadow:0 0 12px #555;
  `;
  ventana.innerHTML = `<h3>Rúbrica ${titulo}</h3><div style="line-height:1.6;">${contenidoHTML}</div>`;

  const cerrar = document.createElement('button');
  cerrar.textContent = 'Cerrar';
  cerrar.className = 'boton-rojo';
  cerrar.style.marginTop = '1.5em';
  cerrar.onclick = () => fondo.remove();
  ventana.appendChild(cerrar);

  fondo.appendChild(ventana);
  document.body.appendChild(fondo);
}

// Rúbrica genérica para la Parte A
function rubricaParteA() {
  return `
    <ul>
      <li><b>Organización y estructura:</b> Introducción, desarrollo y cierre claros. (5–10%)</li>
      <li><b>Claridad y corrección:</b> Lenguaje técnico preciso y redacción sin errores. (5–15%)</li>
      <li><b>Dominio de contenidos:</b> Conocimientos rigurosos y profundos. (30–50%)</li>
      <li><b>Aplicación práctica:</b> Resolución de casos o propuestas aplicadas. (15–30%)</li>
      <li><b>Justificación razonada:</b> Argumentación y fundamentación sólida. (10–20%)</li>
      <li><b>Ejemplos o esquemas:</b> Recursos ilustrativos pertinentes. (0.5–5%)</li>
      <li><b>Adecuación:</b> Contenido centrado y coherente con el enunciado. (10–20%)</li>
    </ul>
  `;
}

// Rúbrica general de la Parte B (desarrollo del tema)
function rubricaParteB() {
  return `
    <ul>
      <li><b>Estructura:</b> Índice, introducción, desarrollo, conclusión y bibliografía. (2%)</li>
      <li><b>Expresión escrita:</b> Lenguaje técnico, corrección gramatical y claridad. (6%)</li>
      <li><b>Presentación:</b> Limpieza, claridad y orden. (2%)</li>
      <li><b>Profundización:</b> Conocimiento concreto y actualizado. (50%)</li>
      <li><b>Juicio crítico:</b> Argumentación fundamentada. (20%)</li>
      <li><b>Ejemplificación:</b> Aplicación clara de ejemplos. (5%)</li>
      <li><b>Ilustraciones:</b> Esquemas, gráficos o mapas. (0.1%)</li>
      <li><b>Secuencia lógica:</b> Orden interno coherente. (10%)</li>
      <li><b>Referencias:</b> Citas bibliográficas integradas. (4.9%)</li>
    </ul>
  `;
}

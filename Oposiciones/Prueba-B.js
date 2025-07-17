// Prueba-B.js

/**
 * Inicia la Parte 2: Defensa de la programación y de una Unidad Didáctica.
 * Carga título, guía, botones de rúbricas y simulación de temporización.
 */
function iniciarPruebaB(temas) {
  const zona = document.getElementById('zona-prueba-b');
  zona.innerHTML = '';

  // 1️⃣ Título
  const encabezado = document.createElement('h3');
  encabezado.textContent = 'Parte 2: Defensa de la programación y de una Unidad Didáctica';
  zona.appendChild(encabezado);

  // 2️⃣ Guía introductoria
  const guia = document.createElement('div');
  guia.style.lineHeight = '1.6';
  guia.style.margin = '1em 0';
  guia.innerHTML = `
    <p>
      La segunda prueba de la oposición está centrada en la <b>aptitud pedagógica</b> y en el dominio profesional de la persona candidata. 
      Consta de dos partes diferenciadas: la <b>defensa oral de la programación didáctica</b> y la <b>exposición de una unidad didáctica</b>.
    </p>
    <p><b>Parte A · Defensa de la programación</b><br>
      La persona aspirante presenta y defiende su programación didáctica, elaborada conforme al currículo de su especialidad. 
      Dispone de un máximo de 30 minutos para explicar con claridad su estructura, su coherencia interna y su enfoque metodológico, 
      incluyendo la atención a la diversidad entre otros aspectos. Esta parte representa el <b>30 % de la nota</b> de la segunda prueba. 
    </p>
    <p><b>Parte B · Unidad didáctica</b><br>
      La persona candidata selecciona una unidad entre tres propuestas al azar de entre las incluidas en la programación que ha presentado. 
      Para preparar la parte A y B, tras ese sorteo, se dispone de <b>una hora de preparación</b> y la exposición de la unidad se desarrollará también en un tiempo máximo de 30 minutos. 
      Debe justificar aspectos como su diseño, sus objetivos, las actividades propuestas, la evaluación y la adecuación a la realidad del aula. 
      Esta parte representa el <b>70 % de la nota</b> de la segunda prueba. 
    </p>
    <p>
      Para superar esta prueba es necesario obtener al menos 2,5 puntos en cada parte y alcanzar una nota media igual o superior a 5.
    </p>
  `;
  zona.appendChild(guia);

  // 3️⃣ Botones de acción
  const contBtns = document.createElement('div');
  contBtns.style.cssText = 'display:flex; gap:1em; margin:2em 0;';
  zona.appendChild(contBtns);

  // Mostrar rúbrica A
  const btnRubA = document.createElement('button');
  btnRubA.textContent = 'Mostrar Rúbrica A';
  btnRubA.className = 'boton-naranja';
  btnRubA.onclick = () => mostrarPopup('Rúbrica Parte 2A', rubricaParte2A());
  contBtns.appendChild(btnRubA);

  // Mostrar rúbrica B
  const btnRubB = document.createElement('button');
  btnRubB.textContent = 'Mostrar Rúbrica B';
  btnRubB.className = 'boton-naranja';
  btnRubB.onclick = () => mostrarPopup('Rúbrica Parte 2B', rubricaParte2B());
  contBtns.appendChild(btnRubB);

  // Simular temporización
  const btnSim = document.createElement('button');
  btnSim.textContent = 'Simular Temporización';
  btnSim.className = 'boton-verde';
  btnSim.onclick = () => {
    zona.innerHTML = '';
    lanzarTemporizador(zona, [
      { parte: 'Parte A', minutos: 30, nextLabel: 'Pasar a la Parte B' },
      { parte: 'Parte B', minutos: 30, terminarLabel: 'Finalizar Parte 2' }
    ], () => {
      zona.innerHTML = '<p>Simulación completada. Fin de la Parte 2 del examen.</p>';
    });
  };
  contBtns.appendChild(btnSim);
}

/**
 * Rúbrica de evaluación Parte 2A (Defensa de la programación)
 */
function rubricaParte2A() {
  return `
    <table style="width:100%;border-collapse:collapse;">
      <thead>
        <tr>
          <th style="border:1px solid #ccc;padding:0.5em">Orden</th>
          <th style="border:1px solid #ccc;padding:0.5em">Criterio de Calificación</th>
          <th style="border:1px solid #ccc;padding:0.5em">Peso(%)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="border:1px solid #ccc;padding:0.5em">1</td><td style="border:1px solid #ccc;padding:0.5em">Documento Escrito – JUSTIFICACIÓN.</td><td style="border:1px solid #ccc;padding:0.5em">3</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">2</td><td style="border:1px solid #ccc;padding:0.5em">Documento Escrito – EXPRESIÓN ESCRITA (Lenguaje técnico y técnico pedagógico, precisión y coherencia lingüística y corrección léxica y gramatical).</td><td style="border:1px solid #ccc;padding:0.5em">3</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">3</td><td style="border:1px solid #ccc;padding:0.5em">Documento Escrito – CONTEXTUALIZACIÓN (adecuada al alumno, práctica del profesorado, ajuste a la realidad del centro).</td><td style="border:1px solid #ccc;padding:0.5em">3</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">4</td><td style="border:1px solid #ccc;padding:0.5em">Documento Escrito – ESTRUCTURA (introducción, marco legislativo, descripción del departamento didáctico, objetivos, contenidos, distribución temporal, metodología, evaluación, atención a la diversidad, materiales, actividades complementarias y extraescolares, evaluación de la programación, desarrollo de unidades y bibliografía).</td><td style="border:1px solid #ccc;padding:0.5em">21</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">5</td><td style="border:1px solid #ccc;padding:0.5em">Defensa PD – INTRODUCCIÓN / CONTEXTUALIZACIÓN (características de la materia y relación con el Plan de Centro).</td><td style="border:1px solid #ccc;padding:0.5em">3.5</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">6</td><td style="border:1px solid #ccc;padding:0.5em">Defensa PD – MARCO LEGISLATIVO.</td><td style="border:1px solid #ccc;padding:0.5em">3.5</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">7</td><td style="border:1px solid #ccc;padding:0.5em">Defensa PD – DESCRIPCIÓN DE DEPARTAMENTO DIDÁCTICO.</td><td style="border:1px solid #ccc;padding:0.5em">2.1</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">8</td><td style="border:1px solid #ccc;padding:0.5em">Defensa PD – OBJETIVOS, CONTENIDOS Y DISTRIBUCIÓN TEMPORAL.</td><td style="border:1px solid #ccc;padding:0.5em">5.6</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">9</td><td style="border:1px solid #ccc;padding:0.5em">Defensa PD – PRINCIPIOS PEDAGÓGICOS / ORIENTACIONES PEDAGÓGICAS.</td><td style="border:1px solid #ccc;padding:0.5em">3.5</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">10</td><td style="border:1px solid #ccc;padding:0.5em">Defensa PD – EVALUACIÓN Y CRITERIOS DE CALIFICACIÓN.</td><td style="border:1px solid #ccc;padding:0.5em">4.9</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">11</td><td style="border:1px solid #ccc;padding:0.5em">Defensa PD – EVALUACIÓN INICIAL.</td><td style="border:1px solid #ccc;padding:0.5em">3.5</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">12</td><td style="border:1px solid #ccc;padding:0.5em">Defensa PD – MEDIDAS DE ATENCIÓN A LA DIVERSIDAD.</td><td style="border:1px solid #ccc;padding:0.5em">7</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">13</td><td style="border:1px solid #ccc;padding:0.5em">Defensa PD – MATERIALES Y RECURSOS DIDÁCTICOS.</td><td style="border:1px solid #ccc;padding:0.5em">3.5</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">14</td><td style="border:1px solid #ccc;padding:0.5em">Defensa PD – EVALUACIÓN (criterios, instrumentos adecuados y variados, evaluación de la práctica docente).</td><td style="border:1px solid #ccc;padding:0.5em">8.4</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">15</td><td style="border:1px solid #ccc;padding:0.5em">Defensa PD – EVALUACIÓN DE LA PROGRAMACIÓN DIDÁCTICA.</td><td style="border:1px solid #ccc;padding:0.5em">1.4</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">16</td><td style="border:1px solid #ccc;padding:0.5em">Defensa PD – ACTIVIDADES COMPLEMENTARIAS Y EXTRAESCOLARES.</td><td style="border:1px solid #ccc;padding:0.5em">1.4</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">17</td><td style="border:1px solid #ccc;padding:0.5em">Defensa PD – EXPRESIÓN ORAL (Lenguaje técnico y técnico pedagógico, precisión y coherencia y corrección léxica y gramatical).</td><td style="border:1px solid #ccc;padding:0.5em">10.5</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">18</td><td style="border:1px solid #ccc;padding:0.5em">Defensa PD – USO ADECUADO DE LA PIZARRA.</td><td style="border:1px solid #ccc;padding:0.5em">2.1</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">19</td><td style="border:1px solid #ccc;padding:0.5em">Defensa PD – FINALIZACIÓN DE LA DEFENSA.</td><td style="border:1px solid #ccc;padding:0.5em">7</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">20</td><td style="border:1px solid #ccc;padding:0.5em">Defensa PD – BIBLIOGRAFÍA.</td><td style="border:1px solid #ccc;padding:0.5em">2.1</td></tr>
      </tbody>
    </table>
  `;
}

/**
 * Rúbrica de evaluación Parte 2B (Unidad didáctica)
 */
function rubricaParte2B() {
  return `
    <table style="width:100%;border-collapse:collapse;">
      <thead>
        <tr>
          <th style="border:1px solid #ccc;padding:0.5em">Orden</th>
          <th style="border:1px solid #ccc;padding:0.5em">Criterio de Calificación</th>
          <th style="border:1px solid #ccc;padding:0.5em">Peso(%)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="border:1px solid #ccc;padding:0.5em">1</td><td style="border:1px solid #ccc;padding:0.5em">Presentación e introducción.</td><td style="border:1px solid #ccc;padding:0.5em">4</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">2</td><td style="border:1px solid #ccc;padding:0.5em">Centro de interés.</td><td style="border:1px solid #ccc;padding:0.5em">4</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">3</td><td style="border:1px solid #ccc;padding:0.5em">Descripción.</td><td style="border:1px solid #ccc;padding:0.5em">4</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">4</td><td style="border:1px solid #ccc;padding:0.5em">Asociación de competencias específicas, objetivos o resultados de aprendizaje.</td><td style="border:1px solid #ccc;padding:0.5em">4</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">5</td><td style="border:1px solid #ccc;padding:0.5em">Concreción curricular.</td><td style="border:1px solid #ccc;padding:0.5em">5</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">6</td><td style="border:1px solid #ccc;padding:0.5em">Integración de los aprendizajes.</td><td style="border:1px solid #ccc;padding:0.5em">5</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">7</td><td style="border:1px solid #ccc;padding:0.5em">Secuencia didáctica.</td><td style="border:1px solid #ccc;padding:0.5em">12</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">8</td><td style="border:1px solid #ccc;padding:0.5em">Metodología – Descripción completa de las actividades y agrupamientos.</td><td style="border:1px solid #ccc;padding:0.5em">20</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">9</td><td style="border:1px solid #ccc;padding:0.5em">Principios pedagógicos.</td><td style="border:1px solid #ccc;padding:0.5em">5</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">10</td><td style="border:1px solid #ccc;padding:0.5em">Evaluación.</td><td style="border:1px solid #ccc;padding:0.5em">15</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">11</td><td style="border:1px solid #ccc;padding:0.5em">Expresión oral (Lenguaje técnico, coherencia y corrección).</td><td style="border:1px solid #ccc;padding:0.5em">15</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">12</td><td style="border:1px solid #ccc;padding:0.5em">Uso adecuado de la pizarra.</td><td style="border:1px solid #ccc;padding:0.5em">3</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">13</td><td style="border:1px solid #ccc;padding:0.5em">Finalización de la defensa.</td><td style="border:1px solid #ccc;padding:0.5em">1</td></tr>
        <tr><td style="border:1px solid #ccc;padding:0.5em">14</td><td style="border:1px solid #ccc;padding:0.5em">Bibliografía.</td><td style="border:1px solid #ccc;padding:0.5em">3</td></tr>
      </tbody>
    </table>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  window.temasSorteados = []; // Variable global accesible desde cualquier archivo

  // Verifica que temasPorEspecialidad existe
  if (typeof temasPorEspecialidad !== 'undefined') {
    const selectEspecialidad = document.getElementById('especialidad');
    Object.keys(temasPorEspecialidad).forEach(nombre => {
      const opcion = document.createElement('option');
      opcion.value = nombre;
      opcion.textContent = nombre;
      selectEspecialidad.appendChild(opcion);
    });
  } else {
    console.error("No se ha cargado temasPorEspecialidad correctamente.");
  }

  // Mostrar u ocultar campos según el modo de sorteo
  const selectModo = document.getElementById('modo');
  selectModo.addEventListener('change', function () {
    const intermedia = document.getElementById('intermedia-opciones');
    intermedia.style.display = this.value === "intermedia" ? "block" : "none";
  });

  // Lógica principal al enviar el formulario
  document.getElementById('especialidad-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const especialidad = document.getElementById('especialidad').value;
    const modo = document.getElementById('modo').value;
    const resultado = document.getElementById('resultado');
    const btnContinuar = document.getElementById('btn-continuar');
    resultado.style.display = 'block';

    if (!especialidad || !modo) {
      resultado.innerHTML = "Por favor, selecciona una especialidad y un tipo de sorteo.";
      btnContinuar.style.display = 'none';
      return;
    }

    const listaTitulos = temasPorEspecialidad[especialidad];
    const totalTemas = listaTitulos.length;

    if (modo === "intermedia") {
      const cantidad = parseInt(document.getElementById('cantidad').value);
      const rangoInput = document.getElementById('rango').value;

      if (!cantidad || !rangoInput.trim()) {
        resultado.innerHTML = "Por favor, introduce la cantidad y la lista de temas disponibles.";
        btnContinuar.style.display = 'none';
        return;
      }

      const temas = expandirRango(rangoInput);
      const temasValidos = temas.filter(n => n >= 1 && n <= totalTemas);

      if (temasValidos.length !== temas.length) {
        resultado.innerHTML = `Se han detectado números fuera del rango válido (1–${totalTemas}). Corrige la lista.`;
        btnContinuar.style.display = 'none';
        return;
      }

      if (cantidad > temasValidos.length) {
        resultado.innerHTML = "La cantidad solicitada excede el número de temas disponibles.";
        btnContinuar.style.display = 'none';
        return;
      }

      const seleccionados = seleccionarAleatorios(temasValidos, cantidad);
      window.temasSorteados = seleccionados.map(n => {
        const titulo = listaTitulos[n - 1] || "(tema no encontrado)";
        return `${n}. ${titulo.replace(/^\d+\.\s*/, '')}`;
      });

      resultado.innerHTML =
        "<b>Especialidad:</b> " + especialidad + "<br><br>" +
        "<b>Modo:</b> Preparación intermedia<br><br>" +
        "<b>Temas posibles:</b> " + temasValidos.join(', ') + "<br><br>" +
        "<b>Temas seleccionados al azar:</b><br>" + window.temasSorteados.join('<br>');

      btnContinuar.style.display = 'inline-block';
      return;
    }

    // Modo temario completo (ajustado al número real de temas)
    const numeros = new Set();
    while (numeros.size < 4) {
      const n = Math.floor(Math.random() * totalTemas) + 1;
      numeros.add(n);
    }

    const numerosArray = Array.from(numeros).sort((a, b) => a - b);
    window.temasSorteados = numerosArray.map(n => {
      const titulo = listaTitulos[n - 1] || "(tema no encontrado)";
      return `${n}. ${titulo.replace(/^\d+\.\s*/, '')}`;
    });

    resultado.innerHTML =
      "<b>Especialidad:</b> " + especialidad +
      "<br><br><b>Modo:</b> Temario completo (" + totalTemas + " temas)<br><br>" +
      "<b>Temas seleccionados al azar:</b><br>" +
      window.temasSorteados.join('<br>');

    btnContinuar.style.display = 'inline-block';
  });

  // Función para interpretar rangos como "1,2,5-7"
  function expandirRango(cadena) {
    const bloques = cadena.split(',');
    const resultado = [];
    bloques.forEach(parte => {
      if (parte.includes('-')) {
        const [ini, fin] = parte.split('-').map(x => parseInt(x));
        for (let i = ini; i <= fin; i++) {
          if (i >= 1) resultado.push(i);
        }
      } else {
        const n = parseInt(parte);
        if (!isNaN(n) && n >= 1) resultado.push(n);
      }
    });
    return [...new Set(resultado)].sort((a, b) => a - b);
  }

  // Función para sortear elementos únicos de una lista
  function seleccionarAleatorios(lista, cantidad) {
    const copia = [...lista];
    const resultado = [];
    while (resultado.length < cantidad) {
      const i = Math.floor(Math.random() * copia.length);
      resultado.push(copia.splice(i, 1)[0]);
    }
    return resultado.sort((a, b) => a - b);
  }

  // Botón para pasar a la siguiente pantalla (selección de tema)
  const btnContinuar = document.getElementById('btn-continuar');
  btnContinuar.addEventListener('click', () => {
    const contenedor = document.getElementById('contenedor-principal');
    const h2 = contenedor.querySelector('h2');
    const correo = contenedor.querySelector('p');
    const parte1 = document.getElementById('parte-1');
    const btnParte2 = document.getElementById('btn-parte-2');

    contenedor.innerHTML = '';
    contenedor.appendChild(h2);
    contenedor.appendChild(correo);
    contenedor.appendChild(parte1);
    contenedor.appendChild(btnParte2);

    const zonaNueva = document.createElement('div');
    zonaNueva.id = 'zona-prueba';
    contenedor.appendChild(zonaNueva);

    if (typeof iniciarPruebaA === 'function') {
      iniciarPruebaA(window.temasSorteados);
    } else {
      zonaNueva.innerHTML = "<p>Error: no se ha cargado Prueba-A.js o falta la función iniciarPruebaA().</p>";
    }
  });

  // Botón para pasar directamente a Parte 2 (Prueba-B.js)
  const btnParte2 = document.getElementById('btn-parte-2');
  btnParte2.addEventListener('click', () => {
    const contenedor = document.getElementById('contenedor-principal');
    const h2 = contenedor.querySelector('h2')?.cloneNode(true);
    const correo = contenedor.querySelector('p')?.cloneNode(true);
    
    // Ocultar el botón
    btnParte2.style.display = 'none';

    // Limpiar y preparar Parte 2
    contenedor.innerHTML = '';
    contenedor.appendChild(h2);
    contenedor.appendChild(correo);

    // Añadir zona de trabajo de Parte 2
    const zonaNueva = document.createElement('div');
    zonaNueva.id = 'zona-prueba-b';
    contenedor.appendChild(zonaNueva);

    if (typeof iniciarPruebaB === 'function') {
      iniciarPruebaB(window.temasSorteados || []);
    } else {
      zonaNueva.innerHTML = '<p>Error: no se ha cargado Prueba-B.js o falta la función iniciarPruebaB().</p>';
    }
  });
});

// Número máximo de preguntas
const maxPreguntas = 5;

// Variables de estado
let preguntaContador = 0,
    askedQuestions = [],
    haIntentadoAdivinar = false,
    allowGuess = false;

// Candidato secreto aleatorio
const secreto = cardenales[Math.floor(Math.random() * cardenales.length)];

// Lista de preguntas disponibles
const preguntasList = [
  { category: "Edad", text: "¿Tiene 70 años o más?",        predicate: c => c.edad_2025 >= 70 },
  { category: "Edad", text: "¿Tiene menos de 70 años?",     predicate: c => c.edad_2025 < 70 },
  { category: "Continente", text: "¿Es europeo?",            predicate: c => c.continente.includes("Europa") },
  { category: "Continente", text: "¿Es americano?",          predicate: c => c.continente.includes("América") },
  { category: "Continente", text: "¿Es asiático?",           predicate: c => c.continente.includes("Asia") },
  { category: "Continente", text: "¿Es africano?",           predicate: c => c.continente.includes("África") },
  { category: "Nacionalidad", text: "¿Es italiano?",         predicate: c => c.nacionalidad.includes("Italiano") },
  { category: "Nacionalidad", text: "¿Es español?",          predicate: c => c.nacionalidad.includes("Español") },
  { category: "Nacionalidad", text: "¿Es estadounidense?",   predicate: c => c.nacionalidad.includes("Estadounidense") },
  { category: "Perfil doctrinal", text: "¿Es progresista?", predicate: c => c.perfil_doctrinal === "Progresista" },
  { category: "Perfil doctrinal", text: "¿Es moderado?",     predicate: c => c.perfil_doctrinal === "Moderado" },
  { category: "Perfil doctrinal", text: "¿Es conservador?",  predicate: c => c.perfil_doctrinal === "Conservador" },
  { category: "Cercanía a Francisco", text: "¿Es cercano a Francisco?", predicate: c => c.cercano_a_Francisco },
  { category: "Cercanía a Francisco", text: "¿Es independiente?",       predicate: c => !c.cercano_a_Francisco },
  { category: "Orden religiosa",    text: "¿Pertenece a orden religiosa?", predicate: c => c.orden_religiosa !== "Ninguna" },
  { category: "Aficiones",          text: "¿Tiene alguna afición?",           predicate: c => c.aficiones !== "Ninguna" },
  { category: "Aficiones",          text: "¿Comunicación?",                   predicate: c => c.aficiones === "Comunicación" },
  { category: "Aficiones",          text: "¿Bicicleta?",                      predicate: c => c.aficiones === "Bicicleta" },
  { category: "Aficiones",          text: "¿Ecología?",                       predicate: c => c.aficiones === "Ecología" },
  { category: "Aficiones",          text: "¿Idiomas?",                        predicate: c => c.aficiones === "Idiomas" },
  { category: "Aficiones",          text: "¿Lectura?",                        predicate: c => c.aficiones === "Lectura" },
  { category: "Aficiones",          text: "¿Pesca?",                          predicate: c => c.aficiones === "Pesca" },
  { category: "Aficiones",          text: "¿Blogs?",                          predicate: c => c.aficiones === "Blogs" },
  { category: "Aficiones",          text: "¿Tenis?",                          predicate: c => c.aficiones === "Tenis" },
  { category: "Aficiones",          text: "¿Japón?",                          predicate: c => c.aficiones === "Japón" }
];

// Función para cambiar de pantalla
function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// ---------- Inicialización y eventos básicos ----------

// Botón "Empezar"
document.getElementById("btn-empezar").onclick = () => {
  show("pantalla-fichas");
  const tb = document.getElementById("tablero");
  tb.innerHTML = "";
  cardenales.forEach((c, i) => {
    const d = document.createElement("div");
    d.className = "ficha";
    d.textContent = c.nombre.trim().split(" ").slice(-1)[0];
    d.dataset.index = i;
    tb.appendChild(d);
  });
};

// Botón "Preguntar"
document.getElementById("ir-a-preguntas").onclick = () => {
  allowGuess = false;
  muestraPreguntas();
  show("pantalla-preguntas");
  document.getElementById("respuesta").textContent = "";
};

// Botón "Quiero probar ya"
document.getElementById("probar-candidato").onclick = () => {
  allowGuess = true;
  alert("Haz clic en la ficha para adivinar (sólo 1 vez).");
  document.querySelectorAll(".ficha").forEach(f => {
    if (!f.classList.contains("deshabilitada")) f.classList.add("activable");
  });
};

// ---------- Manejador de clics (intento y preguntas) ----------

document.body.addEventListener("click", e => {

  // Intentar adivinar
  if (e.target.classList.contains("ficha") && allowGuess && !haIntentadoAdivinar) {
    const card = cardenales[e.target.dataset.index];
    if (confirm(`¿Quieres probar con ${card.nombre}?`)) {
      haIntentadoAdivinar = true;
      card === secreto ? victoria(card) : fracaso(secreto);
    }
  }

  // Confirmar pregunta
  if (e.target.id === "confirmar-pregunta") {
    const sel = document.getElementById("select-pregunta");
    if (!sel.value) return alert("Selecciona pregunta");
    if (askedQuestions.includes(+sel.value)) return alert("Ya preguntaste");
    askedQuestions.push(+sel.value);

    const q   = preguntasList[sel.value],
          ans = q.predicate(secreto);

    document.getElementById("respuesta").textContent =
      `Respuesta: ${ans ? "Sí" : "No"}`;

    // Si filtra() devuelve true, hubo victoria y salimos
    if (filtra(q, ans)) return;

    // Si no hay victoria, seguimos
    preguntaContador++;
    sel.disabled = e.target.disabled = true;
    if (preguntaContador >= maxPreguntas) {
      document.getElementById("ir-a-preguntas").disabled = true;
      allowGuess = true;
      document.getElementById("probar-candidato").click();
    }
    setTimeout(() => show("pantalla-fichas"), 3000);
  }

});

// ---------- Lógica de filtrado y resultados ----------

/**
 * Filtra las fichas según la pregunta y la respuesta.
 * Devuelve true si se detecta victoria (queda 1 ficha).
 */
function filtra(q, ans) {
  document.querySelectorAll(".ficha").forEach(f => {
    const c     = cardenales[f.dataset.index],
          cumple = q.predicate(c),
          off    = ans ? !cumple : cumple;
    if (off) f.classList.add("deshabilitada");
  });

  const act = [...document.querySelectorAll(".ficha")]
                .filter(f => !f.classList.contains("deshabilitada"));

  if (act.length === 1 && !haIntentadoAdivinar) {
    victoria(cardenales[act[0].dataset.index]);
    return true;
  }
  return false;
}

/**
 * Muestra la pantalla de victoria con datos del cardenal.
 */
function victoria(c) {
  show("pantalla-victoria");
  document.getElementById("nombre-victoria").textContent = c.nombre;
  const img = document.getElementById("foto-victoria");
  const ap  = c.nombre.trim().split(" ").slice(-1)[0];
  img.onerror = () => img.src = `img/${ap}.jpeg`;
  img.src = `img/${ap}.jpg`;
}

/**
 * Muestra la pantalla de fallo y revela al cardenal secreto.
 */
function fracaso(c) {
  show("pantalla-fallo");
  document.getElementById("nombre-fallo").textContent = c.nombre;
  const img = document.getElementById("foto-fallo");
  const ap  = c.nombre.trim().split(" ").slice(-1)[0];
  img.onerror = () => img.src = `img/${ap}.jpeg`;
  img.src = `img/${ap}.jpg`;
}

/**
 * Construye el selector y botón para elegir y confirmar preguntas.
 */
function muestraPreguntas() {
  const co = document.getElementById("opciones-preguntas");
  co.innerHTML = "";
  document.getElementById("contador").textContent =
    `Pregunta ${preguntaContador + 1} de ${maxPreguntas}`;

  const sel = document.createElement("select");
  sel.id = "select-pregunta";
  sel.innerHTML = '<option disabled selected value="">Selecciona pregunta</option>';

  // Agrupar por categoría
  [...new Set(preguntasList.map(q => q.category))].forEach(cat => {
    const og = document.createElement("optgroup");
    og.label = cat;
    preguntasList.forEach((q, i) => {
      if (q.category === cat) {
        const op = document.createElement("option");
        op.value = i;
        op.textContent = q.text;
        if (askedQuestions.includes(i)) op.disabled = true;
        og.appendChild(op);
      }
    });
    sel.appendChild(og);
  });

  co.appendChild(sel);

  const btn = document.createElement("button");
  btn.id = "confirmar-pregunta";
  btn.className = "boton-juego";
  btn.textContent = "Confirmar pregunta";
  co.appendChild(btn);
}

// Base de datos de textos para dictado
// (… tu objeto `textos` tal cual lo tenías …)

const textos = {
  "HACHE-1": "La historia registra el hecho incontestable …",
  "HACHE-2": "Ha dicho hola con un gesto de honor …",
  "HACHE-3": "Se notaba que había sufrido mucho …",
  "MEZCLA-1": "En esta mañana lluviosa he hablado …",
  "MEZCLA-2": "Habrá existido un gesto de alivio …",
  "LL-Y-1": "La lluvia cayó sin clemencia sobre la vieja maya …",
  "LL-Y-2": "El orgulloso pescador vio su yate llegar …",
  "G-J-1": "El gitano llegó al jardín de la granja …",
  "G-J-2": "El jinete gigante, que había galopado …",
  "G-J-3": "En el muro de piedra, una jirafa pintada …",
  "B-V-1": "El barco surcó el valle tempestuoso …",
  "B-V-2": "Vivir aquella singladura fue breve …",
  "B-V-3": "La tripulación supo labrar la calma …",
  "AGUDAS-N-S-PRETERITOS-1": "Anoche volé en avión hasta la estación …",
  "AGUDAS-N-S-PRETERITOS-2": "Después de la sesión principal, sentí tensión …",
  "AGUDAS-CON-VOCAL-1": "Aquel día, el grupo salió al campo …",
  "AGUDAS-CON-VOCAL-2": "Durante el descanso, el grupo compartió …",
  "AGUDAS-CON-VOCAL-3": "En la cabaña, cada cual eligió un lugar …",
  "AGUDAS-EN-GENERAL-1": "Registré canción, compás y razón en mi diario …",
  "AGUDAS-EN-GENERAL-2": "Envié un video corto donde aparecía un colibrí …",
  "AGUDAS-EN-GENERAL-3": "Al llegar a casa, añadí mesa y vida a mi collage visual …",
  "SOBREESDRUJULAS-1": "Al iniciar la partida, pidió dígamelo sin rodeos …",
  "SOBREESDRUJULAS-2": "Antes de seguir, escríbeselo en el canal general …",
  "SOBREESDRUJULAS-3": "Para acceder al segundo nivel, entrégaselo al guardián …",
  "ESDRUJULAS-1": "Las palabras esdrújulas son aquellas cuya sílaba tónica …",
  "ESDRUJULAS-2": "Aquel miércoles, mientras el médico revisaba …",
  "ESDRUJULAS-3": "El prólogo de su charla, breve pero intenso …"
};

// Array con los títulos para crear el selector
const titulosTextos = Object.keys(textos);

// Función para obtener el texto
function obtenerTexto(titulo) {
  return textos[titulo] || "";
}

// Diccionario con las rutas EXACTAS de tus .wav
const rutasAudio = {
  "HACHE-1":           "audio/HACHE-1.wav",
  "HACHE-2":           "audio/HACHE-2.wav",
  "HACHE-3":           "audio/HACHE-3.wav",
  "MEZCLA-1":          "audio/MEZCLA -1.wav",
  "MEZCLA-2":          "audio/MEZCLA -2.wav",
  "LL-Y-1":            "audio/LL – Y (1).wav",
  "LL-Y-2":            "audio/LL – Y (2).wav",
  "G-J-1":             "audio/G-J (1).wav",
  "G-J-2":             "audio/G-J (2).wav",
  "G-J-3":             "audio/G-J (3).wav",
  "B-V-1":             "audio/B-V (1).wav",
  "B-V-2":             "audio/B-V (2).wav",
  "B-V-3":             "audio/B-V (3).wav",
  "AGUDAS-N-S-PRETERITOS-1": "audio/AGUDAS N-S Y PRETÉRITOS (1).wav",
  "AGUDAS-N-S-PRETERITOS-2": "audio/AGUDAS N-S Y PRETÉRITOS (2).wav",
  "AGUDAS-CON-VOCAL-1":      "audio/AGUDAS CON VOCAL (1).wav",
  "AGUDAS-CON-VOCAL-2":      "audio/AGUDAS CON VOCAL (2).wav",
  "AGUDAS-CON-VOCAL-3":      "audio/AGUDAS CON VOCAL (3).wav",
  "AGUDAS-EN-GENERAL-1":     "audio/AGUDAS EN GENERAL 1.wav",
  "AGUDAS-EN-GENERAL-2":     "audio/AGUDAS EN GENERAL 2.wav",
  "AGUDAS-EN-GENERAL-3":     "audio/AGUDAS EN GENERAL 3.wav",
  "ESDRUJULAS-1":            "audio/ESDRÚJULAS 1.wav",
  "ESDRUJULAS-2":            "audio/ESDRÚJULAS 2.wav",
  "ESDRUJULAS-3":            "audio/ESDRÚJULAS 3.wav",
  "SOBREESDRUJULAS-1":       "audio/SOBREDESDRÚJULAS (1).wav",
  "SOBREESDRUJULAS-2":       "audio/SOBREDESDRÚJULAS (2).wav",
  "SOBREESDRUJULAS-3":       "audio/SOBREDESDRÚJULAS (3).wav"
};

// Ya no necesitas ninguna función `obtenerRutaAudio`.
//
// En tu HTML, basta con hacer:
//     audio.src = rutasAudio[titulo];
//
// y así cada archivo se cargará con su nombre exacto.

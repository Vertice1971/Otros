// Base de datos de textos para dictado
// Cada entrada tiene un título y el texto correspondiente

const textos = {
  "HACHE-1": "...",
  "HACHE-2": "...",
  "HACHE-3": "...",
  "MEZCLA-1": "...",
  "MEZCLA-2": "...",
  "LL-Y-1": "...",
  "LL-Y-2": "...",
  "G-J-1": "...",
  "G-J-2": "...",
  "G-J-3": "...",
  "B-V-1": "...",
  "B-V-2": "...",
  "B-V-3": "...",
  "AGUDAS-N-S-PRETERITOS-1": "...",
  "AGUDAS-N-S-PRETERITOS-2": "...",
  "AGUDAS-CON-VOCAL-1": "...",
  "AGUDAS-CON-VOCAL-2": "...",
  "AGUDAS-CON-VOCAL-3": "...",
  "SOBREESDRUJULAS-1": "...",
  "SOBREESDRUJULAS-2": "...",
  "SOBREESDRUJULAS-3": "...",
  "ESDRUJULAS-1": "...",
  "ESDRUJULAS-2": "...",
  "ESDRUJULAS-3": "...",
  "AGUDAS-EN-GENERAL-1": "...",
  "AGUDAS-EN-GENERAL-2": "...",
  "AGUDAS-EN-GENERAL-3": "..."
};

// Títulos disponibles
const titulosTextos = Object.keys(textos);

// Función para obtener un texto por su título
function obtenerTexto(titulo) {
  return textos[titulo] || null;
}

// Diccionario con las rutas exactas de cada archivo de audio
const rutasAudio = {
  "HACHE-1": "audio/HACHE-1.wav",
  "HACHE-2": "audio/HACHE-2.wav",
  "HACHE-3": "audio/HACHE-3.wav",
  "MEZCLA-1": "audio/MEZCLA -1.wav",
  "MEZCLA-2": "audio/MEZCLA -2.wav",
  "LL-Y-1": "audio/LL – Y (1).wav",
  "LL-Y-2": "audio/LL – Y (2).wav",
  "G-J-1": "audio/G-J-1.wav",
  "G-J-2": "audio/G-J-2.wav",
  "G-J-3": "audio/G-J-3.wav",
  "B-V-1": "audio/B-V-1.wav",
  "B-V-2": "audio/B-V-2.wav",
  "B-V-3": "audio/B-V-3.wav",
  "AGUDAS-N-S-PRETERITOS-1": "audio/AGUDAS-N-S-PRETERITOS-1.wav",
  "AGUDAS-N-S-PRETERITOS-2": "audio/AGUDAS-N-S-PRETERITOS-2.wav",
  "AGUDAS-CON-VOCAL-1": "audio/AGUDAS-CON-VOCAL-1.wav",
  "AGUDAS-CON-VOCAL-2": "audio/AGUDAS-CON-VOCAL-2.wav",
  "AGUDAS-CON-VOCAL-3": "audio/AGUDAS-CON-VOCAL-3.wav",
  "SOBREESDRUJULAS-1": "audio/SOBREDESDRÚJULAS (1).wav",
  "SOBREESDRUJULAS-2": "audio/SOBREDESDRÚJULAS (2).wav",
  "SOBREESDRUJULAS-3": "audio/SOBREDESDRÚJULAS (3).wav",
  "ESDRUJULAS-1": "audio/ESDRUJULAS-1.wav",
  "ESDRUJULAS-2": "audio/ESDRUJULAS-2.wav",
  "ESDRUJULAS-3": "audio/ESDRUJULAS-3.wav",
  "AGUDAS-EN-GENERAL-1": "audio/AGUDAS-EN-GENERAL-1.wav",
  "AGUDAS-EN-GENERAL-2": "audio/AGUDAS-EN-GENERAL-2.wav",
  "AGUDAS-EN-GENERAL-3": "audio/AGUDAS-EN-GENERAL-3.wav"
};

// questions.js
// Adaptado para <script defer src="questions.js">
// Define bankQuestions en el objeto global window
window.bankQuestions = [
  // 1
  {
    question: "Ave marina de tamaño grande con plumaje blanco y gris. Tiene pico amarillo robusto y patas rosadas. Es muy oportunista en su alimentación y forma grandes bandadas. Su grito es muy estridente.",
    options: ["Gaviota Patiamarilla", "Gaviota Sombría", "Alcatraz Atlántico", "Cormorán Grande"],
    correct: 0,
    explanation: "La Gaviota Patiamarilla es la gaviota más común en el Mediterráneo. Su adaptabilidad le permite alimentarse tanto de peces como de desperdicios urbanos."
  },
  // 2  ← índice corregido de 1 → 2
  {
    question: "Pequeño pájaro con cabeza roja brillante en el macho y colores más apagados en la hembra. Tiene pico fino y puntiagudo. Se alimenta de insectos que captura en las grietas de la corteza de los árboles.",
    options: ["Pico Picapinos", "Pito Real", "Torcecuello", "Agateador Común"],
    correct: 2,
    explanation: "El Torcecuello debe su nombre a su capacidad de torcer el cuello 180 grados cuando se siente amenazado, imitando el movimiento de una serpiente."
  },
  // 3
  {
    question: "Ave forestal de gran tamaño con plumaje iridiscente negro verdoso. Tiene cola muy larga y graduada, pico robusto. Es muy social y se mueve en bandadas ruidosas por los bosques de alcornoques.",
    options: ["Urraca", "Rabilargo", "Arrendajo", "Corneja Negra"],
    correct: 2,
    explanation: "El Rabilargo es endémico de la Península Ibérica y forma bandadas familiares muy unidas. Su distribución es curiosamente disyunta, apareciendo también en Asia Oriental."
  },
  // 4
  {
    question: "Rapaz diurna de tamaño medio con plumaje muy contrastado: dorso gris azulado y vientre blanco con rayas transversales. Tiene cola larga con bandas negras. Se especializa en cazar aves pequeñas.",
    options: ["Gavilán Común", "Azor Común", "Cernícalo Vulgar", "Esmerejón"],
    correct: 3,
    explanation: "El Gavilán Común es un especialista en cazar aves. Su vuelo rápido y ágil entre los árboles le permite sorprender a sus presas en espacios cerrados."
  },
  // 5
  {
    question: "Ave acuática de tamaño medio, completamente negra excepto el pico blanco con una mancha roja. Tiene dedos lobulados en lugar de palmados. Es muy territorial y agresiva durante la reproducción.",
    options: ["Focha Común", "Gallineta Común", "Rascón Europeo", "Zampullín Común"],
    correct: 0,
    explanation: "La Focha Común es muy agresiva durante la época de cría. Sus polluelos tienen un plumón rojizo muy llamativo que contrasta con el plumaje negro de los adultos."
  },
  // 6
  {
    question: "Pequeño pájaro cantor con cabeza negra, garganta negra y mejillas blancas. Tiene el dorso marrón y vientre blanquecino. Su canto es simple pero muy penetrante: 'ti-ti-ti'.",
    options: ["Carbonero Garrapinos", "Herrerillo Capuchino", "Carbonero Común", "Trepador Azul"],
    correct: 1,
    explanation: "El Carbonero Garrapinos es más pequeño que el Carbonero Común y prefiere bosques de coníferas. Su canto monótono es muy diferente al de su pariente mayor."
  },
  // 7
  {
    question: "Ave rapaz nocturna de tamaño grande con 'cuernos' muy desarrollados y plumaje rayado. Tiene ojos naranjas muy grandes y un disco facial poco marcado. Su canto es un 'bú-bú' grave y profundo.",
    options: ["Búho Real", "Búho Chico", "Cárabo Común", "Lechuza Común"],
    correct: 2,
    explanation: "El Búho Chico es más esbelto que el Búho Real y tiene penachos auriculares más juntos. A menudo forma dormideros comunales en invierno."
  },
  // 8
  {
    question: "Pájaro de tamaño medio con plumaje amarillo dorado muy llamativo, especialmente en el macho. Tiene pico cónico y robusto. Construye nidos colgantes muy elaborados en forma de bolsa en las ramas de los árboles.",
    options: ["Oropéndola", "Verderón Común", "Verdecillo", "Canario Silvestre"],
    correct: 3,
    explanation: "La Oropéndola macho es uno de los pájaros más hermosos de Europa. A pesar de sus colores llamativos, es muy difícil de observar porque permanece en las copas de los árboles."
  },
  // 9  ← índice corregido de 0 → 1
  {
    question: "Ave marina de tamaño medio con plumaje gris y blanco. Tiene el pico rojo con punta negra y patas rojas. Se caracteriza por su vuelo rasante sobre las olas y por formar grandes colonias de cría.",
    options: ["Charrán Patinegro", "Charrán Común", "Fumarel Común", "Gaviota Reidora"],
    correct: 1,
    explanation: "El Charrán Común realiza migraciones épicas, algunas poblaciones viajan desde el Ártico hasta la Antártida, recorriendo más de 70.000 km anuales."
  },
  // 10
  {
    question: "Pequeña rapaz diurna que caza suspendida en el aire con rápidos movimientos de alas. Tiene plumaje rojizo en el dorso y moteado en el vientre. Su cola es característicamente larga y cuadrada.",
    options: ["Cernícalo Vulgar", "Esmerejón", "Alcotán Europeo", "Gavilán Común"],
    correct: 1,
    explanation: "El Cernícalo Vulgar es famoso por su capacidad de cernirse en el aire, manteniéndose inmóvil gracias a rápidos movimientos de sus alas mientras busca presas."
  },
  // 11
  {
    question: "Ave forestal de gran tamaño con plumaje negro iridiscente y pico amarillo. Tiene la cola escalonada y es muy ruidosa. Se alimenta principalmente en el suelo, saltando con ambas patas a la vez.",
    options: ["Mirlo Común", "Tordo Común", "Estornino Negro", "Corneja Negra"],
    correct: 2,
    explanation: "El Mirlo Común macho es completamente negro con pico amarillo brillante. Su forma de saltar por el suelo con ambas patas es muy característica."
  },
  // 12
  {
    question: "Pequeño pájaro insectívoro con larga cola que mantiene levantada. Tiene plumaje pardo por encima y rojizo por debajo. Su canto es extremadamente potente para su tamaño, con trinos complejos.",
    options: ["Chochín", "Ruiseñor Común", "Petirrojo", "Curruca Capirotada"],
    correct: 3,
    explanation: "El Chochín es uno de los pájaros más pequeños de Europa, pero su canto puede oírse a 500 metros de distancia. Puede cantar más de 100 notas en 10 segundos."
  },
  // 13
  {
    question: "Ave acuática de cuello largo con plumaje completamente blanco. Tiene pico y patas negros con una mancha amarilla en la base del pico. Se alimenta removiendo el lodo con el pico en aguas someras.",
    options: ["Garceta Común", "Garza Real", "Garcilla Bueyera", "Cigüeña Blanca"],
    correct: 0,
    explanation: "La Garceta Común casi se extinguió por la caza para obtener sus plumas nupciales. Afortunadamente, las poblaciones se han recuperado gracias a la protección."
  },
  // 14  ← índice corregido de 1 → 0
  {
    question: "Pájaro cantor de tamaño medio con plumaje moteado. Es famoso por su canto nocturno muy melodioso y variado, considerado uno de los más hermosos del reino animal. Prefiere lugares con vegetación densa.",
    options: ["Ruiseñor Común", "Mirlo Común", "Zorzal Común", "Curruca Capirotada"],
    correct: 0,
    explanation: "El Ruiseñor Común puede producir más de 250 variaciones diferentes en su canto. Los machos jóvenes aprenden nuevas melodías escuchando a los veteranos."
  },
  // 15
  {
    question: "Ave rapaz diurna de gran tamaño con plumaje blanquecino y manchas oscuras. Tiene la cabeza pequeña en proporción al cuerpo y se alimenta exclusivamente de carroña. Su vuelo es muy elegante aprovechando las corrientes térmicas.",
    options: ["Alimoche Común", "Buitre Leonado", "Milano Real", "Águila Culebrera"],
    correct: 2,
    explanation: "El Alimoche Común es conocido como 'Guirre' en Canarias. Es una de las pocas aves que usa herramientas, utilizando piedras para romper huevos de avestruz en África."
  },
  // 16
  {
    question: "Ave rapaz de tamaño medio con alas largas y estrechas, cola larga y bifurcada. Se alimenta principalmente de peces que captura zambulléndose en el agua. Su cabeza es blanca con una característica cresta negra.",
    options: ["Milano Negro", "Águila Pescadora", "Águila Culebrera", "Busardo Ratonero"],
    correct: 1,
    explanation: "La Águila Pescadora es fácilmente reconocible por su cabeza blanca con cresta negra y su técnica especializada de pesca zambulléndose desde gran altura."
  },
  // 17
  {
    question: "Pequeño pájaro de apenas 10 cm, con plumaje pardo en el dorso y blanco en el vientre. Construye su nido de barro en forma de copa bajo aleros y cornisas. Realiza migraciones de miles de kilómetros.",
    options: ["Golondrina Común", "Avión Común", "Vencejo Común", "Martín Pescador"],
    correct: 0,
    explanation: "El Avión Común se distingue de la golondrina por su cola menos ahorquillada y por construir nidos de barro cerrados con una pequeña abertura."
  },
  // 18
  {
    question: "Ave marina de gran tamaño completamente blanca salvo puntas negras en alas. Tiene pico amarillo fuerte y patas palmadas. Anida en colonias en acantilados rocosos.",
    options: ["Gaviota Patiamarilla", "Alcatraz Atlántico", "Cormorán Grande", "Gaviota Sombría"],
    correct: 1,
    explanation: "El Alcatraz Atlántico es el ave marina más grande del Mediterráneo, con envergadura que puede superar los 180 cm. Sus zambullidas desde gran altura son espectaculares."
  },
  // 19
  {
    question: "Pájaro de color azul brillante en el dorso y naranja en el pecho. Tiene pico largo y recto, ideal para pescar peces pequeños. Anida excavando túneles en barrancos cerca del agua.",
    options: ["Abejaruco Europeo", "Martín Pescador", "Carraca Europea", "Oropéndola"],
    correct: 1,
    explanation: "El Martín Pescador es inconfundible por sus colores vibrantes y su técnica de pesca, permaneciendo inmóvil en una rama antes de zambullirse con precisión."
  },
  // 20
  {
    question: "Rapaz nocturna de tamaño mediano con 'cuernos' prominentes y ojos amarillos muy llamativos. Su plumaje tiene tonos pardos con rayas que le proporcionan un excelente camuflaje entre las rocas.",
    options: ["Búho Real", "Búho Chico", "Lechuza Común", "Autillo Europeo"],
    correct: 3,
    explanation: "El Autillo Europeo es el búho más pequeño de la región mediterránea. Su canto monótono 'tiu-tiu-tiu' es muy característico de las noches de primavera."
  },
  // 21
  {
    question: "Ave de presa diurna con cabeza y cuello blancos, cuerpo marrón oscuro y cola muy corta. Se alimenta casi exclusivamente de peces, construyendo enormes nidos en árboles altos o acantilados.",
    options: ["Milano Real", "Águila Imperial", "Águila Pescadora", "Pigargo Europeo"],
    correct: 0,
    explanation: "La Águila Pescadora está perfectamente adaptada para la pesca, con garras especializadas y narinas que se cierran durante la inmersión."
  },
  // 22
  {
    question: "Pequeña ave insectívora que nunca se posa en el suelo. Tiene alas largas y estrechas en forma de hoz, plumaje negro parduzco y garganta blanca.",
    options: ["Golondrina Común", "Avión Común", "Vencejo Común", "Lavandera Blanca"],
    correct: 1,
    explanation: "El Vencejo Común pasa prácticamente toda su vida en el aire. Sus patas son tan pequeñas que no puede posarse en el suelo."
  },
  // 23
  {
    question: "Ave marina de tamaño medio, completamente negra con reflejos metálicos verdes. Tiene el cuello largo y se sumerge para pescar. Hace acopio de sol para secar sus alas.",
    options: ["Cormorán Grande", "Cormorán Moñudo", "Gaviota Sombría", "Pardela Cenicienta"],
    correct: 2,
    explanation: "El Cormorán Grande se seca al sol porque sus plumas no son completamente impermeables."
  },
  // 24
  {
    question: "Pájaro de colores muy vistosos: verde en el dorso, amarillo en la garganta y azul en las alas. Se alimenta principalmente de abejas e insectos en vuelo.",
    options: ["Carraca Europea", "Abejaruco Europeo", "Oropéndola", "Torcecuello"],
    correct: 3,
    explanation: "El Abejaruco Europeo golpea a la abeja contra una rama para extraer el aguijón antes de comérsela."
  },
  // 25
  {
    question: "Rapaz de tamaño grande con plumaje muy variable, principalmente pardo. Planea en círculos sobre campos abiertos buscando roedores.",
    options: ["Milano Negro", "Busardo Ratonero", "Águila Culebrera", "Aguilucho Cenizo"],
    correct: 0,
    explanation: "El Busardo Ratonero es muy adaptable y común; su vuelo en círculos es característico."
  },
  // 26
  {
    question: "Ave zancuda grande, blanca excepto puntas negras de alas. Pico y patas rojos. Vuela con cuello extendido y trae buena suerte.",
    options: ["Garza Real", "Garceta Común", "Cigüeña Blanca", "Ibis Sagrado"],
    correct: 1,
    explanation: "La Cigüeña Blanca es símbolo de buena suerte en muchas culturas mediterráneas."
  },
  // 27
  {
    question: "Pequeño pájaro insectívoro con cola muy larga que mueve constantemente arriba y abajo. Dorso gris y vientre blanco.",
    options: ["Lavandera Blanca", "Collalba Gris", "Tarabilla Común", "Bisbita Común"],
    correct: 2,
    explanation: "La Lavandera Blanca se reconoce por el movimiento constante de su cola."
  },
  // 28
  {
    question: "Ave marina de tamaño medio con cabeza negra en época reproductiva y blanca en invierno. Pico y patas rojos.",
    options: ["Gaviota Reidora", "Charrán Común", "Gaviota Patiamarilla", "Fumarel Común"],
    correct: 3,
    explanation: "El Charrán Común se distingue por su vuelo ágil y técnica de pesca."
  },
  // 29
  {
    question: "Pájaro forestal de colores brillantes: azul intenso en dorso y alas, pecho anaranjado. Entierra bellotas que muchas veces olvida.",
    options: ["Arrendajo", "Rabilargo", "Urraca", "Grajilla"],
    correct: 0,
    explanation: "El Arrendajo es el 'jardinero del bosque', contribuye a la dispersión de robles."
  },
  // 30
  {
    question: "Rapaz nocturna pequeña con disco facial muy marcado y ojos amarillos. Plumaje pardo con motas blancas.",
    options: ["Lechuza Común", "Cárabo Común", "Autillo Europeo", "Búho Chico"],
    correct: 1,
    explanation: "El Autillo Europeo es el búho más pequeño del Mediterráneo; su canto monótono 'tiu-tiu-tiu' es característico."
  },
  // 31
  {
    question: "Pequeño ave insectívora con cabeza gris, vientre blanco y espalda marrón. Corre en suelos abiertos persiguiendo insectos.",
    options: ["Bisbita Pratense", "Bisbita Común", "Bisbita Alpino", "Bisbita Ribereño"],
    correct: 0,
    explanation: "El Bisbita Pratense prefiere praderas abiertas donde corre tras insectos."
  },
  // 32
  {
    question: "Ave insectívora de colores pardos y garganta blanca. Se posa erguid@ en ramas bajas y emite cantos variables.",
    options: ["Papamoscas Cerrojillo", "Papamoscas Gris", "Papamoscas Piedrero", "Papamoscas Negro"],
    correct: 1,
    explanation: "El Papamoscas Gris es común en áreas boscosas y parques donde caza insectos voladores."
  },
  // 33
  {
    question: "Pájaro de gran tamaño, plumaje rojo y negro en las alas. Se posa en riscos cerca del mar.",
    options: ["Cormorán Moñudo", "Cormorán Grande", "Cormorán Coronado", "Cormorán Pigmeo"],
    correct: 2,
    explanation: "El Cormorán Coronado es raro, con reflejos iridiscentes en el pico en época reproductora."
  },
  // 34
  {
    question: "Ave forestal con cabeza negra, espalda grisácea y pecho pardo. Enterra bellotas y nueces para el invierno.",
    options: ["Picogordo", "Pico Menudo", "Piquituerto", "Piquituerto Norteño"],
    correct: 3,
    explanation: "El Piquituerto Norteño utiliza su pico robusto para abrir semillas duras."
  },
  // 35
  {
    question: "Ave zancuda de patas largas y pico fino. Camina lentamente en aguas someras buscando crustáceos.",
    options: ["Andarríos Grande", "Andarríos Chico", "Andarríos Bastardo", "Andarríos Variegado"],
    correct: 1,
    explanation: "El Andarríos Chico se alimenta moviendo el pico rápidamente en el barro."
  },
  // 36
  {
    question: "Pequeño pájaro con vientre rojizo, dorso marrón y cola corta. Canta melodías fluyentes desde el amanecer.",
    options: ["Petirrojo", "Curruca Mosquitera", "Curruca Cabecinegra", "Curruca Zarcera"],
    correct: 2,
    explanation: "La Curruca Cabecinegra destaca por su cabeza oscura y canto potente."
  },
  // 37
  {
    question: "Pájaro selvático con plumaje amarillo brillante y rayas negras. Se posa en matorrales cerca de agua.",
    options: ["Verderón Serrano", "Verderón Común", "Verderón Oriental", "Verderón Norteño"],
    correct: 0,
    explanation: "El Verderón Serrano prefiere zonas elevadas y bosques esclerófilos."
  },
  // 38
  {
    question: "Ave limícola pequeña, pico recto y patas rojizas. Bebe en fuentes y acequias en pueblos.",
    options: ["Lavandera Cascadeña", "Lavandera Blanca", "Lavandera Boyera", "Lavandera Ibérica"],
    correct: 3,
    explanation: "La Lavandera Ibérica se encuentra cerca de corrientes de montaña y ríos."
  },
  // 39
  {
    question: "Pájaro trampolín con colores verdes y amarillos. Tiene canto metálico y vive en coníferas.",
    options: ["Verderón Serrano", "Camachuelo Trompetero", "Pinzón Real", "Jilguero"],
    correct: 1,
    explanation: "El Camachuelo Trompetero emite tonos agudos desde copas de pino."
  },
  // 40
  {
    question: "Ave de marismas con plumaje pardo y blanco. Pico ancho y patas de color salmón.",
    options: ["Avefría Europea", "Chorlitejo Grande", "Narina Común", "Archibebe Común"],
    correct: 1,
    explanation: "El Chorlitejo Grande habita marismas costeras y playas arenosas."
  }
];

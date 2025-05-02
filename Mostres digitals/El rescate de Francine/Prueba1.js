/**************************************
 *  PRUEBA 1: ORDENAR LÍNEA DE TIEMPO *
 **************************************/

// Arreglo que contiene la información de las imágenes.
// 'order' indica la posición cronológica correcta (1, 2, 3).
// 'src' es la ruta a la imagen dentro de la carpeta "png".
const imagesData = [
    { id: 'bio1', order: 1, src: 'png/Bio1.png' },
    { id: 'bio2', order: 2, src: 'png/Bio2.png' },
    { id: 'bio3', order: 3, src: 'png/Bio3.png' },
];

// Variable para almacenar la imagen que el jugador tenga seleccionada en un momento dado
let selectedImage = null;

// Variable para almacenar el estado de cada slot (qué imagen está dentro, si existe)
let slotsState = [null, null, null];

/**
 * Función que se llama desde main.js cuando se inicia la Prueba1.
 * Crea la estructura HTML dentro de #first-test y configura los eventos.
 */
function loadFirstTest() {
    // 1. Referencia al contenedor principal de la prueba
    const firstTestContainer = document.getElementById('first-test');
    
    // Limpia cualquier contenido previo (en caso de reiniciar la prueba)
    firstTestContainer.innerHTML = '';

    // 2. Generar la estructura HTML necesaria:
    //    a) Título / instrucciones
    //    b) Contenedor para las imágenes (desordenadas)
    //    c) Contenedor para la línea de tiempo (slots)
    //    d) Mensaje de feedback
    //    e) Botón de verificación manual (opcional, si no deseas auto-check)
    
    // a) Título / instrucciones
    const title = document.createElement('h3');
    title.innerText = 'Organiza la línea de tiempo de la vida de Descartes';
    firstTestContainer.appendChild(title);

    const instructions = document.createElement('p');
    instructions.innerText = 'Selecciona cada imagen y colócala en el slot correspondiente.';
    firstTestContainer.appendChild(instructions);

    // b) Contenedor de selección de imágenes
    const imageSelection = document.createElement('div');
    imageSelection.id = 'image-selection';
    firstTestContainer.appendChild(imageSelection);

    // c) Contenedor de la línea de tiempo con 3 slots
    const timeline = document.createElement('div');
    timeline.id = 'timeline';
    firstTestContainer.appendChild(timeline);

    // Creamos 3 slots
    for (let i = 0; i < 3; i++) {
        const slot = document.createElement('div');
        slot.classList.add('timeline-slot');
        slot.dataset.slotIndex = i; // para saber a qué posición corresponde
        slot.addEventListener('click', onSlotClick);
        timeline.appendChild(slot);
    }

    // d) Mensaje de feedback (correcto/incorrecto)
    const feedback = document.createElement('p');
    feedback.id = 'feedback-first-test';
    feedback.classList.add('feedback');
    firstTestContainer.appendChild(feedback);

    // e) (Opcional) Botón para verificar manualmente si no deseas validación automática
    /*
    const checkButton = document.createElement('button');
    checkButton.innerText = 'Verificar orden';
    checkButton.addEventListener('click', checkOrder);
    firstTestContainer.appendChild(checkButton);
    */

    // 3. Mostrar las imágenes en orden aleatorio
    shuffleImages(imagesData); // Mezclamos el array
    renderImages(imageSelection);

    // 4. Opcionalmente, podemos verificar automáticamente tras cada colocación
    //    (depende de la experiencia que desees dar).
    //    Aquí lo haremos tras colocar las 3 imágenes en los slots.
}

/**
 * Mezcla el array de imágenes para que aparezcan en orden aleatorio.
 */
function shuffleImages(images) {
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
}

/**
 * Renderiza las imágenes en el contenedor #image-selection.
 */
function renderImages(container) {
    container.innerHTML = '';

    imagesData.forEach((imgData) => {
        const img = document.createElement('img');
        img.src = imgData.src;
        img.alt = imgData.id;
        img.classList.add('selectable-image');
        img.dataset.order = imgData.order;

        // Al hacer clic en la imagen, la "seleccionamos"
        img.addEventListener('click', () => onImageClick(img));
        container.appendChild(img);
    });
}

/**
 * Maneja el clic en una imagen de la sección "image-selection".
 * Marca la imagen como seleccionada y la desmarca si vuelves a hacer clic en ella.
 */
function onImageClick(img) {
    const wasSelected = img.classList.contains('selected');

    // Desmarcar cualquier imagen previamente seleccionada
    document.querySelectorAll('#image-selection .selectable-image').forEach((image) => {
        image.classList.remove('selected');
    });

    if (!wasSelected) {
        // Marcar la imagen actual como seleccionada y actualizar la variable global
        img.classList.add('selected');
        selectedImage = img;
    } else {
        // Si la imagen ya estaba seleccionada, la deseleccionamos
        selectedImage = null;
    }
}

/**
 * Maneja el clic en un slot de la línea de tiempo.
 * Si hay una imagen seleccionada, la coloca en ese slot (si el slot está vacío).
 */
function onSlotClick(event) {
    const slotElement = event.currentTarget;
    const slotIndex = parseInt(slotElement.dataset.slotIndex, 10);

    // Si no hay imagen seleccionada, no hacemos nada
    if (!selectedImage) return;

    // Si el slot ya está ocupado, podríamos permitir reemplazarla
    // o bloquear la acción según la lógica que desees.
    // En este ejemplo, permitimos sobrescribir.
    if (slotsState[slotIndex]) {
        // Devuelve la imagen al estado de "no utilizada"
        const previouslyUsedImage = document.querySelector(
            `#image-selection .selectable-image[data-order="${slotsState[slotIndex]}"]`
        );
        if (previouslyUsedImage) {
            previouslyUsedImage.classList.remove('used');
        }
    }

    // 1) Colocamos la imagen en el slot
    slotElement.innerHTML = ''; // Limpiamos lo que hubiera
    const newImg = document.createElement('img');
    newImg.src = selectedImage.src;
    newImg.alt = selectedImage.alt;
    newImg.classList.add('selectable-image', 'used');
    slotElement.appendChild(newImg);

    // 2) Marcamos la imagen seleccionada como "usada" en la lista
    selectedImage.classList.add('used');
    selectedImage.classList.remove('selected');

    // 3) Actualizamos el estado del slot con el order de la imagen
    slotsState[slotIndex] = parseInt(selectedImage.dataset.order, 10);

    // 4) Reseteamos la imagen seleccionada
    selectedImage = null;

    // 5) Comprobamos si ya se han colocado las 3 imágenes
    if (areAllSlotsFilled()) {
        checkOrder();
    }
}

/**
 * Verifica si los 3 slots están ocupados.
 */
function areAllSlotsFilled() {
    return slotsState.every((state) => state !== null);
}

/**
 * Verifica si el orden de las imágenes en los slots es el correcto.
 */
function checkOrder() {
    // Orden correcto: [1, 2, 3]
    const isCorrect = slotsState[0] === 1 && slotsState[1] === 2 && slotsState[2] === 3;

    const feedback = document.getElementById('feedback-first-test');

    if (isCorrect) {
        playSound('success'); // ✅ Éxito
        feedback.innerText = '¡Correcto! Has conseguido la llave.';
        feedback.classList.remove('incorrect');
        feedback.classList.add('correct');

        // Esperamos 3,5 segundos y avanzamos a la siguiente prueba
        setTimeout(() => {
            advanceToNextTest('first-test', 'second-test');
        }, 3500);
    } else {
        playSound('error'); // ❌ Error
        feedback.innerText = 'La puerta permanece cerrada. Intenta de nuevo.';
        feedback.classList.remove('correct');
        feedback.classList.add('incorrect');

        resetSlots();
    }
}


/**
 * Restaura los slots y el estado para que el jugador reintente.
 */
function resetSlots() {
    // Limpiamos cada slot y marcamos su estado como null
    const slotElements = document.querySelectorAll('#timeline .timeline-slot');
    slotElements.forEach((slot) => {
        slot.innerHTML = '';
    });
    slotsState = [null, null, null];

    // Marcamos todas las imágenes como disponibles de nuevo
    const allImages = document.querySelectorAll('#image-selection .selectable-image');
    allImages.forEach((img) => {
        img.classList.remove('used', 'selected');
    });
    selectedImage = null;
}

// Exponemos la función loadFirstTest al ámbito global para poder invocarla desde main.js
window.loadFirstTest = loadFirstTest;

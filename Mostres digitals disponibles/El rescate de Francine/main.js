function startGame() {
    document.getElementById('intro-container').style.display = 'none';
    document.getElementById('room-title').style.display = 'block';
    document.getElementById('timer').style.display = 'block';

    updateRoomTitle(1);
    document.getElementById('first-test').classList.remove('hidden');

    if (typeof window.loadFirstTest === 'function') {
        window.loadFirstTest();
    } else {
        console.error('loadFirstTest no está definida.');
    }

    startTimer();
}

// -------------------------
// SONIDOS - Catálogo
// -------------------------
const sounds = {
    silent: new Howl({ src: ['sounds/silent.mp3'], volume: 0.0 }),
    intro1: new Howl({ src: ['sounds/intro1.mp3'], volume: 0.7, html5: true }),
    intro2: new Howl({ src: ['sounds/intro2.mp3'], volume: 0.5 }),
    intro3: new Howl({ src: ['sounds/intro3.mp3'], volume: 0.5 }),
    horror: new Howl({ src: ['sounds/horror.mp3'], loop: false, volume: 0.6 }),
    ambience: new Howl({ src: ['sounds/ambience.mp3'], loop: false, volume: 0.7 }),
    happy_end: new Howl({ src: ['sounds/happy_end.mp3'], volume: 0.8 }),
    success: new Howl({ src: ['sounds/success.wav'], volume: 0.6 }),
    error: new Howl({ src: ['sounds/error.wav'], volume: 0.7 }),
    final_door: new Howl({ src: ['sounds/final_door.mp3'], volume: 0.8 }),
    epic: new Howl({ src: ['sounds/epic.mp3'], loop: false, volume: 0.7 })
};

// -------------------------
// Función global para reproducir sonidos
// -------------------------
function playSound(id) {
    const sound = sounds[id];
    if (sound) {
        try {
            sound.stop(); // Evita solapamientos
            sound.play();
        } catch (e) {
            console.warn(`No se pudo reproducir el sonido "${id}":`, e);
        }
    } else {
        console.warn(`Sonido "${id}" no está definido.`);
    }
}

function advanceToNextTest(currentTestId, nextTestId) {
    const currentTest = document.getElementById(currentTestId);
    if (currentTest) currentTest.classList.add('hidden');

    const nextTest = document.getElementById(nextTestId);
    if (nextTest) nextTest.classList.remove('hidden');

    const roomNumbers = {
        'first-test': 1, 'second-test': 2, 'third-test': 3,
        'fourth-test': 4, 'fifth-test': 5, 'sixth-test': 6,
        'seventh-test': 7, 'eighth-test': 8, 'ninth-test': 9,
        'tenth-test': 10, 'eleventh-test': 11
    };

    if (roomNumbers[nextTestId]) updateRoomTitle(roomNumbers[nextTestId]);

    const loadFunctionNameMap = {
        'first-test': 'loadFirstTest',
        'second-test': 'loadSecondTest',
        'third-test': 'loadThirdTest',
        'fourth-test': 'loadFourthTest',
        'fifth-test': 'loadFifthTest',
        'sixth-test': 'loadSixthTest',
        'seventh-test': 'loadSeventhTest',
        'eighth-test': 'loadEighthTest',
        'ninth-test': 'loadNinthTest',
        'tenth-test': 'loadTenthTest',
        'eleventh-test': 'loadEleventhTest'
    };

    const functionName = loadFunctionNameMap[nextTestId];
    if (functionName && typeof window[functionName] === "function") {
        window[functionName]();
    } else {
        console.error(`La función ${functionName} no está definida.`);
    }
}

function updateRoomTitle(roomNumber) {
    const roomTitle = document.getElementById('room-title');
    if (roomTitle) {
        roomTitle.innerText = `Habitación ${roomNumber}`;
    }
}

let timeLeft = 600; // 10 minutos
let timerInterval;

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft > 0) timeLeft--;

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById('timer').innerText =
            `Tiempo restante: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        // ⚠️ Cambios visuales cuando falten 2 minutos o menos
        const timerElement = document.getElementById('timer');
        if (timeLeft <= 120) {
            timerElement.style.color = '#ff0000';
            timerElement.style.animation = 'blink 1s step-start infinite';
        } else {
            timerElement.style.color = '#ff5555';
            timerElement.style.animation = '';
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("¡Se acabó el tiempo! No has logrado salvar a Francine.");
            location.reload();
        }
    }, 1000);
}


// ---------- CINEMÁTICA INICIAL ----------
function startIntroCinematic() {
    const introContainer = document.getElementById("intro-container");

    // Mostrar botón inicial para desbloquear sonido
    introContainer.innerHTML = `
        <div id="intro-welcome" style="animation: fadein 1s;">
            <p style="font-size: 38px; color: #ffcc00; margin-bottom: 20px;">
                Un escape room cartesiano
            </p>
            <button id="start-intro-button">Comenzar historia</button>
        </div>
    `;

    document.getElementById("start-intro-button").addEventListener("click", () => {
        // Desbloquear el sonido
        if (sounds.silent) {
            sounds.silent.play();
            setTimeout(() => sounds.silent.stop(), 300);
        }

        // Iniciar escenas
        showScene(0);
    });

    const scenes = [
        {
            img: "png/Intro1.png",
            text: "No todo el mundo sabe que René Descartes tuvo una hija llamada Francine a la que amaba clara y distintamente"
        },
        {
            img: "png/Intro2.png",
            text: "Pero cierta noche un mal viento o un genio maligno la hizo desaparecer"
        },
        {
            img: "png/Intro3.png",
            text: "Descartes solo puede confiar en su método: debe encontrar a Francine en alguna de las habitaciones de la mansión de la incertidumbre"
        }
    ];

    let currentScene = 0;

    function showScene(index) {
        const scene = scenes[index];

        // Detener todos los sonidos
        for (const key in sounds) {
            if (sounds[key] && sounds[key].stop) sounds[key].stop();
        }

        // Reproducir sonido de escena
        const currentSound = sounds[`intro${index + 1}`];
        if (currentSound) currentSound.play();

        // Mostrar escena
        introContainer.innerHTML = `
            <div id="intro-scene" style="animation: fadein 1s;">
                <img src="${scene.img}" style="max-width: 75%; height: auto; border-radius: 10px; box-shadow: 0 0 20px black;" />
                <p id="typewriter-text" style="margin-top: 20px; font-size: 36px; color: #ffcc00; font-style: italic; width: 90%; margin: 20px auto;"></p>
            </div>
        `;

        const textElement = document.getElementById("typewriter-text");
        const fullText = scene.text;
        let charIndex = 0;

        function typeNextChar() {
            if (charIndex < fullText.length) {
                textElement.textContent += fullText.charAt(charIndex);
                charIndex++;
                setTimeout(typeNextChar, 35);
            } else {
                if (index === scenes.length - 1) {
                    const button = document.createElement("button");
                    button.textContent = "Explorar";
                    button.onclick = startGame;
                    button.style.marginTop = "30px";
                    introContainer.appendChild(button);
                } else {
                    setTimeout(() => {
                        currentScene++;
                        showScene(currentScene);
                    }, 5000);
                }
            }
        }

        typeNextChar();
    }
}

// ---------- INICIAR AL CARGAR ----------
window.onload = function () {
    startIntroCinematic();
};

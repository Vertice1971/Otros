function loadEleventhTest() {
    updateRoomTitle(11);

    // Detener música anterior si está sonando
    if (typeof backgroundMusic !== "undefined") {
        backgroundMusic.stop();
    }

    // Iniciar música ambiental suave (asociada al rostro de Francine)
    playSound('ambience');

    const container = document.getElementById("eleventh-test");
    container.innerHTML = `
        <div id="reveal-scene">
            <img src="png/GenioRevelado.png" id="genio-fondo">
            <div id="cortina-izq" class="cortina"></div>
            <div id="cortina-der" class="cortina"></div>
        </div>
        <p id="scene-text">Francine te mira en silencio, parece asustada...</p>
    `;

    setTimeout(() => {
        document.getElementById("cortina-izq").style.transform = "translateX(-100%)";
        document.getElementById("cortina-der").style.transform = "translateX(100%)";
        document.getElementById("scene-text").innerText =
            "Pero no es Francine. El rostro se deforma... ¿El Genio Maligno te manipula?";
        playSound('horror');
    }, 5000);

    setTimeout(() => {
        const scrollContainer = document.createElement("div");
        scrollContainer.id = "scrolling-text-container";

        scrollContainer.innerHTML = `
            <div id="scrolling-text" style="font-size: 24px; color: red; font-weight: bold;">
                <p>
                    Pues puedo convencerme de que la naturaleza me ha hecho de tal manera que yo pueda engañarme fácilmente,
                    incluso en las cosas que creo comprender con más evidencia y certeza; y a ello me persuade sobre todo
                    el acordarme de haber creído a menudo que eran verdaderas y ciertas muchas cosas, que luego otras razones
                    distintas me han llevado a juzgar absolutamente falsas.
                </p>
                <p style="margin-top: 20px;">
                    (Descartes. <span style="font-size: 26px; color: orange;"><em><strong>Meditaciones metafísicas</strong></em></span>. Meditación Quinta)
                </p>
            </div>
        `;

        document.body.appendChild(scrollContainer);

        // Eliminar el texto rodante tras 25s de animación
        setTimeout(() => {
            scrollContainer.remove();
            showSequentialMessages();
        }, 25000);

    }, 5000);
}

function showSequentialMessages() {
    const sceneText = document.getElementById("scene-text");
    if (sceneText) sceneText.remove();

    playSound('epic');

    const message = document.createElement("div");
    message.id = "center-message";
    message.style.position = "fixed";
    message.style.top = "50%";
    message.style.left = "50%";
    message.style.transform = "translate(-50%, -50%)";
    message.style.color = "blue";
    message.style.fontSize = "28px";
    message.style.fontWeight = "bold";
    message.style.zIndex = "9999";
    message.style.textAlign = "center";
    document.body.appendChild(message);

    const phrases = [
        "¡Aún hay esperanza!",
        "¡No podemos negar la evidencia de la idea de perfección!",
        "¡Un Dios perfecto no permitiría que lo claro y distinto no fuera evidente!",
        "“Tras conocer que hay un Dios (...) y que no es falaz (…) todo lo que concibo con claridad y distinción no puede por menos de ser verdadero” QUINTA MEDITACIÓN"
    ];

    let index = 0;

    const showNext = () => {
        if (index < phrases.length) {
            message.innerText = phrases[index];
            index++;
            setTimeout(showNext, 4000);
        } else {
            replaceGenioWithFrancineYDescartes();

            setTimeout(() => {
                message.remove(); // Se elimina la última frase azul

                // Espera unos segundos más con pantalla en negro antes de mostrar créditos
                setTimeout(() => {
                    showCredits(); // Créditos finales en naranja
                }, 6000); // ← DURACIÓN de la pausa en negro 
            }, 6000); // ← DURACIÓN visible de la última frase azul
        }
    };

    showNext();
}

function replaceGenioWithFrancineYDescartes() {
    playSound('happy_end');
    const revealScene = document.getElementById("reveal-scene");
    revealScene.innerHTML = `
        <div style="position: relative; width: 100%; height: 100%;">
            <img src="png/FinalAbrazo.png" style="width: 100%; height: auto; display: block;" />
            <div id="heart-emojis" style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); font-size: 40px; animation: bubbleUp 3s ease-in-out infinite;">
                ❤️ ❤️ ❤️
            </div>
        </div>
    `;
}

function showCredits() {
    const blackOverlay = document.createElement("div");
    blackOverlay.style.position = "fixed";
    blackOverlay.style.top = "0";
    blackOverlay.style.left = "0";
    blackOverlay.style.width = "100%";
    blackOverlay.style.height = "100%";
    blackOverlay.style.backgroundColor = "black";
    blackOverlay.style.zIndex = "99999";
    blackOverlay.style.display = "flex";
    blackOverlay.style.alignItems = "center";
    blackOverlay.style.justifyContent = "center";
    blackOverlay.style.flexDirection = "column";
    blackOverlay.style.color = "#ffcc00";
    blackOverlay.style.fontSize = "20px";
    blackOverlay.classList.add("fadein-slow");

    blackOverlay.innerHTML = `
    <div>El Rescate de Francine. Un escape room cartesiano</div>
    <div style="margin-top: 20px;">Desarrollo: Tomás Cuesta</div>
    <div style="margin-top: 10px; font-size: 16px; font-family: Arial Narrow, sans-serif;">
        Lluvia de ideas del alumnado de Proyectos Transversales 2º Bachillerato – IES Juan de la Cierva
    </div>
    <div style="margin-top: 40px; font-size: 16px;">Efectos sonoros y visuales: GPT-4o</div>
    <div style="margin-top: 60px; font-size: 14px; color: #ccc;">
        Este proyecto es de libre uso.<br>
        Puedes editarlo o adaptarlo a tus necesidades desde:<br>
        <a href="https://github.com/vertice1971/Historia_de_la_Filosofia" target="_blank" style="color: #ffcc00;">
            github.com/vertice1971/Historia_de_la_Filosofia
        </a>
    </div>
    `;

    document.body.appendChild(blackOverlay);
}

window.loadEleventhTest = loadEleventhTest;

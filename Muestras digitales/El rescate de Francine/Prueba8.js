function loadEighthTest() {
    updateRoomTitle(8); // Título: Habitación 8

    const container = document.getElementById("eighth-test");

    container.innerHTML = `
        <div id="falling-zone" style="position: relative; height: 400px; margin-bottom: 20px; border: 2px solid white;">
            <div id="word" style="
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                font-size: 24px;
                font-weight: bold;
                color: yellow;
            ">Palabra</div>

            <!-- Zona izquierda (no es Genio Maligno) -->
            <div id="box-false" style="
                position: absolute;
                top: 100px;
                left: 20px;
                width: 160px;
                height: 50px;
                border: 2px dashed white;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                text-align: center;
                cursor: pointer;
            "></div>
            <div style="
                position: absolute;
                top: 155px;
                left: 20px;
                width: 160px;
                text-align: center;
                font-size: 14px;
                color: #ffcc00;
                font-style: italic;
            ">
                Pulsa en esta caja si no es exactamente el Genio Maligno
            </div>

            <!-- Zona derecha (sí es Genio Maligno) -->
            <div id="box-true" style="
                position: absolute;
                top: 100px;
                right: 20px;
                width: 160px;
                height: 50px;
                border: 2px dashed white;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                text-align: center;
                cursor: pointer;
            "></div>
            <div style="
                position: absolute;
                top: 155px;
                right: 20px;
                width: 160px;
                text-align: center;
                font-size: 14px;
                color: #ffcc00;
                font-style: italic;
            ">
                Pulsa en esta caja si es una versión del Genio Maligno
            </div>

            <!-- MENSAJE FINAL -->
            <div id="final-message" style="
                display: none;
                position: absolute;
                top: 200px;
                left: 50%;
                transform: translateX(-50%);
                width: 80%;
                text-align: center;
                font-size: 20px;
                font-weight: bold;
                color: lime;
                margin-top: 10px;
            ">
                Un Dios engañador haría que nada de lo que hay en mi mente fuera fiable o evidente. ¿Nada? ¿Hemos de rendirnos al escepticismo...?
            </div>

            <div id="next-action" style="
                display: none;
                position: absolute;
                top: 280px;
                left: 50%;
                transform: translateX(-50%);
                width: 80%;
                text-align: center;
                font-size: 18px;
                color: #ffcc00;
                cursor: pointer;
                text-decoration: underline;
                margin-top: 20px;
            ">
                Pincha aquí si insistes en encontrar una verdad evidente para rescatar a Francine.
            </div>
        </div>
    `;

    setupEighthLogic();
}

function setupEighthLogic() {
    const wordElement = document.getElementById("word");
    const boxTrue = document.getElementById("box-true");
    const boxFalse = document.getElementById("box-false");
    const finalMessage = document.getElementById("final-message");
    const nextAction = document.getElementById("next-action");

    const words = [
        { text: "Dinero", isGenio: false },
        { text: "Reguetón", isGenio: false },
        { text: "Fake news", isGenio: true },
        { text: "Locura", isGenio: true },
        { text: "Drogas", isGenio: true },
        { text: "Influencers", isGenio: false },
        { text: "Realidad Virtual", isGenio: true },
        { text: "Hipnosis", isGenio: true },
        { text: "Tetris", isGenio: false },
        { text: "Dios falaz", isGenio: true }
    ];

    let currentIndex = 0;
    let pos = 0;
    let animationFrame;

    function showWord(index) {
        wordElement.innerText = words[index].text;
        wordElement.style.top = "0px";
        wordElement.style.display = "block";
        pos = 0;
    }

    function nextWord() {
        currentIndex++;
        if (currentIndex < words.length) {
            showWord(currentIndex);
            animateWord();
        } else {
            triggerFinalMessage();
        }
    }

    function animateWord() {
        animationFrame = requestAnimationFrame(() => {
            pos += 2;
            wordElement.style.top = pos + "px";
            if (pos > 400) pos = -30;
            animateWord();
        });
    }

    function handleClick(isTrueBox) {
        const current = words[currentIndex];
        const isCorrect = (isTrueBox && current.isGenio) || (!isTrueBox && !current.isGenio);

        if (isCorrect) {
            playSound('success');
            cancelAnimationFrame(animationFrame);
            const targetBox = isTrueBox ? boxTrue : boxFalse;
            targetBox.innerText = current.text;

            if (current.text === "Dios falaz") {
                triggerFinalMessage();
            } else {
                nextWord();
            }
        } else {
            playSound('error');
        }
    }

    function triggerFinalMessage() {
        wordElement.style.display = "none";
        finalMessage.style.display = "block";
        setTimeout(() => {
            nextAction.style.display = "block";
        }, 4000);
    }

    nextAction.addEventListener("click", () => {
        advanceToNextTest("eighth-test", "ninth-test");
    });

    boxTrue.addEventListener("click", () => handleClick(true));
    boxFalse.addEventListener("click", () => handleClick(false));

    showWord(currentIndex);
    animateWord();
}

window.loadEighthTest = loadEighthTest;

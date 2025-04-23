function loadSecondTest() {
    updateRoomTitle(2); // Actualiza el título a "Habitación 2"

    const testContainer = document.getElementById('second-test');
    testContainer.innerHTML = `
        <p>
            Para abrir la puerta, escribe el código lógico correcto que representa la frase:
        </p>
        <blockquote>
            <strong>"Si tienes la llave y sabes lógica entonces puedes abrir la puerta o no salvas a tu hija."</strong>
        </blockquote>
        <p>
            Pista: No olvides los paréntesis. Y "Salvar a tu hija" corresponde a <strong>S</strong>.
        </p>
        <div id="input-container">
            <!-- Campo de entrada de solo lectura -->
            <input 
                type="text" 
                id="logic-input" 
                readonly 
                onfocus="this.blur();" 
                style="width: 90%; padding: 10px; margin-bottom: 10px; cursor: not-allowed;" 
            />
        </div>
        <div id="symbols-container" style="display: flex; flex-wrap: wrap; justify-content: center; margin-bottom: 10px;"></div>
        <button id="check-button" style="margin-right: 10px;">Verificar</button>
        <button id="delete-button" style="margin-right: 10px;">Borrar último símbolo</button>
        <button id="clear-all-button">Borrar todo</button>

        <p id="feedback2" style="margin-top: 10px; font-weight: bold; display: none;"></p>
    `;

    loadLogicSymbols();

    document.getElementById('check-button').addEventListener('click', checkLogicPhrase);
    document.getElementById('delete-button').addEventListener('click', deleteLastSymbol);
    document.getElementById('clear-all-button').addEventListener('click', clearAllInput);
}

function loadLogicSymbols() {
    const symbols = [
        "P", "Q", "R", "S", "∧", "∨", "¬", "→", "↔", "(", ")"
    ];

    const shuffledSymbols = symbols.sort(() => Math.random() - 0.5);
    const symbolsContainer = document.getElementById('symbols-container');
    symbolsContainer.innerHTML = '';

    shuffledSymbols.forEach(symbol => {
        const symbolButton = document.createElement('button');
        symbolButton.innerText = symbol;
        symbolButton.style.margin = '5px';
        symbolButton.style.padding = '10px';
        symbolButton.style.fontSize = '16px';
        symbolButton.style.cursor = 'pointer';
        symbolButton.addEventListener('click', () => appendToLogicInput(symbol));
        symbolsContainer.appendChild(symbolButton);
    });
}

function appendToLogicInput(symbol) {
    const logicInput = document.getElementById('logic-input');
    logicInput.value += symbol + " ";
}

function deleteLastSymbol() {
    const logicInput = document.getElementById('logic-input');
    const symbolsArray = logicInput.value.trim().split(" ");
    symbolsArray.pop();
    logicInput.value = symbolsArray.join(" ") + (symbolsArray.length ? " " : "");
}

function clearAllInput() {
    const logicInput = document.getElementById('logic-input');
    logicInput.value = "";
}

function checkLogicPhrase() {
    const logicInput = document.getElementById('logic-input').value.trim();
    const feedbackElement = document.getElementById('feedback2');
    feedbackElement.style.display = "block";

    const correctPhrase = "(P ∧ Q) → (R ∨ ¬ S)";
    const normalizedInput = logicInput.replace(/\s+/g, '');
    const normalizedCorrectPhrase = correctPhrase.replace(/\s+/g, '');

    if (normalizedInput === normalizedCorrectPhrase) {
        playSound('success'); // ✅ Sonido de acierto
        feedbackElement.innerText = "¡Correcto! La puerta se abre en 3 segundos...";
        feedbackElement.style.color = "green";

        setTimeout(() => {
            advanceToNextTest('second-test', 'third-test');
        }, 3000);
    } else {
        playSound('error'); // ❌ Sonido de error
        feedbackElement.innerText = "Incorrecto. Intenta de nuevo.";
        feedbackElement.style.color = "red";

        setTimeout(() => {
            feedbackElement.style.display = "none";
        }, 2000);
    }
}

window.loadSecondTest = loadSecondTest;

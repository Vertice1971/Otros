const correctRules = {
    Evidencia: "Evidencia.png",
    Análisis: "Análisis.png",
    Síntesis: "Síntesis.png",
    Enumeración: "Enumeración.png",
};

const distractors = [
    "car.png",
    "clock.png",
    "cloud.png",
    "Dado.png",
    "hammer.png",
    "lock.png",
    "mirror.png",
    "rope.png",
];

let selectedIcon = null;

function loadFourthTest() {
    console.log("Cargando Prueba 4...");

    const testContainer = document.getElementById("fourth-test");
    testContainer.innerHTML = `
        <p id="instructions">Coloca en cada recuadro una Regla del Método.</p>
        
        <div id="icon-container"></div>
        
        <div id="rules-column">
            <div class="rule-slot" data-rule="Evidencia"></div>
            <div class="rule-slot" data-rule="Análisis"></div>
            <div class="rule-slot" data-rule="Síntesis"></div>
            <div class="rule-slot" data-rule="Enumeración"></div>
        </div>

        <p id="message">La puerta permanece cerrada</p>
    `;

    loadIcons();
    setupSlots();
}

function loadIcons() {
    const iconContainer = document.getElementById("icon-container");
    const allIcons = [...Object.values(correctRules), ...distractors];
    allIcons.sort(() => Math.random() - 0.5);

    allIcons.forEach((icon) => {
        const div = document.createElement("div");
        div.classList.add("icon");
        div.innerHTML = `<img src="png/${icon}" alt="${icon}">`;
        div.addEventListener("click", () => selectIcon(div, icon));
        iconContainer.appendChild(div);
    });
}

function selectIcon(iconElement, iconName) {
    if (iconElement.classList.contains("used")) return;

    if (selectedIcon) {
        selectedIcon.classList.remove("active");
    }

    selectedIcon = iconElement;
    selectedIcon.classList.add("active");
    selectedIcon.dataset.iconName = iconName;
}

function setupSlots() {
    const slots = document.querySelectorAll(".rule-slot");

    slots.forEach((slot) => {
        slot.addEventListener("click", () => {
            if (!selectedIcon) return;

            const ruleName = slot.dataset.rule;
            const iconName = selectedIcon.dataset.iconName;

            if (correctRules[ruleName] === iconName) {
                playSound('success');
                slot.classList.add("correct");
                slot.innerText = ruleName;
                slot.style.backgroundImage = `url("png/${iconName}")`;
                slot.style.backgroundSize = "contain";
                slot.style.backgroundRepeat = "no-repeat";
                slot.style.backgroundPosition = "center";

                selectedIcon.classList.add("used");
                selectedIcon.classList.remove("active");
                selectedIcon = null;

                checkCompletion();
            } else {
                playSound('error');
            }
        });
    });
}

function checkCompletion() {
    const correctSlots = document.querySelectorAll(".rule-slot.correct");
    const message = document.getElementById("message");

    if (correctSlots.length === 4) {
        message.innerText = "Has encontrado las cuatro reglas del método. La puerta se ha abierto.";
        message.style.color = "lime";

        setTimeout(() => advanceToNextTest("fourth-test", "fifth-test"), 6000);
    }
}

window.loadFourthTest = loadFourthTest;

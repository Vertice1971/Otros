function loadTenthTest() {
    updateRoomTitle(10);

    const container = document.getElementById("tenth-test");
    container.innerHTML = `
        <div id="tenth-room" style="position: relative; height: 220px; background-color: #111; margin-bottom: 20px; border: 2px solid white;">
            <div id="path-container" style="display: flex; gap: 5px; justify-content: center; position: absolute; bottom: 40px; left: 0; right: 0;">
                <div class="path-slot filled" data-step="0">Método</div>
                <div class="path-slot" data-step="1"></div>
                <div class="path-slot" data-step="2"></div>
                <div class="path-slot" data-step="3"></div>
                <div class="path-slot" data-step="4"></div>
                <div class="path-slot" data-step="5"></div>
                <div class="path-slot" data-step="6"></div>
                <div class="path-slot door-slot" data-step="7"></div>
                <div class="path-slot final-door">
                    <div id="francine-label" style="
                        position: absolute;
                        top: -25px;
                        left: 0;
                        width: 100%;
                        text-align: center;
                        font-weight: bold;
                        color: gray;
                        font-size: 14px;
                    ">Francine</div>
                    🚪
                </div>
            </div>
        </div>

        <p>Estás muy cerca pero necesitas completar con baldosas el camino hasta Francine...</p>

        <div id="block-pool" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-top: 20px;"></div>
    `;

    const correctOrder = [
        "Cuatro Reglas",
        "Tres dudas",
        "Cogito",
        "Ideas Adventicias",
        "Ideas Facticias",
        "Ideas Innatas",
        "Perfección"
    ];

    let selectedBlock = null;

    const pool = document.getElementById("block-pool");
    const shuffled = [...correctOrder].sort(() => Math.random() - 0.5);

    shuffled.forEach(name => {
        const block = document.createElement("div");
        block.innerText = name;
        block.className = "draggable-block";
        block.dataset.name = name;
        block.addEventListener("click", () => {
            if (selectedBlock === block) {
                block.classList.remove("selected-block");
                selectedBlock = null;
            } else {
                document.querySelectorAll(".draggable-block").forEach(b => b.classList.remove("selected-block"));
                block.classList.add("selected-block");
                selectedBlock = block;
            }
        });
        pool.appendChild(block);
    });

    document.querySelectorAll(".path-slot").forEach(slot => {
        slot.addEventListener("click", () => {
            if (!selectedBlock || slot.classList.contains("filled")) return;

            const step = parseInt(slot.dataset.step);
            const expected = correctOrder[step - 1];

            if (selectedBlock.dataset.name === expected) {
                slot.innerText = expected;
                slot.classList.add("filled");
                selectedBlock.remove();
                selectedBlock = null;
                playSound('success');
                checkPathCompletion();
            } else {
                playSound('error');
                slot.style.backgroundColor = "#660000";
                setTimeout(() => {
                    slot.style.backgroundColor = "";
                }, 600);
            }
        });
    });

    function checkPathCompletion() {
        const allSlots = document.querySelectorAll(".path-slot");
        const allFilled = [...allSlots].slice(0, 8).every(slot => slot.classList.contains("filled"));

        if (allFilled) {
            playSound('final_door'); // 🔓 Sonido especial de desbloqueo final
            const finalDoor = document.querySelector(".final-door");
            const label = document.getElementById("francine-label");

            finalDoor.classList.add("activated");
            label.style.color = "lime";

            setTimeout(() => {
                advanceToNextTest("tenth-test", "eleventh-test");
            }, 5000);
        }
    }
}

window.loadTenthTest = loadTenthTest;

function loadNinthTest() {
    updateRoomTitle(9);
    const container = document.getElementById("ninth-test");

    container.innerHTML = `
        <p style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">Encuentra la única certeza</p>
        <p style="margin-top: 0;">Mueve el cursor y encuentra el globo que contiene la verdad indudable.</p>
        <div id="balloon-zone" style="position: relative; width: 100%; height: 400px; overflow: hidden; border: 2px solid white; cursor: crosshair;">
            <div id="cogito-message" style="
                display: none;
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 28px;
                font-weight: bold;
                color: yellow;
                text-shadow: 2px 2px 5px black;
                text-align: center;
                z-index: 10;
            "></div>
        </div>
    `;

    const phrases = [
        "Todo podría ser un sueño",
        "Nada es evidente",
        "No hay forma de saber si existo",
        "Las matemáticas son geniales",
        "No tengo cuerpo",
        "Me noto pensando"
    ];

    const correctPhrase = "Me noto pensando";
    const zone = document.getElementById("balloon-zone");
    const zoneWidth = zone.offsetWidth;

    phrases.sort(() => Math.random() - 0.5);

    phrases.forEach((text) => {
        const balloon = document.createElement("div");
        balloon.innerText = text;
        balloon.style.position = "absolute";
        balloon.style.bottom = "-100px";
        balloon.style.width = "100px";
        balloon.style.height = "100px";
        balloon.style.borderRadius = "50%";
        balloon.style.background = "#ff4444";
        balloon.style.color = "white";
        balloon.style.display = "flex";
        balloon.style.alignItems = "center";
        balloon.style.justifyContent = "center";
        balloon.style.textAlign = "center";
        balloon.style.padding = "10px";
        balloon.style.fontWeight = "bold";
        balloon.style.fontSize = "14px";
        balloon.style.lineHeight = "1.1";
        balloon.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
        balloon.style.cursor = "crosshair";
        balloon.style.transition = "transform 0.2s";

        let bottomPos = -100;
        let leftPx = Math.random() * (zoneWidth - 120);
        let dx = (Math.random() * 0.8 + 0.4) * (Math.random() < 0.5 ? -1 : 1);
        let dy = Math.random() * 1.2 + 0.8;
        let phase = Math.random() * Math.PI * 2;
        let amplitude = Math.random() * 4 + 2;

        balloon.style.left = `${leftPx}px`;

        function animate() {
            bottomPos += dy;
            phase += 0.04 + Math.random() * 0.01;
            const offset = Math.sin(phase) * amplitude;

            leftPx += dx;
            if (leftPx <= 0 || leftPx >= (zoneWidth - 100)) {
                dx *= -1;
                leftPx = Math.max(0, Math.min(leftPx, zoneWidth - 100));
            }

            balloon.style.bottom = `${bottomPos}px`;
            balloon.style.left = `${leftPx + offset}px`;

            if (bottomPos > 420) {
                bottomPos = -100;
                leftPx = Math.random() * (zoneWidth - 120);
            }

            balloon._animFrame = requestAnimationFrame(animate);
        }

        balloon.addEventListener("click", () => {
            if (text === correctPhrase) {
                playSound('success'); // ✅ Acierto
                cancelAnimationFrame(balloon._animFrame);
                balloon.remove();
                showCogitoMessage();
            } else {
                playSound('error'); // ❌ Error
                balloon.style.transform = "scale(1.2) rotate(5deg)";
                setTimeout(() => {
                    balloon.style.transform = "none";
                }, 300);
            }
        });

        zone.appendChild(balloon);
        setTimeout(() => animate(), Math.random() * 1000);
    });

    function showCogitoMessage() {
        const message = document.getElementById("cogito-message");
        message.innerText = "COGITO ERGO SUM\nHas encontrado la certeza.";
        message.style.display = "block";
        setTimeout(() => {
            advanceToNextTest("ninth-test", "tenth-test");
        }, 3000);
    }
}

window.loadNinthTest = loadNinthTest;

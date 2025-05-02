function loadSeventhTest() {
    updateRoomTitle(7); // Título consistente con el resto

    const container = document.getElementById("seventh-test");

    const images = [
        { src: "png/Cubeta.png", alt: "Cubeta", correct: true },
        { src: "png/Calculadora.png", alt: "Calculadora", correct: false },
        { src: "png/Cerebrozzz.png", alt: "Cerebro", correct: false },
    ];

    images.sort(() => Math.random() - 0.5);

    const imagesHTML = images.map(img =>
        `<img src="${img.src}" class="option-image" data-correct="${img.correct}" alt="${img.alt}" />`
    ).join("");

    container.innerHTML = `
        <p id="subtitle" style="margin-bottom: 5px; font-size: 20px;">
            <strong>Profundizamos en qué ideas son evidentes</strong>
        </p>

        <p style="margin-top: 0;">¿Reconoces la tercera duda cartesiana?</p>
        <div id="image-choice" style="display: flex; justify-content: center; gap: 20px; margin-top: 20px;">
            ${imagesHTML}
        </div>
    `;

    const imgElements = container.querySelectorAll(".option-image");

    imgElements.forEach(img => {
        img.style.width = "120px";
        img.style.cursor = "pointer";
        img.style.transition = "transform 0.3s";

        img.addEventListener("click", () => {
            if (img.dataset.correct === "true") {
                playSound('success'); // ✅ Sonido de acierto
                showCorrectImage7(img);
            } else {
                playSound('error'); // ❌ Sonido de error
                vibrateImage(img);
            }
        });
    });
}

function vibrateImage(img) {
    let count = 0;
    const interval = setInterval(() => {
        img.style.transform = `translateX(${(count % 2 === 0 ? -10 : 10)}px)`;
        count++;
        if (count === 6) {
            clearInterval(interval);
            img.style.transform = "translateX(0)";
        }
    }, 50);
}

function showCorrectImage7(img) {
    const allImages = document.querySelectorAll(".option-image");
    allImages.forEach(other => {
        if (other !== img) other.style.display = "none";
    });

    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";
    wrapper.style.display = "inline-block";
    wrapper.style.marginTop = "30px";

    img.parentElement.replaceChild(wrapper, img);
    wrapper.appendChild(img);

    img.style.transition = "transform 0.5s";
    img.style.transform = "scale(2.5)";
    img.style.zIndex = "10";

    const label = document.createElement("div");
    label.innerText = "DUDA DEL GENIO MALIGNO";
    label.style.position = "absolute";
    label.style.top = "-40px";
    label.style.left = "0";
    label.style.right = "0";
    label.style.textAlign = "center";
    label.style.fontSize = "28px";
    label.style.fontWeight = "bold";
    label.style.color = "yellow";
    label.style.textShadow = "2px 2px 5px black";

    wrapper.appendChild(label);

    setTimeout(() => {
        advanceToNextTest("seventh-test", "eighth-test");
    }, 2000);
}

window.loadSeventhTest = loadSeventhTest;

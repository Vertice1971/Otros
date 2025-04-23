// Variable para llevar la cuenta del paso actual en la prueba 3
let thirdTestStep = 0;

function loadThirdTest() {
    updateRoomTitle(3); // Asegura que se muestra "Habitación 3"
    
    // Reiniciamos el paso actual
    thirdTestStep = 0;
    showThirdTestStep();
}

function getRandomButtons(opt1, opt2) {
    if (Math.random() < 0.5) {
        return `<button onclick="${opt1.onclick}">${opt1.text}</button>
                <button onclick="${opt2.onclick}">${opt2.text}</button>`;
    } else {
        return `<button onclick="${opt2.onclick}">${opt2.text}</button>
                <button onclick="${opt1.onclick}">${opt1.text}</button>`;
    }
}

function showThirdTestStep() {
    const container = document.getElementById('third-test');
    let html = '';

    switch (thirdTestStep) {
        case 0:
            let buttons0 = getRandomButtons(
                { onclick: "handleThirdTestChoice('ignore')", text: "Las ignoro" },
                { onclick: "handleThirdTestChoice('takeOne')", text: "Cojo una" }
            );
            html = `
                <p>Entras en una nueva habitación. La puerta por la que acabas de pasar se esfuma.</p>
                <p>Solo hay cuatro paredes, un techo y un suelo. En la pared donde estaba la puerta aparece la frase:</p>
                <blockquote><strong><em>"La verdad se encuentra en la intersección de los caminos"</em></strong></blockquote>
                <p>En el suelo encuentras dos vigas negras, muy estrechas y muy largas.</p>
                <p>¿Qué haces con las vigas?</p>
                ${buttons0}
            `;
            break;
        case 1:
            let buttons1 = getRandomButtons(
                { onclick: "handleThirdTestChoice('ignoreViga')", text: "No la uso" },
                { onclick: "handleThirdTestChoice('placeOne')", text: "La coloco en el suelo, extendiéndola de una pared a otra" }
            );
            html = `
                <p>Has cogido una viga.</p>
                <p>¿Qué haces con ella?</p>
                ${buttons1}
            `;
            break;
        case 2:
            let buttons2 = getRandomButtons(
                { onclick: "handleThirdTestChoice('ignoreSecond')", text: "La ignoro" },
                { onclick: "handleThirdTestChoice('takeSecond')", text: "La cojo" }
            );
            html = `
                <p>Bien, has colocado la primera viga correctamente.</p>
                <p>Ahora en el suelo se encuentra la otra viga.</p>
                <p>¿Qué haces?</p>
                ${buttons2}
            `;
            break;
        case 3:
            let buttons3 = getRandomButtons(
                { onclick: "handleThirdTestChoice('beside')", text: "Al lado de la otra" },
                { onclick: "handleThirdTestChoice('onTop')", text: "Encima de la otra" }
            );
            html = `
                <p>Has cogido la segunda viga.</p>
                <p>¿Cómo la colocas?</p>
                ${buttons3}
            `;
            break;
        case 4:
            let buttons4 = getRandomButtons(
                { onclick: "handleThirdTestChoice('dontCross')", text: "Nada" },
                { onclick: "handleThirdTestChoice('cross')", text: "Las pongo en cruz" }
            );
            html = `
                <p>Perfecto, ahora las dos vigas se superponen.</p>
                <p>¿Qué decides hacer?</p>
                ${buttons4}
            `;
            break;
        case 5:
            let buttons5 = getRandomButtons(
                { onclick: "handleThirdTestChoice('wrongIntersection')", text: "En cualquier lugar" },
                { onclick: "handleThirdTestChoice('center')", text: "En la coordenada (0,0)" }
            );
            html = `
                <p>Has cruzado las vigas. ¿Dónde deberías colocarte ahora?</p>
                ${buttons5}
            `;
            break;
        case 6:
            html = `
                <p>Al colocar las vigas de modo que se crucen en el centro de la habitación, se abre una trampilla en el suelo.</p>
                <p>Desciendes por una escalera y avanzas al siguiente reto.</p>
            `;
            container.innerHTML = html;
            playSound('success');
            setTimeout(() => {
                advanceToNextTest('third-test', 'fourth-test');
            }, 4000);
            return;
        default:
            html = `<p>Error en la secuencia.</p>`;
    }
    container.innerHTML = html;
}

function handleThirdTestChoice(choice) {
    switch (thirdTestStep) {
        case 0:
            if (choice === 'takeOne') {
                playSound('success');
                thirdTestStep = 1;
            } else {
                playSound('error');
                setTimeout(() => {
                    alert("No puedes ignorarlas. Debes coger al menos una viga.");
                }, 100);
            }
            break;
        case 1:
            if (choice === 'placeOne') {
                playSound('success');
                thirdTestStep = 2;
            } else {
                playSound('error');
                setTimeout(() => {
                    alert("No es la opción correcta.");
                }, 100);
            }
            break;
        case 2:
            if (choice === 'takeSecond') {
                playSound('success');
                thirdTestStep = 3;
            } else {
                playSound('error');
                setTimeout(() => {
                    alert("Ignorar la segunda viga no te ayudará a avanzar.");
                }, 100);
            }
            break;
        case 3:
            if (choice === 'onTop') {
                playSound('success');
                thirdTestStep = 4;
            } else {
                playSound('error');
                setTimeout(() => {
                    alert("Recuerda qué fue lo que inventó Descartes usando ejes.");
                }, 100);
            }
            break;
        case 4:
            if (choice === 'cross') {
                playSound('success');
                thirdTestStep = 5;
            } else {
                playSound('error');
                setTimeout(() => {
                    alert("Debes cruzarlas.");
                }, 100);
            }
            break;
        case 5:
            if (choice === 'center') {
                playSound('success');
                thirdTestStep = 6;
            } else {
                playSound('error');
                setTimeout(() => {
                    alert("Piénsalo bien.");
                }, 100);
            }
            break;
    }
    showThirdTestStep();
}

window.loadThirdTest = loadThirdTest;

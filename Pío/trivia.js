// trivia.js
let currentQuestionIndex = 0,
    score = 0,
    streak = 0,
    maxStreak = 0,
    selectedOption = null,
    answered = false;

const allQuestions = window.bankQuestions;
let questions = [];

function shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}

function startTrivia() {
    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
    document.getElementById('endScreen').classList.add('hidden');

    currentQuestionIndex = 0;
    score = 0;
    streak = 0;
    maxStreak = 0;

    questions = [...allQuestions];
    shuffleArray(questions);
    questions = questions.slice(0, 15);

    document.getElementById('totalQuestions').textContent = questions.length;
    showQuestion();
    updateGameInfo();
}

function showQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById('questionNumber').textContent =
        `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
    document.getElementById('questionText').textContent = q.question;

    const opts = document.getElementById('options');
    opts.innerHTML = '';
    q.options.forEach((o, i) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = o;
        div.addEventListener('click', () => selectOption(i));
        opts.appendChild(div);
    });

    document.getElementById('explanation').classList.add('hidden');
    document.getElementById('nextButton').disabled = true;
    selectedOption = null;
    answered = false;

    updateProgress();
}

function selectOption(i) {
    if (answered) return;
    const opts = document.querySelectorAll('.option');
    const q = questions[currentQuestionIndex];

    opts.forEach(x => x.classList.remove('selected'));
    opts[i].classList.add('selected');
    selectedOption = i;
    answered = true;

    if (i === q.correct) {
        opts[i].classList.replace('selected', 'correct');
        score += 10;
        streak++;
        maxStreak = Math.max(maxStreak, streak);
        if (streak >= 5) score += 5;
    } else {
        opts[i].classList.replace('selected', 'incorrect');
        opts[q.correct].classList.add('correct');
        streak = 0;
    }

    const exp = document.getElementById('explanation');
    exp.innerHTML = `<strong>Explicación:</strong> ${q.explanation}`;
    exp.classList.remove('hidden');
    document.getElementById('nextButton').disabled = false;
    updateGameInfo();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) endTrivia();
    else showQuestion();
}

function updateGameInfo() {
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('score').textContent = score;
    document.getElementById('streak').textContent = streak;
}

function updateProgress() {
    const pct = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = pct + '%';
}

function endTrivia() {
    document.getElementById('gameScreen').classList.add('hidden');
    document.getElementById('endScreen').classList.remove('hidden');

    const percent = Math.round((score / (questions.length * 10)) * 100);
    const fs = document.getElementById('finalScore');
    fs.textContent = `${score}/${questions.length * 10} puntos`;

    let cls = '', msg = '';
    if (percent >= 90) {
        cls = 'score-excellent';
        msg = '¡Excelente! Eres un verdadero experto en aves mediterráneas 🏆';
    } else if (percent >= 75) {
        cls = 'score-good';
        msg = '¡Muy bien! Tienes un gran conocimiento de la avifauna mediterránea 👏';
    } else if (percent >= 60) {
        cls = 'score-average';
        msg = 'Buen trabajo. Conoces bastante sobre las aves del Mediterráneo 👍';
    } else {
        cls = 'score-poor';
        msg = 'Sigue aprendiendo. Las aves mediterráneas son fascinantes 📚';
    }
    fs.className = `score-display ${cls}`;
    document.getElementById('scoreMessage').innerHTML = `<h3>${msg}</h3>`;
    document.getElementById('finalStats').innerHTML = `
        <strong>Estadísticas:</strong><br>
        Porcentaje de aciertos: ${percent}%<br>
        Racha máxima: ${maxStreak} respuestas consecutivas<br>
        Respuestas correctas: ${Math.round(score/10)} de ${questions.length}
    `;
}

function resetTrivia() {
    document.getElementById('startScreen').classList.remove('hidden');
    document.getElementById('gameScreen').classList.add('hidden');
    document.getElementById('endScreen').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('startButton').addEventListener('click', startTrivia);
    document.getElementById('nextButton').addEventListener('click', nextQuestion);
    document.getElementById('resetButton1').addEventListener('click', resetTrivia);
    document.getElementById('resetButton2').addEventListener('click', resetTrivia);
});

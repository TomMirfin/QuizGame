
const questionhtml = document.querySelector('.questionhtml');
const answer1 = document.querySelector('.answer1');
const answer2 = document.querySelector('.answer2');
const answer3 = document.querySelector('.answer3');
const answer4 = document.querySelector('.answer4');
const timeLeft = document.querySelector('.timer');

const question = ["What is the capital city of Australia?", 'Who painted the Mona Lisa?', 'Which country is known for producing the most coffee in the world?'];
const answers = ['Canberra', 'Leonardo da Vinci', 'Brazil'];
const wrongAnswers = [['Sydney', 'Melbourne', 'Brisbane'], ['Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'], ['Colombia', 'Ethiopia', 'Vietnam']];

let gameOver = false;
let currentQuestionIndex = 0;
let correct = 0;
const maxGuesses = 3;
const timerDuration = 10;
let timer;

function displayQuestionAndAnswers() {
    questionhtml.textContent = question[currentQuestionIndex];

    const allAnswers = [answers[currentQuestionIndex], ...wrongAnswers[currentQuestionIndex]];
    answer1.textContent = allAnswers[0];
    answer2.textContent = allAnswers[1];
    answer3.textContent = allAnswers[2];
    answer4.textContent = allAnswers[3];


    clearTimeout(timer);
    startTimer();
}

function startTimer() {
    timeRemaining = timerDuration;
    updateTimer();

    timer = setInterval(() => {
        timeRemaining--;
        updateTimer();

        if (timeRemaining === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function updateTimer() {
    // Update the timer element with the remaining time
    const timerElement = document.querySelector('.timer');
    timerElement.textContent = `Time Remaining: ${timeRemaining} seconds`;
}



displayQuestionAndAnswers();

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === answers[currentQuestionIndex]) {
        questionhtml.textContent = 'Correct!';
        correct++;
    } else {
        questionhtml.textContent = 'Oops, that was wrong';
    }

    currentQuestionIndex++;

    if (currentQuestionIndex === question.length || currentQuestionIndex === maxGuesses || timeRemaining === 0) {
        gameOver = true;
        questionhtml.innerHTML = `Game over! You got ${correct} correct out of ${question.length}`;
    } else {
        setTimeout(displayQuestionAndAnswers, 1000);
    }
}

answer1.addEventListener('click', function () {
    checkAnswer(answer1.textContent);
});

answer2.addEventListener('click', function () {
    checkAnswer(answer2.textContent);
});

answer3.addEventListener('click', function () {
    checkAnswer(answer3.textContent);
});

answer4.addEventListener('click', function () {
    checkAnswer(answer4.textContent);
});


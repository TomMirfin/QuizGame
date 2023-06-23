const question = ["What is the capital city of Australia?", 'Who painted the Mona Lisa?', 'Which country is known for producing the most coffee in the world?'];
const answers = ['Canberra', 'Leonardo da Vinci', 'Brazil'];
const wrongAnswers = [['Sydney', 'Melbourne', 'Brisbane'], ['Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'], ['Colombia', 'Ethiopia', 'Vietnam']];

let gameOver = false;
let guesses = 0;
let currentQuestionIndex = 0;
let correct = 0;
let maxGuesses = 3;

while (!gameOver) {
    const currentQuestion = question[currentQuestionIndex];
    console.log(currentQuestion);

    const allAnswers = [answers[currentQuestionIndex], ...wrongAnswers[currentQuestionIndex]];
    console.log('Available answers:');
    console.log(allAnswers);



    let userAnswer = prompt('What is your answer?');

    if (userAnswer === null) {
        console.log('Game exited.');
        gameOver = true;

    } else if (userAnswer === answers[currentQuestionIndex]) {
        console.log('Correct!');
        correct++
        currentQuestionIndex++; // Move to the next question
        if (currentQuestionIndex === question.length) {
            console.log(`well done! you got ${correct}, out of 3`);
            gameOver = true;
        }
    } else {
        console.log('Oops that was wrong');

        currentQuestionIndex++;
        if (currentQuestionIndex === question.length) {
            console.log(`Oh Dear, you got ${correct}, out of 3`);
            gameOver = true;
        }
    }
}

//      (guesses === maxGuesses) {
//         console.log('GAME OVER, you are our of lives');
//         guesses++;
//         gameOver = true;
//     }
// ###

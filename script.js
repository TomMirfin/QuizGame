const question = ["What is the capital city of Australia?", 'Who painted the Mona Lisa?', 'Which country is known for producing the most coffee in the world?'];
const answers = ['Canberra', 'Leonardo da Vinci', 'Brazil'];
const wrongAnswers = [['Sydney', 'Melbourne', 'Brisbane'], ['Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'], ['Colombia', 'Ethiopia', 'Vietnam']];


let gameOver = 3;
let guesses = 0;
if (guesses = gameOver) {
    console.timeLog('GAME OVER');

}
else {
    { console.log }
    const randomQuestion = Math.floor(Math.random() * question.length);
    console.log(question[randomQuestion]);


    const allAnswers = [answers[randomQuestion], ...wrongAnswers[randomQuestion]];

    console.log('Available answers:');
    console.log(allAnswers);

    let userAnswer = prompt('What is your answer?');

    if (userAnswer === answers[randomQuestion]) {
        console.log('Correct!');

    } else {
        console.log('Incorrect. Try again!');
        guesses++

    }
}
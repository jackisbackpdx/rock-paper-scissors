import makeGuess from './rps-check.js';
const button = document.getElementById('game-button');
const computerChoiceDisplay = document.getElementById('computer-choice');
const winSpan = document.getElementById('win-span');
const lossSpan = document.getElementById('loss-span');
const tieSpan = document.getElementById('tie-span');
let wins = 0;
let losses = 0;
let ties = 0;
lossSpan.textContent = losses;
winSpan.textContent = wins;
tieSpan.textContent = ties;


const getComputerChoice = (generateRandomNumber) => {
    if (generateRandomNumber === 0) {
        return 'rock';
    } else if (generateRandomNumber === 1) {
        return 'paper';
    } return 'scissors';
};


const updateResults = (makeGuess) => {
    if (makeGuess === 'lost') {
        losses += 1;
        computerChoiceDisplay.textContent = 'lost';
        lossSpan.textContent = losses;
    } else if (makeGuess === 'won') {
        wins += 1;
        computerChoiceDisplay.textContent = 'won';
        winSpan.textContent = wins;
    } else if (makeGuess === 'tie') {
        ties += 1;
        computerChoiceDisplay.textContent = 'tie';
        tieSpan.textContent = ties;
    }
};

button.addEventListener('click', function() {
    const selected = document.querySelector('input:checked');
    const userChoice = selected.value;
    console.log(userChoice);
    const generateRandomNumber = Math.floor(Math.random() * 3);
    const computerChoiceString = getComputerChoice(generateRandomNumber);
    console.log(computerChoiceString);
    const gameOutcome = makeGuess(userChoice, computerChoiceString);
    updateResults(gameOutcome);
    console.log(makeGuess(userChoice, computerChoiceString));
});

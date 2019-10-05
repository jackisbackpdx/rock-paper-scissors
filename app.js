import makeGuess from './rps-check.js';

const button = document.getElementById('game-button');
let winSpan = document.getElementById('win-span');
let lossSpan = document.getElementById('loss-span');
let tieSpan = document.getElementById('tie-span');
const computerDisplay = document.getElementById('computer-choice');

let wins = 0;
let losses = 0;
let ties = 0;

winSpan.textContent = wins;
lossSpan.textContent = losses;
tieSpan.textContent = ties;

const generateRandomNumber = Math.floor(Math.random() * 3);

const getComputerChoice = (num) => {
    if (num === 0) {
        return 'rock';
    } else if (num === 1) {
        return 'paper';
    } else if (num === 2){
        return 'scissors';
    }
};

const updateResults = (makeGuess) => {
    if (makeGuess === 'lost') {
        losses++;
        lossSpan.textContent = losses;
        computerDisplay.textContent = 'loss';
    } else if (makeGuess === 'win') {
        wins++;
        winSpan.textContent = wins;
        computerDisplay.textContent = 'win';
    } else if (makeGuess === 'tie') {
        ties++;
        tieSpan.textContent = ties;
        computerDisplay.textContent = 'tie';
    }
};

const playGame = () => {
    const selected = document.querySelector('input:checked');
    const userGuess = selected.value;
    const computerChoice = getComputerChoice(generateRandomNumber);
    const result = makeGuess(userGuess, computerChoice);
    updateResults(result);
    console.log(computerChoice);
};

button.addEventListener('click', playGame);

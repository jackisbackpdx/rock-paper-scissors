const button = document.getElementById('game-button');
let wins = 0;
let losses = 0;
let ties = 0;
let winSpan = document.getElementById('win-span');
let lossSpan = document.getElementById('loss-span');
let tieSpan = document.getElementById('tie-span');

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 3);
};

let getComputerChoice = () => {
    if (generateRandomNumber() === 0) {
        return 'rock';
    } else if (generateRandomNumber() === 1) {
        return 'paper';
    } 
    return 'scissors';
};

const selected = document.querySelector('input:checked');
const userChoice = selected.value;
const computerChoice = getComputerChoice();

let makeGuess = (userChoice, computerChoice) => {

    if (userChoice === computerChoice) {
        return 'tie';
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'lost';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'lost';
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'lost';
    } else if (userChoice === 'rock' && computerChoice === 'scissor') {
        return 'won';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'won';
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'won';
    }
};

const updateResults = (makeGuess) => {
    if (makeGuess === 'lost') {
        loss();
    } else if (makeGuess === 'win') {
        win();
    } else if (makeGuess === 'tie') {
        tie();
    }
};

const showResults = () => {
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    tieSpan.textContent = ties;
};

button.addEventListener('click', function() {
    makeGuess();
    updateResults();
    showResults();
});

const tie = () => {
    ties++;
    computerChoice.textContent = 'tie';
};

const win = () => {
    wins++;
    computerChoice.textContent = 'win';
};

const loss = () => {
    losses++;
    computerChoice.textContent = 'loss';
};
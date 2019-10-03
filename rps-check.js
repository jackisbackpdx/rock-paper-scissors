const makeGuess = (userChoice, computerChoice) => {
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

export default makeGuess;
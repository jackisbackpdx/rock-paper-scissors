const makeGuess = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'tie';
    } if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'lost';
    } if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'lost';
    } if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'lost';
    } if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'won';
    } if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'won';
    } if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'won';
    }
};

export default makeGuess;

export const WON = 'won';
export const LOST = 'lost';
export const TIE = 'tie';
const makeGuess = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return TIE;
    } if (userChoice === 'rock' && computerChoice === 'paper') {
        return LOST;
    } if (userChoice === 'paper' && computerChoice === 'scissors') {
        return LOST;
    } if (userChoice === 'scissors' && computerChoice === 'rock') {
        return LOST;
    } if (userChoice === 'rock' && computerChoice === 'scissors') {
        return WON;
    } if (userChoice === 'scissors' && computerChoice === 'paper') {
        return WON;
    } if (userChoice === 'paper' && computerChoice === 'rock') {
        return WON;
    }
};

export default makeGuess;

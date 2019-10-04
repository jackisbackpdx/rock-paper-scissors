// IMPORT MODULES under test here:
// import example from '../src/example.js';
import makeGuess from '../rps-check.js';
const test = QUnit.test;

test('should return tie if userChoice is the same as computerChoice', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userChoice = 'rock';
    const computerChoice = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const compareChoices = makeGuess(userChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(compareChoices, 'tie');
});

test('should return win if userChoice is rock and computerChoice is scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userChoice = 'rock';
    const computerChoice = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const compareChoices = makeGuess(userChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(compareChoices, 'won');
});

test('should return tie if userChoice is the same as computerChoice', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userChoice = 'rock';
    const computerChoice = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const compareChoices = makeGuess(userChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(compareChoices, 'tie');
});





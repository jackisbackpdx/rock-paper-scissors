// IMPORT MODULES under test here:
// import example from '../src/example.js';
import makeGuess from '../rps-check.js';
const test = QUnit.test;

test('time to test a function', function(assert) {
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


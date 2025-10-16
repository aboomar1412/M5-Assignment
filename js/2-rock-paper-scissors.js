let playAgain = 'y';

do {
  let userChoice = prompt('Choose rock, paper, or scissors').toLowerCase();

  // Validate user input
  if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
    alert('Invalid choice. Please choose rock, paper, or scissors.');
    continue;
  }

  // Generate computer choice (0, 1, 2)
  let computerNum = Math.floor(Math.random() * 3);
  let computerChoice = '';

  if (computerNum === 0) computerChoice = 'rock';
  else if (computerNum === 1) computerChoice = 'paper';
  else computerChoice = 'scissors';

  alert(`Computer chose ${computerChoice}`);

  // Determine the winner
  if (userChoice === computerChoice) {
    alert("It's a tie!");
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    alert('You win!');
  } else {
    alert('Computer wins!');
  }

  playAgain = prompt('Play again? (y or n)', 'y').toLowerCase();
} while (playAgain === 'y');

alert('Game over!');

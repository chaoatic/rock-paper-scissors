const hand = ['Rock', 'Paper', 'Scissors'];
let score = 0;

game();

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Choose your hand');
    const computerSelection = computerPlay();
    console.log(
      playRound(playerSelection, computerSelection) +
        ' Your current score is ' +
        score +
        '.'
    );
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = hand.indexOf(autoCapitalize(playerSelection));
  let result = playerSelection - computerSelection;
  if (result === 1 || result === -2) {
    score++;
  }
  return showResult(result, playerSelection, computerSelection);
}

function computerPlay() {
  return Math.floor(Math.random() * 3);
}

function autoCapitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function showResult(result, playerSelection, computerSelection) {
  switch (result) {
    case 0:
      return 'Tie';
    case 1:
    case -2:
      return `You Win! ${hand[playerSelection]} beats ${hand[computerSelection]}.`;
    case -1:
    case 2:
      return `You Lose! ${hand[computerSelection]} beats ${hand[playerSelection]}.`;
  }
}

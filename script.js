'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const numberElement = document.querySelector('.number');
const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const guessElement = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const displayMessage = function (message) {
  messageElement.textContent = message;
};

againButton.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  numberElement.style.width = '15rem';
});
checkButton.addEventListener('click', function () {
  const guess = Number(guessElement.value);
  console.log(guess, typeof guess);

  if (!guess) {
    messageElement.textContent = 'No number!';
  } else if (guess === secretNumber) {
    messageElement.textContent = 'Winner Winner Chicken Dinner!!!';
    document.body.style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';
    numberElement.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    if (score > 1) {
      messageElement.textContent =
        guess > secretNumber ? 'Too High!!' : 'Too Low!!';
      score--;
      scoreElement.textContent = score;
    } else {
      messageElement.textContent = 'You lost the game!';
      scoreElement.textContent = 0;
    }
  }
});

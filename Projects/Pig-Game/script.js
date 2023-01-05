'use strict';
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');
let score1El = document.querySelector('#score--0');
let score2El = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore1El = document.getElementById('current--0');
const currentScore2El = document.getElementById('current--1');


score1El.textContent = 0;
score2El.textContent = 0;
dice.classList.add('hidden');
let holdScore = [0, 0];
let currentScore = 0;
let currentPlayer = 0;
let isGameRunning = true;

const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
    player1El.classList.toggle('player--active');
    player2El.classList.toggle('player--active');
    currentPlayer = currentPlayer === 0 ? 1 : 0;
}

btnRoll.addEventListener('click', function () {
    if (isGameRunning) {
        const diceScore = Math.trunc(Math.random() * 6) + 1;
        dice.classList.remove('hidden');
        dice.src = `dice-${diceScore}.png`
        if (diceScore !== 1) {
            currentScore += diceScore;
            document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
        }
        else {
            switchPlayer();
        }
    }
})
btnHold.addEventListener('click', function () {
    if (isGameRunning) {
        holdScore[currentPlayer] += currentScore;
        document.querySelector(`#score--${currentPlayer}`).textContent = holdScore[currentPlayer];
        if (holdScore[currentPlayer] >= 20) {
            isGameRunning = false;
            document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active')
        }
        switchPlayer();
    }
})
btnNewGame.addEventListener('click', function () {
    score1El.textContent = 0;
    score2El.textContent = 0;
    dice.classList.add('hidden');
    holdScore = [0, 0];
    currentScore = 0;
    currentPlayer = 0;
    isGameRunning = true;
    player1El.classList.remove('player--winner');
    player2El.classList.remove('player--winner');
    player1El.classList.add('player--active');
    player2El.classList.remove('player--active');

})
console.log(currentPlayer);

'use strict';
// document.querySelector('.number').textContent = 3;
// document.querySelector('.message').textContent = 'Correct Number';
// let q = document.querySelector('.guess').value = 5;
// console.log(q);
// document.querySelector('.score').textContent = 18;

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.highscore').textContent);;
// document.querySelector('.number').textContent = randomNumber;

document.querySelector('.again').addEventListener('click', function () {
    score = Number(document.querySelector('.score').textContent = 20);
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = ' #222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    // document.querySelector('.number').textContent = randomNumber;
})
function lose() {
    document.querySelector('.message').textContent = 'You lose';
    document.querySelector('.score').textContent = 0;
}
function minus() {
    score--;
    document.querySelector('.score').textContent = score;
}
document.querySelector('.check').addEventListener('click', function () {
    let number = Number(document.querySelector('.guess').value);
    console.log(number, typeof number);
    if (!number) {
        document.querySelector('.message').textContent = 'Incorrect Number';
    }
    else if (number === randomNumber) {
        if (highScore < score) highScore = score;
        document.querySelector('.highscore').textContent = highScore;
        document.querySelector('.message').textContent = 'You Win';
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
    }
    else if (number > randomNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High';
            minus();
        }
        else {
            lose();
        }
    }
    else if (number < randomNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low';
            minus();
        }
        else {
            lose();
        }
    }
})

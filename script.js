"use strict";

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let scoreCount = Number(document.querySelector(".score").textContent);
let prevHighScore = 0;
let secretNumber = Math.ceil(Math.random() * 20);
console.log(secretNumber);
document.querySelector(".check").addEventListener("click", () => {
  const guessedNumber = Number(document.querySelector(".guess").value);
  console.log(typeof guessedNumber, guessedNumber);
  if (!guessedNumber) {
    document.querySelector(".message").textContent = `⛔ No Number!`;
  } else if (guessedNumber === secretNumber) {
    document.querySelector(".message").textContent = `🎉 Correct!`;
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = `#60b347`;
    document.querySelector(".number").style.width = `30rem`;
    if (scoreCount > prevHighScore) {
      document.querySelector(".highscore").textContent = scoreCount;
      prevHighScore = scoreCount;
    } else {
      document.querySelector(".highscore").textContent = prevHighScore;
    }
  } else if (guessedNumber > secretNumber) {
    if (scoreCount > 1) {
      document.querySelector(".message").textContent = `📈 Too High!`;
      scoreCount--;
    } else {
      document.querySelector(".message").textContent = `🏁 Game Over`;
    }
  } else if (guessedNumber < secretNumber) {
    if (scoreCount > 1) {
      document.querySelector(".message").textContent = `📉 Too Low!`;
      scoreCount--;
    } else {
      document.querySelector(".message").textContent = `🏁s Game Over`;
    }
  }
  document.querySelector(".score").textContent = scoreCount;
});
document.querySelector(".again").addEventListener("click", () => {
  scoreCount = 20;
  secretNumber = Math.ceil(Math.random() * 20);
  console.log(secretNumber);
  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = `Start guessing...`;
  document.querySelector("body").style.backgroundColor = `#222`;
  document.querySelector(".number").textContent = `?`;
  document.querySelector(".number").style.width = `15rem`;
  document.querySelector(".guess").value = "";
});

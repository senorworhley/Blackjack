let firstCard, secondCard;
let sum;
let hasBlackjack = false;
let isAlive = true;
let message = "";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

firstCard = getRandomInt(1, 11);
secondCard = getRandomInt(1, 11);

sum = firstCard + secondCard;

console.log("First Card: " + firstCard);
console.log("Second Card: " + secondCard);
console.log("Sum: " + sum);

if (sum <= 20) {
  message = "Do you want to draw a new card?";
  console.log(message);
} else if (sum === 21) {
  message = "Blackjack! You win!";
  hasBlackjack = true;
} else {
  message = "Bust! You lose!";
  isAlive = false;
}

console.log(message);
console.log(hasBlackjack);
console.log(isAlive);

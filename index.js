let firstCard, secondCard;
let sum;

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

if (sum < 21) {
  console.log("Do you want to draw a new card?");
} else if (sum === 21) {
  console.log("Blackjack! You win!");
} else {
  console.log("Bust! You lose!");
}

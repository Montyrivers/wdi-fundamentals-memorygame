// var cardOne = "Queen";
// var cardTwo = "Queen";
// var cardThree = "King";
// var cardFour = "King";
// console.log("User flipped " + cardOne + ' and ' + cardFour)

const cards = ["Queen", "Queen", "King", "King"];
const cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);

let cardTwo = cards[1];
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a matching pair!"); 
} else {
	alert("Sorry, try again!");
}
}
// var cardOne = "Queen";
// var cardTwo = "Queen";
// var cardThree = "King";
// var cardFour = "King";
// console.log("User flipped " + cardOne + ' and ' + cardFour)

const cards = ["Queen", "Queen", "King", "King"];
const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again!");
	}
}

//let cardOne = cards[0];
//cardsInPlay.push(cardOne);

//let cardTwo = cards[1];
//cardsInPlay.push(cardTwo);




function flipCard(cardId) {
	console.log("User Flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
if (cardsInPlay.length === 2) {
 checkForMatch();
}
}	


flipCard(0);
flipCard(2);



//  if (cardsInPlay[0] === cardsInPlay[1]) {
//   alert("You found a matching pair!"); 
// } else {
// 	alert("Sorry, try again!");
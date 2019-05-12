// var cardOne = "Queen";
// var cardTwo = "Queen";
// var cardThree = "King";
// var cardFour = "King";
// console.log("User flipped " + cardOne + ' and ' + cardFour)

//const cards = ["Queen", "Queen", "King", "King"];
const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
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
	console.log("User Flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
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
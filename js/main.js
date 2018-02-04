console.log("Up and running!");

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cards[0]);
console.log("User flipped queen");

var cardTwo = cards[3];

cardsInPlay.push(cards[3]);
console.log("User flipped king");

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match");
	}
	else {
		alert("sorry try again")
	}
}

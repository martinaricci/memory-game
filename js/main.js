console.log("Up and running!");

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped queen");

var cardThree = cards[2];
cardsInPlay.push(cardThree);
console.log("User flipped king");

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[2]) {
		alert("you found a match");
	}
	else {
		alert("sorry try again")
	}
}

console.log("Up and running!");

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cards[0] = "queen";

cardsInPlay.push(cards[0]);
console.log("User flipped queen");

var cards[3] = "king";

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

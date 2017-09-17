
var cards = [
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

var cardsInPlay = [];
var newPoints = []

var totalScore = function() {
	newPoints + newPoints
}

var checkForMatch = function() {
		if(cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match! 10points!");
			newPoints.push(10);
			console.log("Well done you got " + newPoints + " points!");
			totalScore();
		} else {
			alert("Sorry, try again.");
		}
	};



var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage);



	if(cardsInPlay.length === 2) {
		checkForMatch();
	}

};



var createBoard = function() {
	for(var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();


//I started trying to reset the board but havn't found a solution yet, I also started to figure out ,
//how to add points but also havn't finished this.

//Attempt1 at reseting cards! - this just adds more cards to the page, but the flipped cards are still visible,
//Could I hide the original cards?

var recreateBoard = function() {
	createBoard();	
}

var resetBoard = function() {
	var resetButton = document.getElementById('myButton')
	resetButton.addEventListener('click', recreateBoard);
}

 resetBoard();

// Other ideas - soemhow loop back to before the section of code where the cards are flipped.

// or When the reset button is clicked the cards need to flip back to show the back of the cards.










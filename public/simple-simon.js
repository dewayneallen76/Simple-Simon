(function(){
"use strict";
console.log('JS linked');


// Object of the game
// player clicks start to generate random order of colors
// colors need to fade out in on time out fade out
// player then needs to click the color generated in order of the random display in order to continue

var sequence = ["#red", "#blue", "#green", "#yellow"];
var playerClicks = [];
var clickIndex = 0;
var round = 0; 
  
function randomSequence () {
	var random = Math.floor(Math.random() * sequence.length);
	return sequence[random];
};

// Functions for playing game 
function startSequence() {
	clickIndex = 0;
	var randomColor = randomSequence();
// push random color generated to playerClicks array 
	playerClicks.push(randomColor); 
	$(randomColor).animate({
		opacity: "1"
	}, 800).animate({
		opacity: "0.5"
	}, 200)
	console.log(randomColor);
	console.log(playerClicks);
}
// Function to compare player click to color generated by the startSequence function. 
$('.box').click(function() {   // add click to buttons
	var clickId = "#" + this.id;
 	console.log(clickId);
	if(clickId === playerClicks[clickIndex]) {
		    clickIndex += 1;
		if(clickIndex == playerClicks.length) {
			clickIndex = 0;
// if the player click matches the random generated number the Round will increase. 
			round++; 								
			$('#round').html('Round: ' + round);
			setTimeout(function() {
				startSequence(); 
			}, 1000);
		}
	} else {
// when matches are not made alert 
		location.reload();
		alert('Game Over!');
	}
});

// event listeners for clicks 
$('#start').click(function() { 
	playerClicks = [];
	startSequence();
});

$('#red').click(function() {
	$('#red').animate({
		opacity: "1"
	},200).animate({
		opacity: "0.5"
	},800)
});

$('#blue').click(function() {
	$('#blue').animate({
		opacity: "1"
	},200).animate({
		opacity: "0.5"
	},800)
});

$('#green').click(function() {
	$('#green').animate({
		opacity: "1"
	},200).animate({
		opacity: "0.5"
	},800)
});

$('#yellow').click(function() {
	$('#yellow').animate({
		opacity: "1"
	},200).animate({
		opacity: "0.5"
	},800)
});

})();			
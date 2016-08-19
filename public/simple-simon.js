// (function(){
"use strict";
console.log('JS linked');
// Object of the game
// player clicks start to generate random order of colors
// colors need to fade out in on time out fade out
// player then needs to click the color generated in order of the random display in order to continue

var sequence = [".red", ".blue", ".green", ".yellow"];
var copy = [];
var elemLength = sequence.length;

// Functions for playing game 
function flashSquare() {
	var random = Math.floor(Math.random() * elemLength);
	var randomColor = sequence[random];
	copy.push(randomColor); // push random color generated to pattern array 
	$(randomColor).animate({
		opacity: "1"
	}, 800).animate({
		opacity: "0.5"
	}, 200)
	console.log(randomColor);
}
// Function for new round (still working on)
function newRound() { 
	// $('[data-round]').text(++this.round);
	sequence.push(this.randomNumber());
	copy = sequence.slice(0);
}
// Added function for registering clicks (still working on )
function registerClick(e) {
	var desiredResponse = copy.shift();
	var actualResponse = $(e.target).data('tile');
	correct = (desiredResponse === actualResponse);
}

// event listeners for clicks 
$('#start').click(function() { 
	// alert('Ready to Play?');
	flashSquare();
	// gamePattern();
});

$('.red').click(function() {
	$('.red').animate({
		opacity: "1"
	}, 200).animate({
		opacity: "0.5"
	},800)
});

$('.blue').click(function() {
	$('.blue').animate({
		opacity: "1"
	}, 200).animate({
		opacity: "0.5"
	},800)
});

$('.green').click(function() {
	$('.green').animate({
		opacity: "1"
	}, 200).animate({
		opacity: "0.5"
	},800)
});

$('.yellow').click(function() {
	$('.yellow').animate({
		opacity: "1"
	}, 200).animate({
		opacity: "0.5"
	},800)
});

// })();			
// (function(){
"use strict";
console.log('JS linked');
// Object of the game
// player clicks start to generate random order of colors
// colors need to fade out in on time out fade out
// player then needs to click the color generated in order of the random display in order to continue

var buttonColors = ["#red", "#green", "#yellow", "#blue"];
var pattern = [];
var playerPattern = [];
var elemLength = buttonColors.length;
// var random = Math.floor(Math.random() * elemLength);
// var randomColor = buttonColors[random];

// Functions for playing game 
function flashSquare() {
	var random = Math.floor(Math.random() * elemLength);
	var randomColor = buttonColors[random];
	pattern.push(randomColor); // push random color generated to pattern array 
	console.log(pattern);
	$(randomColor).animate({
		opacity: "1"
	}, 800).animate({
		opacity: "0.5"
	}, 200)
	console.log(randomColor);
}



// function gamePattern() {     // plays pattern
//     for (var i = 0; i < pattern.length; i++) {
//       flashSquare();
//       }
//       console.log(pattern);
// }






// event listeners for clicks 
$('#start').click(function() { 
	// alert('Ready to Play?');
	flashSquare();
	// gamePattern();
});

$('#red').click(function() {
	$('#red').animate({
		opacity: "1"
	}, 200).animate({
		opacity: "0.5"
	},800)
});

$('#blue').click(function() {
	$('#blue').animate({
		opacity: "1"
	}, 200).animate({
		opacity: "0.5"
	},800)
});

$('#green').click(function() {
	$('#green').animate({
		opacity: "1"
	}, 200).animate({
		opacity: "0.5"
	},800)
});

$('#yellow').click(function() {
	$('#yellow').animate({
		opacity: "1"
	}, 200).animate({
		opacity: "0.5"
	},800)
});

// })();			
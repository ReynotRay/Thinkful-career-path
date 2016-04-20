"use strict";
var passGuesses =[];

$(document).ready(function(){
 	$('.start-button').click(function() {
		$('.game')
		.css('display','block');
		$('.start-button').hide();
	});
	$('.guess-button').click(function() {
		var userGuessedNumber = $('.input-number') .val();
		guessTheNumber(userGuessedNumber);
	});
		$('.reset').click(function() {
    	location.reload();
	});
});
	
function guessTheNumber(guessedNumber) {

	var randomNumber = parseInt(Math.floor((Math.random() * 100) + 1));
	console.log('random',randomNumber);
	console.log('guessed', guessedNumber);
	//if random number and guessed number equal each other
	if (randomNumber == guessedNumber) {
		$('.guess-message').text('Winner!!!!');

	}	else {
		$('.guess-message').text('keep guessing!!!');
	}
		//if number is not an integer
  	if(guessedNumber % 1 !== 0){
  			alert('please input a number');
  			return true;
  		}
  		//if number is less than 0 or more than 100
  	if(guessedNumber < 0 || guessedNumber > 101){
  			alert('please choose a number between 1 and 100');
  			return true;
  		}
  		//generate feedback
  	if(randomNumber == guessedNumber){
		$('#feedback-message').text('winner!!!');
	}
  	else if ((randomNumber - guessedNumber) < 5){
		$('#feedback-message').text('hot');
	}
	else if ((randomNumber - guessedNumber) < 10){
		$('#feedback-message').text('warm');
	}
	else if ((randomNumber - guessedNumber) < 25){
		$('#feedback-message').text('cool');
	}
	else if ((randomNumber - guessedNumber) < 30){
		$('#feedback-message').text('horrible guess');
	}
}

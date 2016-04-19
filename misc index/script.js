"use strict";
var passGuesses =[];

$(document).ready(function(){

	$('.start-button').click(function() {
		$('.game')
		.css('display','block');
	});
	$('.guess-button').click(function() {
		var userGuessedNumber = $('.input-number') .val();
		guessTheNumber(userGuessedNumber);
	});


});
	




function guessTheNumber(guessedNumber) {

	var randomNumber = parseInt(Math.floor((Math.random() * 100) + 1));
	console.log('random',randomNumber);
	console.log('guessed', guessedNumber);
	//if random number and guessed number equal each other
	if (randomNumber == guessedNumber) {
		$('.guess-message').text('you guessed right');

	}	else {
		$('.guess-message').text('guess again');
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
  		//if number has been repeated maybe a function
  		if(pastGuesses.length > 0){
			$.each(pastGuesses,function(guess,value){
				if(guessedNumber == value){
					alreadyGuessed = true;
				}
			}); 
		}
		if(alreadyGuessed){
			alreadyGuessed = false;
			alert('You guessed this number already');
			return true;
		}
    return false;
	}






	//generate user feedback
function generateFeedback(){
	if(randomNumber == guessedNumber){
		winner();
	} else if(Math.abs(randomNumber - guessedNumber) < 10){
		userFeedback = 'hot';
	} else if(Math.abs(randomNumber - guessedNumber) < 20 && Math.abs(randomNumber - guessedNumber) > 9){
		userFeedback = ' Kinda hot';
	} else if(Math.abs(randomNumber - guessedNumber) < 30 && Math.abs(randomNumber - guessedNumber) > 19){
		userFeedback = 'less than warm';
	} else {
		userFeedback = 'cold';
	}
}


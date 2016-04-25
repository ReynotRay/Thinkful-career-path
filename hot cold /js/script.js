(function() {
    "use strict";
    var passGuesses = [];
    var globalRandomNumber;
    $(document).ready(function() {
        $('.start-button').click(function() {
            $('.game').css('display', 'block');
            $('.start-button').hide();
        });
        $('.guess-button').click(function() {
            var userGuessedNumber = $('.input-number').val();
            guessTheNumber(userGuessedNumber);
        });
        $('.reset').click(function() {
            location.reload();
        });
    });

    function guessTheNumber(guessedNumber) {
        if (globalRandomNumber === undefined) {
            globalRandomNumber = parseInt(Math.floor((Math.random() *
                100) + 1));
        }
        console.log('random', globalRandomNumber);
        console.log('guessed', guessedNumber);
        //if number is not an integer
        if (guessedNumber % 1 !== 0) {
            alert('please input a number');
            return true;
        }
        //if number is less than 0 or more than 100
        if (guessedNumber < 0 || guessedNumber > 101) {
            alert('please choose a number between 1 and 100');
            return true;
        }
        //generate feedback
        if (globalRandomNumber == guessedNumber) {
            $('#feedback-message').text('winner!!!');
        } else if (Math.abs(globalRandomNumber - guessedNumber) < 10) {
            return $('#feedback-message').text('hot');
        } else if (Math.abs(globalRandomNumber - guessedNumber) < 20 &&
            Math.abs(globalRandomNumber - guessedNumber) > 9) {
            return $('#feedback-message').text('warm');
        } else if (Math.abs(globalRandomNumber - guessedNumber) < 30 &&
            Math.abs(globalRandomNumber - guessedNumber) > 19) {
            return $('#feedback-message').text('cold');
        }
    }
}());
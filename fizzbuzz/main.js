$(document).ready(function() {
	$('#submit').on('click', function(e) {
		e.preventDefault();//prevent default means does not accpet any arguemnets
		var number = +$('#box').val();
		// section will be empty
		if (!$('section').is(':empty')) $('section').html('');
		// span is empty
		if (!$('span').is(':empty')) $('span').html('');
		// verify it is a real number
		if (number % 1 === 0) {
			appendFizzBuzz(number);
		} else {
			$('span').append('Input must be an integer.');
		}
	});
});
 var appendFizzBuzz = function (n) {
	for (var i = 1; i <= n; i++) {
		if (i % 15 === 0) {
			$('section').append('FizzBuzz');
		} else if (i % 3 === 0) {
			$('section').append('Fizz');
		} else if (i % 5 === 0) {
			$('section').append('Buzz');
		} else {
			$('section').append(i);
		}
		//This is the breakline after each number or fizzbuzz 
		$('section').append('<br/>');
	}
};
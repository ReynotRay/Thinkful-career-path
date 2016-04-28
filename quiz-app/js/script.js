
$(document).ready(function() {

	$('#start').click(function(){
		$('#intro').hide();
		q1Appear();
	})

	$('.answer').on('click', function(){
		console.dir(this);
		$('.answer').removeClass('selectedAnswer');
		
		$(this).addClass('selectedAnswer');
		console.log('you clicked an answer');
	})
});


//all functions go here
	function q1Appear(){
		$('#firstQuestion').show();
		$('#header-image').fadeIn('slow');
		$('#chicago').fadeIn('slow');
		$('.div-submit').fadeIn('slow');
		$('.progress').fadeIn('slow');
		$('#q1').fadeIn('slow');
	};


////checkAnswer here
function checkAnswer(question,answer){
	if (questionNumber == 'q1' && questionAnswer == 'chicago'){
		console.log('you fuckin got it');
	}

}

//pull attribute from li was cliked on
	$('#submitButton').on('click',function(){
		console.log('you click submit nothing special');
		console.dir($('.selectedAnswer')[0])
		
		var questionNumber = $('.selectedAnswer')[0].parentElement.id;
		var questionAnswer = $('.selectedAnswer')[0].attr("name");

		checkAnswer(questionNumber,questionAnswer);

	})




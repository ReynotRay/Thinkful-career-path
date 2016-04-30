var questions = [
	{
		photo:'',
		answers:['Miami', 'Chicago','St.Louis', 'Topeka']


	},

	{
		photo:'',
		answers:['Austin','New-york','LosAngeles','Laredo']
	}

	

];


var stage = 0;




$(document).ready(function() {

	$('#start').click(function(){
		init();
		question(0);
	});


	$('.answers').on('click','li', function(){
		$('.answer').removeClass('selectedAnswer');
		$(this).addClass('selectedAnswer');
	});


	    $('#submitButton').on('click', function () {

        var questionNumber = $('.selectedAnswer')[0].parentElement.id;
        var questionAnswer = $('.selectedAnswer').text();

        checkAnswer(questionNumber, questionAnswer);

    });





});
//all functions go here
	function init(){
		$('#intro').hide();
		$('#firstQuestion').show();
		$('#header-image').fadeIn('slow');
		$('#chicago').fadeIn('slow');
		$('.div-submit').fadeIn('slow');
		$('.progress').fadeIn('slow');
		
	}




function question(question_number) {
	for (var i = 0; i < questions[question_number].answers.length; i++) {
	$('.answers').append('<li class="answer">' + questions[question_number].answers[i] + '</li>');   		
	}

}

////checkAnswer here
function checkAnswer(q,a){

		var questionNumber = $('.selectedAnswer')[0].parentElement.id;
		var questionAnswer = $('.selectedAnswer').text();

	if (q == questionNumber && a == questionAnswer)
	{
		
		console.log('you fuckin got it');
		$('.answers li').remove();
		stage++;
		question(stage);
	}
	if (stage > 3){
		console.log('Thanks for playing')
	}

}




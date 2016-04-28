	// would like intro $('h1').delay(5000).fadeIn(5000);

$(document).ready(function() {

	$('#start').click(function(){
		$('#intro').hide();
		$('#firstQuestion').fadeIn('slow');
		$('#header-image').fadeIn('slow');
		$('#chicago').fadeIn('slow');
		$('#main-section').fadeIn('slow');
		$('.answers1').fadeIn('slow');
		$('.div-submit').fadeIn('slow');
		$('.progress').fadeIn('slow');
		
	})
	$('#chicago').click(function(){
		$('#chicago').hide();
		$('#new-york').fadeIn('slow');
	})		

});
	// var points = 0
	// var failed =[]
	// var questions = [

	// image:
	// answers:['Miami', 'Chicago', 'Japan', 'China'],
	// correctAnswer:'Miami'
	// ]
function checkAnswer(question,answer){
console.log('in checkAnswer' + question + '' + answer);
 if(question =='q1' && answer =='Chicago') {
 	alert('youre right');
 }

};

	
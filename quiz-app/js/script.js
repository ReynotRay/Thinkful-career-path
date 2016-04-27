	// would like intro $('h1').delay(5000).fadeIn(5000);

$(document).ready(function() {

	$('#start').click(function(){
		$('#intro').hide();
		$('#firstQuestion').fadeIn('slow');
		$('#main-header').fadeIn('slow');
		$('#main-section').fadeIn('slow');
		$('.div-submit').fadeIn('slow');
		$('.progress').fadeIn('slow');
		
	})
	$('.chicago').click(function(){
		console.log('youre right');

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
 	console.log('youre right');
 }

};

	
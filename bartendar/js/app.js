$(document).ready(function() {
    $('#submitButton').click(function(event) {
        event.preventDefault();
});

var questions = [
    '1. Do ye like yer drinks strong?',
    '2. Do ye like it with a salty tang?',
    '3. Are ye a lubber who likes it bitter?',
    '4. Would ye like a bit of sweetness with yer poison?',
    '5. Are ye one for a fruity finish?',
];

var ingredients = {
    strong: ['Glug of rum', 'slug of whisky', 'splash of gin'],
    salty: ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
    bitter: ['Shake of bitters', 'splash of tonic', 'twist of lemon peel'],
    sweet: ['Sugar cube', 'spoonful of honey', 'splash of cola'],
    fruity: ['Slice of orange', 'dash of cassis', 'cherry on top']
};

 var generateQuestions = "";
  for (var i = 0; i < questions.length; i++) {
        $('#generateQuestions').append('<li id="questions">'+ (questions[i]) +'<br>' +'<select class="input"><option value="yes">Yes</option><option value="no">No</option></select>'+'</li>');
    }



 // function displayIngredients {   
    // if (questions === yes){
        // strong();
        // salty();
        // bitter();
        // sweet();
        // fruit();
// }




});
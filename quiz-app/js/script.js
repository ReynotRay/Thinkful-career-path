$(document).ready(main);

var currentQuestion = 0;
var questions = [{
    photo: 'assets/chicago.jpeg',
    answers: ['Miami', 'Chicago', 'St.Louis', 'Topeka'],
    question: 'Where is this located?',
    correct: 'Chicago'

}, {
    photo: 'assets/new-york.jpeg',
    answers: ['Syracuse', 'New-York', 'Baltimore', 'Philadelphia'],
    question: 'Which East Coast City is this?',
    correct: 'New-York'

}, {
    photo: 'assets/los-angeles.jpeg',
    answers: ['San Diego', 'Oakland', 'Los Angeles', 'Sacramento'],
    question: 'Guess which California City',
    correct: 'Los Angeles'

}, {
    photo: 'assets/toronto.jpeg',
    answers: ['Toronto', 'Ontario', 'Montreal', 'Vancouver'],
    question: 'Which Canadian city is this?',
    correct: 'Toronto'

}];

function main() {
    $('.tryagain').hide();
    $('#start').click(start);
    $('.answers').on('click', 'li', selectQuestion);
    $('#submitButton').on('click', submitQuestion);
    $('.winner').hide();
}

function start() {
    generateUI();
    generateQuestion(currentQuestion);
}

function generateUI() {
    $('#intro').hide();
    $('#question_title').show();
    $('#header-image').fadeIn('slow');
    $('#chicago').fadeIn('slow');
    $('.div-submit').fadeIn('slow');
    $('.progress').fadeIn('slow');

}

function generateQuestion(question_number) {
    $('#question_title').text(questions[currentQuestion].question);
    $('#header-image img').attr("src", questions[currentQuestion].photo);
    for (var i = 0; i < questions[question_number].answers.length; i++) {
        $('.answers').append('<li class="answer">' + questions[question_number].answers[i] + '</li>');
    }

    if (currentQuestion === 0) {
        for (var i = 0; i < questions.length; i++) {
            $('.progress ul').
            append("<li>" + (i + 1) + "</li>");

        }
    }
}

function selectQuestion() {
    $('.answer').removeClass('selectedAnswer');
    $(this).addClass('selectedAnswer');
}

function submitQuestion() {
    checkAnswer($('.selectedAnswer').text());
}

function checkAnswer(answer) {
    if (answer == questions[currentQuestion].correct) {
        correctAnswer("Answer " + (currentQuestion + 1) + " - You're right!");
        $('.tryagain').hide();
    } else {
        $('.tryagain').show();
    }
}

function correctAnswer(message) {
    currentQuestion++;
    $('.answers li').remove();

    if (currentQuestion === questions.length) {
        markCompleted();
    return finished();

    }
    generateQuestion(currentQuestion);
    markCompleted();
}

function markCompleted() {
    $(".progress ul li:nth-child(" + currentQuestion + ")").css('background-color', 'green');
}
function finished(){
    $('.winner').fadeIn('slow');
    $('#question_title').hide();
    $('#header-image').hide();
    $('#chicago').hide();
    $('.div-submit').hide();
}   
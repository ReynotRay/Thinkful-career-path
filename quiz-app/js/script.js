$(document).ready(main);

var stage = 0;
var questions = [
    {
        photo: 'assets/chicago.jpeg',
        answers: ['Miami', 'Chicago', 'St.Louis', 'Topeka'],
        question: 'GUESS THE CITY SKY LINE 1'

    },

    {
        photo: 'assets/new-york.jpeg',
        answers: ['Syracuse', 'New-York', 'Baltimore', 'Philadelphia'],
        question: 'GUESS THE CITY SKY LINE 2'

    },
    {
        photo: 'assets/los-angeles.jpeg',
        answers: ['San Diego', 'Oakland', 'Los Angeles', 'Las Vegas'],
        question: 'GUESS THE CITY SKY LINE 3'

    },
    {
        photo: 'assets/toronto.jpeg',
        answers: ['Toronto', 'Ontario', 'Montreal', 'Vancouver'],
        question: 'GUESS THE CITY SKY LINE 4'

    }
];


function main() {
    $('#start').click(startOnClick);
    $('.answers').on('click', 'li', selectQuestion);
    $('#submitButton').on('click', submitQuestion);
}

function init() {
    $('#intro').hide();
    $('#question_title').show();
    $('#header-image').fadeIn('slow');
    $('#chicago').fadeIn('slow');
    $('.div-submit').fadeIn('slow');
    $('.progress').fadeIn('slow');
}

function startOnClick() {
    init();
    cityImage(stage);
    question(stage);
    $('#question_title').text(questions[stage].question);
    progress();

}

function progress() {
    for (var i = 0; i < questions.length; i++) {
        $('.progress ul').
        append("<li>" + (i + 1) + "</li>");

    }
}

function markCompleted() {
    $(".progress ul li:nth-child(" + stage + ")").css('background-color', 'green');

}

function selectQuestion() {
    $('.answer').removeClass('selectedAnswer');
    $(this).addClass('selectedAnswer');
}

function submitQuestion() {
    var selectedAnswer = $('.selectedAnswer'),
        questionAnswer = selectedAnswer.text();
    checkAnswer(questionAnswer);
}

function question(question_number) {
    for (var i = 0; i < questions[question_number].answers.length; i++) {
        $('.answers').append('<li class="answer">' + questions[question_number].answers[i] + '</li>');
    }
}

function correctAnswer(message) {
    stage++;
    $('.answers li').remove();
    console.log(message);
    cityImage(stage);
    question(stage);
    $('#question_title').text(questions[stage].question);
    markCompleted();
}


function cityImage() {
    $('#header-image img').attr("src", questions[stage].photo);
}

function checkAnswer(a) {

    var questionAnswer = $('.selectedAnswer').text();

    if (a == 'Chicago') {

        correctAnswer("Answer 1 - You're right!");

    } else if (a == 'New-York') {

        correctAnswer("Answer 2 - You're right!");

    } else if (a == 'Los Angeles') {

        correctAnswer("Answer 3 - You're right!");

    } else if (a == 'Toronto') {

        correctAnswer("Answer 4 - You're right!");

    } else {

        console.log('Wrong answer, please try again!');

    }

    if (stage > 3) {
        console.log('Thanks for playing')
    }

}
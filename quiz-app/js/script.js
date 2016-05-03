$(document).ready(main);

var stage = 0;
var questions = [
    {
        photo: 'assets/chicago.jpeg',
        answers: ['Miami', 'Chicago', 'St.Louis', 'Topeka'],
    },

    {
        photo: 'assets/new-york.jpeg',
        answers: ['Syracuse', 'New-York', 'Baltimore', 'Philadelphia'],

    },
    {
        photo: 'assets/los-angeles.jpeg',
        answers: ['San Diego', 'Oakland', 'Los Angeles', 'Las Vegas'],

    },
    {
        photo: 'assets/toronto.jpeg',
        answers: ['Toronto', 'Ontario', 'Montreal', 'Vancouver'],

    }
];

function main() {
    $('#start').click(startOnClick);
    $('.answers').on('click', 'li', selectQuestion);
    $('#submitButton').on('click', submitQuestion);
}

function init() {
    $('#intro').hide();
    $('#firstQuestion').show();
    $('#header-image').fadeIn('slow');
    $('#chicago').fadeIn('slow');
    $('.div-submit').fadeIn('slow');
    $('.progress').fadeIn('slow');
}

function startOnClick() {
    init();
    cityImage(stage);
    question(stage);
}

function selectQuestion() {
    $('.answer').removeClass('selectedAnswer');
    $(this).addClass('selectedAnswer');
}

function submitQuestion() {
    var selectedAnswer = $('.selectedAnswer'),
        questionNumber = selectedAnswer[0].parentElement.id,
        questionAnswer = selectedAnswer.text();
    checkAnswer(questionNumber, questionAnswer);
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
}

function cityImage() {
    $('#header-image img').attr("src", questions[stage].photo);
}

function checkAnswer(q, a) {

    var questionNumber = $('.selectedAnswer')[0].parentElement.id;
    var questionAnswer = $('.selectedAnswer').text();

    if (q == questionNumber && a == 'Chicago') {

        correctAnswer("Answer 1 - You're right!");
        $('.1').css('background-color','green');

    } else if (q == questionNumber && a == 'New-York') {

        correctAnswer("Answer 2 - You're right!");
        $('.2').css('background-color','green');
    } else if (q == questionNumber && a == 'Los Angeles') {

        correctAnswer("Answer 3 - You're right!");
        $('.3').css('background-color','green');
    } else if (q == questionNumber && a == 'Toronto') {

        correctAnswer("Answer 4 - You're right!");
        $('.4').css('background-color','green');
    } else {

        console.log('Wrong answer, please try again!');

    }

    if (stage > 3) {
        console.log('Thanks for playing')
    }

}
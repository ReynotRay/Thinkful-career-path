$(document).ready(function() {
    $('#search').click(function() {
        var education = $('#education').val();
        var program = $('#program').val();
        loadImage(education, program);
    });
});

function displayImage1(){
    $('.image4').show();
    $('.image').hide();
    $('.image2').show();
    $('.image3').show();
    $('.image5').hide();
    $('.image6').hide();
}
function displayImage2(){
    $('.image').show();
    $('.image2').show();
    $('.image3').hide();
    $('.image4').hide();
    $('.image5').hide();
    $('.image6').show();
}
function displayImage3(){
    $('.image').show();
    $('.image2').hide();
    $('.image3').show();
    $('.image4').hide();
    $('.image5').show();
    $('.image6').hide();
}
function displayImage4(){
    $('.image').show();
    $('.image2').show();
    $('.image3').show();
    $('.image4').hide();
    $('.image5').hide();
    $('.image6').hide(); 
}

function loadImage(education, program) {
    if (program === 'Scholarship Program' && education === 'High School') {
        displayImage1();
    }
    else if (program === 'Loan Program' && education === 'Kindergarten') {
        displayImage2();

    }
    else if (program === 'Loan Program' && education === 'High School') {
        displayImage3();
           
    }
    else if (program === 'Scholarship Program' && education === 'Kindergarten') {
        displayImage4();
    }
}
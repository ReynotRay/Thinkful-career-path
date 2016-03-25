$(document).ready(function() {
    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    }).mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    }).mousedown(function() {
        playHadouken('#hadouken-sound', 0, 0.5);
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate({
            'left': '1020px'
        }, 500, function() {
            $(this).hide();
            $(this).css('left', '520px');
        });
    }).mouseup(function() {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
    $(document).keydown(function(e) {
        if (e.which == 88) {
            playHadouken('#sound2', 0, 1);
            changePose('cool');
        }
    });
    $(document).keyup(function(e) {
        if (e.which == 88) {
            changePose('still');
        }
    });
});

function changePose(stace) {
    if (stace === 'cool') {
        $('.ryu-ready').hide();
        $('.ryu-cool').show();
    } else {
        $('.ryu-ready').show();
        $('.ryu-cool').hide();
    }
}

function playHadouken(id, element, volume) {
    $(id)[element].volume = volume;
    $(id)[element].load();
    $(id)[element].play();
}
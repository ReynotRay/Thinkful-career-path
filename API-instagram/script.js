$(function () {


    $('.search-button').click(function () {
        var search = $('.search').val();

        $.getJSON('https://api.instagram.com/v1/media/search?lat=30.26&lng=-97.74&distance=30' + search + '&r=json', function (data) {

            data.Search.forEach(function (.pics) {
                $('.pics').
                append('<div class="pics">' + '<h1>' + pics.link + '</div>');
            })
        });
    });


});


//Title
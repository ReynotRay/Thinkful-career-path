$(function () {


	    $('.search-button').click(function () {
        var search = $('.search').val();

        $.getJSON('http://www.omdbapi.com/?s=' + search + '&r=json', function (data) {

            data.Search.forEach(function (movie) {
                $('.movies').
                append('<div class="movie">' + '<h1>' + movie.Title + '</h1>' + '<p>Type: ' + movie.Type + '</p>' + '<span>Year: ' + movie.Year + '</span>' + '<img src=' + movie.Poster + '/>' + '</div>');
            })
        });
    });


});


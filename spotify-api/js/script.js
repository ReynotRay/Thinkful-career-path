 $(function () {


    $('.search-button').click(function () {
        var search = $('.search').val();

        $.getJSON('http://api.census.gov/data/2014/acs1?get=NAME,B01001_001E&for=state:*&key=89592dc686b405571d5d9697586e51becab604e3' + search + '&r=json', function (data) {

            data.Search.forEach(function (movie) {
                $('.movies').
                append('<div class="movie">' + '<h1>' + movie.label + '</h1>' + '<p>Type: ' + movie.Type + '</p>' + '<span>Year: ' + movie.Year + '</span>' + '<img src=' + movie.Poster + '/>' + '</div>');
            })
        });
    });


});
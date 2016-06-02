$(document).ready(function() {
    $('.movie-getter').submit(function(event) {
        // zero out results if previous search has run
        $('.results').html('');
        // get the value of the tags the user submitted
        var answerers = $(this).find("input[name='answerers']").val();
        getTopAnswerers(answerers);
    });
});

var getTopAnswerers = function(answerers) {
    var request = {
        tag: answerers,
        site: 'netflixroulette',
        order: 'desc',
        sort: 'creation'
    };
    var result = $.ajax({
            url: "http://netflixroulette.net/api/api.php?director=" + request.tag + "",
            data: request,
            dataType: "jsonp",
            type: "GET",
        })
        .done(function(result) {
            console.log(result);
            var searchResults = showSearchResults(request.tagged, result.items.length);
            console.log('done');
            $('.search-results').html(searchResults);

            $.each(result.items, function(i, item) {
                var answer = showAnswerer(item);
                console.log(results);
                $('.results').append(answer);

            });
        })
        .fail(function(jqXHR, error, errorThrown) {
            var errorElem = showError(error);
            $('.search-results').append(errorElem);
        });
}
var showAnswerer = function(answer) {
    //clone our results 
    var result = $('.templates .answerers').clone();

    console.log(result);
    var rating = result.find('.rating');
    rating.text(answer.summary);

    var posterimage = results.find('.posterimage');
    posterimage.attr('src', answer.user.poster);

    console.log('rating-inside');
    rating.text();

    var summary = result.find('.summary');
    summary.text(answer.summary);

}



var showSearchResults = function(query, resultNum) {
    var results = resultNum + ' results for <strong>' + query;
    return results;
};
// takes error string and turns it into displayable DOM element
var showError = function(error) {
    var errorElem = $('.templates .error').clone();
    var errorText = '<p>' + error + '</p>';
    errorElem.append(errorText);
};


$(document).ready(function() {
    $('.wrap-input').keyup(function(event) {
        if (event.keyCode == 13) {
            $('.slist').append('<li>' + $('.slist-input').val() +
                '</li>');
        };
    });
    $('.slist-add').click(function() {
        if ($('.slist-input').val().length) {
            $('.slist').append('<li>' + $('.slist-input').val() +
                '</li>');
        }
    });
    $('.slist').on('click', 'li', function() {
        $(this).css('text-decoration', 'line-through');
    });
    //remove items from slist
    $('.items').on('click', '.delete', function() {
        $(this).parent().fadeOut(300)
    });

});
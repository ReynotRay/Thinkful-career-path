$(document).ready(function() {
    $('.slist-add').keyup(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            $('slist').click();
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
    $('.slist').on('click', '.delete', function(e) {
        e.preventDefault();
        $(this).parent().remove()
    });
    //shows delete button
    $('.slist').on('mouseenter', 'li', function() {
        $(this).children('.delete').toggleClass('show');
    });
    $('.slist').on('mouseleave', 'li', function() {
        $(this).children('.delete').toggleClass('show');
    });
});
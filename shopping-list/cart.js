$(document).ready(function() {
$('.slist-add').click(function() {


    if ($('.slist-input').val().length) {
        $('.slist').append('<li>' + $('.slist-input').val() + '</li>');
            }
});


$('.slist').on('click', 'li', function() {
    $(this).css('text-decoration', );
});
$('#list').on('click', '.delete', function(e){e.preventDefault(); $(this).parent().remove()});



   $('.delete').on('click', 'li', function() {
        $(this).remove()
});
   });
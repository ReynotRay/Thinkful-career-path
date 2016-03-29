$(document).ready(function() {
    $('.list').on('click', 'li', function(event) {
        $(".cart").append($(this));
    });

	$('.cart').on('click','li', function(event) {
     $(".list").append($(this));
	});

    $(".checkout").click(function(){
        alert("Awesome choice!");

  	});
});
	
//would like to create button to remove shopping cart
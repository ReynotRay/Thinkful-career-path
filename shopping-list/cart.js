$(document).ready(function() {
	 	   $('.image1').mouseenter(function() {
        $('.image-plus1').show();
   		});
	  	$('.image1').mouseleave(function() {
        $('.image-plus1').hide();
       	});
      $('.image2').mouseenter(function() {
        $('.image-plus2').show();
      });
      $('.image2').mouseleave(function() {
        $('.image-plus2').hide();
        });
       $('.image3').mouseenter(function() {
        $('.image-plus3').show();
      });
      $('.image3').mouseleave(function() {
        $('.image-plus3').hide();
        });
       $('.image4').mouseenter(function() {
        $('.image-plus4').show();
      });
      $('.image4').mouseleave(function() {
        $('.image-plus4').hide();
        });
      $('.cart').mouseenter(function() {
        $('.image-plus1').hide();
      });

   		$('.list').on('click','li', function(event) {
        $(".cart").append($(this));
        $('.remove').show();
    	});
      });
		$('.cart').on('click','li', function(event) {
     $(".list").append($(this));
      $('.remove').hide();
		});
      

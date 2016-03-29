$(document).ready(function() {
	 	$('.item1').mouseenter(function() {
        $('.price').hide();
        $('.image-plus').show();
   		});

	  	$('.item1').mouseleave(function() {
        $('.image-plus').hide();
        $('.price').show();
       	});

   		$('.list').on('click', 'li', function(event) {
        $(".cart").append($(this));
    	});

		$('.cart').on('click','li', function(event) {
     	$(".list").append($(this));
		});

  	  	$('.cart').mouseenter(function() {
        $('.image-plus').hide();
        $('.delete').show();
  		});

  	    $('.cart').mouseleave(function() {
        $('.delete').hide();
        $('.price').show();
		}); 
  	
  		$(".checkout").click(function(){
        alert("Awesome choice!");
  		});
  	 });

 

 
	// 		<li class="items"><div class="box"></div><span>Chicken</span><img class="delete" src='images/delete.png'/></li>
//would like to create button to remove shopping cart
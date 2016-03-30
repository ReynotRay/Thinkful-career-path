$(document).ready(function(){

// use enter to add list items
	$('#item').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#add').click();
		};
	});	

//add list items
	$('#add').click(function(){
		var txtbox = document.getElementById('item');
		var txtval = txtbox.value;
		event.preventDefault();

		if(!$.trim($('#item').val())) {
			alert('Please enter text to add to the list');
		} else {
			$('<li class="items"></li>').appendTo('#list').html('<div class="box"></div><span>' + txtval + '</span><img class="delete" src="images/delete.png"/>');

		document.getElementById('item').value = '';
		};
	});

//delete list items
	$('#list').on('click', '.delete', function(e){e.preventDefault(); $(this).parent().remove()});

//cross off list items
	$('#list').on('click', 'li', function(){$(this).toggleClass('strike'); $(this).children('.box').toggleClass('Checked');});

//sortable list items
	$('#list').sortable({ axis: "y" });
	
//show delete button on mouse hover
	$('#list').on('mouseenter', 'li', function(){$(this).children('.delete').toggleClass('show');});
	$('#list').on('mouseleave', 'li', function(){$(this).children('.delete').toggleClass('show');});

});



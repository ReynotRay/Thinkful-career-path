// window.onload = getMyLocation;
// var maps;

// function getMyLocation (){
// 	if(navigator.getlocation){
// 		navigator.geolocation.getCurrentPosition(showPosition, showerror);
// 	} else {
// 		alert('no location support');
// 	}
// }

// $(document).ready(function() {
// 	$('.reset').click(function() {
//     location.reload();
// 	});      
// });  


// var map;
// function initMap() {
// 	map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: 29.4241, lng: -98.4936},
//         zoom: 6
//         });
//  }

//https://api.meetup.com/find/locations?photo-host=public&sig_id=164232862&sig=2e8c97691706f42bcdc30923ca51f830447b65d7

//MEETUP API key 183e4b486a5952514761c514b16755c

$document.ready(function(){

	$.get('https://api.meetup.com/2/cities' , function(data){

			results.forEach(function (meetup) {

			$('.muResults').append('<div class="muResults">' + meetup.distance + '</div>');


			})

	});

});
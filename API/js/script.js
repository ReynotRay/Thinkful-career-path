window.onload = getMyLocation;
var maps;

function getMyLocation (){
	if(navigator.getlocation){
		navigator.geolocation.getCurrentPosition(showPosition, showerror);
	} else {
		alert('no location support');
	}
}

$(document).ready(function() {
	$('.reset').click(function() {
    location.reload();
	});      
});  


var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 29.4241, lng: -98.4936},
        zoom: 6
        });
 }



//MEETUP API key 183e4b486a5952514761c514b16755c


// 	$.getJSON("http://api.meetup.com/2/open_events.json?zip=10001&radius=7&topic=technology&status=upcoming&time=,1w&key=183e4b486a5952514761c514b16755c=?", function (data) { 
// var htmlString = ""; 
// $.each(data.results, function (i, item) {
//  htmlString += '<h3><a href="' + item.event_url + '" target="_blank">' + item.name + '</a></h3>' + 'People attending: ' + item.yes_rsvp_count + item.time + item.group.name + item.maybe_rsvp_count; }); 
// $('#upcoming').html(htmlString);
// }); 
// }); 


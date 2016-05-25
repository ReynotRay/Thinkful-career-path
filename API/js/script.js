// $(document).ready(function(){

// 	//declaring variables
// 	var name = [];
// 	var memer
// 	var description = [];
// 	});

      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 29.4241, lng: -98.4936},
          zoom: 6
        });
      }

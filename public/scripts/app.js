
console.log("app is working!");



function initMap() {
    var bakersBeach = {lat: 41.508354, lng: -71.070333};
    var theBirdSanctuary = {lat: 41.507436, lng: -71.020238};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: bakersBeach
    });
    
    var marker = new google.maps.Marker({
      position: bakersBeach,
      map: map
    });

    
     var infoWindow = new google.maps.InfoWindow({
      content: "this shouldn't be here"
    });

    var birdMarker = new google.maps.Marker({
    	position: theBirdSanctuary,
    	map: map,
      title: 'The Bird Sanctuary'
    });

    birdMarker.addListener('click', function() {
      infoWindow.open(map, birdMarker);
      infoWindow.setContent("THIS IS CONTENT JUST FOR BIRD SANC");
    });
   


    map.addListener('click', function(e) {
      // placeMarkerAndPanTo(e.latLng, map);

// if window is open) then close it and return) else add a new spot

    });

//      var infowindow = new google.maps.InfoWindow({
//     content: contentString
//   });

//   var marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//     title: 'Uluru (Ayers Rock)'
//   });
//   marker.addListener('click', function() {
//     infowindow.open(map, marker);
//   });
// }








    function placeMarkerAndPanTo(latLng, map) {
      var marker = new google.maps.Marker({
        position: latLng,
        map: map
      });

      var spotLat = latLng.lat();
      var spotLng = latLng.lng();

      var spotDetails = {
        name: 'SurfSpotName',
        lat: spotLat,
        lng: spotLng,
        currentConditions: 'Head-High'
      };

      $.ajax({
        url:'/surfspots',
        type: 'POST',
        data: spotDetails,
        success:
        console.log("Sucess")
      });

      map.panTo(latLng);
      console.log(spotLat);
      console.log(spotLng);  //// this accesses the lat (and lng if needed) of the point created.
      
    }

}






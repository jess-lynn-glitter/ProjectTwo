
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

        var birdMarker = new google.maps.Marker({
        	position: theBirdSanctuary,
        	map: map
        });

        map.addListener('click', function(e) {
          placeMarkerAndPanTo(e.latLng, map);
        });

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

 // $.ajax({
 //        url: '/api/albums',
 //        type: 'POST',
 //        data: formData,
 //        success:
 //        function makeAlbum(data) {
 //          renderAlbum(data);
 //         $(this).trigger('reset');
        // function saveSurfData()



}






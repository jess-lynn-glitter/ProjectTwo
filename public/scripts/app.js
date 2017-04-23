
console.log("app is working!");

$(document).ready(function(){
    console.log( "ready!" );
});

  

 // var birdMarker = new google.maps.Marker({
 //      position: theBirdSanctuary,
 //      map: map,
 //      title: 'The Bird Sanctuary'
 //    });

//testing ajax request to get all spots

//when the page loads we need to get data from the backend, via ajax
  //use ajax to hit route to get all spots
  //for each spot we got back, run this function
    //get the lat, long, name from spots
    // var markerObject = new g.m.m({
    //   position: currentSpot.pos,
    //   map: map,
    //   content: currentSpot.content
//     })
// var spots = [
// {
//   "position": {"lat": 41.508354, "lng":-71.070333}, {}
// ];



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
      content: "Spot Name: "
    });


    var birdMarker = new google.maps.Marker({
    	position: theBirdSanctuary,
    	map: map,
      title: 'The Bird Sanctuary'
    });

    birdMarker.addListener('click', function(e) {

      infoWindow.open(map, birdMarker);
      infoWindow.setContent(infoWindow.content); //name of spot goes here); //can be anything
    });
   


    map.addListener('click', function(e) {
      
      placeMarkerAndPanTo(e.latLng, map);

// if window is open) then close it and return) else add a new spot

    });


    function placeMarkerAndPanTo(latLng, map) {
      var marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
      var newSpotForm = new google.maps.InfoWindow({
        content: "<form>" +
                  "Spot Name:" + "<br>" +
                  "<input type='text' id='spotName' name='spotName' placeholder=''>" +
                  "<br>" +
                  "<input type='submit' id='submit' value='submit'>" + "<br><br>" +
                  "</form>"
      
      });
      newSpotForm.open(map, marker);
      
      var spotLat = latLng.lat();
      var spotLng = latLng.lng();
      var spotDetails = {
        name:'',
        lat: spotLat,
        lng: spotLng,
        currentConditions: 'Pipeline-ish'
      };
      console.log(spotDetails);
    
          $('form').submit(function(event){
            event.preventDefault();
            
            console.log($('#spotName').val());

            spotDetails.name = ($('#spotName').val());
            if(spotDetails.name !== ""){
              $.ajax({
                url:'/surfspots',
                type: 'POST',
                data: spotDetails,
                success:
                  console.log("Sucess for GET")
              });
              newSpotForm.close();
            } else {
              alert("You didn't enter a name, try again");
              newSpotForm.close();
              return;
            }

          });
      } 

            
      // map.panTo(latLng);
      // console.log(spotLat);
      // console.log(spotLng);  //// this accesses the lat (and lng if needed) of the point created.
      
    

    $.get('/api/surfspots/')
      .done(function(data) {

        for(i=0; i<data.length;i++) {
          let surfSpotName = data[i].name;
          let surfSpotConditions = data[i].currentConditions;
          let surfSpotId = data[i]._id;
          let markerObject = new google.maps.Marker({
          position: (new google.maps.LatLng({lat: data[i].lat, lng: data[i].lng})),
          map: map,
          name: data[i].name
          });
          
          let surfWindow = new google.maps.InfoWindow({
            content: "Spot Name:"

          });
          
          surfWindowopen = false;
          markerObject.addListener('click', function(e) {
            if(surfWindowopen === true){
              surfWindow.close();
              surfWindowopen = false;
            } else {surfWindow.open(map, markerObject);
              surfWindow.setContent("Spot Name: " + surfSpotName + "<br>" +
                                    "Spot Conditions: " + surfSpotConditions + "<br><br>" +
                                    "<div id='editLinkHolder'><a href='#' id='editLink'>Edit</a></div><div id='deleteLinkHolder'><a href='#' id='deleteLink'>Delete</a></div>"); //name of spot goes here); //can be anything
              
                                    $('#deleteLink').click(function(){
                                      $.ajax({
                                      url:'http://localhost:3000/api/surfspots/' + surfSpotId,
                                      type: 'DELETE',
                                      data: surfSpotId,
                                      success:
                                        console.log("Sucess for GET")

                                      });
                                    });
          
                surfWindowopen = true;
              }
    
        });
      }

    });
  }
// google.maps.event.addListener(marker, 'click', function() {
//         if(!marker.open){
//             infowindow.open(map,marker);
//             marker.open = true;
//         }
//         else{
//             infowindow.close();
//             marker.open = false;
//         }
//         google.maps.event.addListener(map, 'click', function() {
//             infowindow.close();
//             marker.open = false;
//         });
//     });


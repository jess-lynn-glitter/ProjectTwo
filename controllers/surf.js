var db = require('../models');

//**STATIC HOMEPAGE**
function getSurfMap(req, res) {  
  res.render('surfHome');
}



//**GET ROUTE**
function getAllSpots(req, res) {
	db.Surfspot.find({}, function(err, surfspots){
	res.json(surfspots);
	});
}

//**GET BY ID**(NOT CERTAIN THIS IS USEFUL)
// function getOneSpot(req, res) {
// console.log(req.params.spotLat);//  *******
// var spotLat = req.params.spotLat;
// db.Surfspot.find({lat: spotLat}, function(err, surfspot){
// 	console.log(surfspot);
// 	res.json(surfspot);
// });
// }


//**DELETE A SPOT ROUTE**
function deleteSpot(req, res) {
	var spotId= req.params.conditions;
	db.Surfspot.remove({currentConditions: spotId}, function(err, surfspots){
		if(err) {return console.log('remove error' + err);}
		res.json(console.log("successful delete"));
	});
}



//**NEW SPOT POST ROUTE**

function postSurfSpot(req, res) {
	console.log(req.body);
	var newSurfspot = new db.Surfspot({
		name: req.body.name,
		lat: req.body.lat,
		lng: req.body.lng,
		currentConditions: req.body.currentConditions
	});

		newSurfspot.save(function(err, surfspot) {
			if(err) {return console.log ('save error', err);}
			// res.json(surfspot);
		});

}



module.exports = {
	getSurfMap: getSurfMap,
	postSurfSpot: postSurfSpot,
	getAllSpots: getAllSpots,
	deleteSpot: deleteSpot
};




// app.post('/api/albums', function createAlbum(req, res){
//  var newAlbum = new db.Album({
  
//   artistName: req.body.artistName,
//   name: req.body.name,
//   releaseDate: req.body.releaseDate,
//   genres: req.body.genres

//  });

//    newAlbum.save(function(err, album) {
//     if(err) {return console.log('save error', err);}
//     res.json(album);
//    }); 
// });
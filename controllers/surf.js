var db = require('../models');

// GET /
function getSurfMap(req, res) {  
  res.render('surfHome');
}

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
	postSurfSpot: postSurfSpot
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
var db = require('./models');

var someSpots = [
{
	name: "Brayton's Point",
	lat: 41.495846,
	lng: -71.115725,
	currentConditions: 'Good - Epic'
},
{
	name: "East Beach",
	lat:41.496291,
	lng:-71.038131,
	currentConditions: 'Not Very Good'
}
];

db.Surfspot.remove({}, function(err, surfspots){
	console.log("removed all surfspots");
});

db.Surfspot.create(someSpots, function(err, surfspot){
	if (err){
		return console.log('Error:', err);
	}
	console.log('Created new surfspot', surfspot.name);
	process.exit();
});
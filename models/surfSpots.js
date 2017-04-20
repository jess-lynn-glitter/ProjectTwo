var mongoose = require('mongoose');
Schema = mongoose.Schema;

var SurfspotSchema = new Schema({
	// _id: Number,
	name: String,
	lat: Number,
	lng: Number,
	currentConditions: String
});

var Surfspot = mongoose.model('Surfspot', SurfspotSchema);

module.exports = Surfspot;
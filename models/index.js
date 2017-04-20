var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Surfspot_Project");
 

module.exports.User = require('./user');
 module.exports.Surfspot = require('./surfSpots.js');
// module.exports.Campsite = require("./campsite.js.example");

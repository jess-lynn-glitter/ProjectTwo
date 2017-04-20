var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Surfspot_Project");
 

module.exports.User = require('./user');
 module.exports.Surfspot = require('./surfspots.js');
// module.exports.Campsite = require("./campsite.js.example");

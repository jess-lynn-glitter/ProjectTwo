var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/Surfspot_Project");
 

module.exports.User = require('./user');
 module.exports.Surfspot = require('./surfSpots.js');

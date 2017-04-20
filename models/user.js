var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Surfspot = require('./surfSpots');




var User = mongoose.Schema({
  local: {
    email: String,
    password: String,
  },
  spots: [Surfspot.schema]
});




User.methods.encrypt = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

User.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User);
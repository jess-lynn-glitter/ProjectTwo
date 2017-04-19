var passport = require('passport');

//GET /signup   ------  this will basically get the homepage, at the
					//	very least it grabs the login.ejs file.
function getSignup(request, response, next) {
    response.render('signup.ejs', { message: request.flash('signupMessage') });
}

//POST /signup
function postSignup(request, response, next){
	 var signupStrategy = passport.authenticate('local-signup', {
      successRedirect : '/',
      failureRedirect : '/signup',
      failureFlash : true
    });

    return signupStrategy(request, response, next);
}

//GET /login
function getLogin(request, response) {}

//POST /login
function postLogin(request, response, next) {}

//GET /logout
function getLogout(request, response){}

//Restricted page
function secret(request, response){}

module.exports = {
	getLogin: getLogin,
	postLogin: postLogin,
	getSignup: getSignup,
	postSignup: postSignup,
	getLogout: getLogout,
	secret: secret
}


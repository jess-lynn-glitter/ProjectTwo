

// GET /
function getSurfMap(req, res) {  
  res.render('surfHome');
}



module.exports = {
	getSurfMap: getSurfMap
};
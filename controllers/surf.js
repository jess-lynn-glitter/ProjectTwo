

// GET /
function getSurfMap(req, res) {  
  res.render('surfHome');
}

function postSurfSpot(req, res) {
	res.json(req.body);
}



module.exports = {
	getSurfMap: getSurfMap
};
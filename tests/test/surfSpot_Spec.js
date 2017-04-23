var Surfspot= require('../../models/surfSpots');
var expect = require('chai').expect;


describe('Surfspot', function() {
	describe('new' , function() {
		it('initializes a new surfspot', function(){
			var kirraPoint = new Surfspot();
			expect(typeof(kirraPoint)).to.equal('object');
		});
	});
	describe('number', function() {
		it('ensures latitude and longitude are numbers', function(){
			var jBay = new Surfspot();
			jBay.lat = 74;
			jBay.lng = 73;
			expect(typeof(jBay.lat)).to.equal('number');
		});
	});
});
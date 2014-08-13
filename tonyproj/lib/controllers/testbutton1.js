'use strict';

var mongoose = require('mongoose'),
	TestButton1 = mongoose.model('button1');

exports.index =function(req, res) {
	return testbutton1.find(function (err, button1) {
		if (!err) {
			return res.json(button1); 
		} else {
			return res.send(err);
		}
		
	});
};

exports.create = function(req, res, next) {
	var newTestButton1 = new TestButton1(req.body);
	newTestButton1.save(function(err) {
		if (err) return res.json("Error");
    	return res.send(200);
    });
};



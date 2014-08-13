'use strict';

var mongoose = require('mongoose'),
	DickJerker = mongoose.model('DickJerker');

exports.index =function(req, res) {
	return DickJerker.find(function (err, jerk) {
		if (!err) {
			return res.json(jerk); 
		} else {
			return res.send(err);
		}
		
	});
};

exports.create = function(req, res, next) {
	var newDickJerker = new DickJerker(req.body);
	newDickJerker.save(function(err) {
		if (err) return res.json("Error");
    	return res.send(200);
    });
};





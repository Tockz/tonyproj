'use strict'

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Button1 = new Schema ({
	stickit: Boolean,
});

mongoose.model('Button1', Button1);
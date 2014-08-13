'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DickJerker = new Schema ({
	stickit: Boolean,
});

mongoose.model('DickJerker', DickJerker);
var async = require('async');
var mongoose = require('mongoose');

// API - loads fixtures data into a mongoose model/collection;

exports.load = function(model, data, cb) {
	
	var Model = mongoose.model(model);

	Model.collection.remove(function(err) {
		if (err) cb("Unable to remove items from the " + model + " mongoose collection;");

		async.each(data, function(i, done) {
			var item = new Model(i);
			item.save(function(err) {
				if (err) cb(err);
				done();
			});
		}, function(err) {
			
			if (err) { cb(err); return }
			
			console.log(model + " fixture data loaded.")

		});

	});
}
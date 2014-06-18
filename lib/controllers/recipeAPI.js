var mongojs = require('mongojs');
var db = mongojs('mealWatcher', ['recipes']);

// routes set up in lib/routes.js

exports.findAll = function(req, res) {
	db.recipes.find(function(err, docs) {
		if (err) {
			console.log("Couldn't find the docs in the database.")
			res.statusCode = 404;
			return res.send('Error 404: recipes');
		}
		res.json(docs);
	});
};


exports.findById = function(req, res) {
	db.recipes.findOne({
		_id: mongojs.ObjectId(req.params.id)
	}, function(err, doc) {
		if (err) {
			console.log("Couldn't find that doc in the recipes.")
			res.statusCode = 404;
			dir
			return res.send('Error 404: recipes');
		}
		res.json(doc);
	})
}

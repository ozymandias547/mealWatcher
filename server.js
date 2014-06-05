var express = require('express');
var path = require('path');

var mongojs = require('mongojs');
var db = mongojs('mealWatcher', ['recipes']);

var app = express();

app.use(express.static(path.join(__dirname, 'client')));

var recipeRoutes = {
	findAll: function(req, res) {
		db.recipes.find(function(err, docs) {
			if (err) {
				console.log("Couldn't find the docs in the database.")
				res.statusCode = 404;
				return res.send('Error 404: recipes');
			}
			res.json(docs);
		});
	},
	findById: function(req, res) {
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
};


//JSON RESTful API routes
//Remote methods

app.get("/recipe", recipeRoutes.findAll);
app.get("/recipe/:id", recipeRoutes.findById);
// app.put("/recipe/:id", recipeRoutes.updateQuote)
// app.post("/recipe", recipeRoutes.addQuote)
// app.delete('/recipe/:id', recipeRoutes.deleteQuote)

app.listen(3000);
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('mealWatcher', ['recipes']);

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
				return res.send('Error 404: recipes');
			}
			res.json(doc);
		})
	}
}


//JSON RESTful API routes
app.get("/recipes", recipeRoutes.findAll)
app.get("/recipes/:id", recipeRoutes.findById)
// app.put("/recipes/:id", recipeRoutes.updateQuote)
// app.post("/recipes", recipeRoutes.addQuote)
// app.delete('/recipes/:id', recipeRoutes.deleteQuote)
// app.get("/recipes/random", recipeRoutes.findRandom)

app.listen(3000);
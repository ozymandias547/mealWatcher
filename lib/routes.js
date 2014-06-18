

module.exports = function(app) {

	/*-------------------------------------
	Login & registration routes
	---------------------------------------*/

	app.post("/login", function(req, res) {
		res.redirect('/app.html');
	});

	app.post("/register", function(req, res) {
		res.json(req.body);
	});

	/*-------------------------------------
	Recipe JSON RESTFUL service 
	---------------------------------------*/
	

	var recipeAPI = require('./controllers/recipeAPI.js');

	app.get("/recipe", recipeAPI.findAll);
	app.get("/recipe/:id", recipeAPI.findById);
	// app.put("/recipe/:id", recipeAPI.updateRecipe)
	// app.post("/recipe", recipeAPI.addRecipe)
	// app.delete('/recipe/:id', recipeAPI.deleteRecipe)

}
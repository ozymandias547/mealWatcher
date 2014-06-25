var passport = require('passport');


module.exports = function(app) {

	app.get("/", function(req, res) {
		
		if (req.isAuthenticated()) {
			res.render('app');
			return;
		}

		res.render('index');

	});

	/*-------------------------------------
	Login & registration routes
	---------------------------------------*/

	var users = require('../controllers/users.js')

	

	app.get("/register", function(req, res) {
		res.render('register', {message: req.flash('register_message')})
	});

	app.post("/register", users.create);
	app.post("/login", users.login);

	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	app.get("/app", isAuthenticated, function(req, res) {
		res.render('app');
	});
	

	/*-------------------------------------
	Recipe JSON RESTFUL service 
	---------------------------------------*/
	

	var recipeAPI = require('../controllers/recipeAPI.js');

	app.get("/recipe", recipeAPI.findAll);
	app.get("/recipe/:id", recipeAPI.findById);
	// app.put("/recipe/:id", recipeAPI.updateRecipe)
	// app.post("/recipe", recipeAPI.addRecipe)
	// app.delete('/recipe/:id', recipeAPI.deleteRecipe)

	app.get('/admin', isAuthenticated, function (req, res) {
		res.send("You're authenticated!");
	});

	app.get('/cookie', function (req, res) {
		res.json(req.cookies);
	});

}

// Middleware for authentication
function isAuthenticated(req, res, next) {
  
	console.log("seeing if your logged in...", req.isAuthenticated())

  if (req.isAuthenticated())
    return next();

  res.redirect("/");

}

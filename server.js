var express = require('express'),
 	path = require('path'),
 	bodyParser = require('body-parser'),
 	cookieParser = require('cookie-parser'),
 	session = require('express-session'),
 	MongoStore = require('connect-mongo')(session),
 	passport = require('passport'),
	app = express(),
 	morgan = require('morgan'),
 	config = require('./lib/config/config'),
	db = require('./lib/db/mongo').db;

require('./lib/models/User');
require('./lib/models/Recipe');
require('./lib/fixtures/recipeFixtures');
require('./lib/fixtures/userFixtures');
require('./lib/config/auth');

app.use(morgan('short'));		// HTTP logger for node
app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({
	secret: config.cookie_session,
	store: new MongoStore({
		url: config.db,
		collection: "session"
	})
}));

require('./lib/config/routes.js')(app);

app.listen(config.port, function() {
	console.log("listening on port " + config.port);
});
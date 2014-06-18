var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');
var app = express();

require('./lib/fixtures/recipeFixtures.js');
require('./lib/fixtures/userFixtures.js');

app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.urlencoded())

// Boostrap our routes
require('./lib/routes.js')(app);

app.listen(3000);
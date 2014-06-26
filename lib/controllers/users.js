'use strict';

var mongoose = require('mongoose'),
	User = mongoose.model('User'),
	passport = require('passport');

/**
 * Create user
 * requires: {password, email}
 * returns: {email}
 */

exports.create = function(req, res, next) {
	
	// check for passwords to be equal (is there a better place to do this?)
	if (req.body.password !== req.body.password2) {
		return res.render('register', { error : "Passwords didn't match.", username : req.body.username, email: req.body.email });
	}

	// create new user using mongoose schema
	var newUser = new User(req.body);

	//attempt to save the info to the DB
	newUser.save(function(err) {
		if (err) {
			return res.render("register", { error: err} );
		}

		req.logIn(newUser, function(err) {
			if (err) return next(err);
			return res.redirect('/app');
		});
	});
};

exports.login = function(req, res, next) {
	passport.authenticate('local', function(err, user, info) {

		var message = err || info;

		console.log(message);

		if (message) {
			res.render('index', {
				error: message
			});
			return;
		}

		req.logIn(user, function(err) {

			if (err) {
				res.render('index', {
					error: message
				})
				return;
			}

			res.redirect('/app');

		});
	})(req, res, next);
};
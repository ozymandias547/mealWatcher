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
	//create new user using mongoose schema
	var newUser = new User(req.body);

	//attempt to save the info to the DB
	newUser.save(function(err) {
		if (err) {
			return res.json(400, err);
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
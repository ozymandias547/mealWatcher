'use strict';

var mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = mongoose.model('User');

// Serialize sessions
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({ _id: id }, function (err, user) {
    done(err, user);
  });
});

// Use local strategy
passport.use('local', new LocalStrategy({
    usernameField: 'emailOrUsername',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, emailOrUsername, password, done) {
    User.findOne({ $or : [ { email: emailOrUsername }, { username : emailOrUsername } ] }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, 'Unable to find user.');
      }
      if (!user.authenticate(password)) {
        return done(null, false, 'Wrong password');
      }
      return done(null, user);
    });
  }
));


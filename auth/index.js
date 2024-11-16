const passport = require("passport")
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    console.log(user)
    done(null, user);
  })

passport.deserializeUser(function(user, done) {
    console.log(user)
    done(null, user);
  })

passport.use(new GoogleStrategy({
    clientID: "54611505914-rpn9dfa0vd0vihpgk5a3bkl14ickprig.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb){
    return cb(null, profile)
  }
));


var GitHubStrategy = require('passport-github').Strategy;

passport.use(new GitHubStrategy({
    clientID: "Ov23liqa3a8C3xkPLSMi",
    clientSecret: "c3f839be24651de9a15ea05aae7fe7343bb4144f",
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
  }
));
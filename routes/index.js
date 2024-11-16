var express = require('express');
var router = express.Router();

const passport = require("passport")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get("/success", (req,res)=>{
  res.send("ok")
})

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/success');
  });


  router.get('/auth/github',
    passport.authenticate('github'));
  
  router.get('/auth/github/callback', 
    passport.authenticate('github', { failureRedirect: '/' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/success');
    });

module.exports = router;

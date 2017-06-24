var express     = require("express"),
    router      = express.Router(),
    passport    = require("passport");

var User = require("../models/user");

router.get("/", function(req, res) {
   res.render('landing', {});
});

/* 
===================
    AUTH ROUTES
===================
*/
router.get("/register", function(req, res) {
    res.render('register');
});

router.post("/register", function(req, res) {
    var newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, function(err, user) {
        if(err) {
            req.flash("warning", err.message + "!");
            return res.redirect("/register");
        }
        passport.authenticate("local")(req, res, function() {
            req.flash("success", "Welcome to YelpCamp " + user.username + "!");
            res.redirect("/campgrounds");
        });
    });
});

router.get("/login", function(req, res) {
    res.render('login');
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
    }), function(req, res, err) {
    if(err){
        req.flash("warning", err.message);
        return res.redirect("/login");
    }
});

router.get("/logout", function(req, res) {
   req.logout();
   req.flash("success", "Logged out!");
   res.redirect("/campgrounds");
});

module.exports = router;
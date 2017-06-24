var Campground      = require("../models/campground"),
    Comment         = require("../models/comment"),
    middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
    // is user logged in?
    if(req.isAuthenticated()) {
        Campground.findById(req.params.id, function(err, foundCampground) {
            if(err) {
                req.flash("warning", "Campground post not found!");
                res.redirect("back");
            } else {
                // does user own the campground?
                if(foundCampground.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("warning", "You don't have pemission to do that!");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("warning", "You need to be logged in to do that!");
        res.redirect("back");
    }
        // redirect
    // if not, redirect
};

middlewareObj.checkCommentOwnership = function(req, res, next) {
     // is user logged in?
    if(req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, function(err, foundComment) {
            if(err) {
                res.redirect("back");
            } else {
                // does user own the comment?
                if(foundComment.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("warning", "You don't have permission to do that!");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("warning", "You need to be logged in to do that!");
        res.redirect("back");
    }
        // redirect
    // if not, redirect
};

middlewareObj.isLoggedIn = function(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    req.flash("warning", "You need to be logged in to do that!");
    res.redirect("/login");
};

module.exports = middlewareObj;
var express                 = require("express"),
    app                     = express(),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    localStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    methodOverride          = require("method-override"),
    flash                   = require("connect-flash"),
    seedDB                  = require("./seeds");

//seedDB(); // seed the database

var dbURL = process.env.DATABASEURL || "mongodb://localhost/yelp_camp_v6";

mongoose.connect(dbURL, function() {
   console.log("Connected to " + process.env.DATABASEURL);
});

// var userDB = "admin",
//     passDB = "password123";
    
// mongoose.connect(`mongodb://${userDB}:${passDB}@ds137882.mlab.com:37882/yelpcamplite`, function() {
//     console.log("MLab DB connected successfully!");
// }); //mongodb://localhost/yelp_camp_v6

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

var Campground          = require("./models/campground"),
    User                = require("./models/user"),
    Comment             = require("./models/comment"),
    campgroundRoutes    = require("./routes/campgrounds"),
    commentRoutes       = require("./routes/comments"),
    authRoutes          = require("./routes/auth");

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Me, myself and I",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.warning = req.flash("warning");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", authRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is all green!");
});
#Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

#Style the Navbar and Form
* Add a navbar to all templates
* Style the new camground form

#Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!

---

#Add Mongoose
* Install and configure Mongoose
* Setup campground model
* Use camground model inside of our routes

#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

RESTful routes
name    url         verb    description
INDEX   /dogs       GET     Display a list of all dogs
NEW     /dogs/new   GET     Displays form to make a new dog
CREATE  /dogs       POST    Add new dog to DB
SHOW    /dogs/:id   GET     Shows info about one dog

#Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly

#Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

#Add the Comment model
* Make our errors go away!
* Display comments on campground show page!

#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

#Style Show Page
* Add sidebar to show page
* Display comments nicely

#Finish Styling Show Page
* Add public directory
* Add custom stylesheet

#Add User Model
* Install all packages needed for Auth
* Define User model

#Auth Pt. 2 - Register
* Configure Passport
* Add Register routes
* Add Register template

#Auth Pt. 3 - Login
* Add Login routes
* Add Login template

#Auth Pt. 4 - Logout/Navbar
* Add Logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

#Auth Pt. 5 - Show/Hide Links
* Show/hide Auth links in navbar correctly

#Refactor The Routes
* Use Express router to reorganize all routes

#Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

#Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

#Adding in Flash!
* Demo working version
* Install and configure connect-flash
* Add boostrap alerts to header

#Adding Background Slider!
* Styling the landing page
* Making the animation for the background images
* Learning a bit of animation and keyframes
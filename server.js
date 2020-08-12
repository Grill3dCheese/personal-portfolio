require('dotenv').config();

var express         = require("express"),
    app             = express(),
	flash           = require("connect-flash"),
    bodyParser      = require("body-parser");

//require route
var contactRoutes	= require("./routes/contact"),
	indexRoutes		= require("./routes/portIndex")
	

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(flash());

app.use(require("express-session")({
    secret: "Dairy is the devil",
    resave: false,
    saveUninitialized: false 
}));

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use(indexRoutes);
app.use(contactRoutes);

app.listen(process.env.PORT || 3000, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});
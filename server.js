// Dependencies
let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let methodOverride = require("method-override");
let port = process.env.PORT || 8080;
let db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Set Handlebars.
let exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
let router = require("./controllers/burgers.js");
app.use("/", router);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({force:true}).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});

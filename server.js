const express = require("express");
const app = express();
const mysql = require("mysql");
const exphbs = require("express-handlebars");
const path = require("path");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "jobspecs_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  // start();
});

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "/public")));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.render("index", {defaultLayout: "landing"}));
app.get("/jobs", (req, res) => res.render("jobs", {defaultLayout: "main"}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// require('./app/routing/apiRoutes.js')(app);
// require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function() {
  console.log("App is listening on PORT " + PORT);
});
// This file uses Sequelize to manage data manipulation
// for all apropos http requests.

var express = require("express");

var router = express.Router();

var db = require("../models/");

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/userInfo");
});


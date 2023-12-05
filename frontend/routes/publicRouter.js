var express = require("express");
var router = express.Router();

//rota INDEX

router.get("/site", function (req, res, next) {
  res.render("public-site/index");
});

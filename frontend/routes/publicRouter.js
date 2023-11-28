var express = require("express");
var router = express.Router();

//rota INDEX

router.get("/", function (req, res, next) {
  res.render("public-site/index");
});

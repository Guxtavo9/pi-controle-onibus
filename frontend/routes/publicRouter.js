var express = require("express");
var router = express.Router();

//rota INDEX

router.get("/public-site", function (req, res, next) {
  res.render("public-site/index");
});

module.exports = router;
const express = require("express");
const router = express.Router();

router.get("/aguardando", function (req, res, next) {
  res.sendFile("catraca/aguardando.html", { root: "views" });
});

router.get("/aviso", function (req, res, next) {
  res.sendFile("catraca/aviso.html", { root: "views" });
});

router.get("/erro", function (req, res, next) {
  res.sendFile("catraca/erro.html", { root: "views" });
});

router.get("/sucesso", function (req, res, next) {
  res.sendFile("catraca/sucesso.html", { root: "views" });
});

module.exports = router;

var express = require("express");
var router = express.Router();

//rota INDEX

router.get("/", function (req, res, next) {
  res.render("admin/index");
});

// rota PASSSAGEIRO

router.get("/passageiro", function (req, res, next) {
  res.render("passageiro/listar");
});

// exibe unicamente um passageiro
router.get("/passageiro/exibir/:id", function (req, res, next) {
  res.render("passageiro/exibir");
});

router.get("passageiro/cadastrar", function (req, res, next) {
  res.render("paasageiro/cadastrar");
});

// rota MOTORISTA

router.get("/motorista", function (req, res, next) {
  res.render("motorista/listar");
});


// exibe unicamente um motorista
router.get("/motorista/exibir/:id", function (req, res, next) {
  res.render("motorista/exibir");
});


router.get("/motorista/cadastrar", function (req, res, next) {
  res.render("motorista/cadastrar");
});

// rota LINHA
router.get("/linha", function (req, res, next) {
  res.render("linhas/listar");
});

// exibe unicamente uma linha
router.get("/linha/exibir/:id", function (req, res, next) {
  res.render("linha/exibir");
});


router.get("/cadastrar", function (req, res, next) {
  res.render("linhas/cadastrar");
});

router.get("/exibir/:id", function (req, res, next) {
  res.render("linhas/exibir");
});

router.get("/editar/:id", function (req, res, next) {
  res.render("linhas/editar");
});

router.get("/excluir/:id", function (req, res, next) {
  res.render("linhas/excluir");
});

router.get("/qtd-horarios-por-linha", function (req, res, next) {
  res.render("linhas/qtdHorariosPorLinha");
});

module.exports = router;

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
  res.render("admin/passageiro/exibir");
});

router.get("/passageiro/cadastrar", function (req, res, next) {
  res.render("admin/passageiro/cadastrar");
});

router.get("/passageiro/editar/:id", function (req, res, next) {
  res.render("admin/passageiro/editar");
});

router.get("/passageiro/excluir/:id", function (req, res, next) {
  res.render("admin/passageiro/excluir");
});

// rota MOTORISTA

router.get("/motorista", function (req, res, next) {
  res.render("admin/motorista/listar");
});


// exibe unicamente um motorista
router.get("/motorista/exibir/:id", function (req, res, next) {
  res.render("admin/motorista/exibir");
});

router.get("/motorista/cadastrar", function (req, res, next) {
  res.render("admin/motorista/cadastrar");
});

router.get("/motorista/editar/:id", function (req, res, next) {
  res.render("admin/motorista/editar");
});

router.get("/motorista/excluir/:id", function (req, res, next) {
  res.render("admin/motorista/excluir");
});


// rota LINHA
router.get("/linha/linha", function (req, res, next) {
  res.render("admin/linha/listar");
});

// exibe unicamente uma linha
router.get("/linha/exibir/:id", function (req, res, next) {
  res.render("admin/linha/exibir");
});


router.get("/linha/cadastrar", function (req, res, next) {
  res.render("admin/linha/cadastrar");
});

router.get("/linha/editar/:id", function (req, res, next) {
  res.render("admin/linha/editar");
});

router.get("/linha/excluir/:id", function (req, res, next) {
  res.render("admin/linha/excluir");
});

router.get("/linha/qtd-horarios-por-linha", function (req, res, next) {
  res.render("admin/linha/qtdHorariosPorLinha");
});

module.exports = router;

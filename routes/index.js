var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const ModelFormation = require("../models/formation");
const ModelProject = require("../models/project");
const ModelNewsletter = require("../models/newsletter");

const db = require("../config/keys").mongoURI;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "index" });
  /* Lors des maintenance decommenter le code suivant */
  //res.render('maintenance', { title: 'index' });
});

/* GET catalogue formations page. */
router.get("/catalogue_formations", function (req, res, next) {
  ModelFormation.find({}).then((formations) => {
    res.render("catalogue_formations", {
      formations: formations,
    });
  });
});

router.get("/details_formation", (req, res) => {
  var url = req.url;
  var id = url.split("=")[1];

  ModelFormation.findById(id).then((formation) => {
    res.render("formation_details", {
      formation: formation,
    });
  });
});

/* GET our team page. */
router.get("/notre_equipe", function (req, res, next) {
  res.render("notre_equipe");
});

/* GET policy page. */
router.get("/charte_qualite", function (req, res, next) {
  res.render("charte_qualite");
});

/* GET about page. */
router.get("/a_propos", function (req, res, next) {
  res.render("a_propos");
});

/* POST project. */
router.post("/send_project", function (req, res, next) {
  const { email, telephone, message } = req.body;
  let errors = [];
  if (!email || !telephone || !message) {
    errors.push({ msg: "Veuillez renseigner tout les champs" });
  }

  if (errors.length > 0) {
    req.flash("error_msg", "Veuillez verifier tout les champs");
    res.redirect("/");
  } else {
    const newProject = new ModelProject({
      email,
      telephone,
      message,
    });
//Espace de cochage
    newProject
      .save()
      .then((result) => {
        req.flash("success_msg", "Votre devis a été enregistrer avec succès.");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  }
});

/* POST subscribe to newsletters. */
router.post("/subscribe_to_news_letters", function (req, res, next) {
  console.log("requete reçu");
  console.log(req.body.email);
  res.statusCode(200).send({"msg": "Ok"});
  /* const { email } = req.body;
  let errors = [];
  if (!email) {
    errors.push({ msg: "Veuillez renseigner tout les champs" });
  }

  if (errors.length > 0) {
    req.flash("error_msg", "Veuillez verifier tout les champs");
    res.redirect("/");
  } else {
    const newSuscriber = new ModelNewsletter({
      email
    });
    
newSuscriber
      .save()
      .then((result) => {
        req.flash("success_msg", "Inscription à la newsletters éffectuer avec succès.");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  } */
});

module.exports = router;

const express = require("express");
const burgers = require("../models/burgersModel");

const router = express.Router();

const getBurgers = (req, res) => {
  burgers.all((result) => {
    const value = {
      burgers: result,
    };
    console.log(value);
    res.render("index", value);
  });
};
const sendPublicFolder = (req, res) => {
  res.sendFile("../public/css/bulma.css");
};
const postBurgers = (req, res) => {
  const burgerName = req.body.burger_name;

  const callbackFunction = (result) => {
    res.status(300).redirect("/burgers");
  };

  burgers.create("burger_name", burgerName, callbackFunction);
};

const updateBurgers = (req, res) => {
  const { id } = req.params;
  const column = "eaten";
  const callbackFunction = (result) => {
    res.json(result);
  };

  burgers.update(column, id, callbackFunction);
};

router.get("/burgers", getBurgers);
router.get("/public", sendPublicFolder);
router.get("/api/burgers", getBurgers);
router.post("/api/burgers", postBurgers);
router.put("/api/burgers/:id", updateBurgers);

module.exports = router;

const express = require("express");
const burgers = require("../models/burgersModel");

const router = express.Router();

const getBurgers = (req, res) => {
  burgers.all((result) => {
    const value = {
      burgers: result,
    };
    res.render("index", value);
  });
};
const sendPublicFolder = (req, res) => {
  res.sendFile("../public/css/bulma.css");
};
const postBurgers = (req, res) => {
  const { burger_name } = req.body;
  const callbackFunction = (result) => {
    res.redirect("/burgers");
  };
  burgers.create("burger_name", burger_name, callbackFunction);
};

const updateBurgers = (req, res) => {
  const { id } = req.params;
  const column = "eaten";
  const callbackFunction = (result) => {
    res.send(result);
  };
  burgers.update(column, id, callbackFunction);
};

const deleteBurger = (req, res) => {
  const { id } = req.params;
  const table = "burgers";
  const callbackFunction = (result) => {
    res.send(result);
  };
  burgers.delete(table, id, callbackFunction);
};

router.get("/", getBurgers);
router.get("/burgers", getBurgers);
router.get("/public", sendPublicFolder);
router.get("/api/burgers", getBurgers);
router.post("/api/burgers", postBurgers);
router.put("/api/burgers/:id", updateBurgers);
router.delete("/api/burgers/:id", deleteBurger);

module.exports = router;

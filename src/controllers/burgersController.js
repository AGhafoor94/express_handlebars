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
const sendPublic = (req, res) => {
  res.sendFile("../public/css/bulma.css");
};
const postBurgers = (req, res) => {
  console.log(`Create new burger ${req.body}`);
  const { burger_name } = req.body.burger_name;
  const value = {
    burger_name,
  };
  const callbackFunction = (result) => {
    res.send(200);
  };
  burgers.create(value, callbackFunction);
};

const updateBurgers = (req, res) => {
  console.log(req.params);
  res.send("done");
};

router.get("/burgers", getBurgers);
router.get("/public", sendPublic);
router.post("/api/burgers", postBurgers);
router.put("/api/burgers?id", updateBurgers);

module.exports = router;

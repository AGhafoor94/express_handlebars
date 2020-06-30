const express = require("express");
const burgerModel = require("../models/burgersModel");
const burgers = require("../models/burgersModel");

const app = express();

const getBurgers = (req, res) => {
  burgerModel.all((data) => {
    const value = {
      burgers: data,
    };
    res.render("index", value);
  });
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
  burgerModel.create(value, callbackFunction);
};

const updateBurgers = (req, res) => {
  console.log(req.params);
  res.send("done");
};

app.get("/burgers", getBurgers);
app.post("/api/burgers", postBurgers);
app.put("/api/burgers?id", updateBurgers);

module.exports = app;

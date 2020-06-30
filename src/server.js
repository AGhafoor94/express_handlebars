// Requires

const express = require("express");
const expressHandlebar = require("express-handlebars");
const controller = require("./controllers/burgersController");

// Setting up the server

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware

app.use("/public", express.static("../public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(controller);

// Setting up handlebar engine and setting it to the main as default

app.engine("handlebars", expressHandlebar({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, () => {
  console.log(`Listening on port: http://localhost:${PORT}`);
});

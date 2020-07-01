const mysql = require("mysql");

const options = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "W@t3rB0ttle",
  database: "burgers_db",
};

const connection = mysql.createConnection(options);

const onConnect = (err) => {
  if (err) throw err;
  console.log("Connected to database");
};

connection.connect(onConnect);

module.exports = connection;
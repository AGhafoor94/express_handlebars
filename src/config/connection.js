const mysql = require("mysql");
let connection;

const jawDBOptions = {
  use_env_variable: "JAWSDB_URL",
  host: process.env.HOSTNAME,
  port: 3306,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};
connection = mysql.createConnection(jawDBOptions);

const onConnect = (err) => {
  if (err) throw err;
  console.log("Connected to database");
};

connection.connect(onConnect);

module.exports = connection;

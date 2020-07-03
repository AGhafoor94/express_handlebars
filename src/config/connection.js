const mysql = require("mysql");
let connection;

const jawDBOptions = {
  host: "lyl3nln24eqcxxot.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "l4u7z2v6lz1xk0e9",
  password: "nubl93gtm43oclyk",
  database: "otuqpo7lkqcvm8p4",
};
connection = mysql.createConnection(jawDBOptions);

const onConnect = (err) => {
  if (err) throw err;
  console.log("Connected to database");
};

connection.connect(onConnect);

module.exports = connection;

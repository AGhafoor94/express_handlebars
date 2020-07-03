const mysql = require("mysql");
let connection;

if (process.env.JAWDB_URL) {
  connection = mysql.createConnection(process.env.JAWDB_URL);
} else {
  const options = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db",
  };
  connection = mysql.createConnection(options);
}

const onConnect = (err) => {
  if (err) throw err;
  console.log("Connected to database");
};

connection.connect(onConnect);

module.exports = connection;

const mysql = require("mysql");

const options = {
  host: "ec2-34-225-162-157.compute-1.amazonaws.com",
  port: 5432,
  user: "suaaogossppkye",
  password: "d2a9049500574468ee14172221c05195b77decec57b7ae24b59d8a3f5a967e25",
  database: "d6gdpvldhaarkf",
  uri:
    "postgres://suaaogossppkye:d2a9049500574468ee14172221c05195b77decec57b7ae24b59d8a3f5a967e25@ec2-34-225-162-157.compute-1.amazonaws.com:5432/d6gdpvldhaarkf",
};

const connection = mysql.createConnection(options);

const onConnect = (err) => {
  if (err) throw err;
  console.log("Connected to database");
};

connection.connect(onConnect);

module.exports = connection;

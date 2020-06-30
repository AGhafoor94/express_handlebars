const connection = require("../config/connection");

// Still need to add parameters for create and update and queries

const orm = {
  all: (table, callbackFunction) => {
    const query = `select * from ${table}`;
    const onQuery = (err, res) => {
      if (err) throw err;
      callbackFunction(res);
    };
    connection.query(query, onQuery);
  },
  create: (table, value, callbackFunction) => {
    const query = `insert into ${table} values ${value}`;
    const onQuery = (err, res) => {
      if (err) throw err;
      callbackFunction(res);
    };
    connection.query(query, onQuery);
  },
  update: (table, callbackFunction) => {},
};

module.exports = orm;

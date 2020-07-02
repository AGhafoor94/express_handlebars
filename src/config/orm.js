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
  create: (table, columnName, value, callbackFunction) => {
    const query = `insert into ${table} (${columnName}) values ("${value}")`;
    const onQuery = (err, res) => {
      if (err) throw err;
      callbackFunction(res);
    };
    connection.query(query, onQuery);
  },
  update: (table, column, value, id, callbackFunction) => {
    const query = `update ${table} set ${column} = ${value} where ${id}`;
    const onQuery = (err, res) => {
      if (err) throw err;
      callbackFunction(res);
    };
    connection.query(query, onQuery);
  },
};

module.exports = orm;

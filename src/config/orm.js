const connection = require("../config/connection");

// Still need to add parameters for create and update and queries

const all = (table, callbackFunction) => {
  const query = `select * from ${table}`;
  const onQuery = (err, res) => {
    if (err) throw err;
    callbackFunction(res);
  };
  connection.query(query, onQuery);
};

const create = (table, value, callbackFunction) => {
  const query = `insert into ${table} values ${value}`;
  const onQuery = (err, res) => {
    if (err) throw err;
    callbackFunction(res);
  };
  connection.query(query, onQuery);
};

const update = (table, callbackFunction) => {};

const orm = {
  all,
  create,
  update,
};

modules.exports = orm;

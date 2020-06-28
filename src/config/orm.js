const connection = require("../config/connection");

// Still need to add parameters for create and update and queries

const orm = {
  all: (table, callbackFunction) => {
    const query = `select * from ${table}`;
    connection.query(query, (err, res) => {
      if (err) throw err;
      callbackFunction(res);
    });
  },
  create: (table, callbackFunction) => {},
  update: (table, callbackFunction) => {},
};

modules.exports = orm;

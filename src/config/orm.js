const connection = require("../config/connection");

const orm = {
  all: (table, callbackFunction) => {
    const query = `select * from ${table}`;
    connection.query(query, (err, res) => {
      if (err) throw err;
      callbackFunction(res);
    });
  },
  create: () => {},
  update: () => {},
};

modules.exports = orm;

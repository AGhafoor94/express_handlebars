const orm = require("../config/orm");

// Still need to add parameters for create and update

const burgers = {
  all: (callbackFunction) => {
    orm.all("burgers", (res) => {
      callbackFunction(res);
    });
  },
  create: (column, value, callbackFunction) => {
    orm.create("burgers", column, value, (res) => {
      callbackFunction(res);
    });
  },
  update: (column, id, callbackFunction) => {
    orm.update("burgers", column, id, (res) => {
      callbackFunction(res);
    });
  },
  delete: (table, id, callbackFunction) => {
    orm.delete(table, id, (res) => {
      callbackFunction(res);
    });
  },
};

module.exports = burgers;

const orm = require("../config/orm");

// Still need to add parameters for create and update

const burgers = {
  all: (callbackFunction) => {
    orm.all("burgers", (res) => {
      callbackFunction(res);
    });
  },
  create: (value, callbackFunction) => {
    orm.create("burgers", value, (res) => {
      callbackFunction(res);
    });
  },
  update: (callbackFunction) => {
    orm.update("burgers", (res) => {
      callbackFunction(res);
    });
  },
};

module.exports = burgers;

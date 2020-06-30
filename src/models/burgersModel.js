const orm = require("../config/orm");

// Still need to add parameters for create and update

const all = (callbackFunction) => {
  orm.all("burgers", (res) => {
    callbackFunction(res);
  });
};
const create = (value, callbackFunction) => {
  orm.create("burgers", value, (res) => {
    callbackFunction(res);
  });
};
const update = (callbackFunction) => {
  orm.update("burgers", (res) => {
    callbackFunction(res);
  });
};
const burgers = {
  all,
  create,
  update,
};

module.exports = burgers;

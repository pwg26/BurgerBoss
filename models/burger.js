const orm = require("../config/orm.js");

const burger = {
  selectAll(cb) {
    orm.Selectall("burgers", (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  insertOne(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, (res) => cb(res));
  },
  updateOne(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, (res) => cb(res));
  },
};

module.exports = burger;

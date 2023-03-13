const mongoose = require("mongoose");

const Person = mongoose.model("Person", {
  name: String,
  username: String,
});

module.exports = Person;

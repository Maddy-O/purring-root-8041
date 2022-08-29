// importing mongoose dependencies
const mongoose = require("mongoose");

//running the mongoAtlas/mongoCloud server
module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://maddy:maddy@cluster0.hony6zc.mongodb.net/?retryWrites=true&w=majority"
  );
};

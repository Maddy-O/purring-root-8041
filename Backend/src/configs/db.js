const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://swati:1111@cluster0.psm9osn.mongodb.net/?retryWrites=true&w=majority"
  );
};
module.exports = connect;

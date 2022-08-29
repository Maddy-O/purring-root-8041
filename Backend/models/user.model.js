// importing required dependencies
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//creating schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//converting password to incrypted pasward with the help of bcrypt.hashSync
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  var hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

//comparing the login password with feeded password with the help of bcrypt.compareSync
userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

//creating modal for exporting
const User = mongoose.model("user", userSchema); // user => users

module.exports = User;

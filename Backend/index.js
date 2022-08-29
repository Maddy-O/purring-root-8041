const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");
const PORT = process.env.PORT || 5500;
const userController = require("./controllers/user.controller");
const { register, login } = require("./controllers/auth.controller");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", register);
app.post("/login", login);

app.use("/users", userController);

app.listen(PORT, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 5500");
});

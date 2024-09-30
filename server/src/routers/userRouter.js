const express = require("express");
const {
  regUser,
} = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/register", regUser);

module.exports = userRouter;

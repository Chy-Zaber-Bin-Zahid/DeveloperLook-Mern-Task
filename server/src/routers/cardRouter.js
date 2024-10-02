const express = require("express");
const {
  findCard,
} = require("../controllers/cardController");
const cardRouter = express.Router();

cardRouter.get("/filter", findCard);

module.exports = cardRouter;

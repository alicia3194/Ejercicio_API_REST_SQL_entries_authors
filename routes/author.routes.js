const authorRouter = require("express").Router();
const authorModels = require("../models/author");

authorRouter.post("/", (req, res) => {
  res.status(200).json({
    message: "tabla creada",
  });
});

module.exports = authorRouter;

const entriesRouter = require("express").Router();
const entryModels = require("../models/entry");

entriesRouter.get("/", async (req, res) => {
  try {
    const entries = await entryModels.getEntries();
    res.json(entries);
  } catch (error) {
    console.error(error);
  }
});

entriesRouter.post("/", (req, res) => {
  res.status(200).json({
    message: "tabla creada",
  });
});

entriesRouter.put("/:title", async (req, res) => {
  const { title } = req.params;
  const newEntryData = req.body;

  try {
    const updatedEntry = await entryModels.updateEntryByTitle(
      title,
      newEntryData
    );
    res
      .status(200)
      .json({ message: `Se ha modificado la entry ${title}`, updatedEntry });
  } catch (error) {
    console.error(error);
  }
});

entriesRouter.delete("/", async (req, res) => {
  const { title } = req.body;
  try {
    const result = await entryModels.deleteEntryByTitle(title);
    res.status(200).json({ message: `Se ha borrado la entry ${title}` });
  } catch (error) {
    console.error(error);
  }
});
module.exports = entriesRouter;

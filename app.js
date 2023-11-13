require("dotenv").config(); // LEE .ENV

const express = require("express");
const morgan = require("morgan");

const entriesRouter = require("./routes/entries.routes");
const authorRouter = require("./routes/author.routes");

const entries = require("./models/entry");

const app = express();
const port = process.env.PORT;

app.use("/api/entries", entriesRouter);
app.use("/api/author", authorRouter);

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
); //peticiones de la app

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/entries", async (req, res) => {
  try {
    const entriesApi = await entries.getEntries();
    res.json(entriesApi);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener las entradas.");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

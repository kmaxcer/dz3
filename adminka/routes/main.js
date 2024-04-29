const mainRoute = require("express").Router();
const fs = require('fs').promises;

mainRoute.get("/", async (req, res) => {
  try {
    const data = await fs.readFile("./public/index.html", "utf-8");
    res.header("Content-Type", "text/html").send(data);
  } catch (err) {
    console.error('Error reading file:', err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = mainRoute;
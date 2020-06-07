const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const compression = require("compression");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());

const products = require("./products.json");

app.post("/", (req, res) => {
  res.header("Content-Type", "application/json").send(JSON.stringify(products));
});

app.use(express.static(path.join(__dirname, "/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/build", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

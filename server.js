const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const compression = require("compression");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());

const products = require("./products.json");

app.get("/products", (req, res) => {
  res.header("Content-Type", "application/json").send(JSON.stringify(products));
});

app.use(express.static(path.join(__dirname, "/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/build", "index.html"));
});

//THIS IS WHERE I'M MESSING AROUND WITH MONGO

// mongoose.connect('mongodb://localhost:27017/Villain_Inventory', { useUnifiedTopology: true, useNewUrlParser: true }, (error => {
//   error ? console.log('ERROR CONNECTING') : console.log('SUCCESS CONNECTING');
// }));

// const schema = new mongoose.Schema({
//   id: String,
//   price: String,
//   url: String,
//   stock: String
// });

// const Inventory = mongoose.model('Villain_Inventory', schema);

// app.post('/', function (req, res) {

//   let items = [...req.body.content.items];

//   for (let item of items) {
//     const product = Inventory.findOne({ 'id': item.id }, (err, foundProduct) => {
//       const newStock = (foundProduct.stock - item.quantity);
//       const updated = { $set: { stock: newStock } };
//       Inventory.updateOne(product, updated, (err, res) => {
//         err ? console.log('DB UPDATE ERROR') : console.log("STOCK UPDATED");
//       })
//     });
//   };
//   res.sendStatus(200)
// })

// END MESSING AROUND. DON'T FORGET YOU INSTALLED MONGOOSE

app.listen(port, () => console.log(`Listening on port ${port}`));

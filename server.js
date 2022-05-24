const express = require("express");
const getData = require("./controllers/getData");
const products = require("./models/products");

// initialize express and data
const app = express();
const productsData = getData();
// console.log(productsData);

const PORT = 3000;

// Middleware
app.use((req, res, next) => {
  console.log(`Running middleware function!!!`);
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// home page
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/products", (req, res) => {
  res.render("products", { data: productsData });
});

// new product form
app.get("/products/new", (req, res) => {
  res.render("new-products");
});

// create new product
app.post("/products", (req, res) => {
  productsData.push(req.body);
  res.redirect("/products");
});

app.get("/product/:id", (req, res) => {
  const result = products.filter(
    (product) => product.id === Number(req.params.id)
  );
  console.log(result);

  if (result.length === 0) {
    res.status(404).render("404");
  } else {
    res.send(result);
  }
});

app.get("*", (req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

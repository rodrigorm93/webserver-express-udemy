const express = require("express");
const app = express();

const hbs = require("hbs");

const port = process.env.PORT || 3000;

//middlewere

app.use(express.static(__dirname + "/public"));

hbs.registerPartials(__dirname + "/views/partials"); //le idicamos donde estan todos nuestros parciales

app.set("view engine", "hbs"); //para que servidor use HBS

//helpers

hbs.registerHelper("getAnio", () => {
  return new Date().getFullYear();
});

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Rodrigo",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    nombre: "Rodrigo",
  });
});

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});

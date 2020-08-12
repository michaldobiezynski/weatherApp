const path = require("path");

const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public/");

app.set("view engine", "hbs");

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Michal",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    message: "If you need help...",
    name: "Michal",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Michal",
  });
});

app.get("/weather", (req, res) => {
  res.send({ forecast: "25C, feels like 30C", location: "Edinburgh" });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

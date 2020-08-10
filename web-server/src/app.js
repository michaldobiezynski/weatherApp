const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("<h1>Weather</h1>");
});

app.get("/help", (req, res) => {
  res.send([
    { name: "Michal", age: 26 },
    { name: "Wika", age: 24 },
  ]);
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.get("/weather", (req, res) => {
  res.send({ forecast: "25C, feels like 30C", location: "Edinburgh" });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

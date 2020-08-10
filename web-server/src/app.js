const path = require("path");

const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public/");
const aboutPageDirectoryPath = path.join(__dirname, "../public/about.html");
const helpPageDirectoryPath = path.join(__dirname, "../public/help.html");

app.use(express.static(publicDirectoryPath));

app.get("/help", (req, res) => {
  res.send(helpPageDirectoryPath);
});

app.get("/about", (req, res) => {
  res.send(aboutPageDirectoryPath);
});

app.get("/weather", (req, res) => {
  res.send({ forecast: "25C, feels like 30C", location: "Edinburgh" });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

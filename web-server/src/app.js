const path = require("path");

const request = require("request");
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 3000;

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public/");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
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
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address.",
    });
  }

  geocode(
    req.query.address,
    (error, { lattitude, longitude, location } = {}) => {
      if (error) {
        return res.send(error);
      }
      forecast(lattitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send(error);
        }

        res.send({
          forecast: forecastData,
          location: location,
          address: req.query.address,
        });
      });
    }
  );
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term.",
    });
  }
  console.log(req.query.search);
  res.send({ products: [] });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    errorMsg: "Help article not found.",
    name: "Michal Dobiezynski",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    errorMsg: "Page not found.",
    name: "Michal Dobiezynski",
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});

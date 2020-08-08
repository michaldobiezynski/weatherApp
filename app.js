const request = require("request");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Glasgow", (error, data) => {
  console.log("Error: " + error);
  console.log("Data: " + JSON.stringify(data));
});

forecast(-4.27, 55.87, (error, data) => {
  console.log("Error:", error);
  console.log("Data:", data);
});

const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=fc87f55c77c5849e40978cc051a3cd02&query=New%20York";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});

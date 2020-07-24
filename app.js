const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=fc87f55c77c5849e40978cc051a3cd02&query=New%20York&units=m";

request({ url: url, json: true }, (error, response) => {
  // console.log(response.body.current);
  console.log(
    response.body.current.weather_descriptions[0] +
      ". It is " +
      response.body.current.temperature +
      " degrees. It feels like " +
      response.body.current.feelslike +
      " degrees."
  );
});

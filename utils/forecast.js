const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=fc87f55c77c5849e40978cc051a3cd02&query=${latitude},${longitude}&units=m`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is " +
          body.current.temperature +
          " degrees. It feels like " +
          body.current.feelslike +
          " degrees."
      );
    }
  });
};

module.exports = forecast;

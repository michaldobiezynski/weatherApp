const request = require("request");

const geocode = require("./utils/geocode");

// const url =
//   "http://api.weatherstack.com/current?access_key=fc87f55c77c5849e40978cc051a3cd02&query=New%20York&units=m";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location!");
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         ". It is " +
//         response.body.current.temperature +
//         " degrees. It feels like " +
//         response.body.current.feelslike +
//         " degrees."
//     );
//   }
// });

// const mapboxUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWljaGFsLWNvbnRpbnV1bSIsImEiOiJjazlsamRydzYwNHduM2hxdXhldDVkb3p3In0.MDQkwULqfGrO6e3NVKlR_Q&limit=1";

// request({ url: mapboxUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to geocoding service!");
//   } else if (!response.body.features) {
//     console.log("Unable to find location!");
//   } else {
//     console.log(
//       "The lattitude of LA is: " +
//         response.body.features[0].geometry.coordinates[0]
//     );
//     console.log(
//       "The longitude of LA is: " +
//         response.body.features[0].geometry.coordinates[1]
//     );
//   }
// });

geocode("Glasgow", (error, data) => {
  console.log("Error: " + error);
  console.log("Data: " + JSON.stringify(data));
});

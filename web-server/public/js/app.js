console.log("Client side javascript file is loaded");

// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#messageOne");
const messageTwo = document.querySelector("#messageTwo");
messageOne.textContent = "";
messageTwo.textContent = "";

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = search.value;
  console.log(location);
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = "";
        messageTwo.textContent = data.error;

        console.log(data.error);
      } else {
        messageTwo.textContent = "";
        messageOne.textContent = data.location + ". " + data.forecast;
        console.log(data.location);
        console.log(data.forecast);
      }
    });
  });
  weatherForm.reset();
});

// const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
//   "Edinburgh"
// )}.json?access_token=pk.eyJ1IjoibWljaGFsLWNvbnRpbnV1bSIsImEiOiJjazlsamRydzYwNHduM2hxdXhldDVkb3p3In0.MDQkwULqfGrO6e3NVKlR_Q&limit=1`;

// fetch(url).then((response) => {
//   console.log(
//     response.json().then((data) => {
//       console.log(data);
//       const url = `http://api.weatherstack.com/current?access_key=fc87f55c77c5849e40978cc051a3cd02&query=${data.features[0].center[1]},${data.features[0].center[0]}&units=m`;
//       fetch(url).then((response) => {
//         response.json().then((data) => {
//           console.log(data);
//           console.log(
//             data.current.weather_descriptions[0] +
//               ". It is " +
//               data.current.temperature +
//               " degrees. It feels like " +
//               data.current.feelslike +
//               " degrees."
//           );
//         });
//       });
//     })
//   );
// });

const API_KEY = "5d77461c0704ff7b9103750e7b8cb292";
const COORDS = "coords";
const weather = document.querySelector(".js-weather");
function getWeather(lat, lng) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(function(response) {
      console.log(response);
      return response.json();
  }).then(function(json) {
    console.log(json);
    const temperature = json.main.temp;
    const place = json.name;
    const weatherCondition = json.weather[0].description;
    const weatherIndicator = document.querySelector(".js-weatherIndicator");
    const ul = document.createElement("ul");
    ul.innerHTML = `
      <li><span>Location</span>: ${place}</li>
      <li><span>Temperature</span>: ${temperature}℃</li>
      <li><span>Weather</span>: ${weatherCondition} </li>
    `;
    weatherIndicator.appendChild(ul);
  });
}
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  lat = latitude
  lng = longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude,longitude);

}
function handleGeoError() {
  console.log("Cant get geo-Location")
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}


function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null) {
    askForCoords();
  }
  else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude,parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();

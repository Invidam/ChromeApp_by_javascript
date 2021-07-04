const WEATHER_API_KEY = "5d77461c0704ff7b9103750e7b8cb292";
const COORDS = "coords";
const AQI_API_KEY = "aacb663d-8e01-435a-b8c3-bb3d8f65b8a9";
const weather = document.querySelector(".js-weather");
const weatherList = document.querySelector(".js-weatherList");

function setState(airQuality) {
  let state;
  if (airQuality < 51) state = "Good";
  else if (airQuality < 101) state = "Moderate";
  else if (airQuality < 151) state = "Unhealthy for Sensitive Groups";
  else if (airQuality < 251) state = "Unhealthy";
  else state = "Very Unhealthy";
  return state;
}

function paintAirQuality(airQuality) {
  const state = setState(airQuality);
  const li = document.createElement("li");

  li.innerHTML = `<span>Air Quality</span>: ${state}(${airQuality})`;
  weatherList.appendChild(li);
}

function getAirQuality(lat, lng) {
  const url = `https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lng}&key=${AQI_API_KEY}`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const airQuality = json.data.current.pollution.aqius;
      paintAirQuality(airQuality);
    });
}

function paintWeather(location, temperature, weatherCondition) {
  const loc_li = document.createElement("li");
  const tem_li = document.createElement("li");
  const wea_li = document.createElement("li");
  loc_li.innerHTML = `<li><span>Location</span>: ${location}</li>`;
  tem_li.innerHTML = `<li><span>Temperature</span>: ${temperature}℃</li>`;
  wea_li.innerHTML = `<li><span>Weather</span>: ${weatherCondition} </li>`;
  weatherList.appendChild(loc_li);
  weatherList.appendChild(tem_li);
  weatherList.appendChild(wea_li);
}

function getWeather(lat, lng) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const location = json.name;
      const weatherCondition = json.weather[0].main;
      paintWeather(location, temperature, weatherCondition);
      getAirQuality(lat, lng);
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}
function handleGeoError() {
  console.log("Cant get geo-Location");
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
  setInterval(loadCoords, 1800000);
}

init();

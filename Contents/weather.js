const API_KEY = "5d77461c0704ff7b9103750e7b8cb292";
const COORDS = "coords";
const weather = document.querySelector(".js-weather");
const PM_API_KEY = "eBy82LnzKjjcARxOgTGpnyT6lV6B0rO%2FyzLDR6D9SiY0LSegVWLZI7KjduZFCa7g8rXOTzNtssYcH9Xz8gWS8Q%3D%3D";
let lat;
let lng;

function getParticularMatter(lat, lng) {

  console.log("load");
  console.log(lat,lng);
  let headers = new Headers();
  headers.append('Access-Control-Allow-Origin','https://invidam.github.io');
  //headers.append('Access-Control-Allow-Origin','*');
  // headers.append('GET', 'POST', 'OPTIONS');
  // headers.append('Content-Type', 'application/json');
  // headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Credentials', 'true');
  const location = `종로구`;
  const url = `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=${location}&dataTerm=DAILY&pageNo=1&numOfRows=100&returnType=json&serviceKey=${PM_API_KEY}`;
  //const url = `https://api.vworld.kr/req/address?service=address&request=getAddress&version=2.0&crs=epsg:4326&point=${lng},${lat}&format=jsonp&type=both&zipcode=true&simple=false&key=${PM_API_KEY}`;
  //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url, {
      // headers: headers,
      // // mode : 'cors',
      // // method: 'GET',
      // credentials : 'include',
    }).then(function(response) {
      console.log(response);
    }).then(function(json) {
      console.log("PM val: " + json);
    });
}
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
  getParticularMatter(latitude,longitude);
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
    getParticularMatter(parseCoords.latitude,parseCoords.longitude);
    //getWeathher
  }
}

function init() {
  loadCoords();
}

init();

const weatherShowBox = document.querySelector(".js-weatherShowBox"),
  toDoShowBox = document.querySelector(".js-toDoShowBox"),
  weatherContents = document.querySelector(".js-weatherContents"),
  toDoContents = document.querySelector(".js-toDoContents"),
  HIDDEN_CL = "hidden",
  APPEAR_CL = "appear";
function handleWeatherClick() {
  console.log("weather");
  weatherContents.classList.toggle(HIDDEN_CL);
  weatherContents.classList.toggle(APPEAR_CL);

  if(weatherContents.classList.contains(HIDDEN_CL))
    weatherShowBox.innerText = "Open Weather Info";
  else
    weatherShowBox.innerText = "Close Weather Info";

}

function handleToDoClick() {
  console.log("toDo");
  toDoContents.classList.toggle(HIDDEN_CL);
  toDoContents.classList.toggle(APPEAR_CL);

  if(toDoContents.classList.contains(HIDDEN_CL))
    toDoShowBox.innerText = "Open To-Do List";
  else
    toDoShowBox.innerText = "Close To-Do List";
}

function init() {
  weatherShowBox.addEventListener("click",handleWeatherClick);
  toDoShowBox.addEventListener("click",handleToDoClick);
}

init();

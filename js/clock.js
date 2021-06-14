const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1");

function getTime(){
  const date = new Date();
  const befHours = date.getHours();
  const meridiem = befHours < 12 ? 'AM' : 'PM';
  let hours = befHours <= 12 ? befHours : befHours % 12;
  hours = hours === 0 ? 12 : hours;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${meridiem}:${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();

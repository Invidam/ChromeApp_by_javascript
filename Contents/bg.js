const body = document.querySelector("body");

const IMG_NUMBER = 7;

function paintImage(imgNumber) {
  const img = new Image();
  img.src = `../images/landscape_0${imgNumber}.jpg`;
  img.classList.add("bgImage");
  body.prepend(img);

}

function generateRandom() {
  const num = Math.floor(Math.random()*IMG_NUMBER + 1);
  return num;
}

function init() {
  const randomNumber = generateRandom();
  paintImage(randomNumber);
}

init();

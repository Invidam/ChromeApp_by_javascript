// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const title = document.querySelector("h2");
const colorsLength = colors.length;
let i = 0;

const superEventHandler = {
  handleColorChange: function (event) {
    i++;
    i %= colorsLength;
    title.style.color = colors[i];
  },
  handleMouseEnter: function (event) {
    title.innerHTML = "The mouse is here!";
    superEventHandler.handleColorChange(event);
  },
  handleMouseLeave: function (event) {
    title.innerHTML = "The mouse is gone!";
    superEventHandler.handleColorChange(event);
  },
  handleWindowResize: function (event) {
    title.innerHTML = "You just resized!";
    title.style.color = colors[2];
  },
  handleMouseRightClick: function (event) {
    title.innerHTML = "That was a right click!";
    superEventHandler.handleColorChange(event);
  }
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
title.addEventListener("contextmenu", superEventHandler.handleMouseRightClick);

window.addEventListener("resize", superEventHandler.handleWindowResize);

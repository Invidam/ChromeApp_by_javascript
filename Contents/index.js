const title = document.querySelector("#title");

function handleClick(event)
{
  title.style.color = "red";
}
title.addEventListener("mouseenter", handleClick);

const test = {
  abc: function abc() {console.log("test!")}
};

test.abc();

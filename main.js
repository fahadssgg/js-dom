// let text = document.getElementById("text");

// text.textContent = "hello word";
// text.style.backgroundColor = "black";
// text.style.color = "white";

// document.querySelector("#p").textContent = "hello";

////////////////////////////////////////////////////////////
function myfun() {
  let element = document.body;

  element.classList.toggle("dark-mode");
}

function cat() {
  let img = document.getElementById("img");
  img.style.backgroundColor = "rgb(252,213,126)";
  document.querySelector("#text").textContent = "light brown";
}

function sea() {
  let img = document.getElementById("img");
  img.style.backgroundColor = " rgb(85,113,149)";
  document.querySelector("#text").textContent = "blue";
}
////////////////////////////////////////////////////////////

function textValue() {
  let text = document.getElementById("name");

  text.textContent = "text is changed by a function";
}

let i = document.getElementById("up");
let d = document.getElementById("down");
let f = document.getElementById("name");
let step = 2;

f.style.fontSize = "20px";
i.onclick = function () {
  f.style.fontSize = parseInt(f.style.fontSize) + step + "px";
};

d.onclick = function () {
  f.style.fontSize = parseInt(f.style.fontSize) - step + "px";
};

function bColor() {
  let text = document.getElementById("name");
  text.style.backgroundColor = "magenta";
}

const myImg = document.getElementById("image");
const myButton = document.getElementById("btnID");

function Dimg() {
  document.getElementById("image").style.display = "block";
  document.getElementById("btnID").style.display = "";
}
let isFirstImage = true;
myButton.addEventListener("click", function () {
  if (isFirstImage) {
    myImg.src = "./newyork.png";
  } else {
    myImg.src = "./plane.png";
  }
  isFirstImage = !isFirstImage;
});

function eventAlaret() {
  alert("Hello! I am an alert box!!");
}

const topButton = document.getElementById("top-button");
const midButton = document.getElementById("mid-button");
const bottomButton = document.getElementById("bottom-button");

const firstContent = document.getElementById("first-content");
const secondContent = document.getElementById("second-content");
const thirdContent = document.getElementById("third-content");

topButton.addEventListener("click", function () {
  firstContent.style.display = "flex";
  secondContent.style.display = "none";
  thirdContent.style.display = "none";
});

midButton.addEventListener("click", function () {
  firstContent.style.display = "none";
  secondContent.style.display = "flex";
  thirdContent.style.display = "none";
});

bottomButton.addEventListener("click", function () {
  firstContent.style.display = "none";
  secondContent.style.display = "none";
  thirdContent.style.display = "flex";
});

// -------------------------------------

const root = document.getElementById("root");
const option = document.getElementById("option");
const head = document.getElementById("head");
const menu = document.querySelectorAll("a");
const write = document.getElementsByClassName("write");
let on = document.getElementById("option").children[0];
let off = document.getElementById("option").children[1];
console.dir(write);
let isChange = false;

option.addEventListener("click", function () {
  if (isChange === false) {
    root.style.backgroundColor = "#555";
    option.style.backgroundColor = "white";
    option.style.color = "#555";
    for (let value of write) {
      value.style.color = "white";
    }
    on.style.display = "none";
    off.style.display = "block";
    head.style.borderBottom = "2px solid white";
    for (let i = 0; i < menu.length; i++) {
      menu[i].style.color = "white";
    }
    isChange = true;
  } else {
    root.style.backgroundColor = "beige";
    option.style.backgroundColor = "#555";
    option.style.color = "white";
    on.style.display = "block";
    off.style.display = "none";
    head.style.borderBottom = "2px solid #555";
    for (let value of write) {
      value.style.color = "#555";
    }
    for (let i = 0; i < menu.length; i++) {
      menu[i].style.color = "#555";
    }
    isChange = false;
  }
});

// let onMode =

let offMode = (root.style.backgroundColor = "beige");
option.style.backgroundColor = "#555";
option.style.color = "white";
on.style.display = "block";
off.style.display = "none";
head.style.borderBottom = "2px solid #555";
for (let value of write) {
  value.style.color = "#555";
}
for (let i = 0; i < menu.length; i++) {
  menu[i].style.color = "#555";
}

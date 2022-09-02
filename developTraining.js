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

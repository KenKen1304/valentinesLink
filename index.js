let yes = document.querySelector("#Yesbtn"),
  no = document.querySelector("#decline");
let love = document.querySelector("#love");
let fall = document.querySelector(".heart");
let btnWords = [
  "are you sure?",
  "really sure?",
  "think again?",
  "Dontttttttt",
  "agaiiiiiiiiii",
  "gagoo",
  "tanga ka siguro",
];

let indexNumber = 0;
no.addEventListener("click", () => {
  no.textContent = btnWords[indexNumber];
  indexNumber = (indexNumber + 1) % btnWords.length;

  let currentSize = parseInt(window.getComputedStyle(no).fontSize);
  yes.style.fontSize = currentSize + 10 + "px";
  let currentSize1 = parseInt(window.getComputedStyle(yes).width);
  yes.style.width = currentSize1 + 80 + "px";
  let currentSize2 = parseInt(window.getComputedStyle(yes).height);
  yes.style.height = currentSize2 + 50 + "px";
  if (
    currentSize + 30 >= window.innerWidth ||
    currentSize1 + 100 >= window.innerWidth ||
    currentSize2 + 80 >= window.innerWidth
  ) {
    no.click();
  }
});

yes.addEventListener("click", () => {
  const iframe = document.getElementById("iframe").remove();
  const text = document.getElementById("text").remove();
  let elem = document.createElement("h1");
  elem.textContent = "yeeeey!!! <3";
  elem.classList.add("yey");
  document.body.append(elem);
  no.remove();
  yes.remove();
  love.style.display = "block";
  fall.style.display = "block";
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "&#10084;";
  document.body.appendChild(heart);

  const startPosition = getRandomInt(0, window.innerWidth);
  heart.style.left = `${startPosition}px`;

  heart.addEventListener("animationend", () => {
    heart.remove();
    createHeart();
  });
}

window.addEventListener("load", () => {
  createHeart();
});

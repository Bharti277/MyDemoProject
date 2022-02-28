var increaseBtn = document.getElementById("increase");
var resetButton = document.getElementById("reset");
var decreseBtn = document.getElementById("decrease");
var numberChange = document.getElementById("number");
increaseBtn.addEventListener("click", increaseFunc);
resetButton.addEventListener("click", resetFunc);
decreseBtn.addEventListener("click", decreseFunc);
let count = 0;
function increaseFunc() {
  count++;
  numberChange.innerHTML = count;
  if (count > 0) {
    numberChange.style.color = "green";
  }
}
function decreseFunc() {
  count--;
  numberChange.innerHTML = count;
  if (count < 0) {
    numberChange.style.color = "red";
  }
}
function resetFunc() {
  count = 0;
  numberChange.innerHTML = count;
  if (count === 0) {
    numberChange.style.color = "black";
  }
}

let homeScoreEl = document.getElementById("home-score-el");
let guestScoreEl = document.getElementById("guest-score-el");
let resetBtn = document.querySelectorAll("button");
let homeCount = 0;
let guestCount = 0;

function homeOne() {
  homeCount += 1;
  homeScoreEl.textContent = homeCount;
}
function homeTwo() {
  homeCount += 2;
  homeScoreEl.textContent = homeCount;
}
function homeThree() {
  homeCount += 3;
  homeScoreEl.textContent = homeCount;
}

function guestOne() {
  guestCount += 1;
  guestScoreEl.textContent = guestCount;
}
function guestTwo() {
  guestCount += 2;
  guestScoreEl.textContent = guestCount;
}
function guestThree() {
  guestCount += 3;
  guestScoreEl.textContent = guestCount;
}

function reset() {
  homeCount = 0;
  homeScoreEl.textContent = homeCount;
  guestCount = 0;
  guestScoreEl.textContent = guestCount;
}

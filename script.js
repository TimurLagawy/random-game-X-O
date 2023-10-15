let pole1 = document.querySelector("#pole1");
let pole2 = document.querySelector("#pole2");
let pole3 = document.querySelector("#pole3");
let pole4 = document.querySelector("#pole4");
let pole5 = document.querySelector("#pole5");
let pole6 = document.querySelector("#pole6");
let pole7 = document.querySelector("#pole7");
let pole8 = document.querySelector("#pole8");
let pole9 = document.querySelector("#pole9");
let count = 0;
let countX = 0;
let countO = 0;
let countNo = 0;
let resultsX = document.querySelector("#results-x");
let resultsO = document.querySelector("#results-o");
let resultsNo = document.querySelector("#results-no");
let winnerCongrats = document.querySelector("#winner-congrats");
let winnerButton = document.querySelector("#winner-congrats__button");
let black = document.querySelector("#black");
let track = document.querySelector("#audio");

winnerButton.classList.remove("open");
winnerCongrats.classList.remove("open");
black.classList.remove("open");

actualResult();

function actualResult() {
  if (localStorage.getItem("X") == undefined) {
    resultsX.innerHTML = 0;
  } else {
    resultsX.innerHTML = localStorage.getItem("X");
  }
  if (localStorage.getItem("O") == undefined) {
    resultsO.innerHTML = 0;
  } else {
    resultsO.innerHTML = localStorage.getItem("O");
  }
  if (localStorage.getItem("No") == undefined) {
    resultsNo.innerHTML = 0;
  } else {
    resultsNo.innerHTML = localStorage.getItem("No");
  }
}

pole1.addEventListener("click", () => {
  if (pole1.innerHTML == "") {
    if (count % 2 == 1) {
      pole1.innerHTML = "O";
    } else {
      pole1.innerHTML = "X";
    }
    count++;
  } else {
  }
  checkOfWinner();
});
pole2.addEventListener("click", () => {
  if (pole2.innerHTML == "") {
    if (count % 2 == 1) {
      pole2.innerHTML = "O";
    } else {
      pole2.innerHTML = "X";
    }
    count++;
  } else {
  }
  checkOfWinner();
});
pole3.addEventListener("click", () => {
  if (pole3.innerHTML == "") {
    if (count % 2 == 1) {
      pole3.innerHTML = "O";
    } else {
      pole3.innerHTML = "X";
    }
    count++;
  } else {
  }
  checkOfWinner();
});
pole4.addEventListener("click", () => {
  if (pole4.innerHTML == "") {
    if (count % 2 == 1) {
      pole4.innerHTML = "O";
    } else {
      pole4.innerHTML = "X";
    }
    count++;
  } else {
  }
  checkOfWinner();
});
pole5.addEventListener("click", () => {
  if (pole5.innerHTML == "") {
    if (count % 2 == 1) {
      pole5.innerHTML = "O";
    } else {
      pole5.innerHTML = "X";
    }
    count++;
  } else {
  }
  checkOfWinner();
});
pole6.addEventListener("click", () => {
  if (pole6.innerHTML == "") {
    if (count % 2 == 1) {
      pole6.innerHTML = "O";
    } else {
      pole6.innerHTML = "X";
    }
    count++;
  } else {
  }
  checkOfWinner();
});
pole7.addEventListener("click", () => {
  if (pole7.innerHTML == "") {
    if (count % 2 == 1) {
      pole7.innerHTML = "O";
    } else {
      pole7.innerHTML = "X";
    }
    count++;
  } else {
  }
  checkOfWinner();
});
pole8.addEventListener("click", () => {
  if (pole8.innerHTML == "") {
    if (count % 2 == 1) {
      pole8.innerHTML = "O";
    } else {
      pole8.innerHTML = "X";
    }
    count++;
  } else {
  }
  checkOfWinner();
});
pole9.addEventListener("click", () => {
  if (pole9.innerHTML == "") {
    if (count % 2 == 1) {
      pole9.innerHTML = "O";
    } else {
      pole9.innerHTML = "X";
    }
    count++;
  } else {
  }
  checkOfWinner();
});

function checkOfWinner() {
  if (
    pole1.innerHTML == "O" &&
    pole2.innerHTML == "O" &&
    pole3.innerHTML == "O"
  ) {
    alert("O - is winner!");
    countO = localStorage.getItem("O");
    localStorage.setItem("O", +countO + 1);
    location.reload();
  } else if (
    pole4.innerHTML == "O" &&
    pole5.innerHTML == "O" &&
    pole6.innerHTML == "O"
  ) {
    alert("O - is winner!");
    countO = localStorage.getItem("O");
    localStorage.setItem("O", +countO + 1);
    location.reload();
  } else if (
    pole7.innerHTML == "O" &&
    pole8.innerHTML == "O" &&
    pole9.innerHTML == "O"
  ) {
    alert("O - is winner!");
    countO = localStorage.getItem("O");
    localStorage.setItem("O", +countO + 1);
    location.reload();
  } else if (
    pole1.innerHTML == "O" &&
    pole5.innerHTML == "O" &&
    pole9.innerHTML == "O"
  ) {
    alert("O - is winner!");
    countO = localStorage.getItem("O");
    localStorage.setItem("O", +countO + 1);
    location.reload();
  } else if (
    pole7.innerHTML == "O" &&
    pole5.innerHTML == "O" &&
    pole3.innerHTML == "O"
  ) {
    alert("O - is winner!");
    countO = localStorage.getItem("O");
    localStorage.setItem("O", +countO + 1);
    location.reload();
  } else if (
    pole1.innerHTML == "O" &&
    pole4.innerHTML == "O" &&
    pole7.innerHTML == "O"
  ) {
    alert("O - is winner!");
    countO = localStorage.getItem("O");
    localStorage.setItem("O", +countO + 1);
    location.reload();
  } else if (
    pole2.innerHTML == "O" &&
    pole5.innerHTML == "O" &&
    pole8.innerHTML == "O"
  ) {
    alert("O - is winner!");
    countO = localStorage.getItem("O");
    localStorage.setItem("O", +countO + 1);
    location.reload();
  } else if (
    pole3.innerHTML == "O" &&
    pole6.innerHTML == "O" &&
    pole9.innerHTML == "O"
  ) {
    alert("O - is winner!");
    countO = localStorage.getItem("O");
    localStorage.setItem("O", +countO + 1);
    location.reload();
  } else if (
    pole1.innerHTML == "X" &&
    pole2.innerHTML == "X" &&
    pole3.innerHTML == "X"
  ) {
    alert("X - is winner!");
    countX = localStorage.getItem("X");
    localStorage.setItem("X", +countX + 1);
    location.reload();
  } else if (
    pole4.innerHTML == "X" &&
    pole5.innerHTML == "X" &&
    pole6.innerHTML == "X"
  ) {
    alert("X - is winner!");
    countX = localStorage.getItem("X");
    localStorage.setItem("X", +countX + 1);
    location.reload();
  } else if (
    pole7.innerHTML == "X" &&
    pole8.innerHTML == "X" &&
    pole9.innerHTML == "X"
  ) {
    alert("X - is winner!");
    countX = localStorage.getItem("X");
    localStorage.setItem("X", +countX + 1);
    location.reload();
  } else if (
    pole1.innerHTML == "X" &&
    pole5.innerHTML == "X" &&
    pole9.innerHTML == "X"
  ) {
    alert("X - is winner!");
    countX = localStorage.getItem("X");
    localStorage.setItem("X", +countX + 1);
    location.reload();
  } else if (
    pole3.innerHTML == "X" &&
    pole5.innerHTML == "X" &&
    pole7.innerHTML == "X"
  ) {
    alert("X - is winner!");
    countX = localStorage.getItem("X");
    localStorage.setItem("X", +countX + 1);
    location.reload();
  } else if (
    pole1.innerHTML == "X" &&
    pole4.innerHTML == "X" &&
    pole7.innerHTML == "X"
  ) {
    alert("X - is winner!");
    countX = localStorage.getItem("X");
    localStorage.setItem("X", +countX + 1);
    location.reload();
  } else if (
    pole2.innerHTML == "X" &&
    pole5.innerHTML == "X" &&
    pole8.innerHTML == "X"
  ) {
    alert("X - is winner!");
    countX = localStorage.getItem("X");
    localStorage.setItem("X", +countX + 1);
    location.reload();
  } else if (
    pole3.innerHTML == "X" &&
    pole6.innerHTML == "X" &&
    pole9.innerHTML == "X"
  ) {
    alert("X - is winner!");
    countX = localStorage.getItem("X");
    localStorage.setItem("X", +countX + 1);
    location.reload();
  } else if (count == 9) {
    alert("NO WINNER!");
    countNo = localStorage.getItem("No");
    localStorage.setItem("No", +countNo + 1);
    location.reload();
    audio.play();
    isPlay = true;
  }
}

function getWinner() {
  if (localStorage.getItem("X") >= 10) {
    winnerButton.classList.add("open");
    winnerCongrats.classList.add("open");
    black.classList.add("open");
    winnerCongrats.innerHTML = "X is a champion!";
    track.play();
    track.volume = 0.5;
    isPlay = true;
  }
  if (localStorage.getItem("O") >= 10) {
    winnerButton.classList.add("open");
    winnerCongrats.classList.add("open");
    black.classList.add("open");
    winnerCongrats.innerHTML = "O is a champion!";
    track.play();
    track.volume = 0.5;
    //  isPlay = true;
  }
}

getWinner();

winnerButton.addEventListener("click", () => {
  localStorage.setItem("X", 0);
  localStorage.setItem("O", 0);
  localStorage.setItem("No", 0);
  track.pause();
  location.reload();
});
black.addEventListener("click", () => {
  winnerButton.click();
});
console.log(
  "Игра крестики-нолики, всё работает, продолжается до 10 побед одной из сторон, в Мозилле ещё и финальный трек играет, в Хроме, пока нет. Для мобильника также адаптирована)))"
);

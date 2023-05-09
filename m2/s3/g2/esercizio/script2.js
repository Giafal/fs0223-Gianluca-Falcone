// const timerDisplay = document.getElementById("timer");

// let hours = 0;
// let minutes = 0;
// let seconds = 0;

// setInterval(updateTimer, 1000);

// function updateTimer() {
//   seconds++;

//   if (seconds === 60) {
//     minutes++;
//     seconds = 0;
//   }

//   if (minutes === 60) {
//     hours++;
//     minutes = 0;
//   }

//   const timeString = `${hours.toString().padStart(2, "0")}:${minutes
//     .toString()
//     .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

//   timerDisplay.textContent = timeString;

//   sessionStorage.setItem("timer", timeString);
// }

let seconds = sessionStorage.getItem("timer") || 0;

const timerElement = document.getElementById("timer2");

function displayTimer() {
  seconds++;
  timerElement.textContent = seconds;
  sessionStorage.setItem("timer", seconds);
}

const timer = setInterval(displayTimer, 1000);

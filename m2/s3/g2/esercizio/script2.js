let seconds = sessionStorage.getItem("timer") || 0;

const timerElement = document.getElementById("timer2");

function displayTimer() {
  seconds++;
  timerElement.textContent = seconds;
  sessionStorage.setItem("timer", seconds);
}

const timer = setInterval(displayTimer, 1000);

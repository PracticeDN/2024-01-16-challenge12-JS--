let startTime = 0;
let elapsedTime = 0;
let stopwatchInterval = null;
const stopwatchDisplay = document.getElementById("stopwatch");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 1000;
  let ms = Math.floor(diffInMs);

  let formattedHH = hh.toString().padStart(2, "0");
  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(3, "0");

  return `${formattedHH}:${formattedMM}:${formattedSS}.${formattedMS}`;
}

function startStopwatch() {
  if (stopwatchInterval) {
    clearInterval(stopwatchInterval);
  }
  startTime = Date.now() - elapsedTime;
  stopwatchInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    stopwatchDisplay.textContent = timeToString(elapsedTime);
  }, 1);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  elapsedTime = Date.now() - startTime;
}

startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);

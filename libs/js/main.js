let stopBtn = document.getElementById("stop");
let lap = document.getElementById("lap");
let start = document.getElementById("start");
let second = document.getElementById("sec");
let minutes = document.getElementById("min");
let hours = document.getElementById("hours");
let lapList = document.getElementById("lapList");
let reset = document.getElementById("reset");
let min = 0;
let sec = 0;
let msec = 0;
let Interval;
start.addEventListener("click", () => {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
});

function startTimer() {
  msec++;
  if (msec < 10) {
    second.innerHTML = "0" + msec;
  }
  if (msec > 10) {
    second.innerHTML = msec;
  }
  if (msec > 99) {
    sec++;
    minutes.innerHTML = sec;
    msec = 0;
    second.innerHTML = "0" + msec;
  }
  if (sec < 10) {
    minutes.innerHTML = "0" + sec;
  }
  if (sec > 10) {
    minutes.innerHTML = sec;
  }
  if (sec > 59) {
    min++;
    hours.innerHTML = min;
    sec = 0;
    minutes.innerHTML = "0" + sec;
  }
  if (min < 10) {
    hours.innerHTML = "0" + min;
  }
  if (min > 10) {
    hours.innerHTML = min;
  }
}

stopBtn.addEventListener("click", () => {
  clearInterval(Interval);
});

lap.addEventListener("click", () => {
  if (msec < 10) {
    lapList.insertAdjacentHTML(
      "afterbegin",
      `<li class="list-group-item">${min} : ${sec} :  0${msec}</li>`
    );
  } else {
    lapList.insertAdjacentHTML(
      "afterbegin",
      `<li class="list-group-item">${min} : ${sec} :  ${msec}</li>`
    );
  }
});

reset.addEventListener("click", () => {
  min = 0;
  sec = 0;
  msec = 0;
  minutes.innerHTML = "00";
  second.innerHTML = "00";
  hours.innerHTML = "00";
  lapList.parentNode.removeChild(lapList);
  clearInterval(Interval);
});

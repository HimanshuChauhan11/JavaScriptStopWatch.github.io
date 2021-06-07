let stopBtn = document.getElementById("stop");
let lap = document.getElementById("lap");
let start = document.getElementById("start");
let second = document.getElementById("sec");
let minutes = document.getElementById("min");
let hours = document.getElementById("hours");
let lapList = document.getElementById("lapList");
let hour = 0;
let min = 0;
let sec = 0;
let Interval;
start.addEventListener("click", () => {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 1000);
});

function startTimer() {
  sec++;
  if (sec < 10) {
    second.innerHTML = "0" + sec;
  }
  if (sec > 10) {
    second.innerHTML = sec;
  }
  if (sec > 59) {
    min++;
    minutes.innerHTML = min;
    sec = 0;
    second.innerHTML = "0" + sec;
  }
  if (min < 10) {
    minutes.innerHTML = "0" + min;
  }
  if (min > 10) {
    minutes.innerHTML = min;
  }
  if (min > 59) {
    hour++;
    hours.innerHTML = hour;
    min = 0;
    minutes.innerHTML = "0" + min;
  }
  if (hour < 10) {
    hours.innerHTML = "0" + hour;
  }
  if (hour > 10) {
    hours.innerHTML = hour;
  }
  console.log(sec);
}

stopBtn.addEventListener("click", () => {
  clearInterval(Interval);
});

lap.addEventListener("click", () => {
  if (sec < 10) {
    lapList.insertAdjacentHTML(
      "afterbegin",
      `<li class="list-group-item">${hour} : ${min} :  0${sec}</li>`
    );
  } else {
    lapList.insertAdjacentHTML(
      "afterbegin",
      `<li class="list-group-item">${hour} : ${min} :  ${sec}</li>`
    );
  }
});

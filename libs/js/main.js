let microSecond = document.getElementById("msec");
let second = document.getElementById("sec");
let minutes = document.getElementById("min");
let hours = document.getElementById("hours");
let lapList = document.getElementById("lapList");
let stopBtn = document.getElementById("stop");
let lapBtn = document.getElementById("lap");
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
let hour = 0,
    min = 0,
    sec = 0,
    msec = 0,
    Interval;

startBtn.addEventListener('click', function() {
    console.log("startbtn");
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
});

lapBtn.addEventListener('click', function() {
    const microSeconds = msec < 10 ? `0${msec}` : msec;
    const seconds = sec < 10 ? `0${sec}` : sec;
    const minutes = min < 10 ? `0${min}` : min;
    const hours = hour < 10 ? `0${hour}` : hour;

    lapList.insertAdjacentHTML(
        "afterbegin",
        `<li class="list-group-item">${hours} : ${minutes} : ${seconds} : ${microSeconds}</li>`
    );
});

stopBtn.addEventListener('click', function() {
    clearInterval(Interval);
});

resetBtn.addEventListener('click', resetTimer);



function startTimer() {
    updateMicroSecond(++msec);
}

function updateMicroSecond(microSecondValue) {
    if (microSecondValue < 100) {
        microSecond.innerHTML = microSecondValue;
    } else {
        microSecond.innerHTML = '00';
        msec = 0;
        updateSecValue(++sec);
    }
}

function updateSecValue(secondValue) {
    if (secondValue < 60) {
        second.innerHTML = secondValue < 10 ? `0${secondValue}` : secondValue;
    } else {
        second.innerHTML = "00";
        sec = 0;
        updateMinValue(++min);
    }
}

function updateMinValue(minutevalue) {
    if (minutevalue < 60) {
        minutes.innerHTML = minutevalue < 10 ? `0${minutevalue}` : minutevalue;
    } else {
        minutes.innerHTML = "00";
        min = 0;
        updateHourValue(++hour);
    }
}

function updateHourValue(hourValue) {
    if (hourValue < 24) {
        hours.innerHTML = hourValue < 10 ? `0${hourValue}` : hourValue;
    } else {
        console.log('call reset function!');
    }
}

function resetTimer() {
    msec = 0, sec = 0, min = 0, hour = 0;
    microSecond.innerHTML = "00";
    second.innerHTML = "00";
    minutes.innerHTML = "00";
    hours.innerHTML = "00";
    clearInterval(Interval);
    lapList.innerHTML = "";
}
const clockSection = document.getElementById("clock");

function getTime() {
  function pad(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  
  const now = new Date();
  const hh = pad(now.getHours());
  const mm = pad(now.getMinutes());
  const ss = pad(now.getSeconds());
  return `${hh}:${mm}:${ss}`;
}

function tickClock() {
  clockSection.textContent = pomodoro();
}

// tickClock();
// setInterval(tickClock, 1000);

let hh = 0;
let mm = 5;
let ss = 0;
let timeout;

function timing(number){
  if(number <  10){
    return "0" + number;
  } else {
    return number;
  }
}

function pomodoro() {
  const hhString = timing(hh);
  const mmString = timing(mm);
  const ssString = timing(ss);

  return `${hhString}:${mmString}:${ssString}`;
}

function startTiming() {
  ss--;
  if(ss < 0){
    ss = 59;
    mm--;
    if(mm < 0){
      mm = 59;
      hh--;
    }
  }
  clockSection.textContent = pomodoro();
  
 
  if (timeout) {
    timeout = setTimeout(startTiming, 1000);
  }
}

let button = document.querySelector('.start');

button.addEventListener('click', ()=>{
  if(button.textContent === "Start"){  
    button.textContent = "Pause";
 
    timeout = setTimeout(startTiming, 1000);
  } else {
    button.textContent = "Start";
    clearTimeout(timeout);
    timeout = null;  
  }
});
tickClock();













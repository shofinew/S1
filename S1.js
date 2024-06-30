// secend 


setInterval(()=>{
const demo = document.getElementById('demo');
demo.innerHTML = new Date().getSeconds();
},1000)

// secnd bar 


setInterval(() => {
const rangeinput = document.getElementById('rangeInput');
const secondsoutput = document.getElementById('secondsOutput');
const currentSeconds = new Date().getSeconds();

    
    rangeinput.value = currentSeconds;
    secondsoutput.innerHTML = currentSeconds + ' seconds';
}, 1000);


// This is calculator



let display = document.getElementById('display');
let currentValue = '';

function inputValue(value) {
  if (currentValue === '0' && value !== '.') {
    currentValue = value;
  } else {
    currentValue += value;
  }
  display.innerText = currentValue;
}

function clearDisplay() {
  currentValue = '';
  display.innerText = '0';
}

function deleteLast() {
  currentValue = currentValue.slice(0, -1);
  display.innerText = currentValue || '0';
}

function calculateResult() {
  try {
    currentValue = eval(currentValue).toString();
    display.innerText = currentValue;
  } catch (error) {
    display.innerText = 'Error';
    currentValue = '';
  }
}

// this is calculator end 

// This is counter panel... 

let count = 0;
document.getElementById("decrease").onclick= function(){
  count -=1;
  document.getElementById("count_p").innerHTML = count; 
}
document.getElementById("reset").onclick = function(){
  count = 0;
  document.getElementById("count_p").innerHTML = count;
}
document.getElementById("increase").onclick = function(){
  count += 1;
  document.getElementById("count_p").innerHTML = count;
}

// This is counter panel end 

// This is 10 min count down timer 
let timerElement = document.getElementById('timer');
let time = 10 * 60; // 10 minutes in seconds

function updateTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerElement.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (time < 0) {
        clearInterval(timerInterval);
        timerElement.innerHTML = "Time's up!";
    }
}

let timerInterval = setInterval(updateTimer, 1000);
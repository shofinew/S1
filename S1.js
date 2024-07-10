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
    minutes = minutes < 10 ? '0' + minutes : minutes;
    timerElement.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (time < 0) {
        clearInterval(timerInterval);
        timerElement.innerHTML = "Time's up!";
    }
}
let timerInterval = setInterval(updateTimer, 1000); 
 
// This is range 

// const slider = document.createElement("input");
// slider.type = "range";
// slider.max = 10;
// slider.value = 0;
// document.body.appendChild(slider);

// const div = document.createElement("div");
// document.body.appendChild(div);


// slider.oninput = addStars;
// function addStars(){
//   div.innerText = "";
//   for (let i = 0; i < this.value; i++){
//     div.append("֍");
//   }
// }

// this is range end 


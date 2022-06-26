const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

let startTime;
let pauseTime;
let diff = 0;
let startStopwatch;
let seconds;
let hour;
let remainder;
let min;
let sec;

function msConverter(ms){
    seconds = ms / 1000;
    hour = Math.floor(seconds/(60*60));
    remainder = seconds % (60*60);
    min = Math.floor(remainder/60);
    sec = Math.floor(remainder % 60);
    document.getElementById("timer").innerText = `${hour} : ${min} : ${sec}`;
}
startBtn.addEventListener('click', ()=>{
    startTime = new Date();
    clearInterval(startStopwatch);
    startStopwatch = setInterval(()=>{
        msConverter(diff + (new Date() - startTime));
    }, 1000)
})

pauseBtn.addEventListener('click', ()=>{
    
    if (startTime != null) {
        pauseTime = new Date();
        diff += (pauseTime - startTime);
        clearInterval(startStopwatch);
    } 
})

resetBtn.addEventListener('click', ()=>{
    startTime = null;
    pauseTime = null;
    hour = 0;
    min = 0;
    sec = 0;
    document.getElementById("timer").innerText = `${hour} : ${min} : ${sec}`;
clearInterval(startStopwatch);
})
//console.log(msConverter(107012350));
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
let resume = true;

document.getElementById("timer").innerText = `00 : 00 : 00`;

function msConverter(ms){
    seconds = ms / 1000;
    hour = Math.floor(seconds/(60*60)).toString();
    hour.length == 1 ? hour = '0' + hour: null;
    remainder = seconds % (60*60);
    min = Math.floor(remainder/60).toString();
    min.length == 1 ? min = '0' + min: null;
    sec = Math.floor(remainder % 60).toString();
    sec.length == 1 ? sec = '0' + sec: null;
    /* if (sec.toString().length == 1) {
        sec = '0' + sec.toString(); 
    }  */
    document.getElementById("timer").innerText = `${hour} : ${min} : ${sec}`;
}
startBtn.addEventListener('click', ()=>{
    if (startTime == null || (startTime != null && pauseTime != null) && resume) {
        startTime = new Date();
        startStopwatch = setInterval(()=>{
            msConverter(diff + (new Date() - startTime));
        }, 1000)
        resume = false;
    }
})

pauseBtn.addEventListener('click', ()=>{
    
    if (startTime != null) {
        pauseTime = new Date();
        diff += (pauseTime - startTime);
        clearInterval(startStopwatch);
        resume = true;
    } 
})

resetBtn.addEventListener('click', ()=>{
    startTime = null;
    pauseTime = null;
    hour = '00';
    min = '00';
    sec = '00';
    document.getElementById("timer").innerText = `${hour} : ${min} : ${sec}`;
    clearInterval(startStopwatch);
    diff = 0;
    resume = true;
})
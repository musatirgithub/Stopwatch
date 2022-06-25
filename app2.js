const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

let startTime;
let pauseTime;
let diff = 0;
let startStopwatch;

function msConverter(ms){
    const seconds = ms / 1000;
    const hour = Math.floor(seconds/(60*60));
    const remainder = seconds % (60*60);
    const min = Math.floor(remainder/60);
    const sec = Math.floor(remainder % 60);
    document.getElementById("timer").innerText = `${hour} : ${min} : ${sec}`;
}
startBtn.addEventListener('click', ()=>{
    startTime = new Date();
    startStopwatch = setInterval(()=>{
        msConverter(diff + (new Date() - startTime));
    }, 1000)
})

pauseBtn.addEventListener('click', ()=>{
    pauseTime = new Date();
    diff += (pauseTime - startTime);
    clearInterval(startStopwatch);
})

//console.log(msConverter(107012350));
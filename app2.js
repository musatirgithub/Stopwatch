const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

let startTime;
let pauseTime;
let diff;

startBtn.addEventListener('click', ()=>{
    startTime = new Date();
})

pauseBtn.addEventListener('click', ()=>{
    pauseTime = new Date();
    diff = (pauseTime - startTime);
    console.log(diff);
})
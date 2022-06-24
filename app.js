

let milsec = 0; sec =0; min = 0; hour =0;

const pause = document.getElementById('pause');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');

let timerInterval;

start.addEventListener('click', () =>{
    clearInterval(timerInterval);
    timerInterval = setInterval(myFunc, 100);
});


function myFunc(){
    milsec += 100;
    if(milsec === 1000){
        milsec = 0;
        sec += 1;
    }
    if(sec === 60){
        sec = 0;
        min += 1;
    }
    if(min === 60){
        min = 0;
        hour += 1;
    }
    timer.innerHTML = `${hour} : ${min} : ${sec} : ${milsec/100}`;
}

pause.addEventListener('click', function () {
     clearInterval(timerInterval);
})

reset.addEventListener('click', function () {
    milsec = 0; sec =0; min = 0; hour =0;
    timer.innerHTML = `${hour} : ${min} : ${sec} : ${milsec/100}`;
})
let timeDisplay=document.querySelector('.timeDisplay');
let stopBtn=document.getElementById('stopBtn');
let startBtn=document.getElementById('startBtn');
let resetBtn=document.getElementById('resetBtn');

let msec = 0;
let sec = 0;
let mins = 0;


let timerId=null;

startBtn.addEventListener('click',function(){
    if(timerId !== null){
        clearInterval(timerId);
    }

   timerId = setInterval(startTimer,10);
})

stopBtn.addEventListener('click',function(){
    clearInterval(timerId);
})

resetBtn.addEventListener('click',function(){
    clearInterval(timerId);
    timeDisplay.innerHTML=`00 : 00 : 00`;
    mins=msec=sec=0;
})

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        sec++;
        if(sec == 60){
            sec =0;
            mins++;
        }
    }

    let msecSrting = msec < 10? `0${msec}` : msec;
    let secSrting = sec < 10? `0${sec}` : sec;
    let minSrting = mins < 10? `0${mins}` : mins;
    

    timeDisplay.innerHTML=`${minSrting} : ${secSrting} : ${msecSrting}`
}
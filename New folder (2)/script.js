let timer;
let timeleft=25*60;
const timeDisplay=document.getElementById("time");
const StartButton=document.getElementById("startTimer");
function updateDisplay(){
    const minutes=Math.floor(timeleft/60);
    const seconds=timeleft%60;
    timeDisplay.textContent=`${string (minutes).Padstart(2,'0')}:${string(seconds).Padstart(2,'0')}`;
}

function startFocus(){
    if(times)return;
    timer=setInterval(()=>{
        timeLeft--;
        updateDisplay();
        if (timeLeft<=0){
            clearInterval(timer);
            alert("Focus Time is up!! Take a break!");
            timer=null;
            timeLeft=25*60;
            updateDisplay();
        }
    },1000);
}

startButton.addEventListener("Click",startFocus);
document.getElementById("Subscription Form").addEventListener("Submit",Function(Event{event.preventDefault();
    const Email=this.querySelector('input[type="Email"]').value;
    alert(`Thank You for subscribing! You will recieve reminders at ${email}.`)
    This reset();
}));
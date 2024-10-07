let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds

const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("startTimer");

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startFocus() {
    if (timer) return; // Prevent multiple timers
    timer = setInterval(() => {
        timeLeft--;
        updateDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Focus time is up! Take a break!");
            timer = null;
            timeLeft = 25 * 60; // Reset timer
            updateDisplay();
        }
    }, 1000);
}

startButton.addEventListener("click", startFocus);

document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing! You will receive reminders at ${email}.`);
    this.reset(); // Reset the form
});
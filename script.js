// Function to update the clock
function updateClock() {
    const now = new Date();

    // Get hours, minutes and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format to 2 digits
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Create time string
    const currentTime = `${hours}:${minutes}:${seconds}`;

    // Display time
    document.getElementById('clock').textContent = currentTime;
}

// Call updateClock every second
setInterval(updateClock, 1000);

// Call it once immediately to avoid 1-second delay
updateClock();

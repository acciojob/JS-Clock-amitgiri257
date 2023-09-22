//your code here
function rotateClockHands() {
    const hourHand = document.querySelector(".hour-hand");
    const minuteHand = document.querySelector(".min-hand");
    const secondHand = document.querySelector(".second-hand");

    const now = new Date();
    const hours = now.getHours() ;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // const hourDegree = (360 / 12) * hours + (360 / 60) * (minutes / 60);
    const hourDegree = hours-24                                                                                                                         
    // const minuteDegree = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
    const minuteDegree =minutes-24
    const secondDegree = (360 / 60) * seconds;

    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
}

// Update the clock every second
setInterval(rotateClockHands, 1000);

// Initial call to set the clock hands correctly on page load
rotateClockHands();

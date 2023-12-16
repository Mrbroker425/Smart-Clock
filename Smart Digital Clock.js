const hoursE1 = document.getElementById("hours");
const MinutesE1 = document.getElementById("Minutes");
const SecondsE1 = document.getElementById("Seconds");
const ampmE1 = document.getElementById("ampm");



function updateClock() {
    let date = new Date();
    let hours = date.getHours();
    let Minutes = date.getMinutes();
    let Seconds = date.getSeconds();
    let ampm = "AM";

    if (hours > 12) {
        hours = hours -12
        ampm = "PM"
    }


    hours = hours < 10 ? "0" + hours:hours;
    Minutes = Minutes < 10 ? "0" + Minutes:Minutes;
    Seconds = Seconds < 10 ? "0" + Seconds:Seconds;

    hoursE1.innerText = hours;
    MinutesE1.innerText = Minutes;
    SecondsE1.innerText = Seconds;
    ampmE1.innerText = ampm;

    setTimeout(updateClock,1000);
}
updateClock();
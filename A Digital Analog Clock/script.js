const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
const INTERVALTIME = 1000;

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = (hr*30)+(min*1/2)+(sec*1/120);
let minPosition = (min*6)+(sec*1/10);
let secPosition = sec*6;

function runTheClock() {

    hrPosition = hrPosition+(1/120);
    minPosition = minPosition+(1/10);
    secPosition = secPosition+6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(runTheClock, INTERVALTIME);


// filename: index.html
// Author: Brian Twene(@bt521)
// Date: 20/07/21

//clock function
//uses the date function to get the hrs min and seconds
//displays it to the clock container div element
function clock() {
    const clock = document.querySelector("#clock-container");
    const time = new Date();
    let timeHr = time.getHours();
    let timeMin = time.getMinutes();
    let timeSeconds = time.getSeconds();

    timeHr = addZero(timeHr);
    timeMin = addZero(timeMin);
    timeSeconds = addZero(timeSeconds);

    clock.innerHTML = `${timeHr}:${timeMin}:${timeSeconds}`;
}
//this function adds a zero to digits that are less than 10
function addZero(t) {
    if (t < 10) {
        t = "0" + t;
    }
    return t;
}
//run this function every second
setInterval(clock, 1000);
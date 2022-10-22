const hourSui = document.querySelector(".hours");
const minuteSui = document.querySelector(".minutes");
const secondSui = document.querySelector(".second");

// Step 1: this function show date and time
// function dateUpdate() {
//     const currentDate = new Date();
//     console.log(currentDate);
// }
// dateUpdate();

// Step 2: if you need to auto refresh the output after each second 
// function dateUpdate() {
//     const currentDate = new Date();
//     setTimeout(dateUpdate, 1000);
//     console.log(currentDate)
// }
// dateUpdate();

// Step 3:  If you need specific output like in minutes or seconds or hours 
// use these parameter >> getSeconds()--- getHours() ---- getMinutes()

// function dateUpdate() {
//     const currentDate = new Date().getMinutes();
//     setTimeout(dateUpdate, 1000);
//     console.log(currentDate)
// }
// dateUpdate();


function dateUpdate() {
    const currentDate = new Date();
    // refresh the time on each second
    setTimeout(dateUpdate, 1000);
    // take output into hours, minutes and seconds
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    // console.log(hour, minute, second);

    // change hour into degree 
    const hourDeg = (hour /12) * 360;

    // use hourDeg output in style
    hourSui.style.transform = `rotate(${hourDeg}deg)`;

    //for minutes
    const minuteDeg = (minute / 60) * 360;
    minuteSui.style.transform = `rotate(${minuteDeg}deg)`;

    //for seconds
    const secondDeg = (second / 60) * 360;
    secondSui.style.transform = `rotate(${secondDeg}deg)`;
}
dateUpdate();




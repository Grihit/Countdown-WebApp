
const test = localStorage.getItem('d') + " " + localStorage.getItem('mon') + " " + localStorage.getItem('year');
console.log(test);
function countdown(){
    const testDate = new Date(test);
    const currentDate = new Date();
    const tseconds = (testDate - currentDate) / 1000;
    
    const days = Math.floor(tseconds / 3600 / 24);
    const hours = Math.floor(tseconds / 3600) % 24;
    const minutes = Math.floor(tseconds / 60) % 60;
    const seconds = Math.floor(tseconds) % 60;
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
}
countdown();
setInterval(countdown, 1000)

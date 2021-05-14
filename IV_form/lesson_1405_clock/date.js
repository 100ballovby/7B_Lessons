let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let days = today.getDate();
let day = today.getDay();

let endOfTheDay;

document.getElementById('date').innerHTML =
    day + ', ' + month + ', ' + days + ', ' + year;
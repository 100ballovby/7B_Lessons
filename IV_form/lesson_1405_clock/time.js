function currentTime() {
    let midday = 'AM';
    let date = new Date();
    // дата берется из системы пользователя
    let hour = date.getHours();
    hour = updateTime(hour);
    let min = date.getMinutes();
    min = updateTime(min);
    let sec = date.getSeconds();
    sec = updateTime(sec);

    midday = (hour >= 12) ? 'PM' : 'AM';
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour)
    // заменяю время на 12-часовой формат

    document.getElementById('clock').innerHTML =
        hour + ':' + min + ':' + sec + '   ' + midday;
    let t = setTimeout(function () { currentTime() }, 1000);
}

function updateTime(k) {
    /* функция будет редактировать время.
    * Вместо 12:5:3 будет 12:05:03 */
    if (k < 10) {
        return '0' + k
    } else return k
}

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let days = today.getDate();
let day = today.getDay();

let endOfTheDay;

switch (day) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}
let months = ['January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'];
switch (days) {
    case 1:
        endOfTheDay = 'st';
        break;
    case 2:
        endOfTheDay = 'nd';
        break;
    case 3:
        endOfTheDay = 'rd';
        break;
    case 21:
        endOfTheDay = 'st';
        break;
    case 22:
        endOfTheDay = 'nd';
        break;
    case 23:
        endOfTheDay = 'rd';
        break;
    case 31:
        endOfTheDay = 'st';
        break;
    default:
        endOfTheDay = 'th';
        break;
}
days += endOfTheDay;
document.getElementById('date').innerHTML =
    day + ', ' + months[month] + ' ' + days + ', ' + year;

currentTime();

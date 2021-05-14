function currentTime() {
    let midday = 'AM';
    let date = new Date();
    // дата берется из системы пользователя
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    midday = (hour >= 12) ? 'PM' : 'AM';
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour)
    // заменяю время на 12-часовой формат

    document.getElementById('clock').innerHTML =
        hour + ':' + min + ':' + sec + ' ' + midday;
    let t = setTimeout(function () { currentTime() }, 1000);
}

function updateTime(k) {
    /* функция будет редактировать время.
    * Вместо 12:5:3 будет 12:05:03 */
    if (k < 10) {
        return '0' + k
    } else return k
}

currentTime();

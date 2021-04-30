'use strict';
// подключение новых функций ES6

//alert('Hello, JS!')
//alert(3 + 34 - 7)
// это комментарий
/* второй комментарий
Он многострочный */

// переменные
let message;
message = 'Hello!';

let age = 25, name = 'John', hobby='Durachok';
console.log(age, name, hobby);

age = 34
console.log(age);

const MAIN_COLOR = '#636363';

function changeText(id, color) {
    let text = prompt('Как вас зовут?'); // задаю вопрос пользователю
    document.getElementById(id).innerHTML = text;
    // записываю ответ в элемент с id primer
    document.getElementById(id).style.color = color;
}

function conditions() {
    let year = prompt('В каком году был создан ES5?')
    if (year < 2015) {
        alert('Рано!')
    }
    else if (year > 2015) {
        alert('Поздно!')
    }
    else {
        alert('Верно!')
    }
}

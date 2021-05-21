let a = 2 + 2;

switch(a) {
    case 4:
        console.log('Точна');
        break;
    case 5:
    case 0:
        console.log('Неправильно');
        break;
    default:
        console.log('Нет таких значений')
}

 if (a === 4) {
    console.log('Точна')
 }
 else if (a === 5 || a === 0) {
     console.log('Неправильно! Сходи на мотематику.')
 }
 else {
     console.log('Нет таких значений')
 }


 function check_age(age) {
     switch (age) {
         case 18:
             return 1;
         case 14:
             return 0;
         default:
             return 'ацтань'
     }
 }

t1 = check_age(14);
t2 = check_age(18);
t3 = check_age(19);
console.log(t3)
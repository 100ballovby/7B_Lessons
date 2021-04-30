let randInt = Math.floor(Math.random() * 10);
// Math.random() * 10 - случайное число от 0 до 9
let randIntInclude = Math.floor(Math.random() * 10) + 1;
// Случайное число от 0 до 10
console.log(randInt);
console.log(randIntInclude);

function RandInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(RandInt(10, 13))  // числа 10, 11, 12
console.log(RandInt(50, 101)) // числа 50 - 100
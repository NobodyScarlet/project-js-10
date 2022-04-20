'use strict';

//  1
const a = +prompt('Введите число');
console.log(a === 0 ? console.log('верно') : console.log('не верно'));

// 2

const a = +prompt('Введите число');
console.log(a > 0 ? console.log('верно') : console.log('не верно'));

// 3

const a = prompt('Введите число или букву');
console.log(a < 0 ? console.log('верно') : console.log('не верно'));

// 4

const a = prompt('Введите а');
console.log(a >= 0 ? console.log('верно') : console.log('не верно'));

// 5

const a = prompt('Введите а');
console.log(a <= 0 ? console.log('верно') : console.log('не верно'));

// 6

const a = prompt('Введите а');
console.log(a != 0 ? console.log('верно') : console.log('не верно'));

// 7

const a = prompt('Введите test');
console.log(a === 'test' ? console.log('верно') : console.log('не верно'));

//8

const a = +prompt('Введите число');
console.log(a === '1' ? console.log('верно') : console.log('не верно'));

//9

const a = +prompt('Введите число');
console.log(a > 0 && a < 5 ? console.log('верно') : console.log('не верно'));

//10

let a = +prompt('Введите число');

a = a === 0 ? a += 7 : a / 10;
alert(a);

//11

let a = +prompt('введите число');
let b = +prompt('введите число');
if (a <= 1 && b >= 3) {
    alert(a + b);
} else {
    alert(a - b);
}

//12

const a = +prompt('Введите число');
const b = +prompt('Введите число');

console.log((a > 2 && a < 11) || (b >= 6 && b < 14) ? console.log('верно') : console.log('не верно'));


const num = +prompt('Введите число');
let result = null;

switch (num) {
    case 1:
        result = "Зима";
        break;

    case 2:
        result = "Весна";
        break;

    case 3:
        result = "Лето";
        break;

    case 4:
        result = "Осень";
        break;
    default:
        alert('Ошибка! Введите число от 1 до 4!');
        break;
}
'use strict';


const a = +prompt('Введите первое число');
const b = +prompt('Введите второе число');
const get = +prompt('What do you want do: +, -, *, /?');

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) {
        return 'Error';
    }
    else {
        return a / b;
    }
}

console.log(a, b);
console.log(sum(a, b), sub(a, b), mul(a, b), div(a, b));

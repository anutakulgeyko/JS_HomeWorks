'use strict';

// Первый вариант расчета секунд
const hours = parseInt(prompt('Введите количество часов'));
const seconds = hours * 3600;

console.log('В ' + hours + ' часах ' + seconds + ' секунд');


//Второй вариант, но не получается вывести получ. рез.в алерт(((

const hours = +prompt('Введите количество часов');
const seconds = hours * 3600;
function calc (hours, seconds)  {
    const i = +hours;
        if (i >= 0 && i <=11) {
            return(alert(hours));
        }
        alert(seconds);
    }

console.log(hours, seconds);




'use strict';

const objectStudent = {
    name: 'Alex',
    ['student-' + 'age']: 25,
    grade: 80,
    grade2: 85,
    course: 'Front-End Developer'
}

console.log(objectStudent);
console.log(objectStudent.name);
console.log(objectStudent['student-' + 'age']);
console.log(objectStudent.grade);
console.log(objectStudent.grade2);
console.log(objectStudent.course);


const deepObjectBook = {
    title: 'Encyclopedia All about animals',
    author: 'Ivanov Serhiy Bohdanovich',
    year: 2021,
    publisher: {
        name: 'Ranok',
        location: 'Ukraine'
    }
}

console.log(deepObjectBook);
console.log(deepObjectBook.title);
console.log(deepObjectBook.author);
console.log(deepObjectBook.publisher);
console.log(deepObjectBook.name);
console.log(deepObjectBook.location);

const objectMovie = {
    title: 'Spartacus',
    director: 'Sam Raimi',
    year: 2023,
    genre: 'fantastic'
};

for (let key in objectMovie) {
    alert( key );
    alert( objectMovie[key] )
}

console.log(objectMovie);
console.log(objectMovie.title);
console.log(objectMovie.director);
console.log(objectMovie.year);
console.log(objectMovie.genre);

let symbolPerson1 = Symbol('id');
let symbolPerson2 = Symbol('id');
const objectPerson1 = {
    id: Symbol('user dynamic id'),
    name: 'Dima',
    age: 25,
    grade: 10,
};

const objectPerson2 = {
    id: Symbol('id'),
    name: 'Dima',
    age: 25,
    grade: 10,
};

console.log(symbolPerson1 === symbolPerson2);


const arrAnimals = ['type', 'name'];
arrAnimals.push('color');

console.log(arrAnimals);

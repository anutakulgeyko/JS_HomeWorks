'use strict';

const objectStudent = {
    name: 'Alex',
    ['student-' + 'age']: 25,
    grade: 80,
    grade2: 85,
};

objectStudent.course = {
    courseName: 'Front-End Developer',
};

console.log(objectStudent, objectStudent.name, objectStudent['student-' + 'age'],
    objectStudent.grade, objectStudent.grade2, objectStudent.course,
    objectStudent.course.courseName);




const deepObjectBook = {
    title: 'Encyclopedia All about animals',
    author: 'Ivanov Serhiy Bohdanovich',
    year: 2021
};
    deepObjectBook.publisher = {
        name: 'Ranok',
        location: 'Ukraine'
};

console.log(deepObjectBook, deepObjectBook.publisher.location);




const objectMovie = {
    title: 'Spartacus',
    director: 'Sam Raimi',
    year: 2023,
    genre: 'fantastic'
};

for (let key in objectMovie) {
    console.log( key, '' , objectMovie[key] )
}



const objectPerson1 = Symbol('id1');
let symbolPerson1= {
    id: Symbol('id1'),
    name: 'Dima',
    age: 25,
    grade: 10,
};
for (let key in objectPerson1) {
    console.log( key, '' , symbolPerson1[key] )
}

const objectPerson2 = Symbol('id2');
let symbolPerson2 = {
    id: Symbol('id2'),
    name: 'Dima',
    age: 25,
    grade: 10,
};
for (let key in objectPerson2) {
   console.log( key, '' , symbolPerson2[key] )
}

function areObjEqual(objectPerson1, objectPerson2) {
let keysPerson1 = Object.keys(objectPerson1);
let keysPerson2 = Object.keys(objectPerson2);
if (keysPerson1.length !== keysPerson2.length) {
    return false;
}
for (let key of keysPerson1) {
    if (objectPerson1[key] !== objectPerson2[key]) {
        return false;
    }
}
return true;
}

console.log(objectPerson1, objectPerson2);
console.log(areObjEqual(objectPerson1, objectPerson2));
console.log(objectPerson1 === objectPerson2);



const arrAnimals = [{type: 'cat'}, {name: 'Barsic'}];
arrAnimals[2] = {color: 'grey'};

console.log(arrAnimals);
console.log(arrAnimals.length);




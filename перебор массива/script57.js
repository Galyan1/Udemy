'use strict';

//filter 

const names = ['ivan', 'ann', 'galya', 'vladimir'];

const shortNames = names.filter(name=>{
    return name.length < 5;
});

console.log(shortNames);


//map - изменить элементы в исходном массиве

const answers = ['ivАn', 'anN', 'galya', 'Vladimir'];


const result = answers.map(name => {
    return name.toLowerCase();
});

console.log(result);

//ИЛИ
let answer = ['ivАn', 'anN', 'galya', 'Vladimir'];

answer = answer.map(name => {
    return name.toLowerCase();
});

console.log(answer);

// every/some

const some = [5, 'hahha', 'ososo'];
console.log(some.every(item=> {return typeof(item)==='number'}));// проверка все ли элементы числа
console.log(some.some(item=> {return typeof(item)==='number'})); // проверка есть ли в массиве число хотя бы одно (true)

//reduce - собрать массив в одно единое целое

const arr = [4, 5, 1, 3, 2, 6];

const res = arr.reduce((sum, current) => sum + current);

console.log(res);



const arr1 = ['i', 'love' ,  'you'];

const res1 = arr1.reduce((sum, current) => sum + ' ' + current);

console.log(res1);


// пример

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};
                    //матрица  
const newArr = Object.entries(obj).filter(item=> item[1] === 'persone').map(item => item[0] );

console.log(newArr);




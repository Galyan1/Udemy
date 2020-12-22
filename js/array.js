"use strict";

const arr = [70, 2, 31, 4, 50];
arr.sort(compareNum);
//arr[99] = 0;
//console.log(arr.length); //последний индекс + 1
console.log(arr);

function compareNum(a, b){
    return a - b;
}



arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);//перебор массива
}); 

arr.pop(); //удаление последнего элемента

arr.push(60); //добавление эл-та в конец

console.log(arr);







for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

let ar1 = [1, 2, 3];
for (let value of ar1){
    console.log(value); //вызов значения, а не ключа
}

const str = prompt ('', '');
const products = str.split(', '); //формирование массива на основании строк
products.sort(); // сортировка в алфавитном порядке
//console.log(products);
//console.log(products.join('; ')); // вывод массива в виде строки

const proverka = {};
proverka.a = 5;
proverka.b = 7;
proverka.c = {};
proverka.c.kek = 'lol';
delete proverka.b;
console.log(proverka);
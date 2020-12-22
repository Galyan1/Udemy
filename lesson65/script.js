'use sctrict';

// new RegExp('pattern', 'flags');

// /pattern/f/


const ans = prompt('введите ширину элемента');

const reg = /n/ig;
//i что-то найти внезависимости от регистра
//g найти сразу нсеколько вхождений
//m многострочный режим

//console.log(ans.search(reg)); //позиция, на которой встречается буква n. search ищет певое совпадение

//console.log(ans.match(reg)); //можно найти все n

// const log = prompt('login');
// const pass = prompt('password');

// console.log(log.replace(/\./g, '*'));// все точки станут звездочками (экранирование)

// console.log(pass.replace(/./g, '*')); // берем все эл-ты, которые попали в строку и заменяем на *

//console.log('12-34-56'.replace(/-/g, ':' ));

console.log(reg.test(ans)); // есть ли в строке регулярное выражение false or true есть ли в строке n

// КЛАССЫ РЕГУЛЯРНЫХ ВЫРАЖЕНИЙ
//\d - цифры
//\w - буквы
//\s - пробелы

const reg1 = /\d/g;

console.log(ans.match(reg1)); // находим все не цифры

console.log((ans.match(reg1)).join(''));


const str = 'my name is R2D2';

console.log(str.match(/\w\d\w\d/i)); //вывдет r2d2

//ОБРАТНЫЕ КЛАССЫ

//\D не числа 
//\W не буквы
//\S не пробелы

console.log(str.match(/\D/g)); // все, кроме цифр
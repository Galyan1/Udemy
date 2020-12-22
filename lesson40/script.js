'use strict';

const now = new Date();
console.log(now);

/////////////////////////геттеры - получаем
/*console.log(now.getFullYear());
console.log(now.getMonth());// месяц с 0
console.log(now.getDate()); 
console.log(now.getHours());
console.log(now.getDay()); // день недели 0 - воскресенье


console.log(now.getTimezoneOffset());
console.log(now.getTime()); // ms с 1970*/

/////////////////////////////////сеттеры - устанавливаем
console.log(now.setHours(18));
console.log(now);



////измерение промежутка времени
let start = new Date();

for (let i = 0; i< 100000; i++){
    let sum = i ** 3;  //возведение в степень
}

let end = new Date();

alert(`цикл отработал за ${end - start} миллисекунд`);

"use strict";
let a = 5,
    b = a;

b = b + 5;
console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};
//const copy = obj; //ссылка на obj

//copy.a = 10; //применяется к объекту (передача по ссылке)

//console.log(copy);
//console.log(obj);

//как создать КОПИЮ объекта, а не ссылку (внизу написано)
 function copy(mainObj){
     let objcopy = {};

     let key;
     for (key in mainObj){
         objcopy[key] = mainObj[key]; //поверхностная копия (не включена вложенность)
     }
     return objcopy;
 }
 const numbers = {
     a: 2,
     b: 5,
     c: {
         x: 7,
         y: 4
     }
 };
 const newNumbers = copy(numbers);

 newNumbers.a = 10;

 console.log(numbers);
 console.log(newNumbers);

 // соединение объектов

 const add1 = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

 const add2 = {
     d: 17,
     e: 20
 };

 console.log(Object.assign(add1, add2));

 const clone = Object.assign({}, add2); // добавление к пустому объекту
 clone.d = 10;
 console.log(clone);

 // копия массива

 const oldArray = ['a', 'b', 'c'];
 //const newArray = oldArray; ссылка на олд, изменяя новый, меняется и старый
 const newArray = oldArray.slice(); // copy
 newArray[0] = 'hallo';
 console.log(newArray);
 console.log(oldArray);

 // новый стандарт разворота 

 const video = ['youtube', 'rutube', 'tiktok'], 
       blogs = ['wordpress', 'livemagazine', 'blogger'],
       internet = [...video,...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c){
    console.log(a, b, c);
}

const num = [2, 5, 7];

log(...num);

// spread оператор

const array = ['a', 2, 'b'];
const newAr = [...array]; //вместо slice
console.log(newAr);

const ob = {
    on: 1,
    of: 'kek'
};

const newob = {...ob};
newob.on = 'lol';
console.log(newob);
console.log(ob);





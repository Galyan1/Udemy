"use strict";
function calc(a , b){
 let c = a*b;
 console.log(c);
}
calc(7, 8);



function ShowMessage(){
    console.log('hi');
}
ShowMessage();


let num = 40; // глобальная;
function showsecond(text){
console.log(text);
let num = 29; // внутри, снаружи не доступна (локальная);
num++;
//console.log(num); вывод 30
}
showsecond('hello');
console.log (num); // вывод 40



function calci(a, b){
    return (a + b);
}
console.log(calci(5, 6));




function ret(){
    let num = 10;
    return num; // функция закончилась
}
console.log(ret());


const kalk = (a, b) => a + b; 
console.log (kalk(5,7));

//callback functions

function first(){
    //do something;
    setTimeout(function(){
        console.log(1);
    }, 500);
}
function second(){
    console.log(2);
}
first();
second();

function learnJs(lang, callback){
    console.log(`i'm learning ${lang}`);
    callback();
}
learnJs('js', function(){
    console.log('i win');
});

function calcul(a, b, callback){
    console.log(a+b);
    callback();
}
calcul(3, 5, function(){
    console.log('win');
});

function Test1 (mem, read){
    console.log(mem);
    read();
}

Test1('kek', () => {
    console.log('lol arbidol');
});


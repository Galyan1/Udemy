'use strict';

//контекст вызова

function showThis(a, b){
    console.log(this);
    function sum(){
        console.log(this);
        return a + b;
    }
    console.log(sum);
}

showThis(4, 5);

const obj = {
    a: 20,
    b: 15,
    sum: function(){
        console.log(this);
    }
};

obj.sum();

function User(name, id){
    this.name = name;
    this.id = id;
    this.humen = true;
    this.hello = function(){
        console.log(`hello, ${this.name}`);
    };
}


const ivan = new User('Ivan', 28);


function SayName(surname){
    console.log(this);
    console.log(this.name + surname);
}

const usr = {
    name: 'Jhon'
};

SayName.call(usr, 'smith');
SayName.apply(usr, ['smith']);

function count(num){
    return this*num;
}

const double = count.bind(2);


console.log(double(5));


//1) обычная функция: this = window, но если строгий режим, то this = undefined
//2) контекст (this) у методов объекта это есть сам объект
//3) this в конструктарах и классах это новый экземпляр объекта
//4) ручная привязка this, apply, bind4

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
console.log(this);
});


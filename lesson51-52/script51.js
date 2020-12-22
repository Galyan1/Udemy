'use strict';

const person ={
    name: 'alex',
    tel: '9090',
    parents:{
        mom: 'lena',
        dad: 'ivan'
    }
};

// превращаем в вариант, который можно транспортировать на сервер - json - все сущности в кавычках (строки)

console.log(JSON.parse(JSON.stringify(person))); 

//stringify на сервер, parse с сервера

const clone = JSON.parse(JSON.stringify(person)); // глубокая копия объекта

clone.parents.dad = 'roma';

console.log(person,clone );

const user = {
    login: 'ivan',
    password: '1234',
    friends:{
        bestFriend: 'oleg',
        friend: 'pasha'
    }
};

const Masha = JSON.parse(JSON.stringify(user));

Masha.login = 'Masha';
Masha.friends.bestFriend = 'lena';
console.log(Masha);

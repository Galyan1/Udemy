'use strict';

/*function User(name, age){
    this.name = name;
    this.age = age;

    this.say = function(){
        console.log(`user's name: ${this.name}, age: ${this.age}`);
    };
}

const ivan = new User('Ivan', 27);

console.log(ivan.name);
console.log(ivan.age);

ivan.age = 30; 
ivan.name = 'alex';// вмешивание в код!!
ivan.say(); */

/*function User(name, age){
    this.name = name;
    let userAge = age; //инкапсуляция

    this.say = function(){
        console.log(`user's name: ${this.name}, age: ${userAge}`);
    };
    this.getAge = function(){ //получение этой переменной
        return userAge;
    };
    this.setAge = function(age){
        if (typeof age ==='number' && age>0 && age<110){
            userAge =age;
        }
        else{
            console.log('недопустимое значение');
        }
    };
    
}

const ivan = new User('Ivan', 27);

console.log(ivan.name);
console.log(ivan.getAge());

ivan.setAge(30);  //установили возраст
ivan.setAge(300); 
console.log(ivan.getAge()); //получили установленный возраст
ivan.say(); */

///     С КЛАССАМИ

class Car{
    constructor(name, age){
        this.name = name;
        this._carAge = age; 
    }
    say(){
        console.log(`car's name: ${this.name}, age: ${this._carAge}`);
    }
    get Age(){ //получение этой переменной
        return this._carAge;
    }
    set Age(age){
        if (typeof age ==='number' && age>0 && age<110){
            this._carAge =age;
        }
        else{
            console.log('недопустимое значение');
        }
    }

}
const ivan = new Car('Ivan', 27);

console.log(ivan.Age);
ivan.Age = 90;
console.log(ivan.Age);

 
ivan.say();
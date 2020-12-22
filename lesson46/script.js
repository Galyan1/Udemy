'use strict';


//функции конструкторы

function User(name, id){
    this.name = name;
    this.id = id;
    this.humen = true;
    this.hello = function(){
        console.log(`hello, ${this.name}`);
    };
}


const ivan = new User('Ivan', 28),
      oleg = new User('Oleg', 30);

      console.log(ivan, oleg);

ivan.hello();

User.prototype.exit = function(){
    console.log(`пользователь ${this.name} вышел из системы`); //создание нового метода exit  с помощью конструкции prototype
};

ivan.exit();


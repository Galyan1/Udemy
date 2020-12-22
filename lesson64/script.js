'use strict';

// localStorage.setItem('number', 5); //устанавливаем ключ изначение

// console.log(localStorage.getItem('number')); //получить данные

// localStorage.removeItem('number'); //удалить ключ

// localStorage.clear(); // очистить хранилище



//ПРАКТИКА

const checkBox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')){
    checkBox.checked = true;

}
if(localStorage.getItem('bg')){
    form.style.background = 'yellow';
}

checkBox.addEventListener('change', () =>{
    if (localStorage.getItem('isChecked')){
        localStorage.removeItem('isChecked');
        
    }
    else{
        localStorage.setItem('isChecked', true);
    }  
});

change.addEventListener('click', ()=>{
    if(localStorage.getItem('bg')){
        localStorage.removeItem('bg');
        form.style.background = '#fff';
    }
    else{
        localStorage.setItem('bg', 'changed');
        form.style.background = 'yellow';
    }
});


const persone = {
    name:'Alex',
    age: 25
};

const serailizedPerson = JSON.stringify(persone);
localStorage.setItem('alex', serailizedPerson);

console.log(JSON.parse(localStorage.getItem('alex')));

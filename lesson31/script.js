"use strict";

const btn = document.querySelector('#btn'),
      btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');
let i = 0;
btn.addEventListener('click', () => {
    alert(++i);
});

btns.forEach(item =>{
 item.addEventListener('click', (e)=>{
    alert('YOU PUSHED');
    console.log(e.target);
 }, {once: true}); //произойдет один раз
});

btn.addEventListener('mouseenter', (event) => {
    //alert('hi');
    console.log(event.target); // на каком эл-те событие
    event.target.remove(); //удаление при наведении
});

btns[3].style.cssText = 'background: blue';
const counter = (e) =>{
    console.log(e.currentTarget); // всплытие событий
    console.log(e.type);
   // ++i;
    //console.log(i);
   // if (i == 2){
   //     btns[3].removeEventListener('click', counter);
  //  }
};

btns[3].addEventListener('click', counter);
overlay.addEventListener('click', counter);

const link = document.querySelector('a');

link.addEventListener('click', (event) =>{
    event.preventDefault();
    console.log(event.target);
});






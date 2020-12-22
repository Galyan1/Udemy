'use strict';

const btns = document.querySelectorAll('button');
const box = document.querySelector('#box');
const circles = document.querySelector('.circle');
const hearts = document.querySelectorAll('.heart');

box.style.background = 'green';

btns[0].style.cssText = 'width: 115px; border-radius: 90%; background: red; ';

btns.forEach(item => {
    item.style.color = 'yellow';
});

const newElement = document.createElement('div');

newElement.classList.add('heart');
newElement.style.background = 'blue';

document.querySelector('.wrapper').append(newElement);

btns[4].after(document.querySelector('.wrapper'));

btns[2].replaceWith(box);

 

/*console.log(btns);
btns.forEach(item => {
    console.log(item);
});

console.dir(btns[3]);*/



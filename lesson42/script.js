'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('button');

const width = box.clientWidth; // в пикселях без margin, но px не указываются
const height = box.clientHeight;// в пикселях видимая часть

console.log(width, height);

btn.addEventListener('click', () =>{
    //box.style.height = box.scrollHeight + 'px'; //вся высота
    console.log(box.scrollTop); // cколько открутил == pageYofset на window
});

console.log(box.getBoundingClientRect().top);// координаты (не как в css) только top

const style = window.getComputedStyle(box); // из css

console.log(style.display);

/// с псевдоэлементами в js не работают, но можно получить их стили

console.log(document.documentElement.scrollTop);

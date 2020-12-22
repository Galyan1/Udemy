/*const timeId = setTimeout(function(text){
    console.log(text);
}, 2000, 'oy boy'); 

const logger = () => {
    alert('hello, girl');
};

const timeForthis = setTimeout(logger, 3000); // ждет 3сек и запускает функцию

clearInterval(timeId); 

const logger = () => {
    if (i == 3){
        clearInterval(timeForthis);
    }
    console.log('hello, girl');
    i++;
    
};



let timeForthis,
    i = 0; //глобальная переменная

btn.addEventListener('mousemove', ()=>{
   // const timeForthis = setTimeout(logger, 2000);
   timeForthis = setInterval(logger, 2000);
});

let id = setTimeout(function log(){
    console.log('oy boy');
    id = setTimeout(log, 500); //рекурсия
}, 500);*/

const btn = document.querySelector('button');
const elem = document.querySelector('.box');
    let pos = 0;

// function myAnimation(){
//     const elem = document.querySelector('.box');
//     let pos = 0;
//     const id = setInterval(frame, 10);
//     function frame(){
//         if (pos == 300){
//             clearInterval(id);
//         }
//         else{
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }
// btn.addEventListener('click', myAnimation);

function myAnimation(){
    pos++;
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';

    if (pos < 300){
        requestAnimationFrame(myAnimation);
    }
 
}
btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

// let id = requestAnimationFrame(myAnimation);
// cancelAnimationFrame(id); /стоп анимация
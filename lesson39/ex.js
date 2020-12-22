"use strict";

window.addEventListener('DOMContentLoaded', () => {
    
const box = document.querySelector('.box');

function myAnimation(){
    const move = setInterval(frame, 10);
    
    let top = 0;
    let left = 0;

    function frame(){
      
        if (top != 400 && left == 0){
            top++;
            box.style.top = top + 'px';
            box.style.background = 'yellow';
       }
       else if (top == 400 && left != 400){
           left++;
            box.style.left = left + 'px';
            box.style.background = 'red';
       }
       else if (top <= 400 && top !=1 && left == 400){
        top--;
         box.style.top = top + 'px';
         box.style.background = 'green';
      }
      else if (top == 1 && left <= 400 && left != 1){
        left--;
         box.style.left = left + 'px';
         box.style.background = 'blue';
      }
      else if (top == 1 && left == 1){
        clearInterval(move);
    }

       
}}

    box.addEventListener('click', myAnimation);


    //// секундомер

    const secundomer = document.querySelector('.second'),
        sec = secundomer.querySelector('.sec'),
        btn = secundomer.querySelectorAll('button');

    let click = 1;
    let i = 0; 

    
    function secunda(){
        sec.innerHTML = i;
        const second = setInterval(change, 1000);
        function change(){
                i++;
                sec.innerHTML = i;
            }  
        btn[1].addEventListener('click', () =>{
            clearInterval(second);
        }); 
            
        btn[2].addEventListener('click', () =>{
            clearInterval(second);
            i = 0;
            sec.innerHTML = i;
        });
    }

    btn[0].addEventListener('click',secunda);



});


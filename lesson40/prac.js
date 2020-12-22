'use strict';

window.addEventListener('DOMContentLoaded', () => {

 function getZero(num){
    if (num >= 0 && num < 10 ){
        return `0${num}`;
    }
    else{
        return num;
    }

 }
          

    function getTimeRemaining(){
        const t = Date.parse('2020-11-22T00:00:00') - Date.parse(new Date()),
              hours = Math.floor(t/1000/60/60),
              minutes = Math.floor(t/1000/60%60),
              seconds = Math.floor(t/1000%60);

        return {
                't': t,
                'h': hours,
                'm': minutes,
                's': seconds
            };
    }

    function setClock(){
        const h = document.querySelector('#hours'),
              m = document.querySelector('#minutes'),
              s = document.querySelector('#seconds'),
              timer = setInterval(updateClock,1000);
        updateClock();
        
        function updateClock(){
            const t = getTimeRemaining();
            h.innerHTML = getZero(t.h);
            m.innerHTML = getZero(t.m);
            s.innerHTML = getZero(t.s);

            if (t.t <= 0){
                clearInterval(timer);
            }
        }
              
    }

    setClock();
   






});
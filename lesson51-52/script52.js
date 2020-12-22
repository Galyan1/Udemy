'use strict';

const inpRub = document.querySelector('#rub'),
      inpUsd = document.querySelector('#usd'),
      inpEur = document.querySelector('#eur');


 inpRub.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('load', ()=>{
        if (request.status === 200){
            console.log(request.response);
            const data = JSON.parse(request.response);
            inpUsd.value = (+inpRub.value / data.current.usd).toFixed(2);
            inpEur.value = (+inpRub.value / data.current.eur).toFixed(2);
        }
    });
 });  
























    //   inpRub.addEventListener('input', () => {
    // const request = new XMLHttpRequest();
    
    // request.open('GET', 'current.json' );
    // request.setRequestHeader('Content-type', 'applecation/json; charset=utf-8');
    // request.send();


    //status - статус запроса (404 и тд)
    ///statusText - текст статуса запроса not found и тд
    //response ответ от бэкенда
    // readyState - текущее состояние запроса
     
    // request.addEventListener('load', () =>{ // отслеживает статус готовности запроса
        // if (request.status === 200){
            // console.log(request.response); //json doc
            // const data = JSON.parse(request.response); // перевод json в норм вид
//             console.log(data);
//             inpUsd.value = (+inpRub.value / data.current.usd).toFixed(2);
//         }
//         else{
//             inpUsd.value = 'что-то пошло не так';
//         }
//     });

// });
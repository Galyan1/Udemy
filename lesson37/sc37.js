const btns = document.querySelectorAll('button');

/*console.log(btns[0].classList.length); //кол-во классов
console.log(btns[0].classList.item(0)); //класс под индексом 0
console.log(btns[0].classList.add('red')); //доавить класс. можно добавить несколько через запятую
console.log(btns[0].classList.remove('blue'));//удаление класса
console.log(btns[1].classList.toggle('blue'));// проверяет наличие класса, если нет, добавляет

if (btns[0].classList.contains('red')){ //проверка на наличие класса
    console.log('red');
}*/

btns[0].addEventListener('click', (e) =>{
    if (!btns[1].classList.contains('red')){
       btns[1].classList.add('red');
   }
    else{
      btns[1].classList.remove('red'); 
    }
 //btns[1].classList.toggle('red')
});

/////////////////////////////////////////делегирование событий


const first = document.querySelector('#first');

first.addEventListener('click', (e) => {
   if (e.target && e.target.tagName == 'BUTTON'){ // e.target.classList.contsins('blue');  e.target.matches('button.red')
       console.log('hi');
       e.target.classList.add('yellow');
   }
});


/// без делегирования

btns.forEach(item => {
    item.addEventListener('click', (e) =>{
        console.log('bye');
    });
});

const btn = document.createElement('button');
btn.classList.add('red');
first.append(btn);


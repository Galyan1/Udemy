//touchstart - касание
// touchmove - касание и движение
// touchend -отрыв от эл-та
// touchenter - когда ведешь и наскальзываешь на элемент
// touchleave - когда ведешь и выходишь за пределы эл-та
//touchcancle

window.addEventListener('DOMContentLoaded', () =>{

const box = document.querySelector('.box');

box.addEventListener('touchstart', (e) => {
    e.preventDefault();
    console.log(e.touches);
})
box.addEventListener('touchmove', (e) => {
    e.preventDefault();
    console.log(e.targetTouches[0].pageX);
})

box.addEventListener('touchend', (e) => {
    e.preventDefault();
    console.log('end');
})

});

//touches -свойство 
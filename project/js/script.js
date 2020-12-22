/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
window.addEventListener('DOMContentLoaded', () =>{
    const movieDB = {
        movies: [
            "ЛОГАН", 
            "ЛИГА СПРАВЕДЛИВОСТИ",
            "ЛА-ЛА ЛЭНД",
            "ОДЕРЖИМОСТЬ",
            "СКОТТ ПИЛИГРИМ ПРОТИВ..."
        ]
    };
    
    const PromoAdv = document.querySelectorAll('.promo__adv img'),
          Poster = document.querySelector('.promo__bg'),
          AddForm = document.querySelector('.add'),
          inp = AddForm.querySelector('[type = "text"]'),
          checkbx = AddForm.querySelector('[type = "checkbox"]'),
          btn = AddForm.querySelector('button'),
          KinoList = document.querySelector('.promo__interactive-list');
          
    
    const deleteAdv = (adv) => {
        adv.forEach(item => {
            item.remove();
        });
    };


    const DeletElm = () => {
        document.querySelectorAll('.delete').forEach((item,i) =>{
         item.addEventListener('click', (e)=>{
         item.parentElement.remove();
         movieDB.movies.splice(i, 1);//удаление элемента из бд
         CreatMovie(movieDB.movies, KinoList); 
     }); 
    });
 };
    
    
    document.querySelector('.promo__genre').textContent = 'Драма';
    Poster.style.cssText = 'background-image: url("img/bg.jpg")';
    
    const SortArr = (arr) =>{
        arr.sort();
    };
   

    function CreatMovie(films, parent){
        parent.innerHTML = '';
        SortArr(movieDB.movies);
        films.forEach((film, i) => {
            if (film.length > 20) {
              film =`${film.slice(0,20)}...` ; //film.slice(0,20) + '...'
            }
            parent.innerHTML += `<li class="promo__interactive-item">${i+1}. ${film}
            <div class="delete"></div>
        </li>`;
        }
        );
        DeletElm();   
    }
    
    CreatMovie(movieDB.movies, KinoList);
    deleteAdv(PromoAdv);
    SortArr(movieDB.movies);
    
    AddForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        if (inp.value){ // не равно ''
            movieDB.movies.push(inp.value.toUpperCase());
            CreatMovie(movieDB.movies, KinoList);
        }
        if (checkbx.checked){
            console.log('Добавляем любимый фильм');
        }
        
        e.target.reset(); // очистить поле
        console.log(movieDB);
    });

   
    

   
});



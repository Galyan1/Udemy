window.addEventListener('DOMContentLoaded', () => {
    // табы
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');


    function hideTabContent(){
        tabsContent.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0){
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (e) => {
    if (e.target && e.target.matches('div.tabheader__item')){
        tabs.forEach((item, i) => {
            if (e.target == item){
                hideTabContent();
                showTabContent(i);
            }
        });
    }
    
});

//таймер

const deadline = '2020-12-24';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            hours = Math.floor( (t/(1000*60*60) % 24) ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            seconds = Math.floor( (t/1000) % 60 );
            
            

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10){
            return `0${num}`;
        }
        else{
            return num;
        }
    }
    

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
            updateClock();
        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML =getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

//modal window

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        close = document.querySelector('[data-close]'),
        scrollEnd = document.documentElement;

        function openModal(){
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimerId);      
        }
    
        function closeModal(){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
        
        function ShowModalByScroll(){
            if(scrollEnd.scrollTop + scrollEnd.clientHeight >= scrollEnd.scrollHeight){
                openModal(); 
                window.removeEventListener('scroll', ShowModalByScroll);
          }
        }
    

    modalTrigger.forEach(item => {
        item.addEventListener('click', openModal);
    });

   
    close.addEventListener('click', closeModal);

    window.addEventListener('keydown', (event) => {
        if (event.key == 'Backspace' && modal.classList.contains('show')) { 
            closeModal();
        }  
    });

    //const modalTimerId = setTimeout(openModal,10000); // адалка через время

   window.addEventListener('scroll', ShowModalByScroll); //прокрутка до конца и появляется модалка


// карточки меню


class MenuField {
    constructor (img, alt, subtitle, descr, price, parentSelector, ...classes){
        this.img = img;
        this.alt = alt;
        this.subtitle = subtitle;
        this.descr = descr;
        this.transfer = 90;
        this.classes = classes;
        this.price = price ;
        this.parent = document.querySelector(parentSelector);
        this.changePrice();
    }
    changePrice(){
        this.price = this.price * this.transfer;
    }
    ShowCard(){
        const elm = document.createElement('div');
        if (this.classes.length === 0){
            this.elm = 'menu__item';
            elm.classList.add(this.elm);
        }
        else{
            this.classes.forEach(item => elm.classList.add(item));
        }
        
        elm.innerHTML = ` <img src=${this.img} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.subtitle}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
        </div>`;
        this.parent.append(elm);
    }

}

new MenuField(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    5,
    ".menu .container",
    'menu__item',
    'big'
).ShowCard();

new MenuField(
    "img/tabs/hamburger.jpg",
    "burger",
    'Меню "Почти ПП"',
    'Меню "Почти ПП" - это новый подход к приготовлению блюд: Две мясных котлеты гриль, специальный соус, сыр, огурцы, салат и лук, все на булочке с кунжутом',
    4,
    ".menu .container"
    

).ShowCard();

new MenuField(
    "img/tabs/post.jpg",
    "burger",
    'Меню "Постное"',
    'Чтобы очистить душу, тело необходимо держать в строгости и есть самую простую пищу, исключающую продукты животного происхождения (мясо, молоко, сливочное масло, яйца) ',
    3,
    ".menu .container",
    'menu__item'
).ShowCard();







});



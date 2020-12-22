function palindrome(){
    str.toLowerCase();
    if (str === str.split('').reverse().join('')){
        return true;
    }
  else{
      return false;
  }

}
let str = prompt ('введи слово');
console.log(palindrome());


function perebor(n){
    for (let i = 1; i <=n; i++ ){
        if (i % 5 == 0 && i % 3 == 0 ){
            console.log('fizzbuzz');
        }
        
        else if (i % 3 == 0 ){
            console.log('fizz');
        }
        else if (i % 5 == 0 ){
            console.log('buzz');
        }
        else{console.log(i);} 
    }
}
perebor(15);

let arr = [];
for (let i = 0; i<10; i++){
    arr.push(i);
}
console.log(arr);

const users = {
    name: 'galya',
    pastname: 'devyatova',
    login: 'devyatova.g@mail.ru',
    lovelyFlowers: [],
    toys: {
        big: 'Pug',
        small: 'pug2'
    }
};
for (let i = 0; i<5; i++){
    users.lovelyFlowers[i] = 'kek';
}

for (let key in users){
    if (typeof(users[key]) === 'object'){
        for (let gay in users[key]){
            console.log(`ключ ${gay} имеет значение ${users[key][gay]}`);
        }
    }
    else{
        console.log(`ключ ${key} имеет значение ${users[key]}`);
    }   
}
console.log(Object.keys(users).length);

let stroka = 'привет';
stroka = stroka.split('');
stroka[0] = stroka[0].toUpperCase();
stroka = stroka.join('');
console.log(stroka);

let perevorot = '123456';
console.log(perevorot.split('').reverse().join(''));

const nach = 'http://kromas.html';
if (nach.substr(-5) == '.html' ){
    console.log('true');
}
else{
    console.log('false');
}

const obj ={
    коля: 1000,
    вася: 500,
    петя: 200
};
console.log(obj['петя']);

let num = 3;
let result = 0;
switch(num){
    case 1:
        result = 'winter';
        break;
    case 2:
        result = 'sprin';
        break;
    case 3:
        result = 'summer';
        break;
    case 4:
        result = 'autom';
        break;
}
console.log(result);

const obj1 = {
    minsk: 'belorus',
    moscow: 'russia',
    kiev: 'ukrain'
};
for (let key in obj1){
    console.log(`${key} is city of ${obj1[key]}`);
}

let mas = [10, 20, 30, 50, 235, 300];


for (let i = 0; i<= mas.length; i++){
    let a = String(mas[i]);
    if (a.substr(0) == '1' || a.substr(0) == '2' || a.substr(0) == '5' ){
        console.log(mas[i]);
    }
}



function copyNumbers(Mainobj){
    let objCopy = {};
    for (let key in Mainobj){
        objCopy[key] = Mainobj[key];
    }
    return objCopy;
}
const numbers = {
    a:  1,
    b: 2,
    c: 3
};
const numbersCopy = copyNumbers(numbers);
numbersCopy.a = 10;
numbers.a = 5;
console.log(numbers);
console.log(numbersCopy);

const abc = {
    d: 5,
    i: 6,
    f: 7
};
const kek = Object.assign({},abc);
kek.d = 10;
abc.d = 20;

console.log(kek);
console.log(abc);

const newArray = ['kek', 'lol', 'meme'];
const oldArray = newArray.slice();
oldArray[0] = 'kjkjkj';
console.log(oldArray);
console.log(newArray);

function spread(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const word = ['do', 're', 'me'];

spread(...word);

const arr1 = [10, 20, 30],
      arr2 = ['lama', 'jsj'],
      arrSum = [...arr1, '+', ...arr2];

console.log(arrSum);

const AgainArray = ['cat', 'dog'];
const copyArray = [...AgainArray];
console.log(AgainArray);
copyArray[1] = 'cook';
console.log(copyArray);

let str1 = '5',
    num1 = 3;
str1 = Number(str1);
console.log(typeof(str1));
console.log(str1);
num1 = String(num1);
console.log(typeof(num1));
console.log(num1);

//console.log(String(num1));
//console.log(typeof(num1));

let stroch = 'mama ama criminal';
let newStroch = new String(stroch);
console.log(typeof(newStroch));

const car = {
    color: 'white',
    price: 100,
    hi: function(){
        console.log('heeey');
    }
};

const bmw = Object.create(car);
bmw.hi();
console.log(bmw.price);


//превращение в другой тип данных
//конкатенация перевод в строку
console.log(typeof(5+''));

const num22 = 5;
console.log('https://vk.com/catalog/' + num22);

const fontSize = 26 + 'px';
// перевод в число; унарный плюс

console.log(typeof(+'5'));

console.log(typeof(parseInt('15px', 10))); // отображает числовую часть 

//реальный пример:

let answ = +prompt('hello', ''); //строка приверталиась в число

// перевод в boolean

// 0, '', null, undefined, NaN == false;

//1)
let switcher = null;

if (switcher){
    console.log('working');
}

switcher = 1;

if (switcher){
    console.log('working..');
}

//2)

console.log(typeof(!!'5'));

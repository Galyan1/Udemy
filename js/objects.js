"use strict";

const options  = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: '2px solid black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('hallo');
    }
};

options.makeTest();

const {name, width} = options;
console.log(name);

const {border, bg} = options.colors;
console.log(border);

//console.log (options.name);

//delete options.name; //удаление свойства;

//console.log (options);
/*let counter = 0;
for (let key in options){ // вызывает ключ; 
    counter++;
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`свойства ${i} имеет значения ${options[key][i]}`); 
        }
        
    }
    else{
    console.log(`свойства ${key} имеет значения ${options[key]}`);  // Для перебора объекта  
    
    }
    
    
}
console.log(counter);
*/
console.log((Object.keys(options)).length); // кол-во св-в в объекте





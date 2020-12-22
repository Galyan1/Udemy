'use strict';

/*console.log('запрос данных');

const req = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('подготовка данных');
    
        const product = {
            name: 'tv',
            price: 2000
        };

       resolve(product);
    }, 2000);
    
});

/*req.then((product)=>{
    setTimeout(() => {
        product.status = 'order';
        console.log(product);
    }, 2000);
});//

req.then(product=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            product.status = 'order';
            //resolve(product);
           reject();
        }, 2000);      
    });
    
 }).then(data => {
        data.modify = true;
        return data;       
    }).then(data =>{
        console.log(data);
    }).catch(()=>{
        console.error('произошла ошибка');
    }).finally(()=>{
        console.log('finally');
    }); */

const test = time => {
    return new Promise(resolve =>{
        setTimeout(()=>resolve(), time);
    });
};

//test(1000).then(()=>console.log('1000ms'));
//test(2000).then(()=>console.log('2000ms'));


//Promise.all([test(1000), test(5000)]).then(()=>{
    //console.log('all'); //все промисы выполнились. все загрузились, последний промис
//});

Promise.race([test(1000), test(5000)]).then(()=>{
    console.log('wait'); // сначала первый промис
});
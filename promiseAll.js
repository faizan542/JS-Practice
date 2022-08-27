let p1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10)
    }, 1000);
});

let p2 = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(20)
    }, 2000);
});

let p3 = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('The third promise has resolved');
        resolve(30)
    }, 3000);
});

let total = 0; 

Promise.all([p1,p2,p3]).then(function(result){
    for (const i in result) {
        total += result[i];
    }
    console.log(`Result: ${result}`);
    console.log(`Total: ${total}`);
}).catch(function(error){
    console.error(`Error: ${error}`);
});


let promiseCall = function(returnData,msg){
    return function(resolve,reject){
        setTimeout(() => {
            console.log(`The ${msg} promise has resolved`);
            resolve(returnData);
        },returnData * 100);
    };
};

let p4 = new Promise(promiseCall(10,"first"))
let p5 = new Promise(promiseCall(20, "second"))
let p6 = new Promise(promiseCall(30, "third"));
let p7 = new Promise(function (resolve,reject) {
    reject('the fourth promise has rejected');
});

let total1 = 0; 

Promise.all([p4,p5,p6,p7]).then(function(result){
    for (const i in result) {
        total1 += result[i];
    }
    console.log(`Result: ${result}`);
    console.log(`Total: ${total1}`);
}).catch(function(error){
    console.error(`Error: ${error}`);
});

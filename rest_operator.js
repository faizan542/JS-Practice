// if we use built-in function of js "arguments"
// function sum(){
//     console.log(arguments);
//     let sum = 0;
//     for(let i in arguments){
//         sum += arguments[i];
//     }
//     document.write(sum);
// }
// sum(20,30,40,50);
// sum("Faizan",20,30,40,50); 

//// agr hum koi bhi string use kre gai tau ye function properly work nahi kre ga or ye sari values ko 
//// string mai convert kr de ga is situation se bachne k liye hume rest operator(...) use krna pre ga.
//// REST Opearator hamesha arguments k last mai aay ga.
//// function k parameters mai use hoga rest operater. examples are given below.
function sum(name, ...args){
    document.write(`Hi ${name} : `)
    let sum = 0;
    console.log(arguments)
    for(let i in args){
        sum += args[i];
    }
    document.write(sum);
}
// sum("Faizan",20,30,40,50); 
// sum("Ahmed",20,30,40,50,150); 


function sum(name,course, ...args){
    document.write(`Hi ${name}, your ${course} marks are: `)
    let sum = 0;
    console.log(args)
    for(let i in args){
        sum += args[i];
    }
    document.write(sum);
}
// sum("Faizan","MERN",20,30,40,50,); 

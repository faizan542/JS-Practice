// jab function call hoga tab spread operator(...) use hoga example: abc("xyz", ...arr)
function sum(name, ...args) {
    // document.write(`Hi ${name} : `)
    let sum = 0;
    // console.log(arguments)
    for (let i in args) {
        sum += args[i];
    }
    // document.write(sum);
}
var arr = [10, 54, 54, 1, 3, 40]
sum("Faizan", ...arr);

var arrr1 = [10, 20, 30, 40];
var arrr2 = [...arrr1];
arrr1.push(50);
//console.log(arrr1);     //jab humne spread operator array mai use kia tau arrr2 mai value clone nhi hui jab k arrr1 mai ho gai hai
//console.log(arrr2);


var abc = [10,20,30,40];
var xyz = [50,60];
// for concatination of array we also use spread operator
var jkl = [...abc,...xyz]
// console.log(jkl);

var obj1 = {
    name: "Faizan",
    skill: "Web Development"
};
var obj2 = {
    age: 22
};
// for concatination of objects we also use spread operator
var obj3 = {...obj1,...obj2};
// console.log(obj3)
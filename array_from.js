let str = "This is a string";
// console.log([...str]);    //triple dots are called spread operator

let fromStr = Array.from(str);
console.log(fromStr);

let arr1 = [1,1,2,2,3];
// let uniqueValue = Array.from(new Set(arr1));

// the another way to find unique value is spread operator
let uniqueValue = [...new Set(arr1)];
// console.log(uniqueValue);

const func = function(){
    console.log(Array.from(arguments).join(''));
}
func('f','a','i','z','a','n',' ','silat');
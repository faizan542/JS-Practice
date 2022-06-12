// ------------------Making a Palindrome Function-------------------------
var isPalindrome = function(string){
    if(string === string.split('').reverse().join('')){
        alert(string + " is Palindrome")
    }else{
        alert(string + " is not Palindrome")
    }
}

document.getElementById('form').onsubmit = function(){
    isPalindrome(document.getElementById('input').value);
    return false;
}
// ------------------End Palindrome Function-------------------------


// ------------------Making an Even or Odd Function-------------------
var isEvenOrOdd = function(number){
    if(number % 2 == 0){
        alert(number + " is Even Number")
    }else{
        alert(number + " is Odd Number")
    }
}

document.getElementById('form_two').onsubmit = function(){
    isEvenOrOdd(document.getElementById('input_two').value);
    return false;
}
// ------------------End Even or Odd Function-------------------

// -------------------To find Max Value in Array-------------------
var arr = [2,4,6,8,10,12,14,16,18,20];

var largest = arr[0];
for(i = 0; i < arr.length; i++){
    if(largest < arr[i]){
        largest = arr[i];
    }
}
console.log(largest);


// -------------------To find 2nd Max Value in Array-------------------
var secondLargest = arr[0];
for(i = 0; i < arr.length; i++){
    if(secondLargest < arr[i] && largest > arr[i]){
        secondLargest = arr[i];
    }
}
console.log(secondLargest);

// -------------------To find 3rd Max Value in Array-------------------
var thirdLargest = arr[0];
for(i = 0; i < arr.length; i++){
    if(thirdLargest < arr[i] && secondLargest > arr[i]){
        thirdLargest = arr[i];
    }
}
console.log(thirdLargest);


// ------------Find 2nd max number in array with single loop----------

var newArray = [19, 28, 2, 10, 32, 12,];

var large = newArray[0];
var secondLarge = newArray[0];
var thirdLarge = newArray[0];

// 2nd large array with single loop
for(i = 0; i < newArray.length; i++){
    if(newArray[i] > large){
        secondLarge = large;
        large = newArray[i];
    }
}
console.log(secondLarge);

// 3rd large array with single loop
for(i = 0; i < newArray.length; i++){
    if(newArray[i] > secondLarge && newArray[i] > large){
        secondLarge = large;
        thirdLarge = secondLarge;
        secondLarge = newArray[i];
    }
}
console.log(thirdLarge); 
// ------------End of Finding a Max Value in Array--------------------------------


// -----------------------Unique Number in Array----------------------
var arr_1 = [26, 27, 26, 26, 28, 28, 29, 29, 30];
// var uniqueval = arr_1.filter((x, i, a) => a.indexOf(x) == i);
// ----------------------------OR---------------------------
var uniqueval = [...new Set(arr_1)]
console.log(uniqueval);
// ----------------------------------PDF Assignment-----------------------------------
// -----------------------------------Function---------------------------------

// Q:1 Write a function that displays current date & time in your browser

// function date(currentDate){
// document.write(currentDate);
// }
// date(new Date);

// Q:2 Write a function that takes first & last name and then it greets the user using his full name

// var firstName = prompt("Enter your first name");
// var lastName =  prompt("Enter your last name");
// function fullName(){
//     alert("Hello " + firstName + " " + lastName); 
// }
// fullName();

// Q:3 Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// var firstNum = +prompt("Enter first number");
// var secondNum = +prompt("Enter second number");
// function sum(_a,_b){
//     alert(firstNum + secondNum);
// }
// sum(firstNum,secondNum);

// Q:4 CALCULATOR: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// var num1 = prompt("Enter first value");
// var oper = prompt("Enter your operator");
// var num2 = prompt("Enter second value");
// function calc(num1,oper,num2){
// if(oper === "+"){
//     return +num1 + +num2 
// }
// else if(oper === "-"){
//     return num1 - num2
// }
// else if(oper === "*"){
//     return num1 * num2
// }

// else if(oper === "/"){
//     return num1 / num2
// }

// else if(oper === "%"){
//    return num2 / num1*100
// }
// }
// document.write("The output is: " + calc( num1 , oper , num2))

// Q:5 Write a function that squares its argument.

// var num = +prompt("Enter a number for Squares :");
// function square(num) {
//     var squareNum = num * num;
//     document.write("The square of " + num + " is " + squareNum ) ;
// }
// square(num);

// Q:6 Write a function that computes factorial of a number.
// var factor = +prompt("Enter a Factorial Number ")
// function factorial(x) { 
//     if (x === 0) {
//     return 1;
//     }
//     return x * factorial(x-1);
// }
// document.write( factorial(factor));

// Q:7 Write a function that take start and end number as inputs & display counting in your browser

// var startnum = +prompt('Enter a number for Start Counting ');
// var endnum = +prompt('Enter a number for End Counting ');
// function counting (startnum,endnum){
//     for (i = startnum; i <= endnum; i++){
//         document.write(i + "<br>");
//     }
// }
// document.write("Starting number: " + startnum + " Ending number is: " + endnum + "<br>");
// counting(startnum,endnum);

// Q:8. Write a nested function that computes hypotenuse of a right angle triangle

// function hypotenuse() {
//     var base = Number(prompt("Enter base number"));
//     var perpendicular = Number(prompt("Enter perpendicular number"));
//     function square() {
//         base = base * base
//         perpendicular = perpendicular * perpendicular
//     }
//     square();
//     var hypot = base + perpendicular;
//     var squareRoot = Math.sqrt(hypot).toFixed(2);
//     return squareRoot;
// }
// document.write("<br>Hypotenuse of a given values is: " + hypotenuse());

// Q:9 Write a function that calculates the area of a rectangle

// function area(height, width) {
//     return height * width
// }
// document.write("Area of a rectangle is " + area(15, 20));

// Q:10 Write a JavaScript function that checks whether a passed string is palindrome or not?

// var text = prompt("Enter a word");
// function palindrome(){
//     var convert = text.split("").reverse().join("");
//     if(text === convert){
//         alert(text + " is a palindrome")
//     }else{
//         alert(text + " is not a palindrome")
//     }
// }
// palindrome()

// Q:11 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

// var string = "the quick brown fox";
// function capital(){
//     var sentence = string.split(" ");
//     for(i = 0; i < sentence.length; i++){
//         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//     return sentence.join(" ");
// }
// document.write(capital());

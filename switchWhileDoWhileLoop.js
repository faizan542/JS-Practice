// ----------------------------------PDF Assignment-----------------------------------
// -----------------------------------Ch# 38 to 42 Quedtions---------------------------------

// Q:1 Write a custom function power ( a, b ), to calculate the value of a raised to b

// function power(a,b){
//     var result = 1;
//     for(i = 1; i <= b; i++){
//         result = result * a;
//     }
//     return result;
// }
// document.write(power(2,4))

// Q:2 Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

// function leapYear(){
//     var year = prompt("Enter any year");
//     if(year % 4 === 0){
//         document.write(year + " is a leap year")
//     }else{
//         document.write(year + " is not a leap year")
//     }
// }
// leapYear();

// Q:3 If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by: area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2

// function calcTriangleArea(area) {
//     var a = 8;
//     var b = 7;
//     var c = 10;
//     var s = (a + b + b) / 2;
//     area = Math.sqrt(s * ((s - a) * (s - b) * (s -c)));
//     document.write("The area of triangle is " + area);
// }
// calcTriangleArea();

// Q:4 Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of thesemarks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.

// function studentMarks(){
//     var eng = +prompt("enter your english marks out of 100");
//     var urdu = +prompt("enter your urdu marks out of 100");
//     var math = +prompt("enter your math marks out of 100");
//     var totalMarks = 300;
//     var marksObt = eng + urdu + math;
//     function average(){
//         var avrg =  marksObt / 2;
//         document.write("Average marks of three subjects are " + avrg + "<br>");
//     }
//     average();
//     function percentage(){
//         var percent = marksObt / totalMarks * 100;
//         document.write("The percentage is " + percent.toFixed(2) + "%");
//     }
//     percentage()
// }
// studentMarks()

// Q:5 You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.

// function findIndex(str) {
//      str = "The quick brown fox jump from the dog".toLowerCase();
//      var splitStr = str.split("");
//      var indexWord = prompt("search the index of any word");
//      for(i = 0; i < splitStr.length; i++){
//         if(splitStr[i] === indexWord){
//             alert("the index of " + indexWord + " is " + i)
//             return true;
//         }
//      }
//      if(splitStr[i] !== indexWord){
//         alert("Not Found");
//         return false;
//      }
// }
// findIndex()

// Q:6 Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

// function removeVowels(str){
//     var noVowels = str.replace(/[aeiou]/g, "");
//     return noVowels;
// }
// document.write(removeVowels("The quick brown fox jump from the dog"));

// Q:7 Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text.

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var splitStr = str.split("");
//     var word = splitStr;
//     var newPair = [];
//     var pair;

//     for (i = 0; i < word.length - 1; i++) {
//         pair = word[i] + word[i + 1];

//         if(isVowel(pair[0]) && isVowel(pair[1])){
//             newPair.push(pair);
//         }
//     }
//     document.write(newPair);

//     function isVowel(pair) {
//         switch (pair) {
//             case "a":
//                 return true;
//             case "e":
//                 return true;
//             case "i":
//                 return true;
//             case "o":
//                 return true;
//             case "u":
//                 return true;
//         }
//         return false
//     }
// }
// findOccurrences()

// Q:8 The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters

// var distance = Number(prompt("Write distance between two cites in km"));
// document.write("Distance between two cites are " + distance + "km <br>");

// function distanceInMeter(){
//     var meter = distance * 1000
//     return document.write("Distance in meter is " + meter + "<br>");
// }
// distanceInMeter();

// function distanceInFeet(){
//     var feet = distance * 3280.84;
//     return document.write("Distance in feet is " + feet + "<br>");
// }
// distanceInFeet();

// function distanceInInches(){
//     var inch = distance * 39370.1;
//     return document.write("Distance in inch is " + inch + "<br>");
// }
// distanceInInches();

// function distanceInCentimeter(){
//     var centimeter = distance * 100000;
//     return document.write("Distance in centimeter is " + centimeter);
// }
// distanceInCentimeter();

// Q:9  Write a program to calculate overtime pay of employees.Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.

// function calcOvertimePay(){
// var overtimeHours = Number(prompt("Wrtire an overtime hours"));
// var basicSalary = 40000;
// var total = basicSalary + (overtimeHours * 12);
// return document.write("Total Salary " + total);
// }
// calcOvertimePay()

// Q:10 A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer

// function noteDenominations(){
//     var note = [100, 50, 10, 1];
//     var amount = Number(prompt("Enter amount to withdraw"));
//     document.write("Withdraw Amount: " + amount +"<br>");

//     var distribution100 = Math.floor(amount / note[0]);
//     var distribution50 = Math.floor((amount - (distribution100 * 100)) / note[1])
//     var distribution10 = Math.floor((amount - (distribution100 * 100 + distribution50 * 50)) / note[2])
//     var distribution1 = Math.floor((amount - (distribution100 * 100 + distribution50 * 50 + distribution10 * 1)) / note[3])
    
//     return document.write("You have " + distribution100 + " hundred notes, ", + distribution50 + " fifty notes, " + distribution10 + " ten notes and " + distribution1 + " coin");
// }
// noteDenominations();
// ------------------Making a Palindrome Function-------------------------
// var isPalindrome = function(string){
//     if(string === string.split('').reverse().join('')){
//         alert(string + " is Palindrome")
//     }else{
//         alert(string + " is not Palindrome")
//     }
// }

// document.getElementById('form').onsubmit = function(){
//     isPalindrome(document.getElementById('input').value);
//     return false;
// }
// ------------------End Palindrome Function-------------------------


// ------------------Making an Even or Odd Function-------------------
// var isEvenOrOdd = function(number){
//     if(number % 2 == 0){
//         alert(number + " is Even Number")
//     }else{
//         alert(number + " is Odd Number")
//     }
// }

// document.getElementById('form_two').onsubmit = function(){
//     isEvenOrOdd(document.getElementById('input_two').value);
//     return false;
// }
// ------------------End Even or Odd Function-------------------

// -------------------To find Max Value in Array-------------------
// var arr = [2,4,6,8,10,12,14,16,18,20];

// var largest = arr[0];
// for(i = 0; i < arr.length; i++){
//     if(largest < arr[i]){
//         largest = arr[i];
//     }
// }
// console.log(largest);


// -------------------To find 2nd Max Value in Array-------------------
// var secondLargest = arr[0];
// for(i = 0; i < arr.length; i++){
//     if(secondLargest < arr[i] && largest > arr[i]){
//         secondLargest = arr[i];
//     }
// }
// console.log(secondLargest);

// -------------------To find 3rd Max Value in Array-------------------
// var thirdLargest = arr[0];
// for(i = 0; i < arr.length; i++){
//     if(thirdLargest < arr[i] && secondLargest > arr[i]){
//         thirdLargest = arr[i];
//     }
// }
// console.log(thirdLargest);


// ------------Find 2nd max number in array with single loop----------

// var newArray = [19, 28, 2, 10, 32, 12,];

// var large = newArray[0];
// var secondLarge = newArray[0];
// var thirdLarge = newArray[0];

// 2nd large array with single loop
// for(i = 0; i < newArray.length; i++){
//     if(newArray[i] > large){
//         secondLarge = large;
//         large = newArray[i];
//     }
// }
// console.log(secondLarge);

// 3rd large array with single loop
// for(i = 0; i < newArray.length; i++){
//     if(newArray[i] > secondLarge && newArray[i] > large){
//         secondLarge = large;
//         thirdLarge = secondLarge;
//         secondLarge = newArray[i];
//     }
// }
// console.log(thirdLarge); 
// ------------End of Finding a Max Value in Array--------------------------------


// -----------------------Unique Number in Array----------------------
// var arr_1 = [26, 27, 26, 26, 28, 28, 29, 29, 30];
// var uniqueval = arr_1.filter((x, i, a) => a.indexOf(x) == i);
// ----------------------------OR---------------------------
// var uniqueval = [...new Set(arr_1)]
// console.log(uniqueval);

// ------------------------------PDF Assisgnment Questions--------------------------------
// ------------------------------------Chapter 14-16------------------------------------

// Q:7 Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed   qualifications in your browser like:

// var myarr = ["<ol> <li>SSC</li>"+ "<li>HSC</li>" + "<li>BCS</li>" + "<li>BS</li>" + "<li>BCOM</li>" + "<li>MS</li>" + "<li>M. Phil</li>" + "<li>PHD</li>" + "</ol>"];
// document.write(myarr);

// Q:8 Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like: 

// var stdName = ["Michael", "John", "Tony"];
// var stdScore = [320, 230, 480];
// var totalMarks = 500;
// var result;

// for(i = 0; i < stdName.length; i++){
//    result = stdScore[i]/500*100;
//    console.log(result)
//    document.write("score of "+ stdName[i] + " is " + stdScore[i] + ". Percentage: " + result +"% <br />")
// }

// Q:9 Initialize an array with color names. Display the array elements in your browser.

var colors = ["blue", "yellow", "red", "green", "purple"];
// a: Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.

// var addStart = prompt("Which color do you want to add to the beginning?");
// colors.unshift(addStart);
// document.write(colors);

// b: Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the  updated array in your browser.

// var addEnd = prompt("Which color do you want to add to the end?")
// colors.push(addEnd);
// document.write(colors);

// c: Add two more color to the beginning of the array. Display the updated array in your browser.

// colors.unshift("orange", "gray");
// document.write(colors);

// d:  Delete the first color in the array. Display the updated array in your browser.

// colors.shift(colors);
// document.write(colors);

// e: Delete the last color in the array. Display the updated array in your browser

// colors.pop(colors);
// document.write(colors);

// f: Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.

// var indexNum = prompt("At which index do you want to add a color from 0 to 4?");
//  var addColor = prompt("At which color do you want to add?");
//  colors.splice(indexNum, 0 ,addColor);
//  document.write(colors);

// g: Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

// var indexNum = prompt("At which index do you want to delete a color?");
//  var delColor = prompt("How many color you want to delete?");
//  colors.splice(indexNum, delColor);
//  document.write(colors);


// Q:10 Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// var score = [320,230,480,120];
// score.sort();
// document.write(score);

// Q:11 Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cities.slice(2,4);
// document.write("Selected cities list:" + "<br />" + selectedCities);

// Q:12 Write a program to create a single string from the below mentioned array:
// var arr = ["This", " is", " my", " cat"];
// var string;
// for(i = 0; i < arr.length; i++){
//    string =  arr[i].split('').join('')
//     document.write(string);
// }

// Q:13 Create a new array. Store values one by one in such a waythat you can access the values in the order in which they were stored. (FIFO-First In First Out)

var devices = ["keyboard", "mouse", "printer", "monitor"];
// for(i = 0; i < devices.length; i++){
//     document.write("Out: <br />" + devices[i] + "<br />");
// }

// Q:14 Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)

// for(i = (devices.length-1); i >= 0; i--){
//     document.write("Out: <br />" + devices[i] + "<br />");
// }

// Q:15 Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method

var phoneManufacturer = ["<select>" + "<option value='apple'>Apple</option>" + "<option value='samsung'>Samsung</option>" + "<option value='motorola'>Motorola</option>" + "<option value='nokia'>Nokia</option>" + "<option value='sony'>Sony</option>" + "<option value='haier'>Haier</option>" + "</select>"]

document.write("Phone Manufacturers: " + phoneManufacturer + "<br>");
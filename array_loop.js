// ------------------------------PDF Assisgnment Questions Chapter 17-20--------------------------------

// Q:2 Declare and initialize a multidimensional array representing the following matrix
// var multiArr = [["0" + "1" + "2" + "3"] + "<br />" + ["1" + "0" + "1" + "2"] + "<br />" + ["2" + "1" + "0" + "1"]];
// document.write(multiArr);

// Q:3 Write a program to print numeric counting from 1 to 10.

// for(i = 1; i <= 10; i += 1){
//     document.write(i+ "<br />")
// }

// Q:4 Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user

// var table = prompt("Enter a number to show its multiplication table");
// var tableLength = prompt("Enter a length of multiplication table");
// var result;
// for(i = 1; i <= tableLength; i++){
//     result = table * i;
//     document.write(table + " x " + i + " = " + result + "<br>");
// }

// Q:5 Write a program to print items of the following array using for loop:

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(i = 0; i < fruits.length; i++){
//     document.write("Element at index " + i + " is " + fruits[i] + "<br />")
// }

// Q:6 Generate the following series in your browser. See example output.
// a: . Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// for(i = 1; i <= 15; i++){
//     document.write(i + ", ")
// }

// b: Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// for(i = 10; i >= 1; i--){
//     document.write(i + ", ")
// }

// c: Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// for(i = 0; i <= 20; i += 2){
//     document.write(i + ", ")
// }

// d: Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// for(i = 1; i <= 19; i += 2){
//     document.write(i + ", ")
// }

// e: Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// for(i = 2; i <= 20; i += 2){
//     document.write(i + "k, ")
// }

// Q:7 Write a program to enable “search by user input” in an array.After searching, prompt the user whether the given item isfound in the list or not.

// var bakery = ["cake", "apple pie", "cookies", "chip", "patties"]
// var itemName = prompt("Welcome to Bakery. What do you want to order?").toLowerCase();
// var matchfound = "no"
// for(i = 0; i < bakery.length; i++){
//     if(itemName === bakery[i]){
//         matchfound = "yes"
//         document.write(bakery[i] + " is available at index " + i + " in our bakery")
//     }
// }
// if(matchfound === "no"){
//     document.write("We are sorry " + itemName + " is not available in our bakery")
// }

// Q:8 Write a program to identify the largest number in the given array

var arr = [24, 53, 78, 91, 12]
// var largest = arr[0];
// for(i = 0; i <= arr.length; i++){
//     if(largest < arr[i]){
//         largest = arr[i]
//     }
// }
// document.write(largest);

// Q:9 Write a program to identify the smallest number in the given array.

// var smallest = arr[0]
// for(i = 0; i <= arr.length; i++){
//     if(smallest > arr[i]){
//         smallest = arr[i]
//     }
// }
// document.write(smallest);

// Q:10 Write a program to print multiples of 5 ranging 1 to 100
// var num = 5;
// for(i = 1; i <= 20; i++){
//     document.write(num*i + ", ");
// }
// ------------------------Strings: Measuring Length Extracting Part------------------------

// var month = prompt("Enter a Month");
// var charInMonth = month.length;
// if(charInMonth > 3){
//     monthAbbrev = month.slice(0,3)
// }
// document.write(monthAbbrev)


// --------------------------------PDF Questions  Changing Case---------------------------------------------
// Q:1 Write a program that takes user input. Convert and show the input in capital letters

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName =  firstName + " " + lastName;
// document.write("<h1></h1>WELCOME <br />" + fullName.toUpperCase(fullName))

// Q:2 Write a program that takes user input. Convert and show the input in title case

// var str = prompt("write a sentence");
// var sentence = str.toLowerCase().split(" ");
// for(i = 0; i < sentence.length; i++){
//     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
// }
// document.write(sentence.join(" "));

// ------------------------------Strings: measuring length and extracting parts----------------------------------
// // Q:1. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.

// var favMobile = prompt("Write the name of your favourite mobile phone modal").length;
// document.write(favMobile);


// Q:2. Write a program to display the last character of a user input
// var input = prompt("Enter any text");
// var lastChar = input.charAt(input.length - 1)
// document.write(lastChar);

// -------------------------------------------Strings: finding segments--------------------------------
// Q:1 Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.

// var str = "Pakistani";
// var indexOfLetter = str.indexOf("n")
// document.write(indexOfLetter);

// Q:2 Write a program to take user input and store username in a variable. If the username contains any special symbol among (@ . ,     !), prompt the user to enter a valid username.

// var userName = prompt("Enter your user name");
// var validName = true
// for(i = 0; i < userName.length; i++){
// if(userName[i] === "@" || userName[i] === "." || userName[i] === "!"){
//     validName = false
//     alert("username name does not contain a special characters");
// }
// }
// if(validName === true){
//     document.write(`${userName} is a valid name`);
    
// }

// Q:3 You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// var string = "The quick brown fox jumps over the lazy dog";
// var occurrence = string.indexOf("the")
// document.write(occurrence)

// ----------------------------------------Strings: finding a character at a location-----------------------------------
// Q:1  Write a program to find the character at 3 rd index in the word “Pakistani” and display the result in your browser.
// var char = "Pakistani";
// var thirdIndex = char.charAt(3)
// document.write(thirdIndex);

// -------------------------------------------Strings: replacing characters-------------------------------------

// Q:1 Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var city = "Hyderabad";
// document.write(city + "<br>");
// var replaceName = city.replace("Hyder", "Islam");
// document.write(replaceName);

// Q:2 Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replace(/and/g, "&");
// document.write(replace)

// --------------------------------Rounding Number-------------------------------------------
// Q:1 Write a program that takes a positive integer from user & display the following in your browser.

// a: number (example number: 3.45214)
// var number = prompt("Write any positive floating nunber");

// b: round off value of the number
// var round = Math.round(number);
// document.write("Round off " + round);

// c: floor value of the number
// var floor = Math.floor(number);
// document.write("Floor Value" + floor)

// d: ceil value of the number
// var ciel = Math.ceil(number);
// document.write("Ceil Value" + ciel)

// Q:2 Write a program that takes a negative floating point number from user & display the following in your browser.

// a:  Number (example number: -2.678 )
// b: round off value of the number
// var round = Math.round(number);
// document.write("Round off " + round);

// c: floor value of the number
// var floor = Math.floor(number);
// document.write("Floor Value" + floor)

// d: ceil value of the number
// var ciel = Math.ceil(number);
// document.write("Ceil Value" + ciel)


// -------------------------------------------Generating random numbers---------------------------
// Q:1 Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser

// var dice = Math.random()* 7;
// document.write(dice)

// Q:2 Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.

// var value = Math.ceil( Math.random() * 2 );
// document.write("Random dice Value : " + value);
// if(value === 2){
//     document.write("<br>Random coin Value : Heads")
// } else{
//     document.write("<br>Random coin Value : Tails")
// }

// Q:3 Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

// var inputNum = prompt("Enter a number between 1 to 10");
// var round = Math.ceil(Math.random() * 10 );
// console.log(round)
// if (inputNum == round){
//     alert("You enter a correct secret number")
// }else{
//     alert("Try again")
// }

// ---------------------------------------------------Converting strings to integers and decimals------------------------------------
// Q:1 Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
// var weight = prompt("What is your weight?")
// document.write(weight);

// ------------------------------------------Converting strings to numbers, numbers to strings--------------------------------------

// Q:1 Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var str = "472";
// var num = parseInt(str)
// var type = typeof num
// document.write(type + " ")
// document.write(num)

// Q:2 Write a program that converts the variable num to string
// var num = 35.36;
// var convert = num.toString().replace(".", "")
// document.write(convert + " is converted to string")

// --------------------------------------------------Controlling the length of decimals--------------------------------------
// Q:1 Write a program to control the length of decimals to 2.

// var percentage = 30 / 45 * 100
// var b = percentage.toFixed(2)
// document.write(b + "%")
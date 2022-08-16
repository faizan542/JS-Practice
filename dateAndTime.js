    // --------------------------------PDF Assignment------------------------------------
// ---------------------------------Date Method-------------------------------------

// Q:1 Write a program that displays current date and time in your browser

// var date = new Date();
// document.write(date)

// Q:2 Write a program that alerts the current month in words. 
// var monthsName = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];

// var now = new Date();
// var theMonth = now.getMonth();
// var currentMonth = monthsName[theMonth];
// document.write(currentMonth);

// Q:3 Write a program that alerts the first 3 letters of the currentday, for example if today is Sunday then alert will show Sun

// var date =  new Date();
// var daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var toDay = daysName[date.getDay()]
// var currentDay = toDay.slice(0,3);
// document.write("Today is " + currentDay);

// Q:4 Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today

// var funDay =  new Date().toLocaleDateString('en-us', {weekday: 'long'});
// if(funDay === "Saturday" || funDay === "Sunday"){
//     document.write("It's fun day")
// }else{
//     document.write("It's working day");
// }

// Q:5 Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”

// var date = new Date().getDate();
// if(date < 16){
//     document.write("First fifteen days of the month")
// }else{
//     document.write("Last fifteen days of the month")
// }

// Q:6 Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object

// var date = new Date();
// var milli= date.getTime();
// document.write("Current Date : " + date);
// document.write("<br>Elapsed milliseconds since January 1, 1970 : " + milli);
// document.write("<br>Elapsed minutes since January 1, 1970 : " + milli / (1000 * 60 * 60));

// Q:7 Write a program that tests whether it's before noon and alert “Its AM” else “its PM”

// var date = new Date();
// var hours = date.getHours();
// if(hours < 12){
//     alert("Its AM")
// }else{
//     alert("Its PM")
// }

// Q:8 Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate

// var date= new Date("Dec 31, 2020");
// document.write("Later Date: " + date);

// Q:9 Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?Note: 1st Ramadan was on June 18, 2015

// var ramzanDate = new Date("April 3, 2022").getTime();
// var date =  new Date().getTime();
// var milli = date - ramzanDate;
// var getDays = milli / (1000*60*60*24);
// document.write(Math.round(getDays) + " days have passed since 1st Ramadan,2022")

// Q:10 Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015

// var date = new Date();
// document.write("On refrence date: " + date + ", <br>");
// var previousDate = new Date("January 3, 2022").getTime();
// var milli = date.getTime() - previousDate;
// var getSeconds = Math.round(milli/1000*60);
// document.write(getSeconds + " seconds has passed since beginning 2022")

// Q:11 Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

// var currentDate = new Date();
// document.write("Current Date: " + currentDate + "<br>");
// currentDate.setHours(currentDate.getHours() - 1);
// document.write("1 hour ago, it was " + currentDate);

// Q:12 Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// var currentDate = new Date();
// document.write("Current Date " + currentDate + "<br>");
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// document.write("100 years back, it was " + currentDate);

// Q:13 Write a program to ask the user about his age. Calculate and show his birth year in your browser

// var age = prompt("Enter yiour age");
// var date =  new Date();
// var year = date.getFullYear() - age;
// document.write("Your age is " + age + "<br> Your birth year is " + year);

// Q:14 Write a program to generate your K-Electric bill in yourbrowser. All the amounts should be rounded off to 2 decimal places. Display the following fields:

// var date = new Date();
// var customerName = prompt("Enter your name");
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var units = prompt("Enter number of units");
// var charges = 16;
// var netAmount = units*charges;
// var latePay = 350;
// var grossAmount = netAmount + latePay;
// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Month:" + month[date.getMonth()] + "<br>");
// document.write("Number of units: " + units + "<br>");
// document.write("Charges per units: " + charges + "<br>");
// document.write("Net amount payable (with in due date): " + netAmount + "<br>");
// document.write("Late payment surcharge: " + latePay + "<br>");
// document.write("Gross amount payable (after due date): " + grossAmount);
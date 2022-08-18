var a = 15;
var b;

// (a > 16) ? b = true : b = false;

// b = (a === 15) ? true : false;

b = "Value is " + (a === 14 ? true : false);
// document.write(b)

var age = 7;
// console.log((age >= 18) ? "You are an adult" : "You are a kid");

var stops;

age >= 18 ? (console.log("You can go"), stops = false) : (console.log("Kids are not allowed"), stops = true);
// Add a key value in local storage
localStorage.setItem('Name', 'Faizan');
localStorage.setItem('Name2', 'Ghulam Qadir');

// Clear an entire local storage 
// localStorage.clear();

// remove a particular key value form local storage
localStorage.removeItem('Name2')

// Get Item from the local storage
let name = localStorage.getItem('Name');
console.log(name);

let arrr = ['Karachi', 'Lahore', 'Islamabad'];
localStorage.setItem('Cities', JSON.stringify(arrr));

let cityName = JSON.parse(localStorage.getItem('Cities'));
console.log(cityName)
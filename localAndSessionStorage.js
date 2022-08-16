//// LOCAL STORAGE
//// Add a key value in local storage
localStorage.setItem('Name', 'Faizan');
localStorage.setItem('Name2', 'Ghulam Qadir');

//// Clear an entire local storage
// localStorage.clear();

//// remove a particular key value form local storage
// localStorage.removeItem('Name2')

//// Get Item from the local storage
let name = localStorage.getItem('Name');
// console.log(name);

let arrr = ['Karachi', 'Lahore', 'Islamabad'];
localStorage.setItem('Cities', JSON.stringify(arrr));

let cityName = JSON.parse(localStorage.getItem('Cities'));
// console.log(cityName)

//// SESSION STORAGE
//// Add a key value in session storage
sessionStorage.setItem('sessionName', 'Faizan');
sessionStorage.setItem('sessionName2', 'Ghulam Qadir');

//// Clear an entire session storage
// sessionStorage.clear();

//// remove a particular key value form session storage
// sessionStorage.removeItem('sessionName2')

//// Get Item from the session storage
let sessionName = sessionStorage.getItem('sessionName2');
// console.log(sessionName);

let countryArray = ['Pakistan', 'Turkey', 'Saudia Arabia'];
sessionStorage.setItem('Country', JSON.stringify(arrr));

let getCountryArray = JSON.parse(sessionStorage.getItem('Country'));
// console.log(countryArray);



// sessionStorage is similar to localStorage ; the difference is that while data in localStorage
//  doesn't expire, data in sessionStorage is cleared when the page session ends. Whenever a document
//  is loaded in a particular tab in the browser, a unique page session gets created and assigned to 
// that particular tab.
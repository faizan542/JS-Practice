// A callback function is a function that comes inside a function

const students = [
    { name: "Faizan", course: "MERN Stack Development" },
    { name: "Ghulam Qadir", course: "Flutter" }
];

// function enrollStudent(student, fetchStudent) {
//     setTimeout(function () {
//         students.push(student);
//         console.log('student has been enrolled')
//         fetchStudent();
//     }, 3000);
// };

// function getStudents() {
//     setTimeout(function () {
//         let str = "";
//         students.forEach(function (student) {
//             str += `<p>${student.name}</p>`
//         });
//         document.getElementById('students').innerHTML = str;
//         console.log('student has been fetched')
//     }, 1000);
// };

// let newStudent = {name: "Noman", course: "Machine Learning"};
// enrollStudent(newStudent, getStudents);
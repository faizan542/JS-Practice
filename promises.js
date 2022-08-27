function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('Function: Your promise has been resolved');
                resolve();
            }
            else {
                console.log('Function: Your promise has not been resloved');
                reject("sorry not fulfilled");
            }
        }, 2000);
    });
};

func1().then(function () {
    console.log('User: Thanks for resloving');
}).catch(function (error) {
    console.log('User: Very bad bro. Reason: ' + error);
});



const students = [
    { name: "Faizan", course: "MERN Stack Development" },
    { name: "Ghulam Qadir", course: "Flutter" }
];

function enrollStudent(student) {
    return new Promise(function (res, rej) {
        setTimeout(function () {
            students.push(student);
            console.log('student has been enrolled');
            const error = false;
            if (!error) {
                res();
            } else {
                rej();
            }
        }, 3000);
    })
};

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<p>${student.name}</p>`
        });
        document.getElementById('students').innerHTML = str;
        console.log('student has been fetched')
    }, 1000);
};

let newStudent = { name: "Noman", course: "Machine Learning" };
enrollStudent(newStudent).then(getStudents).catch(function () {
    console.error('Some error occured');
});
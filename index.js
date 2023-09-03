// DO NOT REPEAT YOURSELF (DRY)
// function greetTheStudent(studentName) { // Parameter // Name Function
//     return `Hello there ${studentName}`;
// }

// const greetTheStudent = function(studentName) { // Parameter // Anonymous Function //Expression
//     return `Hello there ${studentName}`;
// }

// Fat Arrow Function
// const greetTheStudent = (studentName)=> { // Parameter // Anonymous Function //Expression
//     return `Hello there ${studentName}`;
// }

const greetTheStudent = (studentName)=> `Hello there ${studentName}`;

// const fullName = function (firstName, middleName, lastName){
//     return `${lastName}, ${middleName}, ${firstName}`;
// }

// const fullName = (firstName, middleName, lastName) => {
//     return `${lastName}, ${middleName}, ${firstName}`;
// }

const fullName = (firstName, middleName, lastName) => `${lastName}, ${middleName}, ${firstName}`;

// const student = 'John Smith';
// const greet = greetTheStudent(student); // argument
// console.log(greet);

const titleName = fullName('Mary', 'R', 'Jane')
console.log(titleName);

// console.log(message + ' ' + studentName);
// console.log(message + ' ' + studentName2);
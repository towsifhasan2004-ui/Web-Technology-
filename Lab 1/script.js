console.log("===== Student Information System =====");

let name = prompt("Enter student's name:");
let age = parseInt(prompt("Enter student's age:"));
let cgpa = parseFloat(prompt("Enter student's CGPA:"));
let studentStatus = prompt("Are you a student? (true/false)") === "true";
let grade = prompt("Enter student's grade:");

console.log("\n===== Student Information =====");
console.log("Name: " + name);
console.log("Age: " + age);
console.log("CGPA: " + cgpa);
console.log("Student Status: " + studentStatus);
console.log("Grade: " + grade);

let courses = [
    "Web Technology",
    "OOP",
    "Database"
];


console.log("-----CoursesList-----");

for(let i=0; i<courses.length; i++){
console.log(courses[i]);
  
}

let marks = Number(prompt("Enter student's marks:"));

if (marks >= 80) {
    console.log("Result Grade: A+");
}
else if (marks >= 70) {
    console.log("Result Grade: A");
}
else if (marks >= 60) {
    console.log("Result Grade: B");
}
else {
    console.log("Result Grade: F");
}


function showStudent(name,age){

  console.log("StudentName :"+name);
  console.log("StudentAge:"+age);
  
}

showStudent(name,age);
let students=[];
for(let i=0; i<3; i++){
   students[i] = prompt("Enter name of student " + (i + 1) + ":");
}

console.log("---Student Name----");
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

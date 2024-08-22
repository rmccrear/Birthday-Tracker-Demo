// Proof of life
let s1 = createStudent("Hello", 0, false);
s1.status();

let state = {};
state.students = [];

// let students = [];

let addStudentButton = document.getElementById("addStudentButton");
let studentNameInput = document.getElementById("studentName");
let ageInput = document.getElementById("age");
let canHaveSugarInput = document.getElementById("canHaveSugar");
let studentOutput = document.getElementById("students");

function handleAddStudent() {
    console.log("Adding a student");
    let studentName = studentNameInput.value;
    let age = ageInput.value;
    let canHaveSugar = canHaveSugarInput.checked;
    let student = createStudent(studentName, age, canHaveSugar);
    student.status();
    state.students.push(student);
    console.log("students: ", state.students);

    render();
}

function render() {
    let html = '';
    for(let i=0; i<state.students.length; i++) {
        let studentHtml = state.students[i].toHtml();
        console.log(studentHtml);
        html += studentHtml;
    }
    console.log(html);
    studentOutput.innerHTML = html;
}

addStudentButton.addEventListener("click", handleAddStudent);

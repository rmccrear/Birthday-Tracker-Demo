// PROOF OF LIFE
console.log("HELLO FROM STUDENTS");
let s1 = createStudent("Bob", 18, true);
s1.haveABirthday();

// let state = {};
state.students = [];

let addButton = document.getElementById("saveButton");
let studentNameInput = document.getElementById("studentName");
let studentAgeInput = document.getElementById("studentAge");
let canHaveSugarInput = document.getElementById("canHaveSugar");

function handleSave(){
    console.log("clicked save");
    let name = studentNameInput.value;
    let age = studentAgeInput.value;
    let canHaveSugar = canHaveSugarInput.checked;
    console.log(name)
    let student = createStudent(name, age, canHaveSugar);
    console.log(student);
    state.students.push(student);
    render();
}

function render() {
    let html = "";
    let output = document.getElementById("studentOutput");
    for(let i=0; i<state.students.length; i++){
        // html += state.students[i].name + " " +  state.students[i].age;
        // html += ", "
        html += state.students[i].toHTML();
    }
    output.innerHTML = html;
}

addButton.addEventListener("click", handleSave);

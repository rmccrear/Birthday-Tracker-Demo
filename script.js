// this is state
let state = {
    name: "",
    birthday: "",
    zipCode: 0
};

// Proof of life
// console.log("hello world");
// let p3 = createPerson("Carol", "1-3-2017", "90210");
// p3.status();

let saveBtn = document.getElementById("saveButton");
let nameInput = document.getElementById("userName");
let birthdayInput = document.getElementById("birthday");
let zipCodeInput = document.getElementById("zipcode");

function handleSave() {
  console.log("save button was clicked");
  let name = nameInput.value;
  state.name = name;
  console.log("Added name" + state.name);
  state.birthday = birthdayInput.value;
  state.zipCode = zipCodeInput.value;

  // save in localStorage
  localStorage.setItem("userName", name);
  localStorage.setItem("userBirthday", state.birthday);
  localStorage.setItem("zipCode", state.zipCode );

  console.log(state);
  // optionally reset this
  nameInput.value = "";
  birthdayInput.value = "";
  zipCodeInput.value = "";

  // create person
  let user = createPerson(state.name, state.birthday, state.zipCode);
  user.status();
  user.render();
}
saveBtn.addEventListener("click", handleSave);

// old way...
// saveButton.onclick = handleSave;

let userName = localStorage.getItem("userName");
console.log(userName);
let bday = localStorage.getItem("userBirthday");
console.log(bday)
let zip = localStorage.getItem("zipCode")
console.log(zip);

state.name = userName;
state.birthday = bday;
state.zipCode = zip;

let user = createPerson(state.name, state.birthday, state.zipCode);
user.status();
user.render();
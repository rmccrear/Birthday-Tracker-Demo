// this is state
let state = {
    name: "",
    birthday: "",
    zipCode: 0
};

console.log("hello world");

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

  console.log(state);
  // optionally reset this
  nameInput.value = "";
  birthdayInput.value = "";
  zipCodeInput.value = "";
}
saveBtn.addEventListener("click", handleSave);

// old way...
// saveButton.onclick = handleSave;
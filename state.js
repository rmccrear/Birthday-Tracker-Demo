let state = {};

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
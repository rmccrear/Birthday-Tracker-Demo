// Create person object

// factory function
function createStudent(nameInput, ageInput, sugarInput) {
    // Create an object based on the function arguments
    let person = {
      name: nameInput,
      age: ageInput,
      canHaveSugar: sugarInput,
      haveABirthday: function() {
        console.log(`Happy Birthday ${this.name}, you are ${this.age}`)
        this.age += 1;
      },
      status: function() {
        return `Name: ${this.name} Age: ${this.age} Can have Sugar: ${this.canHaveSugar}`;
      },
      toHtml: function() {
        return `
            <div class="col">
                <div class="card">
                    <h4> ${this.name} </h4>
                    <p> Age: ${this.age} </p>
                    <p> Can have sugar: ${this.canHaveSugar} </p>
                </div>
            </div>
        `;
      }
    }
    // Optional initialization
    console.log("Created a person...")
    person.status();
    return person;
}
  
//   let firstGrade = [];
  
//   firstGrade.push(createStudent("Billy", 7, true));
//   firstGrade.push(createStudent("Willy", 7, true));
//   firstGrade.push(createStudent("Sam", 7, true));
//   firstGrade.push(createStudent("Pam", 7, true));
//   firstGrade.push(createStudent("Mary", 7, true));
//   // console.table(firstGrade);
  
//   let secondGrade = [];
//   secondGrade.push(createStudent("Alice", 8, true))
//   secondGrade.push(createStudent("Billy", 8, true))
//   secondGrade.push(createStudent("Cathy", 8, true))
//   secondGrade.push(createStudent("Dan", 8, true))
//   secondGrade.push(createStudent("Ed", 8, true))
//   // console.table(secondGrade);
//   let thirdGrade = [];
  
//   // give everyone a birthday
//   firstGrade[0].haveABirthday();
//   firstGrade[1].haveABirthday();
//   firstGrade[2].haveABirthday();
//   firstGrade[3].haveABirthday();
//   firstGrade[4].haveABirthday();
//   console.table(firstGrade);
  
//   // use a loop to give everyone a birthday
//   // by calling the haveABirthday method on the object
//   for(let i=0; i<secondGrade.length; i++) {
//     secondGrade[i].haveABirthday();
//   }
//   console.table(secondGrade);
  
//   secondGrade.forEach(person => person.status());
  
//   // Day 5 new concept...
//   // CONCEPT: an if statement nested in a for loop
  
//   for(let i=0; i<secondGrade.length; i++){
//     // note: the expression in between the parens must be a boolean express. (That is, it evaluates to true or false)
//     if(secondGrade[i].canHaveSugar === true) {
//       secondGrade[i].haveABirthday();
//     } else {
//       console.log(`${secondGrade[i].name} cannot have sugar.`)
//     }
//   }
  
  
  
//   // BONUS: more ways to define a function
  
//   // function haveParty(person) {
//   //   person.haveABirthday();
//   // }
  
//   let haveParty = function (person) {
//     person.haveABirthday();
//   }
  
//   // let haveParty = ( (person) => person.haveABirthday() );
  
  
//   // BONUS: more was to run a function in a for loop
//   for(let i=0; i<secondGrade.length; i++) {
//     haveParty(secondGrade[i]);
//   }
  
//   secondGrade.forEach(haveParty)
  
  
  
  
//   // Examples of Arrow functions
  
//   // regular function
//   function getPresent() {
//     console.log(`${this.name} got a gift`)
//   }
  
//   // arrow function
//   let getPresentArrow = () => {
//     console.log(`${this.name} got a gift`)
//   }
  
//   // regular function's `this` is the object on which it is attached
//   let person1 = firstGrade[0];
//   person1.p = getPresent;
//   person1.p(); // prints "Billy got a gift"
  
//   // regular function's `this` is whatever it was when the function was defined.
//   // In this case, that is the global `this`
//   let person2 = firstGrade[1];
//   person2.p = getPresentArrow;
//   person2.p(); // prints "undefined got a gift" because it uses the global `this`
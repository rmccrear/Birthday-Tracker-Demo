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
        console.log(`Name: ${this.name} Age: ${this.age} Can have Sugar: ${this.canHaveSugar}`)
      },
      toHTML: function () {
        return `
            <div class="col-4">
              <div class="card">
                <h4>${this.name}</h4>
                <p>age:<em> ${this.age} </em></p>
                <p>can have sugar: ${this.canHaveSugar}</p>
              </div>
            </div>
        `
      }
    }
    // Optional initialization
    console.log("Created a person...")
    person.status();
    return person;
  }
  
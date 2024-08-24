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
      // Step 1: (Day 4)
      toHTML: function () {
        return `
            <div class="col-md-4">
            <div class="card">
                Name: ${this.name}
                <button type="button" class="btn btn-primary">
                    Age: <span class="badge text-bg-secondary">${this.age}</span>
                </button>
                can have sugar: ${this.canHaveSugar}
                <button id="play-${this.name}">Play</button>
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
  
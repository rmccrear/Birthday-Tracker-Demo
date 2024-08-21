// Factory Function for a person


function createPerson(name, birthday, zipCode) {
    let person = {
        name: name,
        birthday: birthday,
        zipCode: zipCode,
        status: function () {
            console.log(`Name: ${this.name}, b-day: ${this.birthday}, zip: ${this.zipCode}`);
        },
        render: function() {
            let nameP = document.getElementById("userNameOutput");
            nameP.textContent = this.name;
            let bDayP = document.getElementById("userBirthdayOutput");
            bDayP.textContent = this.birthday;
            let zipP = document.getElementById("userZipCodeOutput");
            zipP.textContent = this.zipCode;
        }
    }
    return person;
}

// Proof of life
// let p1 = createPerson("Bob", "1-1-2017", "90210");
// console.log(p1);
// p1.status();
// let p2 = createPerson("Alice", "1-2-2017", "90210");
// p2.status();
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static compareAge(a, b) {
    if (a.age > b.age) {
      return a.firstName + " è più vechio di " + b.firstName;
    } else {
      return b.firstName + " è più vecchio di " + a.firstName;
    }
  }
}

let x = new User("Gianluca", "Falcone", 35, "Andria");
console.log(x);

let y = new User("Mario", "Rossi", 50, "Milano");
console.log(y);

console.log(User.compareAge(x, y));

let petNameInputField = document.getElementById("Pet-name");
let ownerNameInputField = document.getElementById("Owner-name");
let speciesInputField = document.getElementById("Species");
let breedInputField = document.getElementById("Breed");

let pets = [];

class Pets {
  constructor(name, owner, species, breed) {
    this.name = name;
    this.owner = owner;
    this.species = species;
    this.breed = breed;
  }

  static compareOwner(a, b) {
    return a.owner === b.owner;
  }
}

const createList = function () {
  let listReference = document.getElementById("pets-list");
  listReference.innerHTML = "";
  pets.forEach((pet, i) => {
    let newListItem = document.createElement("li");
    newListItem.innerText =
      pet.name +
      " " +
      pet.owner +
      " " +
      pet.species +
      " " +
      pet.breed +
      " " +
      Pets.compareOwner(pet, pets[i - 1] ? pets[i - 1] : {});
    listReference.appendChild(newListItem);
  });
};

let formReference = document.querySelector("form");
formReference.addEventListener("submit", (e) => {
  e.preventDefault();
  let petFromTheForm = new Pets(
    petNameInputField.value,
    ownerNameInputField.value,
    speciesInputField.value,
    breedInputField.value
  );
  pets.push(petFromTheForm);
  petNameInputField.value = "";
  ownerNameInputField.value = "";
  speciesInputField.value = "";
  breedInputField.value = "";
  createList();
});

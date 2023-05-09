let nameField = document.getElementById("name");
let addButton = document.getElementById("add");
let removeButton = document.getElementById("remove");

const printName = function () {
  let list = document.querySelector("ul");
  let newName = document.createElement("li");
  newName.innerText = localStorage.getItem("name");
  list.appendChild(newName);
  console.log(nameField.value);
};

const removeName = function () {
  let list = document.querySelector("ul");
  list.innerHTML = "";
};

addButton.addEventListener("click", function (e) {
  e.preventDefault();
  let name = nameField.value;
  localStorage.setItem("name", name);
  nameField.value = "";
  printName();
});

removeButton.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.removeItem("name");
  removeName();
});

window.onload = function () {
  if (localStorage.getItem("name")) {
    printName();
  }
};

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

for (let i = pets.length - 1; i >= 0; i--) {
  console.log(pets[i]);
}

// si poteva sfruttare anche il metodo .reverse() per far invertire l'ordine degli elementi di un array // pets.reverse();

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let firstElement = pets.shift();
pets.push(firstElement);
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"]
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"]
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"]
  }
];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "AB12" + i + "YZ";
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
  brand: "Citroen",
  model: "C3",
  color: "yellow",
  trims: ["shine", "you", "elle"],
  licensePlate: "AB123YZ"
});

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.slice(0, 1) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let currentIndex = 0;
while (numericArray[currentIndex] !== 32) {
  console.log(numericArray[currentIndex]);
  currentIndex++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const alphabetPositionsArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      alphabetPositionsArray.push(1);
      break;
    case "b":
      alphabetPositionsArray.push(2);
      break;
    case "c":
      alphabetPositionsArray.push(3);
      break;
    case "d":
      alphabetPositionsArray.push(4);
      break;
    case "e":
      alphabetPositionsArray.push(5);
      break;
    case "f":
      alphabetPositionsArray.push(6);
      break;
    case "g":
      alphabetPositionsArray.push(7);
      break;
    case "h":
      alphabetPositionsArray.push(8);
      break;
    case "i":
      alphabetPositionsArray.push(9);
      break;
    case "l":
      alphabetPositionsArray.push(10);
      break;
    case "m":
      alphabetPositionsArray.push(11);
      break;
    case "n":
      alphabetPositionsArray.push(12);
      break;
    case "o":
      alphabetPositionsArray.push(13);
      break;
    case "p":
      alphabetPositionsArray.push(14);
      break;
    case "q":
      alphabetPositionsArray.push(15);
      break;
    case "r":
      alphabetPositionsArray.push(16);
      break;
    case "s":
      alphabetPositionsArray.push(17);
      break;
    case "t":
      alphabetPositionsArray.push(18);
      break;
    case "u":
      alphabetPositionsArray.push(19);
      break;
    case "v":
      alphabetPositionsArray.push(20);
      break;
    case "z":
      alphabetPositionsArray.push(21);
      break;
  }
}
console.log(alphabetPositionsArray);

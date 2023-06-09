const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "277",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
  },
];

/* ESERCIZIO 1
Crea una variabile chiamata "characters" e inserisci un array vuoto
*/
let characters = [];
/* ESERCIZIO 2
Usando un for loop, cicla l'array "starWarsCharacters" ed accedi alla proprietà "name". 
Usa il valore contenuto inserendolo nell'array creato precedentemente. 
Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
for (let i = 0; i < starWarsCharacters.length; i++) {
  characters.push(starWarsCharacters[i].name);
}
console.log(characters);

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un array chiamato "femaleCharacters" e inserisci un oggetto con questa struttura: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
*/
let femaleCharacters = [];

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "female") {
    femaleCharacters.push({
      name: starWarsCharacters[i].name,
      hair_color: starWarsCharacters[i].hair_color,
      eye_color: starWarsCharacters[i].eye_color,
    });
  }
}

console.log(femaleCharacters);
/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia come proprietà: blue, yellow, brown, red, blue-gray.
  ognuna di queste proprietà contiene un array vuoto
*/

let eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  "blue-gray": [],
};

/* ESERCIZIO 5
  Inserisci l'oggetto dei personaggi in "starWarsCharacters" nell'array corrispondente al colore dei loro occhi nell'oggetto "eyeColor" precedentemente creato
  Utilizza uno switch statement per determinare in quale proprietà inserire il personaggio
  */

for (let character of starWarsCharacters) {
  switch (character.eye_color) {
    case "blue":
      eyeColor.blue.push(character);
      break;
    case "brown":
      eyeColor.brown.push(character);
      break;
    case "yellow":
      eyeColor.yellow.push(character);
      break;
    case "red":
      eyeColor.red.push(character);
      break;
    case "blue-gray":
      eyeColor["blue-gray"].push(character);
      break;
    default:
      break;
  }
}

console.log(eyeColor);

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio
  */
let totalMass = 0;
let i = 0;
while (i < starWarsCharacters.length) {
  totalMass += Number(starWarsCharacters[i].mass);
  i++;
}

console.log(totalMass);

/* ESERCIZIO 7

Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'impotetica astronave contenente i personaggi dell'array "starWarsCharacters"
(cerca su un motore di ricerca switch case e conditionals)

Se la massa è inferiore a 500 stampa in console: "Ship is under loaded",
Se la massa è uguale a 500 stampa in console: "Ship is half loaded",
Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700",
Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900",
Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: Jump ship now!"

Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

switch (true) {
  case totalMass < 500:
    console.log("ship is under loaded");
    break;
  case totalMass == 500:
    console.log("ship is half loaded");
    break;
  case totalMass > 700 && totalMass < 900:
    console.log("warning: load is over 700");
    break;
  case totalMass >= 900 && totalMass < 1000:
    console.log(" critical load: over 900");
    break;
  case totalMass >= 1000:
    console.log(" DANGER! OVERLOAD ALERT: Jump ship now!");
    break;
  default:
    break;
}
/* ESERCIZIO 8
Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi creare un nuovo array, o tentare la riassegnazione del valore corrispondente)
*/

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "n/a") {
    starWarsCharacters[i].gender = "robot";
  }
}
console.log(starWarsCharacters);

/* EXTRA ESERCIZIO 9

Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome"
Usa uno più for loop per raggiungere il risultato

(tip: cerca un metodo degli array per rimuovere un elemento)

Una volta fatto crea un conosle.log per controllare la proprietà length di "characters" prima e dopo l'operazione
*/
console.log(characters.length);
for (let i = 0; i < femaleCharacters.length; i++) {
  characters.splice(characters.indexOf(femaleCharacters[i].name), 1);
}
console.log(characters.length);

/* EXTRA ESERCIZIO 10
Crea una funzionalità che prenda un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo
*/

const randomIndex = Math.floor(Math.random() * starWarsCharacters.length);
selectedCharacter = starWarsCharacters[randomIndex];

console.log("The selected character is: " + selectedCharacter.name);

if (selectedCharacter.gender === "female") {
  console.log("She is", selectedCharacter.height, "cm tall");
} else {
  console.log("He is", selectedCharacter.height, "cm tall");
}

if (
  selectedCharacter.hair_color !== "n/a" &&
  selectedCharacter.hair_color !== "none"
) {
  console.log("And has", selectedCharacter.hair_color, "hair");
} else {
  console.log("And has no hair");
}

console.log("With", selectedCharacter.skin_color, "skin");

/* PROVE FOR OF, FOR IN, FOR EACH, WHILE */

for (let character of starWarsCharacters) {
  console.log(character.name);
}

for (let character of starWarsCharacters) {
  for (let key in character) {
    const nuovoParagrafo = document.createElement("p");
    const paragrafo = document.createTextNode(`${key}: ${character[key]}`);
    nuovoParagrafo.appendChild(paragrafo);
    document.body.appendChild(nuovoParagrafo);
  }
}

starWarsCharacters.forEach(function (character, index) {
  if (index === 0) {
    console.log(character);
  } else {
    console.log(character.name);
  }
});

let j = 0;
while (j < starWarsCharacters.length) {
  console.log(starWarsCharacters[j].mass);
  j++;
}

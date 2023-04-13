/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function concat(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  let primiDue = arr1.splice(0, 2);
  let ultimiTre = arr2.splice(str2.length - 3, 3);
  arr1 = primiDue.join("");
  arr2 = ultimiTre.join("");
  let stringa = arr1 + arr2;
  stringa = stringa.toUpperCase();
  return stringa;
}

console.log(concat("Hello", "World"));

/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

function random(array) {
  let randomArray = [];
  for (let i = 0; i < 10; i++) {
    randomArray.push(Math.floor(Math.random() * 101));
  }
  return randomArray;
}

console.log(random());

/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/

function pari(array) {
  let pariArray = [];
  array.filter((element) =>
    element % 2 === 0 ? pariArray.push(element) : null
  );
  return pariArray;
}

console.log(pari([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function sommare(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(sommare([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));

/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/

function sommaReduce(array) {
  let risultato = array.reduce((p, c) => p + c);
  return risultato;
}

console.log(sommaReduce([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));

/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

// function incrementi(array, n) {
//   let incrementiArray = [];
//   for (let i = 0; i < array.length; i++) {
//     incrementiArray.push(array[i] + n);
//   }
//   return incrementiArray;
// }

// console.log(incrementi([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2));

function incrementi2(array, n) {
  let incrementiArray = [];
  array.map((e) => incrementiArray.push(e + n));
  return incrementiArray;
}

console.log(incrementi2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2));
/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

function lunghezze(array) {
  let lunghezzeArray = [];
  for (let i = 0; i < array.length; i++) {
    lunghezzeArray.push(array[i].length);
  }
  return lunghezzeArray;
}

console.log(lunghezze(["EPICODE", "is", "great"]));

/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

function dispari(array) {
  let dispariArray = [];
  for (let i = 1; i <= 99; i += 2) {
    dispariArray.push(i);
  }
  console.log(dispariArray);
}

dispari();

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

function filmPiùVecchio(array) {
  let oldest = 0;
  for (let i = 0; i < array.length; i++) {
    if (oldest === 0 || Number(array[i].Year) < oldest) {
      oldest = array[i].Year;
    }
  }
  return array.filter((film) => film.Year === oldest);
}

console.log(filmPiùVecchio(movies));

const oldestMovie = (array) => {
  let result = { Year: 2100 };
  for (let i = 0; i < array.length; i++) {
    let currentYear = parseInt(array[i].Year);
    if (currentYear < result.Year) {
      result = array[i];
    }
  }

  return result;
};

console.log(oldestMovie(movies));

/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

function numeroFilmContenuti(array) {
  return array.length;
}

console.log(numeroFilmContenuti(movies));

/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

function titoliFilm(array) {
  let arrayFilms = [];
  for (let i = 0; i < array.length; i++) {
    arrayFilms.push(array[i].Title);
  }
  return arrayFilms;
}

console.log(titoliFilm(movies));

/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

function filmNuovi(array) {
  let arrayFilms = [];
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i].Year) >= 2000) {
      arrayFilms.push(array[i]);
    }
  }
  return arrayFilms;
}

console.log(filmNuovi(movies));

/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

function getFilmById(imdbID) {
  const film = movies.find((film) => film.imdbID === imdbID);
  return film;
}

console.log(getFilmById("tt0077869"));

/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

function sommaAnni(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += Number(array[i].Year);
  }
  return sum;
}

console.log(sommaAnni(movies));

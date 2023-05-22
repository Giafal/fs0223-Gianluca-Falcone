let player1: number = 40;
let player2: number = 60;

const playerNumbers = (a: number, b: number): void => {
  let randomNumber: number = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
  if (a == randomNumber) {
    console.log("Il primo giocatore ha indovinato il numero casuale");
  } else if (b == randomNumber) {
    console.log("Il secondo giocatore ha indovinato il numero casuale");
  } else {
    if (Math.abs(a - randomNumber) < Math.abs(b - randomNumber)) {
      console.log(
        "Nessuno dei due ha indovinato il numero, ma il primo giocatore si è avvicinato di più"
      );
    } else if (Math.abs(a - randomNumber) > Math.abs(b - randomNumber)) {
      console.log(
        "Nessuno dei due ha indovinato il numero, ma il secondo giocatore si è avvicinato di più"
      );
    }
  }
};

playerNumbers(player1, player2);

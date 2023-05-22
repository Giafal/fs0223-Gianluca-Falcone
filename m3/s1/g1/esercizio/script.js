var player1 = 40;
var player2 = 60;
var playerNumbers = function (a, b) {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    if (a == randomNumber) {
        console.log("Il primo giocatore ha indovinato il numero casuale");
    }
    else if (b == randomNumber) {
        console.log("Il secondo giocatore ha indovinato il numero casuale");
    }
    else {
        if (Math.abs(a - randomNumber) < Math.abs(b - randomNumber)) {
            console.log("Nessuno dei due ha indovinato il numero, ma il primo giocatore si è avvicinato di più");
        }
        else if (Math.abs(a - randomNumber) > Math.abs(b - randomNumber)) {
            console.log("Nessuno dei due ha indovinato il numero, ma il secondo giocatore si è avvicinato di più");
        }
    }
};
playerNumbers(player1, player2);

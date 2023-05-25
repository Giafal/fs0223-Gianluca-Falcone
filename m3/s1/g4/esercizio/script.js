var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Abbigliamento.prototype.getsaldocapo = function () {
        return (this.prezzoivainclusa * this.saldo) / 100;
    };
    Abbigliamento.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    return Abbigliamento;
}());
fetch("Abbigliamento.json")
    .then(function (res) {
    if (res.ok) {
        return res.json();
    }
    else {
        throw new Error("Errore nella fetch");
    }
})
    .then(function (data) {
    var nuovoArray = [];
    data.forEach(function (element) {
        var nuovoCapo = new Abbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
        nuovoArray.push(nuovoCapo);
    });
    console.log(nuovoArray);
    var prezzoUno = nuovoArray[0].getacquistocapo().toFixed(2);
    console.log("Il prezzo del cardigan è " + prezzoUno + "€");
    var prezzoDue = nuovoArray[1].getacquistocapo().toFixed(2);
    console.log("Il prezzo della t-shirt è " + prezzoDue + "€");
    var prezzoTre = nuovoArray[2].getacquistocapo().toFixed(2);
    console.log("Il prezzo della felpa è " + prezzoTre + "€");
})
    .catch(function (err) { return console.log(err); });

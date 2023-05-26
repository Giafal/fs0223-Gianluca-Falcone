

var PrimoCapoAbbigliamento = /** @class */ (function () {
    function PrimoCapoAbbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
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
    PrimoCapoAbbigliamento.prototype.getsaldocapo = function () {
        return this.prezzoivainclusa * this.saldo / 100;
    };
    PrimoCapoAbbigliamento.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    return PrimoCapoAbbigliamento;
}());
var primocapo = new PrimoCapoAbbigliamento(1, 2121, 'primavera', 'cardigan', 1231, 5, 'nero', 18.50, 22.57, 'negozio', 45);
console.log('ABBIGLIAMENTO' + '\n');
console.log(primocapo);
var primoacquisto = primocapo.getacquistocapo();
console.log('totale capo:' + primoacquisto + '€');
var SecondoCapoAbbigliamento = /** @class */ (function () {
    function SecondoCapoAbbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
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
    SecondoCapoAbbigliamento.prototype.getsaldocapo = function () {
        return this.prezzoivainclusa * this.saldo / 100;
    };
    SecondoCapoAbbigliamento.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    return SecondoCapoAbbigliamento;
}());
var secondocapo = new SecondoCapoAbbigliamento(1, 4111, 'estate', 't-shirt', 1251, 6, 'rosso', 5.50, 6.71, 'magazzino', 30);
console.log(secondocapo);
var secondoacquisto = secondocapo.getacquistocapo();
console.log('totale capo:' + secondoacquisto + '\n');
var TerzoCapoAbbigliamento = /** @class */ (function () {
    function TerzoCapoAbbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
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
    TerzoCapoAbbigliamento.prototype.getsaldocapo = function () {
        return this.prezzoivainclusa * this.saldo / 100;
    };
    TerzoCapoAbbigliamento.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    return TerzoCapoAbbigliamento;
}());
var terzocapo = new TerzoCapoAbbigliamento(1, 1181, 'inverno', 'felpa', 1229, 8, 'beige', 17.50, 21.35, 'beige', 50);
console.log(terzocapo);
var terzoacquisto = terzocapo.getacquistocapo();
console.log('totale capo:' + terzoacquisto + '€');
var QuartoCapoAbbigliamento = /** @class */ (function () {
    function QuartoCapoAbbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
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
    QuartoCapoAbbigliamento.prototype.getsaldocapo = function () {
        return this.prezzoivainclusa * this.saldo / 100;
    };
    QuartoCapoAbbigliamento.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    return QuartoCapoAbbigliamento;
}());
var quartocapo = new QuartoCapoAbbigliamento(1, 1111, 'estate', 'maglione', 1221, 4, 'verde', 20, 24.40, 'negozio', 50);
console.log(quartocapo);
var quartoacquisto = quartocapo.getacquistocapo();
console.log('totale capo:' + quartoacquisto + '€');
var QuintoCapoAbbigliamento = /** @class */ (function () {
    function QuintoCapoAbbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
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
    QuintoCapoAbbigliamento.prototype.getsaldocapo = function () {
        return this.prezzoivainclusa * this.saldo / 100;
    };
    QuintoCapoAbbigliamento.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    return QuintoCapoAbbigliamento;
}());
var quintocapo = new QuintoCapoAbbigliamento(1, 6111, 'primavera', 'maglia', 1021, 5, 'blue', 11, 13.42, 'blu', 60);
console.log(quintocapo);
var quintoacquisto = quintocapo.getacquistocapo();
console.log('totale capo:' + quintoacquisto + '€');


async function fetchAPI(){
    const Url= 'https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f'
    const response = await fetch(Url)
    const resp = await response.json();
     return resp;
     }
     fetchAPI().then(console.log);

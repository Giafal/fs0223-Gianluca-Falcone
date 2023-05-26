var Chiamata = /** @class */ (function () {
    function Chiamata(id, durata, dataOra) {
        this.id = id;
        this.durata = durata;
        this.dataOra = dataOra;
    }
    return Chiamata;
}());
var Smartphone = /** @class */ (function () {
    function Smartphone(carica, numeroChiamate, costoMinuto) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
        this.registroChiamate = [];
    }
    Smartphone.prototype.ricarica = function (euro) {
        this.carica += euro;
    };
    Smartphone.prototype.numero404 = function () {
        return "Credito residuo: " + this.carica + "€";
    };
    Smartphone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Smartphone.prototype.chiamata = function (min) {
        var costoChiamata = min * this.costoMinuto;
        if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            var nuovaChiamata = new Chiamata(this.numeroChiamate, min, new Date());
            this.registroChiamate.push(nuovaChiamata);
            console.log("Chiamata di ".concat(min, " minuti effettuata."));
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    };
    Smartphone.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    Smartphone.prototype.mostraRegistroChiamate = function () {
        console.log("Registro chiamate:");
        for (var _i = 0, _a = this.registroChiamate; _i < _a.length; _i++) {
            var chiamata = _a[_i];
            console.log("ID: ".concat(chiamata.id, ", Durata: ").concat(chiamata.durata, " minuti, Data/Ora: ").concat(chiamata.dataOra));
        }
    };
    Smartphone.prototype.filtraChiamatePerDataOra = function (data) {
        var _this = this;
        console.log("Chiamate effettuate il ".concat(data, ":"));
        var chiamateFiltrate = this.registroChiamate.filter(function (chiamata) {
            return _this.confrontaData(chiamata.dataOra, data);
        });
        for (var _i = 0, chiamateFiltrate_1 = chiamateFiltrate; _i < chiamateFiltrate_1.length; _i++) {
            var chiamata = chiamateFiltrate_1[_i];
            console.log("ID: ".concat(chiamata.id, ", Durata: ").concat(chiamata.durata, " minuti, Data/Ora: ").concat(chiamata.dataOra));
        }
    };
    Smartphone.prototype.confrontaData = function (data1, data2) {
        return (data1.getFullYear() === data2.getFullYear() &&
            data1.getMonth() === data2.getMonth());
    };
    return Smartphone;
}());
var user1 = new Smartphone(0, 0, 0.2);
console.log(user1);
user1.ricarica(10);
console.log(user1);
user1.chiamata(10);
console.log(user1);
user1.chiamata(5);
console.log(user1);
console.log(user1.numero404());
var numeroChiamate1 = user1.getNumeroChiamate();
console.log("Il numero di chiamate effettuate è " + numeroChiamate1);
user1.azzeraChiamate();
console.log(user1);
user1.mostraRegistroChiamate();
user1.filtraChiamatePerDataOra(new Date());
console.error("======================");
var user2 = new Smartphone(10, 5, 0.2);
console.log(user2);
user2.ricarica(5);
console.log(user2);
user2.chiamata(8);
console.log(user2);
user2.chiamata(3);
console.log(user2);
console.log(user2.numero404());
var numeroChiamate2 = user2.getNumeroChiamate();
console.log("Il numero di chiamate effettuate è " + numeroChiamate2);
user2.azzeraChiamate();
console.log(user2);
user2.mostraRegistroChiamate();
user2.filtraChiamatePerDataOra(new Date());
console.error("======================");
var user3 = new Smartphone(20, 10, 0.2);
console.log(user3);
user3.ricarica(20);
console.log(user3);
user3.chiamata(10);
console.log(user3);
user3.chiamata(10);
console.log(user3);
console.log(user3.numero404());
var numeroChiamate3 = user3.getNumeroChiamate();
console.log("Il numero di chiamate effettuate è " + numeroChiamate3);
user3.azzeraChiamate();
console.log(user3);
user3.mostraRegistroChiamate();
user3.filtraChiamatePerDataOra(new Date());

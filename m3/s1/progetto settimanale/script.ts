interface Ismartphone {
  carica: number;
  numeroChiamate: number;
  costoMinuto: number;
  registroChiamate: Chiamata[];

  ricarica(euro: number): void;
  numero404(): string;
  getNumeroChiamate(): number;
  chiamata(min: number): void;
  azzeraChiamate(): void;
  mostraRegistroChiamate(): void;
  filtraChiamatePerDataOra(data: Date): void;
}

class Chiamata {
  id: number;
  durata: number;
  dataOra: Date;

  constructor(id: number, durata: number, dataOra: Date) {
    this.id = id;
    this.durata = durata;
    this.dataOra = dataOra;
  }
}

class Smartphone implements Ismartphone {
  carica: number;
  numeroChiamate: number;
  costoMinuto: number;
  registroChiamate: Chiamata[];

  constructor(carica: number, numeroChiamate: number, costoMinuto: number) {
    this.carica = carica;
    this.numeroChiamate = numeroChiamate;
    this.costoMinuto = costoMinuto;
    this.registroChiamate = [];
  }

  ricarica(euro: number): void {
    this.carica += euro;
  }
  numero404(): string {
    return "Credito residuo: " + this.carica + "€";
  }
  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }
  chiamata(min: number): void {
    const costoChiamata = min * this.costoMinuto;
    if (costoChiamata <= this.carica) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
      const nuovaChiamata = new Chiamata(this.numeroChiamate, min, new Date());
      this.registroChiamate.push(nuovaChiamata);
      console.log(`Chiamata di ${min} minuti effettuata.`);
    } else {
      console.log("Credito insufficiente per effettuare la chiamata.");
    }
  }
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }

  mostraRegistroChiamate(): void {
    console.log("Registro chiamate:");
    for (const chiamata of this.registroChiamate) {
      console.log(
        `ID: ${chiamata.id}, Durata: ${chiamata.durata} minuti, Data/Ora: ${chiamata.dataOra}`
      );
    }
  }

  filtraChiamatePerDataOra(data: Date): void {
    console.log(`Chiamate effettuate il ${data}:`);
    const chiamateFiltrate = this.registroChiamate.filter((chiamata) =>
      this.confrontaData(chiamata.dataOra, data)
    );
    for (const chiamata of chiamateFiltrate) {
      console.log(
        `ID: ${chiamata.id}, Durata: ${chiamata.durata} minuti, Data/Ora: ${chiamata.dataOra}`
      );
    }
  }

  private confrontaData(data1: Date, data2: Date): boolean {
    return (
      data1.getFullYear() === data2.getFullYear() &&
      data1.getMonth() === data2.getMonth()
    );
  }
}

let user1 = new Smartphone(0, 0, 0.2);
console.log(user1);
user1.ricarica(10);
console.log(user1);
user1.chiamata(10);
console.log(user1);
user1.chiamata(5);
console.log(user1);
console.log(user1.numero404());
let numeroChiamate1 = user1.getNumeroChiamate();
console.log("Il numero di chiamate effettuate è " + numeroChiamate1);
user1.azzeraChiamate();
console.log(user1);
user1.mostraRegistroChiamate();
user1.filtraChiamatePerDataOra(new Date());

console.error("======================");

let user2 = new Smartphone(10, 5, 0.2);
console.log(user2);
user2.ricarica(5);
console.log(user2);
user2.chiamata(8);
console.log(user2);
user2.chiamata(3);
console.log(user2);
console.log(user2.numero404());
let numeroChiamate2 = user2.getNumeroChiamate();
console.log("Il numero di chiamate effettuate è " + numeroChiamate2);
user2.azzeraChiamate();
console.log(user2);
user2.mostraRegistroChiamate();
user2.filtraChiamatePerDataOra(new Date());

console.error("======================");

let user3 = new Smartphone(20, 10, 0.2);
console.log(user3);
user3.ricarica(20);
console.log(user3);
user3.chiamata(10);
console.log(user3);
user3.chiamata(10);
console.log(user3);
console.log(user3.numero404());
let numeroChiamate3 = user3.getNumeroChiamate();
console.log("Il numero di chiamate effettuate è " + numeroChiamate3);
user3.azzeraChiamate();
console.log(user3);
user3.mostraRegistroChiamate();
user3.filtraChiamatePerDataOra(new Date());

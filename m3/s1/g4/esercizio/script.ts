class Abbigliamento {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;

  constructor(
    id: number,
    codprod: number,
    collezione: string,
    capo: string,
    modello: number,
    quantita: number,
    colore: string,
    prezzoivaesclusa: number,
    prezzoivainclusa: number,
    disponibile: string,
    saldo: number
  ) {
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

  getsaldocapo(): number {
    return (this.prezzoivainclusa * this.saldo) / 100;
  }

  getacquistocapo(): number {
    return this.prezzoivainclusa - this.getsaldocapo();
  }
}

fetch("Abbigliamento.json")
  .then((res: Response) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Errore nella fetch");
    }
  })
  .then((data) => {
    let nuovoArray: Abbigliamento[] = [];
    data.forEach((element: Abbigliamento) => {
      let nuovoCapo = new Abbigliamento(
        element.id,
        element.codprod,
        element.collezione,
        element.capo,
        element.modello,
        element.quantita,
        element.colore,
        element.prezzoivaesclusa,
        element.prezzoivainclusa,
        element.disponibile,
        element.saldo
      );
      nuovoArray.push(nuovoCapo);
    });
    console.log(nuovoArray);

    let prezzoUno = nuovoArray[0].getacquistocapo();
    console.log("Il prezzo del cardigan è " + prezzoUno + "€");
    let prezzoDue = nuovoArray[1].getacquistocapo();
    console.log("Il prezzo della t-shirt è " + prezzoDue + "€");
    let prezzoTre = nuovoArray[2].getacquistocapo();
    console.log("Il prezzo della felpa è " + prezzoTre + "€");
  })
  .catch((err) => console.log(err));

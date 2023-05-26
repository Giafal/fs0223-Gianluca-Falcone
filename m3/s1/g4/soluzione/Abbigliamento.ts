   
   // classe PrimoCapoAbbigliamento
  class PrimoCapoAbbigliamento{

    // proprietà della classe
  id:number
  codprod:number
  collezione:string
  capo:string
  modello:number
  quantita:number
  colore:string
  prezzoivaesclusa:number
  prezzoivainclusa:number
  disponibile:string
  saldo:number

   // costruttore referenzia le proprietà
  constructor(
    id:number,
    codprod:number,
    collezione:string,
    capo:string,
    modello:number,
    quantita:number,
    colore:string,
    prezzoivaesclusa:number,
    prezzoivainclusa:number,
    disponibile:string,
    saldo:number
  ){

    this.id= id
            this.codprod=codprod
            this.collezione = collezione
            this.capo= capo
            this.modello = modello
            this.quantita= quantita
            this.colore=colore
            this.prezzoivaesclusa=prezzoivaesclusa
            this.prezzoivainclusa=prezzoivainclusa
            this.disponibile=disponibile
            this.saldo=saldo

    }
          // implementazione metodo getsaldocapo
         getsaldocapo():number{
            return this.prezzoivainclusa*this.saldo/100
         }
           // implementazione getacquistocapo
           getacquistocapo():number{

            return this.prezzoivainclusa - this.getsaldocapo()
           }

  }

         // set delle proprietà al costruttore
      let primocapo = new PrimoCapoAbbigliamento(
          1,2121,'primavera','cardigan',1231,
          5,'nero',18.50,22.57,'negozio',45                 
          )

          console.log('ABBIGLIAMENTO'+'\n');
          
          // stampo istanza primocapo
          console.log(primocapo);
          // chiamo il metodo getacquistocapo
          let primoacquisto = primocapo.getacquistocapo()
          // stampo istanza primoacquisto
          console.log('totale capo:'+primoacquisto+'€');
          
        // classe SecondoCapoAbbigliamento
  class SecondoCapoAbbigliamento{

    // proprietà della classe
    id:number
    codprod:number
    collezione:string
    capo:string
    modello:number
    quantita:number
    colore:string
    prezzoivaesclusa:number
    prezzoivainclusa:number
    disponibile:string
    saldo:number

      // costruttore referenzia le proprietà
    constructor(id:number,
        codprod:number,
        collezione:string,
        capo:string,
        modello:number,
        quantita:number,
        colore:string,
        prezzoivaesclusa:number,
        prezzoivainclusa:number,
        disponibile:string,
        saldo:number
        ){
            this.id= id
            this.codprod=codprod
            this.collezione = collezione
            this.capo= capo
            this.modello = modello
            this.quantita= quantita
            this.colore=colore
            this.prezzoivaesclusa=prezzoivaesclusa
            this.prezzoivainclusa=prezzoivainclusa
            this.disponibile=disponibile
            this.saldo=saldo


        }
           // implementazione metodo getsaldocapo
        getsaldocapo():number{
            return this.prezzoivainclusa*this.saldo/100
         }
              
          // implementazione metodo getacquistocapo
           getacquistocapo():number{

            return this.prezzoivainclusa - this.getsaldocapo()
           
  }
    
  }
      // set delle proprietà al costruttore
    let secondocapo = new SecondoCapoAbbigliamento(
        1,4111,'estate','t-shirt',1251,
        6,'rosso',5.50,6.71,'magazzino',30
        
        
        )   // stampo istanza secondocapo
             console.log(secondocapo);
             // chiamo il metodo getacquistocapo
             let secondoacquisto = secondocapo.getacquistocapo()
             // stampo istanza secondoacquisto
             console.log('totale capo:'+secondoacquisto+'\n');
           

    // classe TerzoCapoAbbigliamento
    class TerzoCapoAbbigliamento{


       // proprietà della classe
        id:number
        codprod:number
        collezione:string
        capo:string
        modello:number
        quantita:number
        colore:string
        prezzoivaesclusa:number
        prezzoivainclusa:number
        disponibile:string
        saldo:number

         // costruttore referenzia le proprietà
        constructor(
            id:number,
            codprod:number,
            collezione:string,
            capo:string,
            modello:number,
            quantita:number,
            colore:string,
            prezzoivaesclusa:number,
            prezzoivainclusa:number,
            disponibile:string,
            saldo:number){

                this.id= id
                this.codprod=codprod
                this.collezione = collezione
                this.capo= capo
                this.modello = modello
                this.quantita= quantita
                this.colore=colore
                this.prezzoivaesclusa=prezzoivaesclusa
                this.prezzoivainclusa=prezzoivainclusa
                this.disponibile=disponibile
                this.saldo=saldo

            }
            
            // implementazione metodo getsaldocapo
            getsaldocapo():number{
                return this.prezzoivainclusa*this.saldo/100
             }   

             // implementazione metodo getacquistocapo
               getacquistocapo():number{
                return this.prezzoivainclusa - this.getsaldocapo()
               }   
    
      }
        
         // set delle proprietà al costruttore
        let terzocapo = new TerzoCapoAbbigliamento(
            1,1181,'inverno','felpa',1229,
            8,'beige',17.50,21.35,'negozio',50
            
            
            )
            // stampo istanza terzocapo
            console.log(terzocapo);
            // chiamo il metodo getacquistocapo
            let terzoacquisto = terzocapo.getacquistocapo()
            // stampo istanza terzoacquisto
            console.log('totale capo:'+terzoacquisto+'€');
            
        // classe QuartoCapoAbbigliamento
        class QuartoCapoAbbigliamento{
              
           // proprietà della classe
            id:number
            codprod:number
            collezione:string
            capo:string
            modello:number
            quantita:number
            colore:string
            prezzoivaesclusa:number
            prezzoivainclusa:number
            disponibile:string
            saldo:number

            
            // costruttore referenzia le proprietà
            constructor(
                id:number,
            codprod:number,
            collezione:string,
            capo:string,
            modello:number,
            quantita:number,
            colore:string,
            prezzoivaesclusa:number,
            prezzoivainclusa:number,
            disponibile:string,
            saldo:number)
            {

                    this.id= id
                    this.codprod=codprod
                    this.collezione = collezione
                    this.capo= capo
                    this.modello = modello
                    this.quantita= quantita
                    this.colore=colore
                    this.prezzoivaesclusa=prezzoivaesclusa
                    this.prezzoivainclusa=prezzoivainclusa
                    this.disponibile=disponibile
                    this.saldo=saldo

                }

                // implementazione metodo getsaldocapo
                  
                getsaldocapo():number{
                    return this.prezzoivainclusa*this.saldo/100
                 }
                  // implementazione metodo getacquistocapo
                   getacquistocapo():number{
        
                    return this.prezzoivainclusa - this.getsaldocapo()
                   }
    

          }              
              // set delle proprietà al costruttore
            let quartocapo = new QuartoCapoAbbigliamento(
                1,1111,'estate','maglione',1221,
                4,'verde',20,24.40,'negozio',50                               
                )
            
            // stampo istanza quartocapo
            console.log(quartocapo);
            // chiamo metodo getacquistocapo
            let quartoacquisto= quartocapo.getacquistocapo()
            // stampo istanza quartoacquisto
            console.log('totale capo:'+quartoacquisto+'€');    
            
            // classe QuintoCapoAbbigliamento
            class QuintoCapoAbbigliamento{

                // proprietà della classe
                id:number
                codprod:number
                collezione:string
                capo:string
                modello:number
                quantita:number
                colore:string
                prezzoivaesclusa:number
                prezzoivainclusa:number
                disponibile:string
                saldo:number

                 // costruttore referenzia le proprietà
                constructor(
                    id:number,
                codprod:number,
                collezione:string,
                capo:string,
                modello:number,
                quantita:number,
                colore:string,
                prezzoivaesclusa:number,
                prezzoivainclusa:number,
                disponibile:string,
                saldo:number){
                        this.id= id
                        this.codprod=codprod
                        this.collezione = collezione
                        this.capo= capo
                        this.modello = modello
                        this.quantita= quantita
                        this.colore=colore
                        this.prezzoivaesclusa=prezzoivaesclusa
                        this.prezzoivainclusa=prezzoivainclusa
                        this.disponibile=disponibile
                        this.saldo=saldo
    
                    }
              
                    // implementazione metodo getsaldocapo
                    getsaldocapo():number{
                        return this.prezzoivainclusa*this.saldo/100
                     }
                       
                     // implementazione metodo getacquistocapo
                       getacquistocapo():number{
            
                        return this.prezzoivainclusa - this.getsaldocapo()
                       }

              }
                  // set delle proprietà al costruttore
                let quintocapo = new QuintoCapoAbbigliamento(
                    1,6111,'primavera','maglia',1021,
                    5,'blue',11,13.42,'magazzino',60
                    
                    )
                    // stampo istanza quintocapo
                    console.log(quintocapo);
                    // chiamo metodo getacquistocapo
                    let quintoacquisto = quintocapo.getacquistocapo()
                    // stampo istanza quintoacquisto
                    console.log('totale capo:'+quintoacquisto+'€');
                    
                    
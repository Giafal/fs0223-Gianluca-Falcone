// alert("Usa il pop up per dare dei messaggi");
// window.alert("Sto studiando JS");

var nome = "Gianluca";
console.log(nome);

document.getElementById("nome").innerHTML = nome;

console.log("Hello world!");

// document.write("Ciao mondo!");
document.write("<br>Io sono Gianluca");

document.getElementById("saluto").innerText = "Ciao a tutti";
document.getElementById("contenuto").textContent =
  "<strong>Questo è un contenuto</strong>";
document.getElementById("nome-strong").innerHTML = "<strong>nome</strong>";

var eta = prompt("Quanti hanni hai?");

if (eta >= 18 && eta <= 120) {
  document.getElementById("eta").innerHTML = "Sei maggiorenne, puoi entrare";
  //   location.href = "https://www.youtube.com/";
} else if (eta > 120) {
  document.getElementById("eta").innerHTML = "Sei un bugiardo";
  //   location.href = "https://www.museoegizio.it/";
} else {
  document.getElementById("eta").innerHTML = "Sei minorenne, non puoi entrare";
  //   location.href = "https://www.raiplay.it/dirette/raiyoyo";
}

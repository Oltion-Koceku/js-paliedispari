// palindroma
const arrayVuota = [];
const nome = "anna"
const arrayDaValutare = []
let contatore =  arrayVuota.length - 1;

palindrom(nome)

console.log(arrayVuota);
console.log(arrayDaValutare);
function palindrom(prompt){
  for (let i = 0; i < nome.length; i++) {
    arrayVuota.push(nome[i])
    
  }
  
  // for (contatore; contatore < 1; contatore--) {
  //   const element = array[contatore];
    
  // }
}
console.log(contatore);
// pari o dispari
// let validPariDispari = false;
// let validNumber = false;
// let numeroComputer;
// let nUtente;
// let sommaNumeri;
// let pari = false;
// let dispari = false;
// let sommaPD = false;

// const output = document.querySelector("h1");
// while (!validPariDispari) {
//   const PD = prompt("Scegli tra pari o dispari");
//   controlloPD(PD);
//   console.log(PD);
//   while (!validNumber) {
//     const numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
//     controlloNumero(numeroUtente)
//     console.log(numeroUtente);
//     nUtente = numeroUtente
//   }
// }
// console.log(pari, dispari);
// randomNumber();
// somma(nUtente, numeroComputer)
// console.log(sommaNumeri);
// if (sommaNumeri % 2 === 0) {
//   sommaPD = true;
//   if(pari === true){
//     output.innerHTML +=`Vince L'utente che ha scelto pari con ${sommaNumeri}`
//   }else{
//     output.innerHTML +=`Vince il Computer che ha scelto pari con ${sommaNumeri}`
//   }
// }else{
//   sommaPD = false;
//   if(dispari === true){
//     output.innerHTML +=`Vince L'utente che ha scelto dispari con ${sommaNumeri}`
//   }else{
//     output.innerHTML +=`Vince il Computer che ha scelto dispari con ${sommaNumeri}`
//   }
    
// }

// console.log("utente----->",nUtente, "computer------->",numeroComputer);


// // Funzioni
// function controlloPD (scelta){
  
//   if (scelta.toLocaleLowerCase() === "pari" || scelta.toLocaleLowerCase() === "dispari") {
//     validPariDispari = true
//     if (scelta.toLocaleLowerCase() === "pari") {
//       pari = true;
//     }else if(scelta.toLocaleLowerCase() === "dispari"){
//       dispari = true;
//     }
//   }else{
//     alert("Non hai scritto correttamente pari o dispari")
//   }
  
// }

// function controlloNumero(scelta){
//   if (!isNaN(scelta) && scelta <= 5 && scelta > 0){
//     validNumber = true;
//   }else if(isNaN(scelta)){
//     alert("Inserisci un numero e non una stringa")
//   }else{
//     alert("Sbaglieto! Devi inserire un numero che sia da 1 a 5")
//   }
// }

// function randomNumber (){
//   numeroComputer = Math.floor(Math.random() * 5) + 1;
// }

// function somma(numA, numB) {
//   sommaNumeri = numA + numB;
// }
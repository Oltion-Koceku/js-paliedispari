
let validPariDispari = false;
let validNumber = false;

while (!validPariDispari) {
  const PD = prompt("Scegli tra pari o dispari");
  controlloPD(PD);
  console.log(PD);
  while (!validNumber) {
    const numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
    controlloNumero(numeroUtente)
    console.log(numeroUtente);
    
  }
}

// Funzioni
function controlloPD (scelta){
  
  if (scelta.toLocaleLowerCase() === "pari" || scelta.toLocaleLowerCase() === "dispari") {
    validPariDispari = true
  }else{
    alert("Non hai scritto correttamente pari o dispari")
  }
  
}

function controlloNumero(scelta){
  if (!isNaN(scelta) && scelta <= 5 && scelta > 0){
    validNumber = true;
  }else if(isNaN(scelta)){
    alert("Inserisci un numero e non una stringa")
  }else{
    alert("Sbaglieto! Devi inserire un numero che sia da 1 a 5")
  }
}

function randomNumber ()
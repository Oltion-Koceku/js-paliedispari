
let validPariDispari = false;
let validNumber = false;

while (!validPariDispari) {
  const PD = prompt("Scegli tra pari o dispari");
  console.log(PD);
  controlloPD(PD);
  const numeroUtente = 5 //parseInt(prompt("Scegli un numero da 1 a 5"));

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
  if (!isNaN(scelta) && )
}
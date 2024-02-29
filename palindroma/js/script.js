// palindroma
const parolaUtente = prompt("Inserire una parola")
const parolagirata = palidroma(parolaUtente);
console.log(parolagirata);

if(ePalindroma(parolaUtente, parolagirata)){
  console.log("la parola è palindroma");
}else{
  console.log("la parola non è palindroma");
}

function palidroma(parolaDagirtare) {
  let parolaAlContrario = "";
  for (let i = parolaDagirtare.length - 1; i >= 0; i--) {
    parolaAlContrario += parolaDagirtare[i];
    
  }

  return parolaAlContrario
}

function ePalindroma(parolaUtente, parolaGirata ) {
 return parolaUtente.toLocaleLowerCase() === parolaGirata.toLocaleLowerCase();
}


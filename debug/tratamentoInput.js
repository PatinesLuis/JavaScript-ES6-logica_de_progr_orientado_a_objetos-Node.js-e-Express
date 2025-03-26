function checarNumero(valor) {
  let number = Number(valor);
  if(Number.isNaN(number)){
    console.log("por favor só passe numeros para o programa")
  }else{
    return number
  }
}

checarNumero(5)
checarNumero('343')

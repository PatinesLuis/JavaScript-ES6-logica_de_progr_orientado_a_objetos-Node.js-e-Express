class Carro {
  constructor(marca, cor, gasolina) {
    this.marca = marca;
    this.cor = cor;
    this.gasolina = gasolina;
  }

  dirigir(km) {
    let kmporLitro = 3;
    let gasto = 0;
    for (let i = 1; i <= km; i++) {
      gasto = this.gasolina -= kmporLitro;
      console.log(`Gastando gasolina: qtd ${gasto}`);
    }
  }

  abastecer(valor){
    let abs = 6.10 * valor / 54
    this.gasolina += abs
  }
}

carro = new Carro("celta", "preto", 54);
carro.dirigir(15);
console.log(carro.gasolina)
carro.abastecer(6.10)
console.log(carro.gasolina)


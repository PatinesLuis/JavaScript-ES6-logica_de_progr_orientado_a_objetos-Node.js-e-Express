let cachorro = {
  patas: 4,
  raca: "",
  latir: function () {
    console.log("auauuuu");
  },
};

let pastorAlemao = Object.create(cachorro);

pastorAlemao.latir();

//instanciar o objeto por construtor

function criaCachorro(raca, patas, cor) {
  let cachorro = Object.create({});
  cachorro.raca = raca;
  cachorro.patas = patas;
  cachorro.cor = cor;
  return cachorro;
}

let doberman = criaCachorro("Domerman", 4, "preto");
console.log(doberman);

//instancia classe por NEW

function Cachorro(raca) {
  this.raca = raca;
}

let husky = new Cachorro("husky");
console.log(husky.raca);

//construtor ES6
class Animal {
    constructor(raca, patas, cor){
        this.raca = raca
        this.patas = patas
        this.cor = cor
    }
}

let labrador = new Animal('Labrador',4,'amarelo')
console.log(labrador.cor)

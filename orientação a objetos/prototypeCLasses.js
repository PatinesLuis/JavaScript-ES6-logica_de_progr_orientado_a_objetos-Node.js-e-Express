//adicionar propriedades em classe

class Cachorro{
    constructor(raca, cor){
        this.raca = raca
        this.cor = cor
    }
    latir(){
        console.log("au au")
    }
}

Cachorro.prototype.patas = 4;

cachorro = new Cachorro("bulldog", "preto")
console.log(cachorro.patas)
cachorro.latir()

//Symbols são propriedades que não potem ser alteradas e nem criadas duas vezes

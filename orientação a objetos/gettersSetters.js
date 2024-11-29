class Cachorro{
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log("au au")
    }

    get getCor(){
        return this.cor
    }
    set setCor(valor){
        this.cor = valor
    }
}

let cachorro = new Cachorro('buldog',"sem cor")
console.log(cachorro)
cachorro.setCor = 'marrom'
console.log(cachorro.getCor)
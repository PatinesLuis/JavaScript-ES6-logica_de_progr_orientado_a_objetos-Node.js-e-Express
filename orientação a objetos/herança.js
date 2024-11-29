class Mamifero{
    constructor(patas){
        this.patas = patas
    }
}

class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas,patas)
        this.raca = raca
    }
}

cachorro = new Cachorro(4,'buldog')
console.log(cachorro)

console.log(new Cachorro instanceof Mamifero)
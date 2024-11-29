const carro = {
    marca : "setar",
    cambio: "manual",
    marcha1: function(){
        console.log("começar a andar")
    },
    setMarca: function(setar){
        this.marca = setar
        //this faz a refencia do proprio objeto, como se fosse carro.marca = setar 
    }
}

carro.setMarca("Chevrolet")
console.log(carro)
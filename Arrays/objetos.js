let cachorro = {
    patas:4,
    raça: "buldog",
    latir: function(){
        console.log("au au")
    }
}

console.log(cachorro.raça)
cachorro.latir();


//copiando propriedades de um objeto

let camaro = {
    portas: 2,
    portamalas: '100l',
    motor: 1.8
}

let adicionais = {
    tetoSolar : true,
    arCondicionado: true
}

Object.assign(camaro, adicionais)

console.log(camaro)
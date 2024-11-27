function multiplicar(x,y,z){
    return x*y*z
}

console.log(multiplicar(5,5,5))

function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log("pode dirigir")
    }else{
        console.log("Não pode dirigir")
    }
}

console.log(podeDirigir(18,1))


let global = 15

function imprimir(g){
    console.log(g)
}

console.log(imprimir(global))
// retornar numero aleatorio
let aleatorio = Math.random()

function retornarNumero(aleatorio){
    return aleatorio
}

console.log(retornarNumero(aleatorio))

//auto escola

function autoEscola(idade){
    if(idade <18){
        return 'Não possui idade'
    }else{
        return 'Pode realizar autoEscola'
    }
}

console.log(autoEscola(22))
console.log(autoEscola(15))


//potencia

function potencia(b,p){
    return Math.pow(b,p)
}

console.log(potencia(3,2))

function soma(a,b,c){
    let resultado = a+b+c
    
    return resultado
}

console.log(soma(5,10,15))
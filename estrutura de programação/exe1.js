// //calcular potencia
// console.log(Math.pow(5,3)) // 5x5x5 base x expoente

// // teste se usuario pode dirigir

// let idade = 22
// let cnh = true

//    if(idade <18 && cnh == false){
//     console.log("Não pode dirigir e nem realizar CNH")
//    }
//    else if(idade >=18 && cnh == false){
//     console.log("Não pode dirigir, mas pode realizar CNH")
//    }
//    else{
//     console.log("Pode dirigir")
//    }



// for (let i = 0; i<=50; i++){
//     if(i % 2 == 0){
//         console.log(`${i} é par`)
//     }else{
//         console.log(`${i} é impar`)
//     }
// }


//função com regras
function classificarNumero(num){
    if(num % 2 == 0 && num > 0){
        return "Positivo e Par"
    }
    else if(num % 2 == 1 && num > 0){
        return "Positivo e Ímpar"
    }else if(num < 0){
        return "negativo"
    }else{
        return "neutro"
    }
}

console.log(classificarNumero(-22))
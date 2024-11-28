//imprimir propriedades do objetos no console
let onibus = {
  passageiros: 40,
  rodas: 8,
  portas: 2,
};
onibus.janelas = 20;
console.log(onibus);


//crie um array com 5 nomes e verifique se um nome existe
let nomes = ["pedro", "joao", "Luis", "henrique"]

if(nomes.includes("Luis")){
    console.log("nome localizado")
}else{
    console.log("Nome não localizado")
}


//crie 2 array, um com mais de 5 elementos e outro com menos
//faça uma função que verifica o número de elementos
//se possuir menos que 5, imprima "poucos elementos" se tiver mais, imprima "muitos"

let num = [1,2,3,4,5,6]
let num2 = [0,1,55]

function validaArray(array){
    if(array < 5){
        return("poucos elementos")
    }else{
        return("muitos elementos")
    }
}

console.log(validaArray(num.length))
console.log(validaArray(num2.length))


//criar uma calculadora
const calculadora = {
    soma: function(a,b){
        return a + b
    },
    subtrair: function(a,b){
        return a - b
    },
    dividir: function(a,b){
        return a/b
    },
    multiplicar: function(a,b){
        return a*b
    }
}
console.log(calculadora.multiplicar(5,5))
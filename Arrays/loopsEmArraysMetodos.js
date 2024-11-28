let nomes = ["Luis", "Matheus", "Lauren", "Carlos","Nilde"];

for(let i = 0; i <= nomes.length; i++){
    console.log(nomes[i])
}


//metodos arrays
//metodo push adiciona um elemento ao array
nomes.push("Eduardo")
for(let i = 0; i <= nomes.length; i++){
    console.log(nomes[i])
}

//pop remove o ultimo elemento
nomes.pop()
for(let i = 0; i <= nomes.length; i++){
    console.log(nomes[i])
}

//shift remove o primeiro elemento do array
nomes.shift()
console.log(nomes)

//unshift adiciona um ou mais elemento no inicio do array
nomes.unshift("Luis Eduardo", "Helena")
console.log(nomes)

//indexOf retorna a posição do elemento solicitado - inicia em 0
let num = [2,5,6,8,2,3,22,13]
console.log(num.indexOf(22))

//slice pega um elemento do array conforme o indice, especificando aonde ele precisa parar depois da ,
console.log(num.slice(3,4))
console.log(num.slice(2))

let objetos = ["Faca", "bola", "pc", "celular"]

//maneira de percorer um array pelo o indice como parametro
objetos.forEach(nome =>{
    console.log(nome)
});

//includes procura se existe aquele elemento no array e retorna true e false
console.log(objetos.includes("celular"))
console.log(objetos.includes("cama"))



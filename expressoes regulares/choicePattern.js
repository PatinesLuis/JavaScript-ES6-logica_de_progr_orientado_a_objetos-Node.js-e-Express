// pode colocar uma instrução na regex que funciona com ||

let frutas = /\d+ (banana|maças|laranjas)/;

console.log(frutas.test("25 banana"))
console.log(frutas.test("oi banana"))
console.log(frutas.test("oi maças"))
console.log(frutas.test("oi uva"))
console.log(frutas.test("3 laranjas"))
console.log(frutas.test("laranjas"))
console.log("-------------")


const reg = /\w+: (matheus|joao|maria)/ //nome: wewddfdfs

console.log(reg.test("Nome: matheus"))
console.log(reg.test("nome: felipe"))
console.log(reg.test("ola: matheus"))
console.log(reg.test("bem vindo maria"))
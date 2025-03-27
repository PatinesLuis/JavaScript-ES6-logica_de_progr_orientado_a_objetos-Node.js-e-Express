//verifica se tem 2 digitos na expressão
const dia = /\d\d/

console.log(dia.test("2019")) //true
console.log(dia.test("asd")) //false
console.log(dia.test("22")) //true
console.log(dia.test("asd22")) //true

console.log("-------")

const palavrasPeloMenosTresLetras = /\w\w\w/
console.log(palavrasPeloMenosTresLetras.test("asd"))
console.log(palavrasPeloMenosTresLetras.test("aaaaa"))
console.log(palavrasPeloMenosTresLetras.test("a2"))

const notab = /[^ab]/; //não aceita A ou B

console.log(notab.test("a"))
console.log(notab.test("b"))
console.log(notab.test("c"))
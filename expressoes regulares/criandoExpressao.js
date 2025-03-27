//verifica se a string bola tem a palavra bola
const reg = new RegExp('bola');

console.log(reg.test("tem bola?"))
console.log(reg.test("não tem?"))
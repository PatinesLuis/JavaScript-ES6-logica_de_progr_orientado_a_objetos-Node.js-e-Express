const validaDominio = /www.\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com"))
console.log(validaDominio.test("www.facebook.com.br"))
console.log(validaDominio.test("www.prefeitura.org"))

let idade = 0;
let nome = "luis";
console.log(idade);
while (idade <= 18) {
  console.log(`Crescendo, idade: ${idade}`);
  idade++;

  if (idade == 15) {
    console.log("festa de 15 anos");
  } else if (idade == 18) {
    console.log("|Tirar CNH");
  }
}
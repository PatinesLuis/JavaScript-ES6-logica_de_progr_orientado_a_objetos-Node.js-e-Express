try {
  let a = 2 + b;
} catch (e) {
  console.log(`O erro está definido como> ${e}`);
} finally {
  console.log("executa independente se deu erro ou não");
}

console.log("não para o código");

function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error("parametro precisa ser uma string")
    }else{
        console.log(`ola ${nome}`)
    }
}

saudacao("luis");
saudacao(5);

console.log("teste")
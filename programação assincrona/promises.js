let p = Promise.resolve(5);

console.log("codigo codigo")

console.log(p);

p.then((value)=>{console.log(`O valor é ${value}`)})
class Banco {
    constructor (saldo){
        this.saldo = saldo
    }
    deposito(dep){
        this.saldo += dep
    }
    saque(saq){
        this.saldo -= saq
    }    
}

conta = new Banco(1000.24)

console.log(conta.saldo)

conta.deposito(300)
conta.saque(200)

console.log(conta.saldo)
class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }
  set setRua(valor) {
    this.rua = valor;
  }
  set setBairro(valor) {
    this.bairro = valor;
  }
  set setCidade(valor) {
    this.cidade = valor;
  }
  set setEstado(valor) {
    this.estado = valor;
  }
  retornaEndereco() {
    console.log(
      `Rua: ${this.rua}, bairro: ${this.bairro}, cidade: ${this.cidade}, Estado: ${this.estado}`
    );
  }
}

let endereco = new Endereco("Rua aldo moro", "mv1", "gravatai", "RS");
endereco.retornaEndereco();
endereco.setBairro = "parque ipiranga"
endereco.retornaEndereco();
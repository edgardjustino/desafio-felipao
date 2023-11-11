class heroiDaAventura {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = '';
    if (this.tipo === 'mago') {
      ataque = 'magia';
    } else if (this.tipo === 'guerreiro') {
      ataque = 'espada';
    } else if (this.tipo === 'monge') {
      ataque = 'artes marciais';
    } else {
      ataque = 'shuriken';
    }
    return `o ${this.tipo} atacou usando ${ataque}`;
  }
}

let heroi = new heroiDaAventura('Superman', 25, 'mago');

heroi.atacar();

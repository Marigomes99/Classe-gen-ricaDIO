class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque indefinido';
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

// Exemplo:
const mago = new Heroi('Ryze', 1.0000, 'mago');
const guerreiro = new Heroi('Garen', 20, 'guerreiro');

mago.atacar(); // Saída esperada: "O mago Ryze atacou usando magia"
guerreiro.atacar(); // Saída esperada: "O guerreiro Garen atacou usando espada"

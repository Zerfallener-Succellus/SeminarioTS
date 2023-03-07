export interface Animal {
  nome: string;
  emitirSom(): void;
}

class Cachorro implements Animal {
  nome: string;
  
  constructor(nome: string) {
    this.nome = nome;
  }

  emitirSom() {
    console.log(`${this.nome} está latindo.`);
  }
}

class Gato implements Animal {
  nome: string;
  
  constructor(nome: string) {
    this.nome = nome;
  }

  emitirSom() {
    console.log(`${this.nome} está miando.`);
  }
}

function fazerBarulho(animal: Animal) {
  animal.emitirSom();
}

const cachorro1 = new Cachorro("Rex");
const gato1 = new Gato("Mimi");

fazerBarulho(cachorro1); // "Rex está latindo."
fazerBarulho(gato1); // "Mimi está miando."